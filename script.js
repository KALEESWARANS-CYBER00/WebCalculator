// @author:kaleeswaran.s

function appendValue(value) {
  document.getElementById('display').value += value;
}

function clearDisplay() {
  document.getElementById('display').value = '';
}

function calculate() {
  try {
    const result = eval(document.getElementById('display').value);
    document.getElementById('display').value = result;
  } catch (e) {
    document.getElementById('display').value = 'Error';
  }
}

document.addEventListener('keydown', function (event) {
  const key = event.key;
  const display = document.getElementById('display');

 
  if ((key >= '0' && key <= '9') || ['+', '-', '*', '/', '.', '%', '(', ')'].includes(key)) {
    appendValue(key);
  }

  else if (key === 'Enter') {
    event.preventDefault(); 
    calculate();
  }
  
  else if (key === 'Backspace') {
    display.value = display.value.slice(0, -1);
  }
 
  else if (key === 'Escape') {
    clearDisplay();
  }
});
function toggleTheme() {
  document.body.classList.toggle("light-theme");
}
function updateGreeting() {
  const hour = new Date().getHours();
  let greeting = "Hello";

  if (hour < 12) greeting = "Good Morning";
  else if (hour < 18) greeting = "Good Afternoon";
  else greeting = "Good Evening";

  document.getElementById("greeting").textContent = `${greeting}, Kaleeswaran! ⏰ ${new Date().toLocaleTimeString()}`;
}
setInterval(updateGreeting, 1000);
const canvas = document.getElementById("trailCanvas");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];

window.addEventListener("mousemove", (e) => {
  for (let i = 0; i < 5; i++) {
    particles.push({
      x: e.clientX,
      y: e.clientY,
      radius: Math.random() * 3 + 1,
      alpha: 1,
      dx: (Math.random() - 0.5) * 3,
      dy: (Math.random() - 0.5) * 3,
    });
  }
});

function animateParticles() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  particles.forEach((p, i) => {
    p.x += p.dx;
    p.y += p.dy;
    p.alpha -= 0.02;

    ctx.beginPath();
    ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(0, 255, 150, ${p.alpha})`; 
    ctx.fill();

    if (p.alpha <= 0) particles.splice(i, 1);
  });
  requestAnimationFrame(animateParticles);
}

animateParticles();

window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});
document.body.addEventListener("click", (e) => {
  const ripple = document.createElement("div");
  ripple.classList.add("ripple");
  

  const size = Math.max(window.innerWidth, window.innerHeight);
  ripple.style.width = ripple.style.height = `${size}px`;
  ripple.style.left = `${e.clientX - size / 2}px`;
  ripple.style.top = `${e.clientY - size / 2}px`;

  document.body.appendChild(ripple);

  setTimeout(() => {
    ripple.remove();
  }, 1000);
});
