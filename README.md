# Gu Lab @ JNU — 랩실 웹사이트

전남대학교 빅데이터융합학과 **구은호 교수 연구실** 홈페이지 소스 코드입니다.

Jekyll(GitHub Pages)로 빌드되며, 한국어 / 영어 토글을 지원합니다.

---

## 1. 디렉토리 구조

```
.
├── _config.yml            # 사이트 전역 설정 (사이트 이름, 교수님 정보, URL)
├── _data/
│   ├── members.yml        # 학생 멤버 목록
│   ├── publications.yml   # 논문 목록
│   ├── research.yml       # 연구 분야 카드
│   └── news.yml           # 메인 페이지 News 항목
├── _includes/
│   ├── header.html        # 상단 네비게이션
│   ├── footer.html        # 푸터
│   └── member-card.html   # 멤버 카드 템플릿
├── _layouts/
│   └── default.html       # 모든 페이지의 기본 레이아웃
├── assets/
│   ├── css/main.css       # 전체 스타일시트
│   ├── js/lang-toggle.js  # 한/영 토글 스크립트 + i18n 사전
│   └── images/            # 사진, 파비콘 등
├── index.html             # Home (/)
├── members.html           # Members (/members/)
├── publications.html      # Publications (/publications/)
├── research.html          # Research (/research/)
├── Gemfile                # Ruby 의존성
└── README.md
```

---

## 2. 콘텐츠 수정 방법 (가장 중요)

코드를 거의 만지지 않아도 됩니다. 대부분 `_data/*.yml` 파일과 `_config.yml`만 수정하면 사이트가 갱신됩니다.

### 2-1. 교수님 정보 / 사이트 기본 정보

`_config.yml` 파일의 `professor:` 와 `lab:` 블록을 수정하세요. 이메일, 사무실, CV 링크, Google Scholar URL 등은 모두 여기에 있습니다.

### 2-2. 멤버 추가 / 졸업 처리

`_data/members.yml` 파일에 새 항목을 추가합니다. `role`만 잘 지정하면 자동으로 알맞은 섹션에 표시됩니다.

```yaml
- name_ko: "홍길동"
  name_en: "Gildong Hong"
  role: ms                     # phd | ms | undergrad | alumni
  interests_ko: "추천 시스템"
  interests_en: "Recommender Systems"
  photo: "/assets/images/members/gildong.jpg"
  email: "gildong@jnu.ac.kr"
```

졸업생은 `role: alumni` 로 옮기고 `year`, `next_ko`, `next_en` 을 추가하세요.

### 2-3. 논문 추가

`_data/publications.yml` 에 새 항목을 추가합니다. 우리 랩 저자 이름을 `**...**` 로 감싸면 자동으로 굵게 표시됩니다.

```yaml
- title: "New Awesome Paper"
  authors: "Alice, **Eun-Ho Gu**, Bob"
  venue: "CVPR 2026"
  year: 2026
  links:
    pdf: "https://arxiv.org/abs/xxxx.xxxxx"
    code: "https://github.com/..."
  bibtex: |
    @inproceedings{...}
```

연도 헤더는 자동으로 분기됩니다.

### 2-4. 연구 분야 카드 추가/수정

`_data/research.yml` 의 항목을 추가/수정.

### 2-5. News 추가

`_data/news.yml` 의 가장 위에 새 항목을 추가하면 됩니다.

### 2-6. 한/영 텍스트가 코드에 들어 있는 경우

`assets/js/lang-toggle.js` 상단의 `I18N` 객체를 수정하세요. 키-값으로 한/영 사전이 정의되어 있습니다.

---

## 3. 로컬에서 미리 보기 (선택)

### Ruby + Jekyll 설치 후

```bash
# 의존성 설치 (최초 1회)
bundle install

# 로컬 서버 실행
bundle exec jekyll serve
```

브라우저에서 `http://localhost:4000` 으로 접속하면 됩니다.

> Windows에서 Ruby 설치가 부담스럽다면, **로컬 미리보기를 건너뛰고 바로 GitHub로 푸시**해도 됩니다. GitHub Pages가 자동 빌드해 줍니다.

### 더 간단한 방법: VS Code의 Live Server 확장

Liquid 태그(`{% ... %}`, `{{ ... }}`)는 처리되지 않지만, CSS/JS 작업 정도는 충분히 확인 가능합니다.

---

## 4. GitHub Pages로 배포

1. GitHub에 레포지토리 생성 (예: `eunhogu-lab.github.io` 라는 이름이면 `https://eunhogu-lab.github.io` 가 사이트 주소가 됩니다).
2. 이 폴더의 내용을 푸시:
   ```bash
   git init
   git add .
   git commit -m "Initial site"
   git branch -M main
   git remote add origin https://github.com/<username>/<repo>.git
   git push -u origin main
   ```
3. GitHub 레포 → **Settings → Pages**:
   - Source: `Deploy from a branch`
   - Branch: `main` / `(root)`
   - Save
4. 1~2분 후 사이트가 배포됩니다.
5. `_config.yml`의 `url`과 `baseurl`을 실제 배포 주소에 맞게 수정하세요.
   - 사용자 페이지(`<username>.github.io`): `baseurl: ""` 그대로
   - 프로젝트 페이지(`<username>.github.io/<repo>`): `baseurl: "/<repo>"` 로 변경

---

## 5. 사진 / 파일 업로드

| 종류 | 위치 |
|---|---|
| 교수님 사진 | `assets/images/professor.jpg` (또는 `_config.yml`의 `professor.photo` 경로 변경) |
| 멤버 사진 | `assets/images/members/{name}.jpg` |
| CV PDF | `assets/files/cv.pdf` |
| 기타 이미지 | `assets/images/` 자유롭게 |

---

## 6. 자주 하는 작업 빠른 가이드

| 하고 싶은 일 | 수정할 파일 |
|---|---|
| 새 학생 추가 | `_data/members.yml` |
| 새 논문 추가 | `_data/publications.yml` |
| 연구 분야 변경 | `_data/research.yml` |
| News 업데이트 | `_data/news.yml` |
| 교수님 정보 변경 | `_config.yml` |
| 메뉴 항목 추가 | `_includes/header.html` |
| 색상 / 폰트 변경 | `assets/css/main.css` 상단 `:root` 변수 |
| 한/영 번역 추가 | `assets/js/lang-toggle.js` 상단 `I18N` |

---

## 7. 라이선스 / 크레딧

- 디자인은 [al-folio](https://github.com/alshedivat/al-folio)와 [DSBA Lab @ SNU](https://dsba.snu.ac.kr/) 사이트의 영향을 받았습니다.
- 폰트: Inter, Noto Sans KR, JetBrains Mono (Google Fonts).
