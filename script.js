const translations = {
  pt: {
    title: "Data Scientist & Business Intelligence Analyst",
    heroText: "Transformando dados em decisões estratégicas por meio de BI, Machine Learning e automação.",
    aboutTitle: "Sobre mim",
    aboutText: "Cientista de Dados com forte experiência em Business Intelligence, automação e soluções de IA.",
    expTitle: "Experiência",
    expFast: "Power BI avançado com DAX, análise de vendas com Machine Learning, web scraping e app de análise de áudio com IA.",
    expJanssen: "Criação de dashboards Qlik Sense focados em necessidades estratégicas do negócio.",
    expBombril: "Automação SAP em larga escala, reduzindo ciclos de atualização de relatórios.",
    expCoke: "Automação SAP com VBA e modelos NLP em Python.",
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
    expFast: "Advanced Power BI with DAX, sales analysis using Machine Learning, web scraping and AI-powered audio analysis app.",
    expJanssen: "Development of Qlik Sense dashboards focused on strategic business needs.",
    expBombril: "Large-scale SAP automation reducing reporting cycles dramatically.",
    expCoke: "SAP automation with VBA and NLP models in Python.",
    skillsTitle: "Skills",
    eduTitle: "Education",
    contactTitle: "Contact"
  }
};

document.querySelectorAll(".lang-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    const lang = btn.dataset.lang;
    document.querySelectorAll("[data-i18n]").forEach(el => {
      el.textContent = translations[lang][el.dataset.i18n];
    });
  });
});
