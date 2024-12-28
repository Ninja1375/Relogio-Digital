// Atualiza o relógio e a data
function updateClock() {
  const now = new Date();

  // Hora
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');
  document.getElementById('clock').textContent = `${hours}:${minutes}:${seconds}`;

  // Data
  const options = { day: '2-digit', month: 'long', year: 'numeric' };
  const formattedDate = now.toLocaleDateString('pt-BR', options);
  document.getElementById('date').textContent = formattedDate;
}

// Gera cores aleatórias
function getRandomColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}

// Muda o plano de fundo
function changeBackground() {
  const color1 = getRandomColor();
  const color2 = getRandomColor();
  document.body.style.background = `linear-gradient(135deg, ${color1}, ${color2})`;
}

// Atualiza o relógio a cada segundo
setInterval(updateClock, 1000);

// Atualiza o plano de fundo a cada 5 segundos
setInterval(changeBackground, 3000);

// Inicializa
updateClock();
changeBackground();
