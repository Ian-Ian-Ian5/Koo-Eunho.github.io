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

    "hero.tagline": "딥러닝 기반 인공지능 · 데이터 사이언스 연구실",
    "hero.subtitle": "전남대학교 빅데이터융합학과",
    "hero.cta_research": "연구 분야 보기",
    "hero.cta_join": "랩실 합류하기",

    "home.about_title": "연구실 소개",
    "home.about_body": "구은호 교수 연구실은 딥러닝을 중심으로 인공지능과 데이터 사이언스 분야의 핵심 문제를 탐구합니다. 우리는 모델 구조 설계, 학습 알고리즘, 그리고 실세계 응용까지 폭넓은 주제를 다루며, 산업계와의 협력 연구도 활발히 진행하고 있습니다.",
    "home.research_title": "주요 연구 키워드",
    "home.news_title": "News",
    "home.news_more": "더 보기 →",
    "home.join_title": "함께 연구할 학생을 모집합니다",
    "home.join_body": "딥러닝과 데이터 사이언스에 대한 열정을 가진 대학원생 및 학부 인턴을 환영합니다. 관심 있는 분은 교수님께 이메일로 문의 바랍니다.",

    "research.title": "연구 분야",
    "research.intro": "본 연구실에서는 딥러닝의 이론과 응용을 폭넓게 다룹니다. 아래는 현재 진행 중인 주요 연구 주제입니다.",

    "members.title": "구성원",
    "members.intro": "다양한 배경과 관심사를 가진 연구자들이 함께하고 있습니다.",
    "members.professor": "교수",
    "members.phd": "박사과정",
    "members.ms": "석사과정",
    "members.undergrad": "학부 인턴",
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
    "brand.name": "Gu Lab",
    "brand.affil": "Big Data Convergence, JNU",
    "nav.home": "Home",
    "nav.research": "Research",
    "nav.publications": "Publications",
    "nav.members": "Members",

    "hero.tagline": "Deep Learning · AI · Data Science",
    "hero.subtitle": "Department of Big Data Convergence, Chonnam National University",
    "hero.cta_research": "Explore Research",
    "hero.cta_join": "Join the Lab",

    "home.about_title": "About the Lab",
    "home.about_body": "Gu Lab investigates fundamental problems in artificial intelligence and data science, with a particular emphasis on deep learning. Our work spans model architectures, learning algorithms, and real-world applications, often in collaboration with industry partners.",
    "home.research_title": "Research Keywords",
    "home.news_title": "News",
    "home.news_more": "See all →",
    "home.join_title": "We are hiring",
    "home.join_body": "We welcome motivated graduate students and undergraduate interns who are passionate about deep learning and data science. Please contact Prof. Gu by email.",

    "research.title": "Research",
    "research.intro": "We work on both the theory and application of deep learning. Below are our current research thrusts.",

    "members.title": "Members",
    "members.intro": "Researchers from diverse backgrounds and interests.",
    "members.professor": "Professor",
    "members.phd": "PhD Students",
    "members.ms": "MS Students",
    "members.undergrad": "Undergraduate Interns",
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
    "footer.lab_name": "Gu Lab",
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
