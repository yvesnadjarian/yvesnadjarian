const dict = {
  en: {
    title: "Data Scientist & Business Intelligence Analyst",
    summary: "Data Scientist focused on BI, Machine Learning, AI and automation.",
    expTitle: "Professional Experience",

    fast1: "Developed Power BI dashboards using advanced DAX.",
    fast2: "Sales data analysis using Machine Learning (Linear Regression, K-Means).",
    fast3: "Audio review analysis with transcription and automated classification.",
    fast4: "Retail market web scraping using Selenium.",

    janssen1: "Designed Qlik Sense dashboards with strategic focus.",
    janssen2: "Translated business needs into analytical insights.",

    bombril1: "Recruited by former manager due to strong prior performance.",
    bombril2: "Large-scale SAP R/3 automation.",
    bombril3: "Reduced reporting cycles from weekly to hourly.",

    coke1: "SAP R/3 automation using VBA.",
    coke2: "Python NLP models for text classification.",
    coke3: "Data pipelines for Power BI.",

    dupont1: "SAP R/3 data analysis and maintenance.",
    dupont2: "Collaboration with international teams.",
    dupont3: "SAP + VBA automation accelerating processes by 5x."
  }
};

function setLang(lang) {
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.dataset.i18n;
    if (dict[lang] && dict[lang][key]) {
      el.textContent = dict[lang][key];
    }
  });
}

document.querySelectorAll(".lang-btn").forEach(btn => {
  btn.onclick = () => setLang(btn.dataset.lang);
});

setLang("pt");

const observer = new IntersectionObserver(entries => {
  entries.forEach(e => e.isIntersecting && e.target.classList.add("active"));
}, { threshold: 0.15 });

document.querySelectorAll(".reveal").forEach(el => observer.observe(el));
