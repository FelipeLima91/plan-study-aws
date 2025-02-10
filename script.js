// Função para salvar a data da prova no LocalStorage
function saveExamDate() {
  const examDateInput = document.getElementById('exam-date');
  const examDate = examDateInput.value;
  if (examDate) {
      localStorage.setItem('examDate', examDate);
      updateCountdown();
  } else {
      alert('Por favor, insira uma data válida.');
  }
}

// Função para calcular a contagem regressiva
function updateCountdown() {
  const examDate = localStorage.getItem('examDate');
  if (examDate) {
      const now = new Date();
      const targetDate = new Date(examDate);
      const timeDiff = targetDate - now;

      if (timeDiff > 0) {
          const daysLeft = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
          document.getElementById('countdown-text').innerText = `Faltam ${daysLeft} dias para a prova!`;
      } else {
          document.getElementById('countdown-text').innerText = 'A prova já ocorreu!';
      }
  } else {
      document.getElementById('countdown-text').innerText = 'Insira a data da prova acima.';
  }
}

// Carregar a data da prova ao abrir a página
window.addEventListener('load', () => {
  const savedExamDate = localStorage.getItem('examDate');
  if (savedExamDate) {
      document.getElementById('exam-date').value = savedExamDate;
  }
  updateCountdown();
});

// Atualizar a contagem regressiva diariamente
setInterval(updateCountdown, 24 * 60 * 60 * 1000);