function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");

  const isOpen = menu.classList.contains("open");
  
  // If menu is already open, close it
  if (isOpen) {
    menu.classList.remove("open");
    icon.classList.remove("open");
  } else {
    // Open the menu
    menu.classList.add("open");
    icon.classList.add("open");

    // Listen for clicks outside to close
    document.addEventListener("click", function handleClickOutside(e) {
      if (!menu.contains(e.target) && !icon.contains(e.target)) {
        menu.classList.remove("open");
        icon.classList.remove("open");
        document.removeEventListener("click", handleClickOutside);
      }
    });
  }
}

// Dark / light mode

const btn = document.getElementById("modeToggle");
const btn2 = document.getElementById("modeToggle2");
const themeIcons = document.querySelectorAll(".icon");
const currentTheme = localStorage.getItem("theme");

if (currentTheme === "dark") {
  setDarkMode();
}

btn.addEventListener("click", function () {
  setTheme();
});

btn2.addEventListener("click", function () {
  setTheme();
});

function setTheme() {
  let currentTheme = document.body.getAttribute("theme");

  if (currentTheme === "dark") {
    setLightMode();
  } else {
    setDarkMode();
  }
}

function setDarkMode() {
  document.body.setAttribute("theme", "dark");
  localStorage.setItem("theme", "dark");

  themeIcons.forEach((icon) => {
    if (icon.getAttribute("src-dark")) {
      icon.src = icon.getAttribute("src-dark");
    }
  });
}

function setLightMode() {
  document.body.removeAttribute("theme");
  localStorage.setItem("theme", "light");

  themeIcons.forEach((icon) => {
    if (icon.getAttribute("src-light")) {
      icon.src = icon.getAttribute("src-light");
    }
  });
}

/* 
 =======================================
   SIMPLE TRANSLATION FEATURE
   Minimal dictionary + usage
 =======================================
*/
const translations = {
  en: {
    "logo.text": "Makar Charviakou",
    "nav.about": "About",
    "nav.experience": "Experience",
    "nav.projects": "Projects",
    "nav.contact": "Contact",

    "profile.greeting": "Greetings, I’m",
    "profile.name": "Makar Charviakou",
    "profile.role": "Data Analyst",
    "profile.download": "Download CV",
    "profile.contactInfo": "Contact Info",

    "about.heading": "Get To Know More",
    "about.title": "About Me",
    "about.experienceText": "2+ years <br />As a data analyst",
    "about.educationTitle": "Education",
    "about.educationText": "B.Sc. Pursuing Bachelors Degree<br />In the best computer academy in Poland",
    "about.mainText": "Hi there! I’m Makar, a data analyst who turns data into insights ...",

    "experience.heading": "Explore My",
    "experience.title": "Experience",
    "experience.intro": "I work with various tools for data analysis, big data, machine learning ...",
    "experience.dataAnalysisStack": "Data Analysis Stack",
    "experience.dataScienceStack": "Data Science Stack",
    "experience.languages": "Languages I Speak",

    "projects.heading": "Browse My Recent",
    "projects.title": "Projects",
    "projects.intro": "This is a brief introduction to my experience in data analysis ...",
    "projects.prj1.title": "IT Jobs Aggregator",
    "projects.prj1.desc": "Created bots which scraped job-posting data and then analysed it:",
    "projects.prj2.title": "Analytics Project",
    "projects.prj2.desc": "Analysed Data And Found Very Useful Information:",
    "projects.prj3.title": "Database Architectures",
    "projects.prj3.desc": "Built database for business in all popular :",

    "contact.title": "Contact Me",
    "contact.intro": "This is a brief introduction to my experience in data analysis and how."

  },
  ru: {
    "logo.text": "Макар Червяков",
    "nav.about": "Обо мне",
    "nav.experience": "Опыт",
    "nav.projects": "Проекты",
    "nav.contact": "Контакты",

    "profile.greeting": "Здравствуйте, я",
    "profile.name": "Макар Червяков",
    "profile.role": "Аналитик данных",
    "profile.download": "Скачать резюме",
    "profile.contactInfo": "Контактная информация",

    "about.heading": "Узнать больше",
    "about.title": "Обо мне",
    "about.experienceText": "2+ года <br />В качестве дата-аналитика",
    "about.educationTitle": "Образование",
    "about.educationText": "Бакалавр (в процессе). Обучаюсь в лучшем компьютерном ВУЗе Польши",
    "about.mainText": "Привет! Я Макар, аналитик данных, который превращает данные в инсайты ...",

    // Experience Section
    "experience.heading": "Исследуйте мой",
    "experience.title": "Опыт",
    "experience.intro": "Я работаю с различными инструментами для анализа данных, Big Data, машинного обучения ...",
    "experience.dataAnalysisStack": "Инструменты для анализа данных",
    "experience.dataScienceStack": "Инструменты для Data Science",
    "experience.languages": "Языки, которыми я владею",

    // Projects Section
    "projects.heading": "Посмотрите мои последние",
    "projects.title": "Проекты",
    "projects.intro": "Это краткое описание моего опыта в области анализа данных ...",
    "projects.prj1.title": "IT Jobs Aggregator",
    "projects.prj1.desc": "Создал ботов, которые собирали данные о вакансиях и анализировали их:",
    "projects.prj2.title": "Проект Analytics",
    "projects.prj2.desc": "Проанализировал данные и нашел очень полезную информацию:",
    "projects.prj3.title": "Архитектуры баз данных",
    "projects.prj3.desc": "Разработал базу данных для бизнеса на всех популярных платформах:",

    // Contact Section
    "contact.title": "Связаться со мной",
    "contact.intro": "Это краткое введение в мой опыт работы с данными ..."
  },
  de: {
    "logo.text": "Makar Charviakou",
    "nav.about": "Über mich",
    "nav.experience": "Erfahrung",
    "nav.projects": "Projekte",
    "nav.contact": "Kontakt",

    "profile.greeting": "Hallo, ich bin",
    "profile.name": "Makar Charviakou",
    "profile.role": "Datenanalyst",
    "profile.download": "Lebenslauf herunterladen",
    "profile.contactInfo": "Kontakt Info",

    "about.heading": "Erfahren Sie mehr",
    "about.title": "Über mich",
    "about.experienceText": "2+ Jahre <br />Als Datenanalyst",
    "about.educationTitle": "Ausbildung",
    "about.educationText": "B.Sc. (laufend). Studium an der besten Informatikhochschule in Polen",
    "about.mainText": "Hallo! Ich bin Makar, ein Datenanalyst, der Daten in Erkenntnisse verwandelt ...",

    // Experience Section
    "experience.heading": "Entdecken Sie meine",
    "experience.title": "Erfahrung",
    "experience.intro": "Ich arbeite mit verschiedenen Tools für Datenanalyse, Big Data, Machine Learning ...",
    "experience.dataAnalysisStack": "Datenanalyse-Stack",
    "experience.dataScienceStack": "Data-Science-Stack",
    "experience.languages": "Sprachen, die ich spreche",

    // Projects Section
    "projects.heading": "Sehen Sie meine aktuellen",
    "projects.title": "Projekte",
    "projects.intro": "Dies ist eine kurze Einführung in meine Erfahrung in der Datenanalyse ...",
    "projects.prj1.title": "IT-Stellen-Aggregator",
    "projects.prj1.desc": "Erstellte Bots, die Stellenanzeigen gesammelt und anschließend analysiert haben:",
    "projects.prj2.title": "Analytics-Projekt",
    "projects.prj2.desc": "Daten analysiert und sehr nützliche Informationen gefunden:",
    "projects.prj3.title": "Datenbank-Architekturen",
    "projects.prj3.desc": "Erstellte Datenbanken für Unternehmen auf allen gängigen Plattformen:",

    // Contact Section
    "contact.title": "Kontakt",
    "contact.intro": "Dies ist eine kurze Einführung in meine Erfahrung in der Datenanalyse und wie ..."
  },
  pl: {
    "logo.text": "Makar Charviakou",
    "nav.about": "O mnie",
    "nav.experience": "Doświadczenie",
    "nav.projects": "Projekty",
    "nav.contact": "Kontakt",

    "profile.greeting": "Cześć, jestem",
    "profile.name": "Makar Charviakou",
    "profile.role": "Analityk Danych",
    "profile.download": "Pobierz CV",
    "profile.contactInfo": "Dane Kontaktowe",

    "about.heading": "Dowiedz się więcej",
    "about.title": "O mnie",
    "about.experienceText": "Ponad 2 lata <br />jako analityk danych",
    "about.educationTitle": "Edukacja",
    "about.educationText": "Licencjat (w trakcie). Studiuję w najlepszej akademii komputerowej w Polsce",
    "about.mainText": "Cześć! Jestem Makar, analityk danych, który przekształca dane w wnioski ...",

    // Experience Section
    "experience.heading": "Poznaj moje",
    "experience.title": "Doświadczenie",
    "experience.intro": "Pracuję z różnymi narzędziami do analizy danych, big data, uczenia maszynowego ...",
    "experience.dataAnalysisStack": "Stos narzędzi analizy danych",
    "experience.dataScienceStack": "Stos Data Science",
    "experience.languages": "Języki, którymi mówię",

    // Projects Section
    "projects.heading": "Przejrzyj moje najnowsze",
    "projects.title": "Projekty",
    "projects.intro": "To krótkie wprowadzenie do mojego doświadczenia w analizie danych ...",
    "projects.prj1.title": "IT Jobs Aggregator",
    "projects.prj1.desc": "Stworzyłem boty zbierające oferty pracy, a następnie je analizujące:",
    "projects.prj2.title": "Projekt Analytics",
    "projects.prj2.desc": "Przeanalizowałem dane i znalazłem bardzo przydatne informacje:",
    "projects.prj3.title": "Architektury baz danych",
    "projects.prj3.desc": "Zbudowałem bazy danych dla firm we wszystkich popularnych rozwiązaniach:",

    // Contact Section
    "contact.title": "Skontaktuj się ze mną",
    "contact.intro": "To krótkie wprowadzenie do mojego doświadczenia w analizie danych i sposobów ..."
  }
};

// On DOM load, we set up the language switchers
document.addEventListener("DOMContentLoaded", () => {
  const languageSwitcher = document.getElementById("languageSwitcher");
  const languageSwitcherMobile = document.getElementById("languageSwitcherMobile");
  
  // Use stored language or default to English
  const storedLang = localStorage.getItem("siteLang") || "en";
  languageSwitcher.value = storedLang;
  languageSwitcherMobile.value = storedLang;
  applyTranslations(storedLang);

  // Desktop language switch
  languageSwitcher.addEventListener("change", () => {
    const newLang = languageSwitcher.value;
    localStorage.setItem("siteLang", newLang);
    languageSwitcherMobile.value = newLang; // sync with mobile
    applyTranslations(newLang);
  });

  // Mobile language switch
  languageSwitcherMobile.addEventListener("change", () => {
    const newLang = languageSwitcherMobile.value;
    localStorage.setItem("siteLang", newLang);
    languageSwitcher.value = newLang; // sync with desktop
    applyTranslations(newLang);
  });
});

/* Apply translations to elements that have data-i18n="..." */
function applyTranslations(lang) {
  const elements = document.querySelectorAll("[data-i18n]");
  elements.forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (translations[lang] && translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });
}
