(function () {
  "use strict";

  var DATA = window.PORTFOLIO_DATA;
  if (!DATA) return;

  var i18n = {
    tr: {
      navAbout: "Hakkımda", navCategories: "Kategoriler", navApps: "Uygulamalar", navContact: "İletişim",
      cv: "CV",
      heroEyebrow: "JALE SUMMAK · AI SİSTEMLERİ & ÜRÜN GELİŞTİRİCİ",
      heroHeadline: "Veriyi güvenle karar verebileceğiniz <em>AI sistemlerine</em> dönüştürüyorum.",
      heroIntro: "Kaynağa dayalı AI ajanlarından bilgisayarlı görüye; tahminleme, öneri sistemleri ve dağıtık veri temellerine uzanan, incelenebilir ve kullanılabilir bir portföy.",
      statProjects: "Proje", statCategories: "Kategori", statApps: "Canlı Uygulama", statYears: "Yıl Mühendislik",
      ctaCategories: "Kategorileri Keşfet", ctaGithub: "GitHub'ı İncele",
      aboutTitle: "Hakkımda",
      aboutLead: "AI Sistemleri ve Ürün Geliştirici, TBC Tech AI kurucusu. Ham veriyi, insanların ve işletmelerin güvenle karar verebileceği AI sistemlerine dönüştürüyorum.",
      aboutBody1: "Çalışmalarım tüm süreci kapsar: veri hazırlama, modelleme, değerlendirme, yayınlama ve arayüz tasarımı. Sınıflandırma, bilgisayar görüsü, derin öğrenme, NLP, tahminleme, öneri sistemleri ve dağıtık veri temelleri (Spark, GIS, AutoML) üzerine 54 kanıt temelli proje ürettim.",
      aboutBody2: "FDE — <strong>Forward Deployment Engineer</strong> — mantığıyla çalışıyorum: araştırma ancak yayına alındığında değerlidir. Bu portföydeki her proje; ne yapıldığını, hangi yöntemlerin kullanıldığını, hangi değerin hedeflendiğini, ne ölçüldüğünü ve kanıtın nerede olduğunu (GitHub, Kaggle, Hugging Face) açıkça gösterir.",
      cvDownload: "CV'yi İndir", contactMe: "İletişime Geç",
      factProjects: "Kanıt temelli proje", factCollections: "Net teknik kategori", factApps: "Canlı uygulama merkezi", factEngineering: "Mühendislik deneyimi",
      catTitle: "Kategoriler",
      catLead: "Bir kategori seçin — ilgili projeler hemen altında açılır. Her projede amaç, yöntem, ölçülen sonuç ve GitHub / Kaggle / Hugging Face kanıtları yer alır.",
      selectHint: "Seçmek için tıkla",
      foundation: "Foundation lab — aktif öğrenme yönü, tamamlanmış ürün olarak sunulmaz.",
      projectsIn: "Projeler",
      close: "Kapat",
      whatBuilt: "Ne Yaptım", methods: "Yöntemler", intended: "Amaçlanan Değer", measured: "Ölçülen Sonuç",
      e2e: "Uçtan uca AI iş akışı",
      github: "GitHub", kaggle: "Kaggle", hf: "HF Model", appOpen: "Uygulama",
      appsTitle: "Canlı Uygulamalar",
      appsLead: "54 proje, 8 canlı ve mobil uyumlu uygulama merkezinde toplanır. Her merkez kendi interaktif sayfasını açar ve arkasındaki kanıtları gösterir.",
      contactTitle: "İletişim", contactEmail: "Email",
      footerFdeTitle: "TBC Teknoloji · TBC TECH AI",
      footerFdeText: "Forward Deployment Engineer mantığı: araştırma, yayına alındığında değer üretir. Problem → Veri → Model → Karar → Ürün.",
      footerCopy: "© 2026 Jale Summak · Personal portfolio — TBC Tech AI · Product studio"
    },
    en: {
      navAbout: "About", navCategories: "Categories", navApps: "Apps", navContact: "Contact",
      cv: "CV",
      heroEyebrow: "JALE SUMMAK · AI SYSTEMS & PRODUCT BUILDER",
      heroHeadline: "I build AI systems that turn data <em>into confident decisions.</em>",
      heroIntro: "From source-grounded AI agents and computer vision to forecasting, recommender systems and distributed data foundations — an evidence-led portfolio built to be inspected, understood and used.",
      statProjects: "Projects", statCategories: "Categories", statApps: "Live Apps", statYears: "Years Engineering",
      ctaCategories: "Explore Categories", ctaGithub: "Inspect GitHub",
      aboutTitle: "About Me",
      aboutLead: "AI Systems & Product Builder, founder of TBC Tech AI. I turn raw data into AI systems that help people and businesses decide with confidence.",
      aboutBody1: "My work spans the full journey: data preparation, modeling, evaluation, deployment and interface design. I have delivered 54 evidence-backed projects across classification, computer vision, deep learning, NLP, forecasting, recommender systems and distributed data foundations (Spark, GIS, AutoML).",
      aboutBody2: "I work with an FDE — <strong>Forward Deployment Engineer</strong> — mindset: research is only valuable once it ships. Every project in this portfolio clearly shows what was built, which methods were used, what value was intended, what was measured, and where the evidence lives (GitHub, Kaggle, Hugging Face).",
      cvDownload: "Download CV", contactMe: "Get in Touch",
      factProjects: "Evidence-backed projects", factCollections: "Clear technical categories", factApps: "Live app hubs", factEngineering: "Engineering experience",
      catTitle: "Categories",
      catLead: "Pick a category — its projects open right below. Each project shows the goal, the methods, the measured result and the GitHub / Kaggle / Hugging Face evidence.",
      selectHint: "Click to open",
      foundation: "Foundation lab — an active learning direction, not presented as a finished product.",
      projectsIn: "Projects",
      close: "Close",
      whatBuilt: "What I Built", methods: "Methods", intended: "Intended Value", measured: "Measured Outcome",
      e2e: "End-to-end AI workflow",
      github: "GitHub", kaggle: "Kaggle", hf: "HF Model", appOpen: "App",
      appsTitle: "Live Applications",
      appsLead: "54 projects are organized into eight live, mobile-style PWA application hubs. Every hub opens its own interactive page and shows the GitHub, Kaggle and Hugging Face evidence behind it.",
      contactTitle: "Contact", contactEmail: "Email",
      footerFdeTitle: "TBC Teknoloji · TBC TECH AI",
      footerFdeText: "Forward Deployment Engineer mindset: research creates value once it ships. Problem → Data → Model → Decision → Product.",
      footerCopy: "© 2026 Jale Summak · Personal portfolio — TBC Tech AI · Product studio"
    }
  };

  var APPS = [
    { id: 1, key: "EyeGuide AI", family: ["Health & Accessibility", "Sağlık & Erişilebilirlik"], url: "apps/health/", desc: ["AI that helps people see, understand and navigate with confidence.", "İnsanların güvenle görmesine, anlamasına ve yön bulmasına yardım eden AI."] },
    { id: 2, key: "AgroLens AI", family: ["Agriculture & Nature", "Tarım & Doğa"], url: "apps/agro/", desc: ["Turn one photo into a clear, explainable field insight.", "Tek bir fotoğrafı net, açıklanabilir bir saha içgörüsüne dönüştürür."] },
    { id: 3, key: "CityPulse AI", family: ["Cities & Environment", "Şehirler & Çevre"], url: "apps/city/", desc: ["Understand the signals shaping safer, healthier cities.", "Daha güvenli ve sağlıklı şehirleri şekillendiren sinyalleri anlayın."] },
    { id: 4, key: "TrustLens AI", family: ["Trust, Safety & Language", "Güven, Güvenlik & Dil"], url: "apps/trust/", desc: ["Check language, tone and content risk in one calm workflow.", "Dil, ton ve içerik riskini tek sakin akışta kontrol edin."] },
    { id: 5, key: "RecoMuse AI", family: ["Personalized Discovery", "Kişiselleştirilmiş Keşif"], url: "apps/discovery/", desc: ["A personal discovery layer shaped around what you actually enjoy.", "Gerçekten sevdikleriniz etrafında şekillenen kişisel keşif katmanı."] },
    { id: 6, key: "BizPilot AI", family: ["Business & Forecasting", "İş & Tahminleme"], url: "apps/business/", desc: ["Move from raw numbers to the next best business decision.", "Ham sayılardan bir sonraki en iyi iş kararına geçin."] },
    { id: 7, key: "CareerPath AI", family: ["Career & Education", "Kariyer & Eğitim"], url: "apps/career/", desc: ["Translate market data into a focused, personal growth route.", "Piyasa verisini odaklı, kişisel bir gelişim yoluna çevirin."] },
    { id: 8, key: "VisionForge AI", family: ["CNN & Visual Intelligence", "CNN & Görsel Zekâ"], url: "apps/playground/", desc: ["Train the eye of an AI system, then explore how it classifies and communicates uncertainty.", "Bir AI sisteminin gözünü eğitin, ardından nasıl sınıflandırdığını ve belirsizliği nasıl ilettiğini keşfedin."] }
  ];

  var lang = (function () {
    try {
      var saved = localStorage.getItem("js-site-lang");
      if (saved === "tr" || saved === "en") return saved;
      return (navigator.language || "").toLowerCase().indexOf("tr") === 0 ? "tr" : "en";
    } catch (e) { return "tr"; }
  })();

  var stage = document.getElementById("catStage");
  var results = document.getElementById("catResults");
  var appsGrid = document.getElementById("appsGrid");
  var langBtn = document.getElementById("langToggle");

  function t(key) { return i18n[lang][key] || key; }

  function setLang(next) {
    lang = next;
    try { localStorage.setItem("js-site-lang", next); } catch (e) {}
    document.documentElement.lang = next;
    document.title = next === "tr"
      ? "Jale Summak — AI Sistemleri & Ürün Geliştirici · TBC Tech AI"
      : "Jale Summak — AI Systems & Product Builder · TBC Tech AI";
    langBtn.textContent = next === "tr" ? "EN" : "TR";
    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var key = el.getAttribute("data-i18n");
      el.innerHTML = t(key);
    });
    renderApps();
    var active = stage.querySelector(".cat-card.active");
    if (active) renderCategory(active.getAttribute("data-slug"), true);
  }

  langBtn.addEventListener("click", function () { setLang(lang === "tr" ? "en" : "tr"); });

  function esc(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }

  /* ---------- Categories ---------- */
  function renderCategories() {
    stage.innerHTML = "";
    DATA.categories.forEach(function (cat) {
      var card = document.createElement("button");
      card.className = "cat-card" + (cat.count === 0 ? " has-empty" : "");
      card.type = "button";
      card.setAttribute("data-slug", cat.slug);
      card.innerHTML =
        '<div class="cat-top"><span class="cat-icon" aria-hidden="true">' + cat.icon + "</span>" +
        (cat.count > 0
          ? '<span class="cat-count">' + cat.count + " " + t("projectsIn") + "</span>"
          : '<span class="cat-count empty">Foundation</span>') +
        '</div><div><div class="cat-name">' + esc(lang === "tr" ? cat.tr.name : cat.en.name) + '</div></div>' +
        '<div class="cat-summary">' + esc(lang === "tr" ? cat.tr.summary : cat.en.summary) + "</div>" +
        '<span class="cat-hint">' + t("selectHint") + " →</span>";
      card.addEventListener("mouseenter", function (e) { tiltIn(e, card); });
      card.addEventListener("mousemove", function (e) { tiltMove(e, card); });
      card.addEventListener("mouseleave", function () { tiltOut(card); });
      card.addEventListener("click", function () { selectCategory(cat.slug, card); });
      stage.appendChild(card);
    });
  }

  function tiltIn(e, card) {
    var r = card.getBoundingClientRect();
    card.style.setProperty("--mx", ((e.clientX - r.left) / r.width) * 100 + "%");
    card.style.setProperty("--my", ((e.clientY - r.top) / r.height) * 100 + "%");
  }
  function tiltMove(e, card) {
    var r = card.getBoundingClientRect();
    var px = (e.clientX - r.left) / r.width - 0.5;
    var py = (e.clientY - r.top) / r.height - 0.5;
    card.style.transform = "rotateX(" + (-py * 10).toFixed(2) + "deg) rotateY(" + (px * 12).toFixed(2) + "deg) translateZ(26px)";
    card.style.setProperty("--mx", ((e.clientX - r.left) / r.width) * 100 + "%");
    card.style.setProperty("--my", ((e.clientY - r.top) / r.height) * 100 + "%");
  }
  function tiltOut(card) {
    card.style.transform = "rotateX(2deg) rotateY(-2deg) translateZ(0)";
  }

  function selectCategory(slug, card) {
    stage.querySelectorAll(".cat-card").forEach(function (c) { c.classList.remove("active"); });
    card.classList.add("active");
    renderCategory(slug, false);
    results.hidden = false;
    try { location.hash = slug; } catch (e) {}
    results.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  function renderCategory(slug, keepScroll) {
    var cat = DATA.categories.filter(function (c) { return c.slug === slug; })[0];
    if (!cat) return;
    var catName = lang === "tr" ? cat.tr.name : cat.en.name;
    var proj = DATA.projects.filter(function (p) { return p.collections.indexOf(slug) !== -1; });
    var head = '<div class="results-head"><div class="results-title">' + esc(cat.icon) + " " + esc(catName) +
      " — <span>" + proj.length + "</span> " + t("projectsIn").toLowerCase() +
      '</div><button type="button" class="results-close" id="resultsClose">' + t("close") + " ✕</button></div>";

    var html = "";
    if (proj.length === 0) {
      html += '<div class="empty-note">' + t("foundation") + "</div>";
    } else {
      proj.forEach(function (p) { html += projectCard(p); });
    }
    results.innerHTML = head + '<div class="projects-grid">' + html + "</div>";
    document.getElementById("resultsClose").addEventListener("click", function () {
      results.hidden = true;
      stage.querySelectorAll(".cat-card").forEach(function (c) { c.classList.remove("active"); });
      try { if (location.hash) history.replaceState(null, "", location.pathname + location.search); } catch (e) {}
      if (!keepScroll) results.scrollIntoView({ behavior: "smooth", block: "start" });
    });
    if (!keepScroll) window.dispatchEvent(new Event("resize"));
  }

  function projectCard(p) {
    var x = lang === "tr" ? p.tr : p.en;
    var family = p.family;
    var links = "";
    if (p.links.github) links += '<a class="link-github" href="' + esc(p.links.github) + '" target="_blank" rel="noreferrer">' + t("github") + "</a>";
    if (p.links.kaggle) links += '<a class="link-kaggle" href="' + esc(p.links.kaggle) + '" target="_blank" rel="noreferrer">' + t("kaggle") + "</a>";
    if (p.links.hf) links += '<a class="link-hf" href="' + esc(p.links.hf) + '" target="_blank" rel="noreferrer">' + t("hf") + "</a>";
    if (p.links.app) links += '<a class="link-app" href="' + esc(p.links.app) + '" data-link-app="' + esc(p.links.app) + '">' + t("appOpen") + "</a>";

    var tags = p.tags.map(function (tag) { return "<span>" + esc(tag) + "</span>"; }).join("");
    var metric = x.metric ? '<span class="metric-chip">' + esc(x.metric) + "</span>" : "";
    var measuredText = x.metric ? "" : '<p>' + esc(t("e2e")) + "</p>";

    return '<article class="project-card">' +
      '<div class="project-head"><div><strong>' + esc(p.title) + "</strong>" +
      (family ? '<div class="project-family">' + esc(family) + "</div>" : "") +
      '</div></div>' +
      '<div class="project-tags">' + tags + "</div>" +
      '<div class="project-evidence">' +
        "<p><b>" + t("whatBuilt") + "</b>" + esc(x.built) + "</p>" +
        (x.how ? "<p><b>" + t("methods") + "</b>" + esc(x.how) + "</p>" : "") +
      "</div>" +
      '<div class="outcomes">' +
        '<div class="outcome target"><b>' + t("intended") + "</b><p>" + esc(x.why || t("e2e")) + "</p></div>" +
        '<div class="outcome measured"><b>' + t("measured") + "</b>" + metric + measuredText + "</div>" +
      "</div>" +
      '<div class="project-links">' + links + "</div>" +
      "</article>";
  }

  /* ---------- Apps ---------- */
  function renderApps() {
    if (!appsGrid) return;
    appsGrid.innerHTML = APPS.map(function (app) {
      var i = lang === "tr" ? 1 : 0;
      return '<a class="app-card" href="' + esc(app.url) + '">' +
        '<span class="app-icon">' + esc(app.key.charAt(0)) + "</span>" +
        "<strong>" + esc(app.key) + "</strong>" +
        "<small>" + esc(app.family[i]) + "</small>" +
        "<p>" + esc(app.desc[i]) + "</p>" +
        '<span class="app-go">' + t("appOpen") + " →</span>" +
        "</a>";
    }).join("");
  }

  /* ---------- Init ---------- */
  setLang(lang);
  renderCategories();
  renderApps();

  var hashSlug = (location.hash || "").replace("#", "");
  if (hashSlug) {
    var card = stage.querySelector('[data-slug="' + hashSlug + '"]');
    if (card) {
      card.classList.add("active");
      renderCategory(hashSlug, true);
      results.hidden = false;
    }
  }

  var stats = {
    projects: document.getElementById("statProjects"),
    categories: document.getElementById("statCategories"),
    apps: document.getElementById("statApps"),
    years: document.getElementById("statYears")
  };
  if (stats.projects) stats.projects.textContent = DATA.projects.length;
  if (stats.categories) stats.categories.textContent = DATA.categories.length;
})();
