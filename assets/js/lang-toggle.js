// =============================================================================
//  Language Toggle (KO / EN)
//  data-i18n="key" 속성을 가진 요소를 i18n 사전에 따라 텍스트 교체
//  data-i18n-html="key" 는 innerHTML 로 적용 (목록/링크 포함 가능)
// =============================================================================

const I18N = {
  ko: {
    "brand.name": "구은호 교수 연구실",
    "brand.affil": "전남대 빅데이터융합학과",
    "nav.home": "홈",
    "nav.research": "연구",
    "nav.publications": "논문",
    "nav.members": "구성원",
    "nav.news": "소식",
    "nav.activities": "활동사진",
    "nav.share": "자료실",
    "nav.contact": "찾아오는 곳",

    "hero.tagline": "딥러닝 기반 인공지능 · 데이터 사이언스 연구실",
    "hero.subtitle": "전남대학교 빅데이터융합학과",
    "hero.cta_research": "연구 분야 보기",
    "hero.cta_join": "랩실 합류하기",

    "home.about_title": "연구실 소개",
    "home.about_body": "Koo Lab은 전남대학교 빅데이터융합학과 소속의 인공지능 및 데이터 사이언스 연구실입니다. 우리는 딥러닝, 그래프 신경망(GNN), 물리 정보 신경망(PINN), 그리고 복잡한 실세계 문제를 위한 데이터 기반 모델링을 중심으로 연구합니다. 수학적 기초, 알고리즘 설계, 실험적 검증을 결합하여 신뢰할 수 있고 해석 가능하며 과학·공학·산업 전반에 응용 가능한 지능형 시스템을 개발하는 것을 목표로 합니다.",
    "home.research_title": "주요 연구 키워드",
    "home.interests_title": "주요 연구 분야",
    "interests.gnn_title": "그래프 신경망 (GNN)",
    "interests.gnn_desc": "고차 상호작용, 심플리셜 구조, 노드 분류 연구.",
    "interests.fin_title": "금융 AI",
    "interests.fin_desc": "주식 변동성·암호화폐 예측, GARCH–LSTM 하이브리드.",
    "interests.pinn_title": "물리 정보 신경망",
    "interests.pinn_desc": "방정식 기반 학습, 물리·데이터 하이브리드 모델링.",
    "interests.app_title": "AI 응용",
    "interests.app_desc": "기후 AI, 분포 학습, 추천 시스템.",
    "home.news_title": "News",
    "home.news_more": "더 보기 →",
    "home.news_view_all": "전체 보기 →",
    "home.join_title": "함께 연구할 학생을 모집합니다",
    "home.join_body": "딥러닝과 데이터 사이언스에 대한 열정을 가진 대학원생 및 학부 인턴을 환영합니다. 관심 있는 분은 교수님께 이메일로 문의 바랍니다.",

    "research.title": "연구 분야",
    "research.intro": "본 연구실에서는 딥러닝의 이론과 응용을 폭넓게 다룹니다. 아래는 현재 진행 중인 주요 연구 주제입니다.",

    "members.title": "구성원",
    "members.intro": "다양한 배경과 관심사를 가진 연구자들이 함께하고 있습니다.",

    "news.title": "소식",
    "news.intro": "랩 세미나 일정과 모든 공지사항을 시간 순으로 정리했습니다.",
    "contact.title": "찾아오는 곳",
    "members.professor": "교수",
    "members.phd": "박사과정",
    "members.ms": "석사과정",
    "members.undergrad": "학석사 연계과정",
    "members.alumni": "졸업생",

    "pub.title": "논문",
    "pub.intro": "최근 발표한 연구 성과입니다. 전체 목록은 Google Scholar에서도 확인하실 수 있습니다.",
    "pub.bibtex": "BibTeX",
    "pub.pdf": "PDF",
    "pub.code": "Code",

    "footer.contact": "연락처",
    "footer.email_label": "이메일",
    "footer.address": "전남대학교 광주캠퍼스",
    "footer.lab": "Lab",
    "footer.lab_name": "구은호 교수 연구실",
    "footer.lab_affil": "전남대학교 빅데이터융합학과",
    "footer.links": "바로가기"
  },

  en: {
    "brand.name": "Koo Lab",
    "brand.affil": "Big Data Convergence, JNU",
    "nav.home": "Home",
    "nav.research": "Research",
    "nav.publications": "Publications",
    "nav.members": "Members",
    "nav.news": "News",
    "nav.activities": "Activity Photos",
    "nav.share": "Resources",
    "nav.contact": "Contact",

    "hero.tagline": "Deep Learning · AI · Data Science",
    "hero.subtitle": "Department of Big Data Convergence, Chonnam National University",
    "hero.cta_research": "Explore Research",
    "hero.cta_join": "Join the Lab",

    "home.about_title": "About the Lab",
    "home.about_body": "Koo Lab is an artificial intelligence and data science research group at the Department of Big Data Convergence, Chonnam National University. Our research focuses on deep learning, graph neural networks, physics-informed neural networks, and data-driven modeling for complex real-world problems. By combining mathematical foundations, algorithmic design, and empirical validation, we aim to develop intelligent systems that are reliable, interpretable, and applicable across science, engineering, and industry.",
    "home.research_title": "Research Keywords",
    "home.interests_title": "Research Interests",
    "interests.gnn_title": "Graph Neural Networks",
    "interests.gnn_desc": "High-order interactions, simplicial structures, node classification.",
    "interests.fin_title": "Financial AI",
    "interests.fin_desc": "Stock volatility, cryptocurrency prediction, GARCH–LSTM hybrids.",
    "interests.pinn_title": "Physics-Informed NN",
    "interests.pinn_desc": "Equation-aware learning, hybrid physics-data modeling.",
    "interests.app_title": "AI Applications",
    "interests.app_desc": "Climate AI, distributional learning, recommender systems.",
    "home.news_title": "News",
    "home.news_more": "See all →",
    "home.news_view_all": "View all →",
    "home.join_title": "We are hiring",
    "home.join_body": "We welcome motivated graduate students and undergraduate interns who are passionate about deep learning and data science. Please contact Prof. Koo by email.",

    "research.title": "Research",
    "research.intro": "We work on both the theory and application of deep learning. Below are our current research thrusts.",

    "members.title": "Members",
    "members.intro": "Researchers from diverse backgrounds and interests.",

    "news.title": "News",
    "news.intro": "Reading group / seminar schedule and all lab announcements in chronological order.",
    "contact.title": "Contact",
    "members.professor": "Professor",
    "members.phd": "PhD Students",
    "members.ms": "MS Students",
    "members.undergrad": "BS–MS Track",
    "members.alumni": "Alumni",

    "pub.title": "Publications",
    "pub.intro": "Selected recent publications. The full list is also available on Google Scholar.",
    "pub.bibtex": "BibTeX",
    "pub.pdf": "PDF",
    "pub.code": "Code",

    "footer.contact": "Contact",
    "footer.email_label": "Email",
    "footer.address": "Gwangju Campus, Chonnam National University",
    "footer.lab": "Lab",
    "footer.lab_name": "Koo Lab",
    "footer.lab_affil": "Department of Big Data Convergence, CNU",
    "footer.links": "Links"
  }
};

(function () {
  const STORAGE_KEY = "gulab.lang";
  const html = document.documentElement;

  function getLang() {
    const saved = window.localStorage ? localStorage.getItem(STORAGE_KEY) : null;
    return saved === "en" ? "en" : "ko";
  }

  function applyLang(lang) {
    const dict = I18N[lang] || I18N.ko;
    html.setAttribute("lang", lang);
    html.setAttribute("data-lang", lang);

    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if (dict[key] !== undefined) el.textContent = dict[key];
    });

    document.querySelectorAll("[data-i18n-html]").forEach((el) => {
      const key = el.getAttribute("data-i18n-html");
      if (dict[key] !== undefined) el.innerHTML = dict[key];
    });

    // 한/영 텍스트가 함께 들어 있는 요소: data-ko / data-en 속성으로 분기
    document.querySelectorAll("[data-ko][data-en]").forEach((el) => {
      el.textContent = el.getAttribute("data-" + lang) || "";
    });

    // 토글 버튼에 보일 라벨 제어
    document.querySelectorAll("[data-lang-on]").forEach((el) => {
      el.style.display = el.getAttribute("data-lang-on") === lang ? "inline" : "none";
    });
  }

  function init() {
    let lang = getLang();
    applyLang(lang);

    const btn = document.querySelector(".lang-toggle");
    if (btn) {
      btn.addEventListener("click", () => {
        lang = (getLang() === "ko") ? "en" : "ko";
        if (window.localStorage) localStorage.setItem(STORAGE_KEY, lang);
        applyLang(lang);
      });
    }

    const menuBtn = document.querySelector(".menu-toggle");
    const nav = document.querySelector(".site-nav");
    if (menuBtn && nav) {
      menuBtn.addEventListener("click", () => {
        nav.classList.toggle("is-open");
        menuBtn.classList.toggle("is-open");
      });
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
