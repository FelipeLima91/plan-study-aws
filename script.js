// Função para salvar a data da prova no LocalStorage
function saveExamDate() {
  const examDateInput = document.getElementById("exam-date");
  const examDate = examDateInput.value;
  if (examDate) {
    localStorage.setItem("examDate", examDate);
    updateCountdown();
  } else {
    alert("Por favor, insira uma data válida.");
  }
}

// Função para calcular a contagem regressiva
function updateCountdown() {
  const examDate = localStorage.getItem("examDate");
  if (examDate) {
    const now = new Date();
    const targetDate = new Date(examDate);
    const timeDiff = targetDate - now;

    if (timeDiff > 0) {
      const daysLeft = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
      document.getElementById(
        "countdown-text"
      ).innerText = `Faltam ${daysLeft} dias para a prova!`;
    } else {
      document.getElementById("countdown-text").innerText =
        "A prova já ocorreu!";
    }
  } else {
    document.getElementById("countdown-text").innerText =
      "Insira a data da prova abaixo.";
  }
}

// Função para salvar o estado das checklists e anotações
function saveState() {
  // Salvar checkboxes
  document.querySelectorAll('input[type="checkbox"]').forEach((checkbox) => {
    localStorage.setItem(checkbox.id, checkbox.checked);
  });

  // Salvar anotações
  document.querySelectorAll("textarea").forEach((textarea) => {
    localStorage.setItem(textarea.id, textarea.value);
  });
}

// Função para carregar o estado das checklists e anotações
function loadState() {
  // Carregar checkboxes
  document.querySelectorAll('input[type="checkbox"]').forEach((checkbox) => {
    const savedState = localStorage.getItem(checkbox.id);
    if (savedState !== null) {
      checkbox.checked = savedState === "true";
    }
  });

  // Carregar anotações
  document.querySelectorAll("textarea").forEach((textarea) => {
    const savedNotes = localStorage.getItem(textarea.id);
    if (savedNotes !== null) {
      textarea.value = savedNotes;
    }
  });
}

// Salvar o estado sempre que uma checkbox ou textarea for alterada
document.querySelectorAll('input[type="checkbox"]').forEach((checkbox) => {
  checkbox.addEventListener("change", saveState);
});

document.querySelectorAll("textarea").forEach((textarea) => {
  textarea.addEventListener("input", saveState); // Usar 'input' para capturar digitação em tempo real
});

// Carregar o estado ao abrir a página
window.addEventListener("load", () => {
  // Carregar a data da prova
  const savedExamDate = localStorage.getItem("examDate");
  if (savedExamDate) {
    document.getElementById("exam-date").value = savedExamDate;
  }
  updateCountdown();

  // Carregar checklists e anotações
  loadState();
});

// Atualizar a contagem regressiva diariamente
setInterval(updateCountdown, 24 * 60 * 60 * 1000);

// Função para abrir/fechar acordeões
document.querySelectorAll(".accordion-button").forEach((button) => {
  button.addEventListener("click", () => {
    const content = button.nextElementSibling;
    content.classList.toggle("active");
  });
});

// Função para alternar o tema
function toggleTheme() {
  const body = document.body;
  const themeToggle = document.getElementById("theme-toggle");
  body.classList.toggle("dark-mode");
  const isDarkMode = body.classList.contains("dark-mode");
  localStorage.setItem("theme", isDarkMode ? "dark" : "light");
  themeToggle.textContent = isDarkMode ? "🌜" : "🌞";
}

// Carregar o tema ao abrir a página
function loadTheme() {
  const theme = localStorage.getItem("theme");
  const themeToggle = document.getElementById("theme-toggle");
  if (theme === "dark") {
    document.body.classList.add("dark-mode");
    themeToggle.textContent = "🌜";
  } else {
    themeToggle.textContent = "🌞";
  }
}

document.addEventListener("DOMContentLoaded", loadTheme);
