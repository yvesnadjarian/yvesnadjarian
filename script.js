const dict = {
  pt: {
    title: "Data Scientist & Business Intelligence Analyst",
    summary: "Cientista de Dados focado em BI, Machine Learning, IA e automação.",
    expTitle: "Experiência Profissional",

    fast1: "Desenvolvimento de dashboards em Power BI utilizando DAX avançado.",
    fast2: "Análise de dados de vendas com Machine Learning (Linear Regression, K-Means).",
    fast3: "Aplicação de análise de reviews em áudio com transcrição e classificação automática.",
    fast4: "Web scraping de dados do varejo utilizando Selenium.",

    janssen1: "Criação de dashboards no Qlik Sense com foco estratégico.",
    janssen2: "Tradução de necessidades do negócio em visualizações analíticas.",

    bombril1: "Recrutado por ex-gestor devido a alto desempenho anterior.",
    bombril2: "Automação SAP R/3 em larga escala.",
    bombril3: "Redução do ciclo de atualização de relatórios de semanas para horas.",

    coke1: "Automação SAP R/3 utilizando VBA.",
    coke2: "Modelos NLP em Python para classificação de texto.",
    coke3: "Pipelines de dados para Power BI.",

    dupont1: "Análise e manutenção de dados SAP R/3.",
    dupont2: "Colaboração com equipes internacionais.",
    dupont3: "Automação SAP + VBA acelerando processos globais em até 5x."
  },

  en: {
    title: "Data Scientist & Business Intelligence Analyst",
    summary: "Data Scientist focused on BI, Machine Learning, AI and automation.",
    expTitle: "Professional Experience",

    fast1: "Developed Power BI dashboards using advanced DAX.",
    fast2: "Sales data analysis using Machine Learning (Linear Regression, K-Means).",
    fast3: "Audio review analysis with automated transcription and classification.",
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

    // REGRA DE OURO: só sobrescreve se existir
    if (dict[lang] && dict[lang][key]) {
      el.textContent = dict[lang][key];
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  setLang("pt");

  document.querySelectorAll(".lang-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      setLang(btn.dataset.lang);
    });
  });

  // Scroll animations
  const observer = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add("active");
      }
    });
  }, { threshold: 0.15 });

  document.querySelectorAll(".reveal").forEach(el => observer.observe(el));
});
