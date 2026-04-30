#!/usr/bin/env python3
"""
Google Scholar 인용 지표를 가져와 _config.yml의 professor.stats 블록을 갱신.

작동 방식:
  1. SCHOLAR_AUTHOR_ID로 식별되는 Scholar 프로필에서 citations / h-index / i10-index를 가져옴.
  2. _config.yml의 stats 블록 안 숫자 세 개만 in-place로 치환 (다른 줄은 건드리지 않음).
  3. 실패 시 (네트워크, captcha, 차단 등) 조용히 종료 — 기존 값을 유지.

자동 실행: .github/workflows/update-scholar-stats.yml (주 1회 cron)
수동 실행: GitHub Actions 탭에서 'Run workflow'

  주의: scholarly 라이브러리는 Google Scholar의 anti-bot 정책에 의해
  주기적으로 차단될 수 있음. 그럴 땐 그 주는 업데이트가 일어나지 않고
  다음 주에 재시도됨. 정확한 숫자가 중요하면 _config.yml을 수동으로 수정해도 됨.
"""
import re
import sys
import traceback
from pathlib import Path

SCHOLAR_AUTHOR_ID = "13BRvZAAAAAJ"
CONFIG_PATH = Path(__file__).resolve().parents[2] / "_config.yml"


def fetch_metrics():
    try:
        from scholarly import scholarly  # 지연 import (실패 메시지 명확하게)
    except ImportError:
        print("ERROR: scholarly library not installed. pip install scholarly", file=sys.stderr)
        return None

    try:
        author = scholarly.search_author_id(SCHOLAR_AUTHOR_ID)
        author = scholarly.fill(author, sections=["indices"])
        return {
            "citations": int(author.get("citedby", 0) or 0),
            "h_index": int(author.get("hindex", 0) or 0),
            "i10_index": int(author.get("i10index", 0) or 0),
        }
    except Exception as e:
        print(f"WARNING: failed to fetch Scholar data: {e}", file=sys.stderr)
        traceback.print_exc()
        return None


def update_config(metrics):
    if not metrics:
        print("No metrics fetched. Leaving _config.yml unchanged.")
        return False

    # 0이 모두 나오면 차단당한 것일 가능성 높음 — 보존을 위해 업데이트 스킵
    if all(v == 0 for v in metrics.values()):
        print("All metrics are 0 — likely blocked by Scholar. Skipping update.")
        return False

    text = CONFIG_PATH.read_text(encoding="utf-8")
    original = text

    # stats: 블록 안의 숫자만 치환 (다른 곳에 같은 키가 있어도 영향 없도록 단순 매칭)
    text = re.sub(r"(\bcitations:\s*)\d+", rf"\g<1>{metrics['citations']}", text, count=1)
    text = re.sub(r"(\bh_index:\s*)\d+", rf"\g<1>{metrics['h_index']}", text, count=1)
    text = re.sub(r"(\bi10_index:\s*)\d+", rf"\g<1>{metrics['i10_index']}", text, count=1)

    if text == original:
        print(f"Stats already up to date: {metrics}")
        return False

    CONFIG_PATH.write_text(text, encoding="utf-8")
    print(f"Updated stats: {metrics}")
    return True


if __name__ == "__main__":
    metrics = fetch_metrics()
    update_config(metrics)
