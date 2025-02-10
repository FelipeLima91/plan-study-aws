// Função para salvar o estado das checklists e anotações
function saveState() {
  // Salvar checkboxes
  document.querySelectorAll('input[type="checkbox"]').forEach(checkbox => {
      localStorage.setItem(checkbox.id, checkbox.checked);
  });

  // Salvar anotações
  document.querySelectorAll('textarea').forEach(textarea => {
      localStorage.setItem(textarea.id, textarea.value);
  });
}

// Função para carregar o estado das checklists e anotações
function loadState() {
  // Carregar checkboxes
  document.querySelectorAll('input[type="checkbox"]').forEach(checkbox => {
      const savedState = localStorage.getItem(checkbox.id);
      if (savedState !== null) {
          checkbox.checked = savedState === 'true';
      }
  });

  // Carregar anotações
  document.querySelectorAll('textarea').forEach(textarea => {
      const savedNotes = localStorage.getItem(textarea.id);
      if (savedNotes !== null) {
          textarea.value = savedNotes;
      }
  });
}

// Salvar o estado sempre que uma checkbox ou textarea for alterada
document.querySelectorAll('input[type="checkbox"], textarea').forEach(element => {
  element.addEventListener('change', saveState);
});

// Carregar o estado ao abrir a página
window.addEventListener('load', loadState);