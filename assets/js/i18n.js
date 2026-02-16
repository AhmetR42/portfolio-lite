const translations = {
  en: {
    live_link: "Live",
    brand: "Ahmet",
    nav_about: "About",
    nav_skills: "Skills",
    nav_projects: "Projects",
    nav_contact: "Contact",

    cta_github: "GitHub",
    cta_projects: "View Projects",
    cta_contact: "Contact",

    kicker: "Software Developer • MBO ICT",
    hero_title_line1: "Building",
    hero_title_line2: "full-stack",
    hero_title_line3: "projects that look great and work fast.",
    hero_subtitle: "PHP/Laravel, JavaScript, SQL, Docker. I’m growing my GitHub with real projects for internships.",

    meta_open: "Open to internship",
    meta_location: "Netherlands",

    stat_focus_label: "Focus",
    stat_focus_value: "Full-stack (Laravel + SQL)",
    stat_goal_label: "Goal",
    stat_goal_value: "Strong GitHub + portfolio",

    mini_1_t: "Clean code",
    mini_1_d: "Readable structure",
    mini_2_t: "Testing",
    mini_2_d: "Basics + practice",
    mini_3_t: "Docker",
    mini_3_d: "Local dev setup",
    mini_4_t: "Git",
    mini_4_d: "Clean commits",

    about_title: "About",
    about_text: "I’m a 2nd-year MBO ICT student. I enjoy building backend logic and connecting it to clean UI.",
    about_callout_t: "What I’m working on",
    about_li_1: "Laravel CRUD + auth",
    about_li_2: "REST APIs + SQL relations",
    about_li_3: "Dockerized development",

    skills_title: "Skills",

    projects_title: "Projects",
    projects_hint: "Each project includes code, screenshots and a clear README.",
    badge_frontend: "FRONTEND",
    badge_soon: "SOON",
    p1_title: "Portfolio Lite",
    p1_desc: "Modern portfolio with EN/NL language switch and clean layout.",
    p2_title: "Kanban Board",
    p2_desc: "Drag & drop task board using localStorage.",
    p3_title: "Unity Mini Game",
    p3_desc: "A small 2D game prototype (learning project).",
    repo_link: "Repo",
    live_soon: "Live soon",
    repo_soon: "Repo soon",

    filter_all: "All",
    filter_frontend: "Frontend",
    filter_fullstack: "Full-Stack",
    filter_unity: "Unity",

    contact_title: "Contact",
    contact_text: "Want to collaborate or discuss an internship? Send me a message.",
    contact_email: "Email",
    back_to_top: "Back to top",
  },

  nl: {
    live_link: "Live",
    brand: "Ahmet",
    nav_about: "Over mij",
    nav_skills: "Vaardigheden",
    nav_projects: "Projecten",
    nav_contact: "Contact",

    cta_github: "GitHub",
    cta_projects: "Bekijk projecten",
    cta_contact: "Contact",

    kicker: "Software Developer • MBO ICT",
    hero_title_line1: "Ik bouw",
    hero_title_line2: "full-stack",
    hero_title_line3: "projecten die er goed uitzien en snel werken.",
    hero_subtitle: "PHP/Laravel, JavaScript, SQL, Docker. Ik bouw echte projecten op GitHub voor mijn stage.",

    meta_open: "Beschikbaar voor stage",
    meta_location: "Nederland",

    stat_focus_label: "Focus",
    stat_focus_value: "Full-stack (Laravel + SQL)",
    stat_goal_label: "Doel",
    stat_goal_value: "Sterke GitHub + portfolio",

    mini_1_t: "Clean code",
    mini_1_d: "Duidelijke structuur",
    mini_2_t: "Testing",
    mini_2_d: "Basis + oefenen",
    mini_3_t: "Docker",
    mini_3_d: "Lokale dev setup",
    mini_4_t: "Git",
    mini_4_d: "Netjes committen",

    about_title: "Over mij",
    about_text: "Ik ben een 2e-jaars MBO ICT student. Ik bouw graag backend logica en verbind dit met een strakke UI.",
    about_callout_t: "Waar ik aan werk",
    about_li_1: "Laravel CRUD + auth",
    about_li_2: "REST API’s + SQL relaties",
    about_li_3: "Docker development",

    skills_title: "Vaardigheden",

    projects_title: "Projecten",
    projects_hint: "Elk project heeft code, screenshots en een duidelijke README.",
    badge_frontend: "FRONTEND",
    badge_soon: "BINNENKORT",
    p1_title: "Portfolio Lite",
    p1_desc: "Modern portfolio met EN/NL taalwissel en strakke layout.",
    p2_title: "Kanban Board",
    p2_desc: "Takenbord met drag & drop via localStorage.",
    p3_title: "Unity Mini Game",
    p3_desc: "Een kleine 2D game prototype (leerproject).",
    repo_link: "Repo",
    live_soon: "Live binnenkort",
    repo_soon: "Repo binnenkort",

    filter_all: "Alle",
    filter_frontend: "Frontend",
    filter_fullstack: "Full-Stack",
    filter_unity: "Unity",

    contact_title: "Contact",
    contact_text: "Wil je samenwerken of mijn stage bespreken? Stuur me een bericht.",
    contact_email: "E-mail",
    back_to_top: "Naar boven",
  }
};

function setActiveLangButton(lang){
  document.querySelectorAll(".lang__btn").forEach(btn => {
    btn.setAttribute("aria-pressed", String(btn.dataset.lang === lang));
  });
}

function applyTranslations(lang){
  const dict = translations[lang] || translations.en;
  document.documentElement.lang = lang;

  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.dataset.i18n;
    if (dict[key]) el.textContent = dict[key];
  });

  setActiveLangButton(lang);
  localStorage.setItem("lang", lang);
}

const saved = localStorage.getItem("lang") || "en";
applyTranslations(saved);

document.querySelectorAll(".lang__btn").forEach(btn => {
  btn.addEventListener("click", () => applyTranslations(btn.dataset.lang));
});