(function () {
  "use strict";

  var DATA = window.PORTFOLIO_DATA;
  if (!DATA) return;

  var i18n = {
    tr: {
      navAbout: "Hakkımda", navCategories: "Kategoriler", navApps: "Uygulamalar", navContact: "İletişim", cv: "CV",
      heroEyebrow: "JALE SUMMAK · AI TECH LEAD & FORWARD DEPLOYMENT ENGINEER · PRODUCT BUILDER",
      heroHeadline: "Veriyi güvenle karar verebileceğiniz <em>AI sistemlerine</em> dönüştürüyorum.",
      heroIntro: "Kaynağa dayalı AI ajanlarından bilgisayarlı görüye; tahminleme, öneri sistemleri ve dağıtık veri temellerine uzanan, incelenebilir ve kullanılabilir bir portföy.",
      statProjects: "Proje", statCategories: "Kategori", statApps: "Canlı Uygulama", statYears: "Yıl Mühendislik",
      ctaCategories: "Kategorileri Keşfet", ctaGithub: "GitHub'ı İncele",
      aboutTitle: "Hakkımda",
      aboutLead: "AI Tech Lead & Forward Deployment Engineer · TBC Tech AI Product Builder. Ham veriyi, insanların ve işletmelerin güvenle karar verebileceği AI sistemlerine dönüştürüyorum.",
      aboutBody1: "Çalışmalarım tüm süreci kapsar: veri hazırlama, modelleme, değerlendirme, yayınlama ve arayüz tasarımı. Sınıflandırma, bilgisayar görüsü, derin öğrenme, NLP, tahminleme, öneri sistemleri ve dağıtık veri temelleri (Spark, GIS, AutoML) üzerine 54 kanıt temelli proje ürettim.",
      aboutBody2: "FDE — <strong>Forward Deployment Engineer</strong> — mantığıyla çalışıyorum: araştırma ancak yayına alındığında değerlidir. Bu portföydeki her proje; ne yapıldığını, hangi yöntemlerin kullanıldığını, hangi değerin hedeflendiğini, ne ölçüldüğünü ve kanıtın nerede olduğunu (GitHub, Kaggle, Hugging Face) açıkça gösterir.",
      cvDownload: "CV'yi İndir", contactMe: "İletişime Geç",
      factProjects: "Kanıt temelli proje", factCollections: "Net teknik kategori", factApps: "Canlı uygulama merkezi", factEngineering: "Mühendislik deneyimi",
      catTitle: "Kategoriler",
      catLead: "Bir kategori seçin — ilgili projeler hemen altında açılır. Her projede amaç, yöntem, ölçülen sonuç ve GitHub / Kaggle / Hugging Face kanıtları yer alır.",
      selectHint: "Küre dönüyor — seçmek için bir kategoriye tıkla",
      projectsIn: "Projeler", close: "Kapat",
      whatBuilt: "Ne Yaptım", methods: "Yöntemler", intended: "Amaçlanan Değer", measured: "Ölçülen Sonuç",
      e2e: "Uçtan uca AI iş akışı",
      github: "GitHub", kaggle: "Kaggle", hf: "HF Model", appOpen: "Uygulama",
      foundation: "Foundation lab — aktif öğrenme yönü, tamamlanmış ürün olarak sunulmaz.",
      appsTitle: "Canlı Uygulamalar",
      appsLead: "54 proje, 8 canlı ve mobil uyumlu uygulama merkezinde toplanır. Her merkez kendi interaktif sayfasını açar ve arkasındaki kanıtları gösterir.",
      contactTitle: "İletişim", contactEmail: "Email",
      footerFdeTitle: "TBC Teknoloji · TBC TECH AI",
      footerFdeText: "Forward Deployment Engineer mantığı: araştırma, yayına alındığında değer üretir. Problem → Veri → Model → Karar → Ürün.",
      footerCopy: "© 2026 Jale Summak · Personal portfolio — TBC Tech AI · Product studio"
    },
    en: {
      navAbout: "About", navCategories: "Categories", navApps: "Apps", navContact: "Contact", cv: "CV",
      heroEyebrow: "JALE SUMMAK · AI TECH LEAD & FORWARD DEPLOYMENT ENGINEER · PRODUCT BUILDER",
      heroHeadline: "I build AI systems that turn data <em>into confident decisions.</em>",
      heroIntro: "From source-grounded AI agents and computer vision to forecasting, recommender systems and distributed data foundations — an evidence-led portfolio built to be inspected, understood and used.",
      statProjects: "Projects", statCategories: "Categories", statApps: "Live Apps", statYears: "Years Engineering",
      ctaCategories: "Explore Categories", ctaGithub: "Inspect GitHub",
      aboutTitle: "About Me",
      aboutLead: "AI Tech Lead & Forward Deployment Engineer, Product Builder at TBC Tech AI. I turn raw data into AI systems that help people and businesses decide with confidence.",
      aboutBody1: "My work spans the full journey: data preparation, modeling, evaluation, deployment and interface design. I have delivered 54 evidence-backed projects across classification, computer vision, deep learning, NLP, forecasting, recommender systems and distributed data foundations (Spark, GIS, AutoML).",
      aboutBody2: "I work with an FDE — <strong>Forward Deployment Engineer</strong> — mindset: research is only valuable once it ships. Every project in this portfolio clearly shows what was built, which methods were used, what value was intended, what was measured, and where the evidence lives (GitHub, Kaggle, Hugging Face).",
      cvDownload: "Download CV", contactMe: "Get in Touch",
      factProjects: "Evidence-backed projects", factCollections: "Clear technical categories", factApps: "Live app hubs", factEngineering: "Engineering experience",
      catTitle: "Categories",
      catLead: "Pick a category — its projects open right below. Each project shows the goal, the methods, the measured result and the GitHub / Kaggle / Hugging Face evidence.",
      selectHint: "The sphere is rotating — click a category to open it",
      projectsIn: "Projects", close: "Close",
      whatBuilt: "What I Built", methods: "Methods", intended: "Intended Value", measured: "Measured Outcome",
      e2e: "End-to-end AI workflow",
      github: "GitHub", kaggle: "Kaggle", hf: "HF Model", appOpen: "App",
      foundation: "Foundation lab — an active learning direction, not presented as a finished product.",
      appsTitle: "Live Applications",
      appsLead: "54 projects are organized into eight live, mobile-style PWA application hubs. Every hub opens its own interactive page and shows the GitHub, Kaggle and Hugging Face evidence behind it.",
      contactTitle: "Contact", contactEmail: "Email",
      footerFdeTitle: "TBC Teknoloji · TBC TECH AI",
      footerFdeText: "Forward Deployment Engineer mindset: research creates value once it ships. Problem → Data → Model → Decision → Product.",
      footerCopy: "© 2026 Jale Summak · Personal portfolio — TBC Tech AI · Product studio"
    },
    ru: {
      navAbout: "Обо мне", navCategories: "Категории", navApps: "Приложения", navContact: "Контакты", cv: "CV",
      heroEyebrow: "JALE SUMMAK · AI TECH LEAD & FORWARD DEPLOYMENT ENGINEER · PRODUCT BUILDER",
      heroHeadline: "Я превращаю данные в <em>уверенные решения</em> на основе ИИ.",
      heroIntro: "От ИИ-агентов с опорой на источники и компьютерного зрения до прогнозирования, рекомендательных систем и распределённых данных — проверяемое портфолио.",
      statProjects: "Проекты", statCategories: "Категории", statApps: "Живые приложения", statYears: "лет инженерии",
      ctaCategories: "Изучить категории", ctaGithub: "Открыть GitHub",
      aboutTitle: "Обо мне",
      aboutLead: "Архитектор AI-систем и продуктов, основатель TBC Tech AI. Превращаю сырые данные в ИИ-системы, помогающие людям и бизнесу принимать уверенные решения.",
      aboutBody1: "Моя работа охватывает весь путь: подготовку данных, моделирование, оценку, развёртывание и дизайн интерфейсов. Я создал 54 проверяемых проекта в области классификации, компьютерного зрения, глубокого обучения, NLP, прогнозирования, рекомендательных систем и распределённых данных (Spark, GIS, AutoML).",
      aboutBody2: "Работаю в духе FDE — <strong>Forward Deployment Engineer</strong>: исследование ценно, когда оно опубликовано. Каждый проект показывает, что построено, какие методы использованы, какая ценность задумана, что измерено и где находятся доказательства (GitHub, Kaggle, Hugging Face).",
      cvDownload: "Скачать CV", contactMe: "Связаться",
      factProjects: "Проверяемых проектов", factCollections: "Чётких категорий", factApps: "Живых приложений", factEngineering: "лет инженерного опыта",
      catTitle: "Категории",
      catLead: "Выберите категорию — проекты откроются ниже. Каждый проект показывает цель, методы, измеренный результат и доказательства на GitHub / Kaggle / Hugging Face.",
      selectHint: "Сфера вращается — нажмите категорию, чтобы выбрать",
      projectsIn: "проектов", close: "Закрыть",
      whatBuilt: "Что я построил", methods: "Методы", intended: "Целевая ценность", measured: "Измеренный результат",
      e2e: "Сквозной AI-конвейер",
      github: "GitHub", kaggle: "Kaggle", hf: "HF Model", appOpen: "Приложение",
      foundation: "Лаборатория фундамента — активное направление обучения, не представлено как готовый продукт.",
      appsTitle: "Живые приложения",
      appsLead: "54 проекта собраны в восемь живых мобильных PWA-хабов. Каждый хаб открывает свою интерактивную страницу и показывает доказательства на GitHub, Kaggle и Hugging Face.",
      contactTitle: "Контакты", contactEmail: "Email",
      footerFdeTitle: "TBC Teknoloji · TBC TECH AI",
      footerFdeText: "Мышление Forward Deployment Engineer: исследование создаёт ценность, когда оно опубликовано. Проблема → Данные → Модель → Решение → Продукт.",
      footerCopy: "© 2026 Джейл Суммак · Персональное портфолио — TBC Tech AI · Product studio"
    },
    uz: {
      navAbout: "Men haqimda", navCategories: "Kategoriyalar", navApps: "Ilovalar", navContact: "Aloqa", cv: "CV",
      heroEyebrow: "JALE SUMMAK · AI TECH LEAD & FORWARD DEPLOYMENT ENGINEER · PRODUCT BUILDER",
      heroHeadline: "Ma'lumotni ishonchli qarorlar uchun <em>AI tizimlariga</em> aylantiraman.",
      heroIntro: "Manbaga tayangan AI agentlari va kompyuter ko'rishdan bashorat, tavsiya tizimlari va tarqatilgan ma'lumotgacha — tekshirilishi mumkin portfel.",
      statProjects: "Loyihalar", statCategories: "Kategoriyalar", statApps: "Jonli ilovalar", statYears: "yil muhandislik",
      ctaCategories: "Kategoriyalarni o'rgan", ctaGithub: "GitHub'ni ko'rish",
      aboutTitle: "Men haqimda",
      aboutLead: "AI tizimlari va mahsulot yaratuvchisi, TBC Tech AI asoschisi. Xom ma'lumotni odamlar va biznes ishonchli qaror qiladigan AI tizimlariga aylantiraman.",
      aboutBody1: "Ishim butun yo'lni qamrab oladi: ma'lumot tayyorlash, modellash, baholash, joylashtirish va interfeys dizayni. Tasniflash, kompyuter ko'rish, chuqur o'rganish, NLP, bashorat, tavsiya tizimlari va tarqatilgan ma'lumot (Spark, GIS, AutoML) bo'yicha 54 dalilga asoslangan loyiha yaratdim.",
      aboutBody2: "FDE — <strong>Forward Deployment Engineer</strong> — mantig'i bilan ishlayman: tadqiqot faqat ishga tushirilganda qadrli. Har bir loyiha nima qurilgani, qaysi usullar ishlatilgani, qanday qiymat mo'ljallangani, nima o'lchangani va dalillar qayerda ekanini (GitHub, Kaggle, Hugging Face) aniq ko'rsatadi.",
      cvDownload: "CV yuklab olish", contactMe: "Bog'lanish",
      factProjects: "Dalilga asoslangan loyiha", factCollections: "Aniq texnik kategoriya", factApps: "Jonli ilova markazi", factEngineering: "yil muhandislik tajriba",
      catTitle: "Kategoriyalar",
      catLead: "Kategoriya tanlang — loyihalar pastda ochiladi. Har bir loyiha maqsad, usullar, o'lchangan natija va GitHub / Kaggle / Hugging Face dalillarini ko'rsatadi.",
      selectHint: "Sfera aylanmoqda — tanlash uchun kategoriyani bosing",
      projectsIn: "Loyihalar", close: "Yopish",
      whatBuilt: "Nima qurdim", methods: "Usullar", intended: "Mo'ljallangan qiymat", measured: "O'lchangan natija",
      e2e: "Uch-to-uch AI ish oqimi",
      github: "GitHub", kaggle: "Kaggle", hf: "HF Model", appOpen: "Ilova",
      foundation: "Foundation lab — faol o'rganish yo'nalishi, tayyor mahsulot sifatida taqdim etilmaydi.",
      appsTitle: "Jonli ilovalar",
      appsLead: "54 loyiha sakkizta jonli mobil PWA-markazda to'plangan. Har bir markaz o'z interaktiv sahifasini ochadi va GitHub, Kaggle hamda Hugging Face dalillarini ko'rsatadi.",
      contactTitle: "Aloqa", contactEmail: "Email",
      footerFdeTitle: "TBC Teknoloji · TBC TECH AI",
      footerFdeText: "Forward Deployment Engineer mantig'i: tadqiqot ishga tushganda qiymat yaratadi. Muammo → Ma'lumot → Model → Qaror → Mahsulot.",
      footerCopy: "© 2026 Jale Summak · Shaxsiy portfel — TBC Tech AI · Product studio"
    }
  };

  var APPS = [
    { id: 1, key: "EyeGuide AI", family: ["Health & Accessibility", "Sağlık & Erişilebilirlik", "Здоровье и доступность", "Salomatlik va qulaylik"], url: "https://jalesummak.tbctechai.com/eyeguide/", desc: ["AI that helps people see, understand and navigate with confidence.", "İnsanların güvenle görmesine, anlamasına ve yön bulmasına yardım eden AI.", "ИИ, помогающий людям видеть, понимать и ориентироваться уверенно.", "Odamlarga ishonch bilan ko'rish, tushunish va yo'l topishda yordam beradigan AI."] },
    { id: 2, key: "AgroLens AI", family: ["Agriculture & Nature", "Tarım & Doğa", "Сельское хозяйство и природа", "Qishloq xo'jaligi va tabiat"], url: "https://jalesummak.tbctechai.com/agrolens/", desc: ["Turn one photo into a clear, explainable field insight.", "Tek bir fotoğrafı net, açıklanabilir bir saha içgörüsüne dönüştürür.", "Превращает одно фото в ясную, объяснимую полевую аналитику.", "Bitta fotosuratni aniq, tushunarli dala tahliliga aylantiradi."] },
    { id: 3, key: "CityPulse AI", family: ["Cities & Environment", "Şehirler & Çevre", "Города и окружающая среда", "Shaharlar va atrof-muhit"], url: "https://jalesummak.tbctechai.com/citypulse/", desc: ["Understand the signals shaping safer, healthier cities.", "Daha güvenli ve sağlıklı şehirleri şekillendiren sinyalleri anlayın.", "Понять сигналы, формирующие более безопасные и здоровые города.", "Xavfsizroq va sog'lomroq shaharlarni shakllantiruvchi signallarni tushuning."] },
    { id: 4, key: "TrustLens AI", family: ["Trust, Safety & Language", "Güven, Güvenlik & Dil", "Доверие, безопасность и язык", "Ishonch, xavfsizlik va til"], url: "https://jalesummak.tbctechai.com/trustlens/", desc: ["Check language, tone and content risk in one calm workflow.", "Dil, ton ve içerik riskini tek sakin akışta kontrol edin.", "Проверьте язык, тон и риски контента в одном спокойном процессе.", "Til, ohang va kontent xavfini bitta sokin oqimda tekshiring."] },
    { id: 5, key: "RecoMuse AI", family: ["Personalized Discovery", "Kişiselleştirilmiş Keşif", "Персонализированное открытие", "Shaxsiylashtirilgan kashfiyot"], url: "https://jalesummak.tbctechai.com/recomuse/", desc: ["A personal discovery layer shaped around what you actually enjoy.", "Gerçekten sevdikleriniz etrafında şekillenen kişisel keşif katmanı.", "Личный слой открытий, построенный вокруг того, что вам нравится.", "Siz haqiqatan ham yoqtirgan narsalar atrofida qurilgan shaxsiy kashfiyot qatlami."] },
    { id: 6, key: "BizPilot AI", family: ["Business & Forecasting", "İş & Tahminleme", "Бизнес и прогнозирование", "Biznes va bashorat"], url: "https://jalesummak.tbctechai.com/bizpilot/", desc: ["Move from raw numbers to the next best business decision.", "Ham sayılardan bir sonraki en iyi iş kararına geçin.", "От сырых чисел к следующему лучшему бизнес-решению.", "Xom raqamlardan keyingi eng yaxshi biznes qaroriga o'ting."] },
    { id: 7, key: "CareerPath AI", family: ["Career & Education", "Kariyer & Eğitim", "Карьера и образование", "Karyera va ta'lim"], url: "https://jalesummak.tbctechai.com/careerpath/", desc: ["Translate market data into a focused, personal growth route.", "Piyasa verisini odaklı, kişisel bir gelişim yoluna çevirin.", "Превратите данные рынка в сфокусированный личный маршрут роста.", "Bozor ma'lumotini fokuslangan shaxsiy o'sish yo'liga aylantiring."] },
    { id: 8, key: "VisionForge AI", family: ["CNN & Visual Intelligence", "CNN & Görsel Zekâ", "CNN и визуальный интеллект", "CNN va vizual intellekt"], url: "https://jalesummak.tbctechai.com/visionforge/", desc: ["Train the eye of an AI system, then explore how it classifies and communicates uncertainty.", "Bir AI sisteminin gözünü eğitin, ardından nasıl sınıflandırdığını ve belirsizliği nasıl ilettiğini keşfedin.", "Обучите глаз ИИ-системы и исследуйте, как она классифицирует и передаёт неопределённость.", "AI tizimining ko'zini o'rgating, so'ng qanday tasniflashini va noaniqlikni qanday yetkazishini o'rganing."] }
  ];

  var lang = (function () {
    try {
      var saved = localStorage.getItem("js-site-lang");
      if (["tr", "en", "ru", "uz"].indexOf(saved) !== -1) return saved;
      return (navigator.language || "").toLowerCase().indexOf("tr") === 0 ? "tr" : "en";
    } catch (e) { return "tr"; }
  })();

  var orbitWrap = document.getElementById("orbitWrap");
  var orbitRing = document.getElementById("orbitRing");
  var results = document.getElementById("catResults");
  var appsGrid = document.getElementById("appsGrid");
  var langBtns = document.querySelectorAll("#langToggle button");

  function t(key) { return i18n[lang][key] || key; }

  function setLang(next) {
    lang = next;
    try { localStorage.setItem("js-site-lang", next); } catch (e) {}
    document.documentElement.lang = next;
    var titles = { tr: "Jale Summak — AI Tech Lead & Forward Deployment Engineer · TBC Tech AI", en: "Jale Summak — AI Tech Lead & Forward Deployment Engineer · TBC Tech AI", ru: "Джейл Суммак — AI Tech Lead & Forward Deployment Engineer · TBC Tech AI", uz: "Jale Summak — AI Tech Lead & Forward Deployment Engineer · TBC Tech AI" };
    document.title = titles[next];
    langBtns.forEach(function (b) { b.classList.toggle("on", b.getAttribute("data-lang") === next); });
    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      el.innerHTML = t(el.getAttribute("data-i18n"));
    });
    renderOrbit();
    renderApps();
    var active = document.querySelector(".cat-orb.active");
    if (active) renderCategory(active.getAttribute("data-slug"), true);
  }

  langBtns.forEach(function (b) {
    b.addEventListener("click", function () { setLang(b.getAttribute("data-lang")); });
  });

  function esc(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }

  /* ---------- 3D orbit ---------- */
  function orbitRadius() {
    var w = window.innerWidth;
    return w < 560 ? 165 : w < 900 ? 220 : 300;
  }

  function renderOrbit() {
    if (!orbitRing) return;
    var r = orbitRadius();
    var n = DATA.categories.length;
    orbitRing.innerHTML = "";
    DATA.categories.forEach(function (cat, i) {
      var angle = (360 / n) * i;
      var card = document.createElement("button");
      card.type = "button";
      card.className = "cat-orb" + (cat.count === 0 ? " has-empty" : "");
      card.setAttribute("data-slug", cat.slug);
      card.style.setProperty("--c", cat.color);
      card.style.transform = "rotateY(" + angle + "deg) translateZ(" + r + "px) rotateY(" + (-angle) + "deg)";
      card.innerHTML =
        '<span class="co-icon">' + cat.icon + "</span>" +
        '<span class="co-name">' + esc(lang === "tr" ? cat.tr.name : lang === "ru" ? cat.ru.name : lang === "uz" ? cat.uz.name : cat.en.name) + "</span>" +
        '<span class="co-count">' + (cat.count > 0 ? cat.count + " " + t("projectsIn") : "Foundation") + "</span>";
      card.addEventListener("click", function () { selectCategory(cat.slug, card); });
      orbitRing.appendChild(card);
    });
    if (orbitWrap) {
      orbitWrap.addEventListener("mouseenter", function () { orbitWrap.classList.add("paused"); });
      orbitWrap.addEventListener("mouseleave", function () {
        if (!document.querySelector(".cat-orb.active")) orbitWrap.classList.remove("paused");
      });
    }
  }

  window.addEventListener("resize", function () {
    if (orbitRing) {
      var r = orbitRadius();
      var n = DATA.categories.length;
      Array.prototype.forEach.call(orbitRing.children, function (card, i) {
        var angle = (360 / n) * i;
        card.style.transform = "rotateY(" + angle + "deg) translateZ(" + r + "px) rotateY(" + (-angle) + "deg)";
      });
    }
  });

  function selectCategory(slug, card) {
    document.querySelectorAll(".cat-orb").forEach(function (c) { c.classList.remove("active"); });
    card.classList.add("active");
    if (orbitWrap) orbitWrap.classList.add("paused");
    renderCategory(slug, false);
    results.hidden = false;
    try { location.hash = slug; } catch (e) {}
    results.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  /* ---------- SVG project visual ---------- */
  function hexToRgb(hex) {
    var h = hex.replace("#", "");
    var v = parseInt(h, 16);
    return [(v >> 16) & 255, (v >> 8) & 255, v & 255];
  }
  function rgba(hex, a) {
    var c = hexToRgb(hex);
    return "rgba(" + c[0] + "," + c[1] + "," + c[2] + "," + a + ")";
  }

  function svgVisual(p, cat) {
    var c = cat.color;
    var g = "url(#grad-" + p.title.replace(/\W+/g, "") + ")";
    var short = p.title.length > 34 ? p.title.slice(0, 32) + "…" : p.title;
    var motif = "";
    var has = function (s) { return p.collections.indexOf(s) !== -1; };

    if (has("regression") || has("time-series-recommenders")) {
      motif = '<polyline fill="none" stroke="' + c + '" stroke-width="3" points="40,150 90,140 130,120 175,128 215,104 255,112 300,86 340,94 380,62 420,74"/>' +
        '<polyline fill="none" stroke="' + c + '" stroke-width="3" stroke-dasharray="6 5" opacity="0.55" points="420,74 445,52"/>' +
        '<rect x="415" y="38" width="40" height="42" rx="8" fill="' + rgba(c, 0.16) + '" stroke="' + rgba(c, 0.6) + '"/>' +
        '<text x="435" y="67" fill="' + c + '" font-size="11" font-weight="800" text-anchor="middle">ML</text>' +
        '<circle cx="300" cy="86" r="5" fill="' + c + '"/>';
    } else if (has("clustering")) {
      motif = '<circle cx="130" cy="100" r="7" fill="' + c + '" opacity="0.95"/><circle cx="150" cy="86" r="5" fill="' + c + '" opacity="0.7"/><circle cx="112" cy="82" r="5" fill="' + c + '" opacity="0.7"/><circle cx="142" cy="116" r="5" fill="' + c + '" opacity="0.7"/>' +
        '<circle cx="330" cy="92" r="7" fill="#f472b6"/><circle cx="350" cy="108" r="5" fill="#f472b6" opacity="0.7"/><circle cx="316" cy="112" r="5" fill="#f472b6" opacity="0.7"/>' +
        '<circle cx="235" cy="150" r="7" fill="#4ade80"/><circle cx="256" cy="138" r="5" fill="#4ade80" opacity="0.7"/>' +
        '<ellipse cx="140" cy="100" rx="70" ry="52" fill="none" stroke="' + c + '" stroke-dasharray="4 4" opacity="0.5"/>' +
        '<ellipse cx="335" cy="98" rx="66" ry="48" fill="none" stroke="#f472b6" stroke-dasharray="4 4" opacity="0.5"/>';
    } else if (has("computer-vision-face-recognition")) {
      motif = '<rect x="120" y="60" width="250" height="120" rx="10" fill="none" stroke="' + c + '" stroke-width="2" opacity="0.9"/>' +
        '<circle cx="150" cy="90" r="3" fill="' + c + '"/><circle cx="180" cy="90" r="3" fill="' + c + '"/><path d="M150 108 q15 14 30 0" stroke="' + c + '" stroke-width="2" fill="none"/>' +
        '<rect x="252" y="82" width="52" height="52" rx="6" fill="none" stroke="#4ade80" stroke-width="2"/><text x="278" y="119" fill="#4ade80" font-size="12" font-weight="800" text-anchor="middle">99%</text>' +
        '<rect x="206" y="140" width="46" height="30" rx="5" fill="none" stroke="#fbbf24" stroke-width="2"/>' +
        '<path d="M70 120 h24 v40 h70" fill="none" stroke="' + rgba(c, 0.6) + '" stroke-width="2"/>';
    } else if (has("deep-learning")) {
      var nodes = "";
      var cols = [80, 170, 260, 350];
      var rows = [4, 5, 5, 3];
      cols.forEach(function (x, ci) {
        for (var ri = 0; ri < rows[ci]; ri++) {
          var y = 70 - (rows[ci] - 1) * 12 + ri * 24;
          nodes += '<circle cx="' + x + '" cy="' + y + '" r="7" fill="' + (ci === 0 || ci === 3 ? c : rgba(c, 0.35)) + '"/>';
          if (ci > 0) {
            for (var p = 0; p < rows[ci - 1]; p++) {
              var py = 70 - (rows[ci - 1] - 1) * 12 + p * 24;
              nodes += '<line x1="' + (cols[ci - 1] + 8) + '" y1="' + py + '" x2="' + (x - 8) + '" y2="' + y + '" stroke="' + rgba(c, 0.18) + '" stroke-width="1"/>';
            }
          }
        }
      });
      motif = nodes;
    } else if (has("llm-ai-agent-system")) {
      motif = '<rect x="60" y="80" width="96" height="52" rx="12" fill="' + rgba(c, 0.16) + '" stroke="' + c + '" stroke-width="2"/>' +
        '<text x="108" y="108" fill="' + c + '" font-size="12" font-weight="800" text-anchor="middle">LLM</text>' +
        '<circle cx="200" cy="106" r="10" fill="' + rgba(c, 0.4) + '" stroke="' + c + '"/><circle cx="282" cy="106" r="10" fill="' + rgba(c, 0.4) + '" stroke="' + c + '"/><circle cx="360" cy="106" r="10" fill="' + rgba(c, 0.4) + '" stroke="' + c + '"/>' +
        '<line x1="156" y1="106" x2="190" y2="106" stroke="' + c + '" stroke-width="2"/><line x1="210" y1="106" x2="272" y2="106" stroke="' + c + '" stroke-width="2"/><line x1="292" y1="106" x2="350" y2="106" stroke="' + c + '" stroke-width="2"/>' +
        '<path d="M70 32 q26 -14 52 0 M70 32 q-14 22 0 34" fill="none" stroke="' + rgba(c, 0.8) + '" stroke-width="2"/>';
    } else if (has("nlp")) {
      motif = '<rect x="70" y="78" width="170" height="48" rx="12" fill="' + rgba(c, 0.14) + '" stroke="' + rgba(c, 0.6) + '" stroke-width="1.5"/>' +
        '<rect x="252" y="96" width="120" height="40" rx="12" fill="' + rgba(c, 0.08) + '" stroke="' + rgba(c, 0.35) + '" stroke-width="1.5"/>' +
        '<circle cx="98" cy="102" r="4" fill="' + c + '"/><circle cx="122" cy="102" r="4" fill="' + c + '" opacity="0.6"/><circle cx="146" cy="102" r="4" fill="' + c + '" opacity="0.3"/>' +
        '<path d="M96 140 l10 10 M116 140 l10 10 M136 140 l10 10 M156 140 l10 10" stroke="' + rgba(c, 0.7) + '" stroke-width="2"/>' +
        '<text x="312" y="121" fill="' + c + '" font-size="12" font-weight="800" text-anchor="middle">+0.84</text>';
    } else if (has("spark-gis-automl")) {
      motif = '<path d="M60 150 h360" stroke="' + rgba(c, 0.4) + '" stroke-width="2"/>' +
        '<circle cx="120" cy="96" r="8" fill="' + c + '" opacity="0.95"/><circle cx="120" cy="84" r="4" fill="' + c + '"/>' +
        '<circle cx="236" cy="122" r="8" fill="#fbbf24"/><circle cx="236" cy="110" r="4" fill="#fbbf24"/>' +
        '<circle cx="340" cy="84" r="8" fill="#4ade80"/><circle cx="340" cy="72" r="4" fill="#4ade80"/>' +
        '<path d="M120 96 l0 40 M120 136 h-12 M120 136 h12 M236 122 l0 40 M236 162 h-12 M236 162 h12 M340 84 l0 40 M340 124 h-12 M340 124 h12" stroke="' + rgba(c, 0.5) + '" stroke-width="2"/>' +
        '<rect x="52" y="150" width="76" height="22" rx="8" fill="' + rgba(c, 0.14) + '" stroke="' + rgba(c, 0.5) + '" stroke-width="1.5"/>' +
        '<rect x="140" y="150" width="76" height="22" rx="8" fill="' + rgba(c, 0.14) + '" stroke="' + rgba(c, 0.5) + '" stroke-width="1.5"/>' +
        '<rect x="228" y="150" width="76" height="22" rx="8" fill="' + rgba(c, 0.14) + '" stroke="' + rgba(c, 0.5) + '" stroke-width="1.5"/>' +
        '<rect x="316" y="150" width="76" height="22" rx="8" fill="' + rgba(c, 0.14) + '" stroke="' + rgba(c, 0.5) + '" stroke-width="1.5"/>';
    } else if (has("machine-learning-operations")) {
      var blocks = [60, 150, 240, 330];
      blocks.forEach(function (x, i) {
        motif += '<rect x="' + x + '" y="90" width="66" height="40" rx="10" fill="' + rgba(c, 0.14) + '" stroke="' + c + '" stroke-width="1.8"/>';
        if (i < blocks.length - 1) motif += '<path d="M' + (x + 66) + ' 110 h' + (blocks[i + 1] - x - 66) + '" stroke="' + rgba(c, 0.7) + '" stroke-width="2" marker-end="url(#arrow-' + p.title.replace(/\W+/g, "") + ')"/>';
      });
      motif += '<text x="93" y="114" fill="' + c + '" font-size="11" font-weight="800" text-anchor="middle">DATA</text>' +
        '<text x="183" y="114" fill="' + c + '" font-size="11" font-weight="800" text-anchor="middle">TRAIN</text>' +
        '<text x="273" y="114" fill="' + c + '" font-size="11" font-weight="800" text-anchor="middle">EVAL</text>' +
        '<text x="363" y="114" fill="' + c + '" font-size="11" font-weight="800" text-anchor="middle">SHIP</text>';
    } else {
      motif = '<polyline fill="none" stroke="' + c + '" stroke-width="3" points="40,140 90,132 130,150 175,120 215,134 255,108 300,124 340,96 380,112 420,84"/>' +
        '<circle cx="420" cy="84" r="5" fill="' + c + '"/>';
    }

    return '<svg viewBox="0 0 480 210" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" role="img" aria-label="' + esc(p.title) + '">' +
      '<defs>' +
      '<linearGradient id="grad-' + p.title.replace(/\W+/g, "") + '" x1="0" y1="0" x2="1" y2="1">' +
      '<stop offset="0" stop-color="' + rgba(c, 0.18) + '"/><stop offset="1" stop-color="' + rgba(c, 0.04) + '"/></linearGradient>' +
      '<radialGradient id="glow-' + p.title.replace(/\W+/g, "") + '" cx="0.5" cy="0.4" r="0.7">' +
      '<stop offset="0" stop-color="' + rgba(c, 0.15) + '"/><stop offset="1" stop-color="rgba(240,242,255,0)"/></radialGradient>' +
      '<marker id="arrow-' + p.title.replace(/\W+/g, "") + '" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="' + rgba(c, 0.7) + '"/></marker>' +
      "</defs>" +
      '<rect width="480" height="210" fill="#f0f2ff"/>' +
      '<rect width="480" height="210" fill="' + g + '" opacity="0.5"/>' +
      '<rect width="480" height="210" fill="url(#glow-' + p.title.replace(/\W+/g, "") + ')"/>' +
      '<path d="M0 0 H480 M0 15 H480 M0 30 H480 M0 45 H480 M0 60 H480 M0 75 H480 M0 90 H480 M0 105 H480 M0 120 H480 M0 135 H480 M0 150 H480 M0 165 H480 M0 180 H480 M0 195 H480" stroke="rgba(108,92,231,0.06)"/>' +
      '<path d="M0 0 V210 M30 0 V210 M60 0 V210 M90 0 V210 M120 0 V210 M150 0 V210 M180 0 V210 M210 0 V210 M240 0 V210 M270 0 V210 M300 0 V210 M330 0 V210 M360 0 V210 M390 0 V210 M420 0 V210 M450 0 V210" stroke="rgba(108,92,231,0.06)"/>' +
      motif +
      '<rect x="0" y="0" width="480" height="210" fill="none" stroke="rgba(108,92,231,0.15)"/>' +
      '<rect x="372" y="14" width="96" height="24" rx="12" fill="' + rgba(c, 0.12) + '" stroke="' + rgba(c, 0.4) + '"/>' +
      '<text x="420" y="30" fill="' + c + '" font-size="11" font-weight="800" text-anchor="middle">' + esc(cat.name) + "</text>" +
      '<text x="20" y="196" fill="#1a1a2e" font-size="13" font-weight="800">' + esc(short) + "</text>" +
      "</svg>";
  }

  /* ---------- category results ---------- */
  function renderCategory(slug, keepScroll) {
    var cat = DATA.categories.filter(function (c) { return c.slug === slug; })[0];
    if (!cat) return;
    var catName = lang === "tr" ? cat.tr.name : lang === "ru" ? cat.ru.name : lang === "uz" ? cat.uz.name : cat.en.name;
    var proj = DATA.projects.filter(function (p) { return p.collections.indexOf(slug) !== -1; });
    var head = '<div class="results-head"><div class="results-title">' + cat.icon + " " + esc(catName) +
      " — <span>" + proj.length + "</span> " + t("projectsIn").toLowerCase() +
      '</div><button type="button" class="results-close" id="resultsClose">' + t("close") + " ✕</button></div>";

    var html = "";
    if (proj.length === 0) {
      html += '<div class="empty-note">' + t("foundation") + "</div>";
    } else {
      proj.forEach(function (p) { html += projectCard(p, cat); });
    }
    results.innerHTML = head + '<div class="projects-grid">' + html + "</div>";
    document.getElementById("resultsClose").addEventListener("click", function () {
      results.hidden = true;
      document.querySelectorAll(".cat-orb").forEach(function (c) { c.classList.remove("active"); });
      if (orbitWrap && !orbitWrap.matches(":hover")) orbitWrap.classList.remove("paused");
      try { if (location.hash) history.replaceState(null, "", location.pathname + location.search); } catch (e) {}
      if (!keepScroll) results.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }

  function projectCard(p, cat) {
    var x = lang === "tr" ? p.tr : lang === "ru" ? p.ru : lang === "uz" ? p.uz : p.en;
    var family = p.family;
    var links = "";
    if (p.links.github) links += '<a class="link-github" href="' + esc(p.links.github) + '" target="_blank" rel="noreferrer">' + t("github") + "</a>";
    if (p.links.kaggle) links += '<a class="link-kaggle" href="' + esc(p.links.kaggle) + '" target="_blank" rel="noreferrer">' + t("kaggle") + "</a>";
    if (p.links.hf) links += '<a class="link-hf" href="' + esc(p.links.hf) + '" target="_blank" rel="noreferrer">' + t("hf") + "</a>";
    if (p.links.app) links += '<a class="link-app" href="' + esc(p.links.app) + '">' + t("appOpen") + "</a>";

    var tags = p.tags.map(function (tag) { return "<span>" + esc(tag) + "</span>"; }).join("");
    var metric = x.metric ? '<span class="metric-chip">' + esc(x.metric) + "</span>" : "";
    var measuredText = x.metric ? "" : "<p>" + esc(t("e2e")) + "</p>";

    return '<article class="project-card">' +
      '<div class="project-visual">' + svgVisual(p, cat) + "</div>" +
      '<div class="project-body">' +
      '<div class="project-head"><strong>' + esc(p.title) + "</strong>" +
      (family ? '<div class="project-family">' + esc(family) + "</div>" : "") +
      "</div>" +
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
      "</div>" +
      "</article>";
  }

  /* ---------- apps ---------- */
  function renderApps() {
    if (!appsGrid) return;
    var li = { tr: 1, en: 0, ru: 2, uz: 3 }[lang] || 0;
    appsGrid.innerHTML = APPS.map(function (app) {
      return '<a class="app-card" href="' + esc(app.url) + '">' +
        '<span class="app-icon">' + esc(app.key.charAt(0)) + "</span>" +
        "<strong>" + esc(app.key) + "</strong>" +
        "<small>" + esc(app.family[li]) + "</small>" +
        "<p>" + esc(app.desc[li]) + "</p>" +
        '<span class="app-go">' + t("appOpen") + " →</span>" +
        "</a>";
    }).join("");
  }

  /* ---------- init ---------- */
  setLang(lang);

  var stats = {
    projects: document.getElementById("statProjects"),
    categories: document.getElementById("statCategories"),
    apps: document.getElementById("statApps"),
    years: document.getElementById("statYears")
  };
  if (stats.projects) stats.projects.textContent = DATA.projects.length;
  if (stats.categories) stats.categories.textContent = DATA.categories.length;
  if (stats.apps) stats.apps.textContent = APPS.length;
  if (document.getElementById("orbitProjCount")) document.getElementById("orbitProjCount").textContent = DATA.projects.length;
  if (document.getElementById("factProjects")) document.getElementById("factProjects").textContent = DATA.projects.length;

  var hashSlug = (location.hash || "").replace("#", "");
  if (hashSlug) {
    var card = document.querySelector('.cat-orb[data-slug="' + hashSlug + '"]');
    if (card) {
      card.classList.add("active");
      if (orbitWrap) orbitWrap.classList.add("paused");
      renderCategory(hashSlug, true);
      results.hidden = false;
    }
  }
})();
