// =============================================================================
//  Scroll Reveal
//  스크롤 시 섹션/카드가 부드럽게 등장. HTML 수정 없이 자동 적용.
//  prefers-reduced-motion 사용자에게는 동작하지 않음(즉시 표시).
// =============================================================================

(function () {
  var reduce = window.matchMedia
    ? window.matchMedia("(prefers-reduced-motion: reduce)").matches
    : false;
  if (reduce || !("IntersectionObserver" in window)) return;

  // 단일 등장(reveal) 대상 — 한 덩어리로 떠오르는 요소들
  var SINGLE = [
    ".section .container > .section-title",
    ".section-heading",
    ".research-group",
    ".prof-card",
    ".prof-section",
    ".member-detail",
    ".member-detail-content",
    ".contact-block",
    ".news-split",
  ];

  // 그룹(stagger) 대상 — 자식 카드들이 순차적으로 등장
  var GROUPS = [
    ".interests-grid",
    ".members-group .grid",
    ".project-list",
    ".pub-list",
    ".seminar-list",
    ".news-list-detailed",
  ];

  var STAGGER_MS = 80;
  var MAX_DELAY = 480;

  function markSingles() {
    SINGLE.forEach(function (sel) {
      document.querySelectorAll(sel).forEach(function (el) {
        el.classList.add("reveal");
      });
    });
  }

  function markGroups() {
    GROUPS.forEach(function (sel) {
      document.querySelectorAll(sel).forEach(function (group) {
        group.classList.add("reveal-group");
        var kids = group.children;
        for (var i = 0; i < kids.length; i++) {
          var delay = Math.min(i * STAGGER_MS, MAX_DELAY);
          kids[i].style.setProperty("--reveal-delay", delay + "ms");
        }
      });
    });
  }

  function observe() {
    var targets = document.querySelectorAll(".reveal, .reveal-group");
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );
    targets.forEach(function (t) {
      io.observe(t);
    });
  }

  function init() {
    markSingles();
    markGroups();
    observe();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
