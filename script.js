const t = {
  pt: {
    title: "Data Scientist & Business Intelligence Analyst",
    summary: "Cientista de Dados focado em BI, Machine Learning, IA e automação para geração de valor estratégico.",
    aboutTitle: "Sobre mim",
    aboutText: "Atuo transformando dados em decisões através de dashboards, modelos analíticos e soluções de IA, com forte integração entre tecnologia e negócio.",
    expTitle: "Experiência Profissional",

    fast1: "Desenvolvimento de dashboards em Power BI utilizando DAX avançado.",
    fast2: "Análise de dados de vendas com Machine Learning (Linear Regression, K-Means).",
    fast3: "Aplicação de análise de reviews em áudio com transcrição e classificação automática.",
    fast4: "Web scraping de dados do varejo utilizando Selenium.",

    janssen1: "Criação de dashboards no Qlik Sense com foco estratégico.",
    janssen2: "Tradução de necessidades de negócio em visualizações analíticas.",

    bombril1: "Recrutado por ex-gestor devido a alto desempenho anterior.",
    bombril2: "Automação SAP R/3 em larga escala.",
    bombril3: "Redução de ciclos de atualização de relatórios de semanas para horas.",

    coke1: "Automação SAP R/3 com VBA.",
    coke2: "Modelos NLP em Python para classificação de texto.",
    coke3: "Pipelines de dados para Power BI.",

    dupont1: "Análise e manutenção de dados SAP R/3.",
    dupont2: "Colaboração com equipes internacionais.",
    dupont3: "Automação SAP + VBA acelerando processos globais em até 5x.",

    hessel1: "Análise e manutenção de dados SAP R/3.",

    umbria1: "Entrada e manutenção de dados em ERP.",
    umbria2: "Automações simples em VBA.",

    skillsTitle: "Competências Técnicas",
    coursesTitle: "Cursos & Especializações",

    courseDS: "Python for Data Science & Machine Learning: NumPy, Pandas, Scikit-Learn, PyTorch, TensorFlow, NLP, Deep Learning.",
    courseCV: "Python for Computer Vision: OpenCV, CNNs, YOLO, Object Detection.",
    courseDJ: "Django Master: ORM, REST, PostgreSQL, Docker, AWS.",

    eduTitle: "Formação & Certificações",
    contactTitle: "Contato"
  },

  en: {
    title: "Data Scientist & Business Intelligence Analyst",
    summary: "Data Scientist focused on BI, Machine Learning, AI and automation to drive strategic value.",
    aboutTitle: "About Me",
    aboutText: "I transform data into decisions through dashboards, analytical models and AI-driven solutions, bridging technology and business.",
    expTitle: "Professional Experience",

    fast1: "Developed Power BI dashboards using advanced DAX.",
    fast2: "Sales data analysis using Machine Learning (Linear Regression, K-Means).",
    fast3: "Audio review analysis app with automated transcription and classification.",
    fast4: "Retail market web scraping using Selenium.",

    janssen1: "Designed Qlik Sense dashboards focused on strategic insights.",
    janssen2: "Translated business needs into analytical visualizations.",

    bombril1: "Recruited by former manager due to strong prior performance.",
    bombril2: "Large-scale SAP R/3 automation.",
    bombril3: "Reduced reporting cycles from weekly to hourly.",

    coke1: "SAP R/3 automation using VBA.",
    coke2: "Trained NLP models in Python for text classification.",
    coke3: "Data pipelines for Power BI dashboards.",

    dupont1: "SAP R/3 data analysis and maintenance.",
    dupont2: "Collaboration with international teams.",
    dupont3: "SAP + VBA automation accelerating global processes by 5x.",

    hessel1: "SAP R/3 data analysis and maintenance.",

    umbria1: "ERP data entry and maintenance.",
    umbria2: "Basic VBA automations.",

    skillsTitle: "Technical Skills",
    coursesTitle: "Courses & Specializations",

    courseDS: "Python for Data Science & Machine Learning: NumPy, Pandas, Scikit-Learn, PyTorch, TensorFlow, NLP, Deep Learning.",
    courseCV: "Python for Computer Vision: OpenCV, CNNs, YOLO, Object Detection.",
    courseDJ: "Django Master: ORM, REST, PostgreSQL, Docker, AWS.",

    eduTitle: "Education & Certifications",
    contactTitle: "Contact"
  }
};

// Apply language
function setLang(lang) {
  document.querySelectorAll("[data-i18n]").forEach(el => {
    el.textContent = t[lang][el.dataset.i18n];
  });
}

document.querySelectorAll(".lang-btn").forEach(btn => {
  btn.addEventListener("click", () => setLang(btn.dataset.lang));
});

setLang("pt");

// Scroll animations
const observer = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) e.target.classList.add("active");
  });
}, { threshold: 0.15 });

document.querySelectorAll(".reveal").forEach(el => observer.observe(el));
