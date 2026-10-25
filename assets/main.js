(() => {
  const WHATSAPP = "966547394112";

  // Arabic is written directly in index.html; English translations live here.
  const EN = {
    "brand": "Salahadeen Almontaser",
    "nav.about": "About",
    "nav.systems": "Systems",
    "nav.services": "Services",
    "nav.experience": "Experience",
    "nav.contact": "Contact",
    "nav.cta": "Request a demo",
    "hero.badge": "Available for new projects",
    "hero.hello": "I build business systems",
    "hero.highlight": "that companies actually use",
    "hero.lead": "I'm Salahadeen Almontaser, a software engineer based in Riyadh. I build complete systems designed for the Saudi market: licenses, correspondence and fleet tracking, purchase-request oversight, HR, and digital signage, as well as Odoo development and customization.",
    "hero.cta1": "Explore the systems",
    "hero.cta2": "Chat on WhatsApp",
    "stats.years": "Years of experience",
    "stats.systems": "Systems in production",
    "stats.lang": "Full Arabic & Hijri support",
    "photo.alt": "Salahadeen Almontaser",
    "float.odoo": "Development & customization",
    "float.apps": "Web & mobile",
    "about.eyebrow": "About me",
    "about.title": "A software engineer who understands the business before writing code",
    "about.p1": "I currently work as a Systems Developer in the IT department at SAMA QARIATI in Riyadh, where I develop and customize Odoo and build in-house systems that have been running daily for about a year.",
    "about.p2": "I hold a B.Sc. in Computer Science and previously worked as a Computer Science teaching assistant and software developer. I focus on systems that solve real problems: transactions lost between departments, licenses expiring without notice, and approvals with no follow-up.",
    "about.aiTitle": "AI tools:",
    "systems.eyebrow": "Systems",
    "systems.title": "Ready-made systems, built for Saudi companies",
    "systems.sub": "Every system can be tailored to your company's workflows and deployed on your own server, so your data stays under your control.",
    "p1.tag": "Most requested",
    "p1.name": "Twtheeq: licenses, correspondence & fleet platform",
    "p1.desc": "Never pay an expiry fine again. One platform for your company's transactions, government documents, vehicles and leases, with reminders before anything expires.",
    "p1.f1": "Incoming and outgoing transactions between departments",
    "p1.f2": "Balady municipal licenses, commercial registrations and branch licenses",
    "p1.f3": "Fleet: registration (Istimara), inspection, insurance, operating card",
    "p1.f4": "Leases with Ejar contract numbers and payment tracking",
    "p1.f5": "Ready letter templates and Arabic PDF & Excel reports",
    "p1.f6": "QR code for on-site vehicle verification, plus an Android app",
    "cta.demo": "Request a demo",
    "mock.title": "Upcoming expiries",
    "mock.r1": "Balady license: Olaya branch",
    "mock.d1": "12 days",
    "mock.r2": "Vehicle registration: ABC 1234",
    "mock.d2": "3 days",
    "mock.r3": "Commercial registration: HQ",
    "mock.d3": "94 days",
    "mock.r4": "Lease: Al-Sulay warehouse",
    "mock.d4": "21 days",
    "p2.name": "Workflow Master: purchase-request oversight",
    "p2.desc": "Every purchase request follows a clear approval cycle from creation to execution, with no lost paperwork.",
    "p2.f1": "Automated cycle: Oversight → Finance → Management → Execution",
    "p2.f2": "Automatic WhatsApp alerts and an AI chat assistant",
    "p2.f3": "Full audit trail and turnaround reports",
    "p3.name": "Taskra: HR & task management",
    "p3.desc": "Manage employees and field tasks across multiple companies and branches, with a mobile app for staff.",
    "p3.f1": "Attendance, payroll and employee requests",
    "p3.f2": "Multiple companies, branches, departments and roles",
    "p3.f3": "Bilingual Flutter app with instant notifications",
    "p4.name": "Signera: digital signage management",
    "p4.desc": "Control the screens in all your branches from one dashboard, for restaurants, retail, malls and clinics.",
    "p4.f1": "Design, schedule and approve content before it airs",
    "p4.f2": "AI-generated designs",
    "p4.f3": "Real-time screen monitoring and an offline-capable player",
    "services.eyebrow": "Services",
    "services.title": "How can I help your company?",
    "s1.t": "Odoo development & customization",
    "s1.d": "Custom Python modules, tailored reports and forms, and integration of Odoo with your other systems.",
    "s2.t": "Custom business systems",
    "s2.d": "I analyze your workflows and turn them into a web system with precise permissions and dashboards.",
    "s3.t": "Mobile apps",
    "s3.d": "Flutter apps for Android and iOS connected to your system, in Arabic and English.",
    "s4.t": "Integration & automation",
    "s4.d": "WhatsApp and notification integrations, external systems via API, and automation of repetitive tasks.",
    "s5.t": "Secure deployment & hosting",
    "s5.d": "Run your system on your own server with Docker, with backups and tight access control.",
    "s6.t": "AI solutions",
    "s6.d": "Chat assistants inside your systems, content and design generation, and faster development.",
    "exp.eyebrow": "Experience",
    "exp.title": "My career",
    "exp.sub": "B.Sc. in Computer Science, Thamar University (2018/2019), grade 87.97%.",
    "cv.ar": "CV (Arabic)",
    "cv.en": "CV (English)",
    "e1.when": "2025 – Present",
    "e1.role": "Systems Developer, IT Department",
    "e1.org": "SAMA QARIATI, Riyadh",
    "e1.d": "Odoo development and customization; built and deployed the oversight, Twtheeq and Signera systems.",
    "e2.role": "Systems Developer (Project)",
    "e2.org": "Rawabi Supplies Trading Co.",
    "e2.d": "Built the Taskra HR system and its mobile app.",
    "e3.role": "Teaching Assistant, Computer Science",
    "e3.org": "Al-Dhalea University",
    "e4.role": "Software Developer",
    "e4.org": "Al-Muheet Tourism & Travel Co.",
    "e5.role": "Programmer & Developer",
    "e5.org": "Deanship of Student Affairs, Thamar University",
    "contact.eyebrow": "Contact",
    "contact.title": "Have a system in mind, or want a demo?",
    "contact.sub": "Message me on WhatsApp and I'll get back to you soon. Tell me briefly about your business and what you need.",
    "contact.cta": "Start a WhatsApp chat",
    "contact.loc": "Al-Mansourah, Riyadh, Saudi Arabia",
    "footer.top": "Back to top ↑",
  };

  const WA = {
    ar: {
      "wa.general": "مرحباً صلاح، وصلت إليك من موقعك وأرغب في الاستفسار عن نظام لشركتنا.",
      "wa.p1": "مرحباً صلاح، أرغب في عرض تجريبي لنظام توثيق (التراخيص والمراسلات والأسطول).",
      "wa.p2": "مرحباً صلاح، أرغب في عرض تجريبي لنظام الرقابة على طلبات الشراء (Workflow Master).",
      "wa.p3": "مرحباً صلاح، أرغب في عرض تجريبي لنظام Taskra للموارد البشرية والمهام.",
      "wa.p4": "مرحباً صلاح، أرغب في عرض تجريبي لنظام Signera لإدارة الشاشات الرقمية.",
    },
    en: {
      "wa.general": "Hi Salah, I found you through your website and would like to ask about a system for our company.",
      "wa.p1": "Hi Salah, I'd like a demo of Twtheeq (licenses, correspondence & fleet).",
      "wa.p2": "Hi Salah, I'd like a demo of Workflow Master (purchase-request oversight).",
      "wa.p3": "Hi Salah, I'd like a demo of Taskra (HR & tasks).",
      "wa.p4": "Hi Salah, I'd like a demo of Signera (digital signage).",
    },
  };

  const META = {
    ar: { title: document.title, desc: document.querySelector('meta[name="description"]').content },
    en: {
      title: "Salahadeen Almontaser | Software Engineer & Business Systems",
      desc: "Software engineer in Riyadh building business systems for Saudi companies: licenses, correspondence and fleet tracking, purchase oversight, HR, digital signage, and Odoo customization.",
    },
  };

  const textEls = [...document.querySelectorAll("[data-i18n]")];
  const altEls = [...document.querySelectorAll("[data-i18n-alt]")];
  const AR = {};
  textEls.forEach((el) => { AR[el.dataset.i18n] = el.textContent; });
  altEls.forEach((el) => { AR[el.dataset.i18nAlt] = el.alt; });

  const langBtn = document.getElementById("langBtn");

  function applyLang(lang) {
    const dict = lang === "en" ? EN : AR;
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "en" ? "ltr" : "rtl";
    textEls.forEach((el) => {
      const v = dict[el.dataset.i18n];
      if (v !== undefined) el.textContent = v;
    });
    altEls.forEach((el) => {
      const v = dict[el.dataset.i18nAlt];
      if (v !== undefined) el.alt = v;
    });
    document.querySelectorAll(".js-wa").forEach((a) => {
      const msg = WA[lang][a.dataset.msg] || WA[lang]["wa.general"];
      a.href = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(msg)}`;
    });
    document.title = META[lang].title;
    document.querySelector('meta[name="description"]').content = META[lang].desc;
    langBtn.textContent = lang === "en" ? "ع" : "EN";
    langBtn.setAttribute("aria-label", lang === "en" ? "التبديل إلى العربية" : "Switch to English");
    try { localStorage.setItem("lang", lang); } catch (_) { /* private mode */ }
  }

  const urlLang = new URLSearchParams(location.search).get("lang");
  let saved = null;
  try { saved = localStorage.getItem("lang"); } catch (_) { /* private mode */ }
  let current = urlLang === "en" || urlLang === "ar" ? urlLang : saved || "ar";
  applyLang(current);

  langBtn.addEventListener("click", () => {
    current = current === "ar" ? "en" : "ar";
    applyLang(current);
  });

  // Mobile menu
  const menuBtn = document.getElementById("menuBtn");
  const navLinks = document.getElementById("navLinks");
  menuBtn.addEventListener("click", () => {
    const open = navLinks.classList.toggle("open");
    menuBtn.setAttribute("aria-expanded", String(open));
  });
  navLinks.querySelectorAll("a").forEach((a) =>
    a.addEventListener("click", () => {
      navLinks.classList.remove("open");
      menuBtn.setAttribute("aria-expanded", "false");
    })
  );

  // Nav shadow on scroll
  const nav = document.querySelector(".nav");
  const onScroll = () => nav.classList.toggle("scrolled", window.scrollY > 10);
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  // Reveal sections on scroll
  const targets = document.querySelectorAll(".section-head, .product, .service, .timeline li, .about-grid > *, .contact-card");
  if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("in");
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.12 });
    targets.forEach((t) => { t.classList.add("reveal"); io.observe(t); });
  }

  document.getElementById("year").textContent = new Date().getFullYear();
})();
