---
name_ko: "이형준"
name_en: "Hyungjun Lee"
role: ms
photo: "/assets/images/members/lee_hyungjun.jpg"
email: ""
joined: 2024
interests_ko: "암호화폐 거래 분석"
interests_en: "Cryptocurrency Transaction Analysis"
scholar: ""
github: ""
linkedin: ""
website: ""
---

## 연구 분야 / Research Interests

이형준은 암호화폐 거래 네트워크에서 자금 세탁과 같은 불법 거래를 탐지하는
GNN 기반 모델을 연구합니다. 자금 세탁은 믹서(Mixer)나 텀블러(Tumbler)를
통해 A → B → C → A 처럼 여러 거래를 방향성 있게 순환시켜 자금 출처를
숨기는 수법인데, 기존 GNN은 노드 간 1:1 관계만 학습하므로 이러한 다자
순환 구조를 포착하기 어렵습니다. 본 연구는 방향성 있는 짧은 사이클
(directed cycle)을 탐지하여 노드 표현에 반영하는 모델을 제안합니다.
이론적으로는 사이클을 위상수학의 1차 호몰로지(H₁)에 대응시키고, 방향성
있는 단체 복합체(directed simplicial complex) 위에서 동작하는 GNN으로의
확장 가능성을 탐색합니다.

Hyungjun's research focuses on detecting illicit transactions — such as
money laundering — in cryptocurrency networks using graph neural networks.
Money laundering often hides funds through mixers or tumblers, creating
directional cyclic transactions like A → B → C → A. Standard GNNs that
learn only pairwise relationships struggle to capture these multi-party
cycles. This work proposes a model that detects directed short cycles in
crypto networks and incorporates them into node representations.
Theoretically, the cycles correspond to first homology (H₁) in topology,
and we explore extensions to GNNs operating on directed simplicial complexes.

## 진행 중인 연구 / Ongoing Research

- *Learning Directed Cycles for Illicit Transaction Detection in Crypto Networks*

## 학력 / Education

- MS, 빅데이터과학과, 전남대학교 (2026 03 — 현재)
- BS 통계학과, 전남대학교 (2026 02 - 졸업)
