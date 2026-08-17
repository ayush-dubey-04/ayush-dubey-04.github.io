const lines = [
  { type: "prompt", text: "$ whoami" },
  { type: "out", text: "Ayush Dubey — MCA student, full-stack dev" },
  { type: "prompt", text: "$ cat focus.txt" },
  { type: "out", text: "React · FastAPI · MySQL · applied NLP" },
  { type: "prompt", text: "$ status" },
  { type: "out", text: "open to internships & collabs ▸" },
];

const body = document.getElementById("terminal-body");
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

function renderStatic() {
  body.innerHTML = lines
    .map(l => `<div class="${l.type === "prompt" ? "prompt" : "out"}">${l.text}</div>`)
    .join("");
}

async function typeLine(el, text, speed) {
  for (let i = 0; i <= text.length; i++) {
    el.textContent = text.slice(0, i);
    await new Promise(r => setTimeout(r, speed));
  }
}

async function runTyping() {
  for (const line of lines) {
    const div = document.createElement("div");
    div.className = line.type === "prompt" ? "prompt" : "out";
    body.appendChild(div);
    await typeLine(div, line.text, line.type === "prompt" ? 45 : 18);
    await new Promise(r => setTimeout(r, 220));
  }
}

if (reduceMotion) {
  renderStatic();
} else {
  runTyping();
}

// subtle reveal-on-scroll for sections
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = 1;
      entry.target.style.transform = "translateY(0)";
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll(".section, .project--featured, .project--small").forEach(el => {
  el.style.opacity = 0;
  el.style.transform = "translateY(18px)";
  el.style.transition = "opacity 0.6s ease, transform 0.6s ease";
  observer.observe(el);
});
