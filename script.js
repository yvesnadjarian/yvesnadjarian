// TRANSLATIONS
const translations = {
  pt: {
    title: "Data Scientist & Business Intelligence Analyst",
    heroText: "Transformando dados em decisões estratégicas por meio de BI, Machine Learning e automação.",
    aboutTitle: "Sobre mim",
    aboutText: "Cientista de Dados com forte experiência em Business Intelligence, automação e soluções de IA.",
    expTitle: "Experiência",
    expFast: "Power BI avançado com DAX, Machine Learning, web scraping e aplicações de IA.",
    expJanssen: "Dashboards Qlik Sense alinhados a decisões estratégicas.",
    expBombril: "Automação SAP em larga escala.",
    expCoke: "Automação SAP e modelos NLP em Python.",
    skillsTitle: "Competências",
    eduTitle: "Formação",
    contactTitle: "Contato"
  },
  en: {
    title: "Data Scientist & Business Intelligence Analyst",
    heroText: "Turning data into strategic decisions through BI, Machine Learning and automation.",
    aboutTitle: "About Me",
    aboutText: "Data Scientist with strong experience in Business Intelligence, automation and AI solutions.",
    expTitle: "Experience",
    expFast: "Advanced Power BI with DAX, Machine Learning, web scraping and AI applications.",
    expJanssen: "Qlik Sense dashboards focused on strategic decisions.",
    expBombril: "Large-scale SAP automation.",
    expCoke: "SAP automation and NLP models in Python.",
    skillsTitle: "Skills",
    eduTitle: "Education",
    contactTitle: "Contact"
  }
};

document.querySelectorAll(".lang-btn").forEach(btn => {
  btn.onclick = () => {
    const lang = btn.dataset.lang;
    document.querySelectorAll("[data-i18n]").forEach(el => {
      el.textContent = translations[lang][el.dataset.i18n];
    });
  };
});

// SCROLL ANIMATION
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("active");
    }
  });
}, { threshold: 0.15 });

document.querySelectorAll(".reveal").forEach(el => observer.observe(el));
