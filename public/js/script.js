// ------------------------------
// MENU MOBILE
// ------------------------------
const btnMenu = document.getElementById("btn-menu");
const btnClose = document.getElementById("btn-close");
const overlay = document.getElementById("overlay");
const mobileMenu = document.getElementById("mobile-menu");

btnMenu.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
  overlay.classList.toggle("hidden");
});

btnClose.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
  overlay.classList.toggle("hidden");
});

// ------------------------------
// SLIDER DE CENAS
// ------------------------------
const slider = document.getElementById("slider");
const slides = slider.children;
const totalSlides = slides.length;
let index = 0;

function showSlide(i) {
  slider.style.transform = `translateX(${-i * 100}%)`;
}

document.getElementById("next").addEventListener("click", () => {
  index = (index + 1) % totalSlides;
  showSlide(index);
});

document.getElementById("prev").addEventListener("click", () => {
  index = (index - 1 + totalSlides) % totalSlides;
  showSlide(index);
});

// Auto-play
setInterval(() => {
  index = (index + 1) % totalSlides;
  showSlide(index);
}, 5000);

// ------------------------------
// MODAL "ACESSAR JOGO"
// ------------------------------
const btnAcessar = document.getElementById("btn-acessar");
const modal = document.getElementById("modal-acessar");
const modalBox = document.getElementById("modal-box");
const modalClose = document.getElementById("modal-close");

btnAcessar.addEventListener("click", () => {
  // Exibe modal de desenvolvimento
  modal.classList.remove("hidden");
  setTimeout(() => {
    modalBox.classList.remove("opacity-0", "scale-95");
  }, 10);
});

modalClose.addEventListener("click", () => {
  modalBox.classList.add("opacity-0", "scale-95");
  setTimeout(() => {
    modal.classList.add("hidden");
  }, 300);
});

// ------------------------------
// MODAL ACESSIBILIDADE
// ------------------------------
const modalAcessibilidade = document.getElementById("modalAcessibilidade");
const btnAcessibilidade = document.getElementById("btn-acessibilidade");
const btnCloseModalAcessibilidade = document.getElementById("close-modalAcessibilidade");

btnAcessibilidade.addEventListener("click", () => {
  modalAcessibilidade.classList.remove("hidden");
  setTimeout(() => {
    modalAcessibilidade.classList.add("flex");
  }, 10);
});

btnCloseModalAcessibilidade.addEventListener("click", () => {
  modalAcessibilidade.classList.remove("flex");
  setTimeout(() => {
    modalAcessibilidade.classList.add("hidden");
  }, 300);
});

// ------------------------------
// FILTROS DE DALTONISMO
// ------------------------------
document.getElementById("btn-normal").addEventListener("click", () => {
  document.body.classList.remove("tritanopia", "protanopia", "deuteranopia");
});

document.getElementById("btn-tritanopia").addEventListener("click", () => {
  document.body.classList.add("tritanopia");
  document.body.classList.remove("protanopia", "deuteranopia");
});

document.getElementById("btn-protanopia").addEventListener("click", () => {
  document.body.classList.add("protanopia");
  document.body.classList.remove("tritanopia", "deuteranopia");
});

document.getElementById("btn-deuteranopia").addEventListener("click", () => {
  document.body.classList.add("deuteranopia");
  document.body.classList.remove("tritanopia", "protanopia");
});

// ------------------------------
// BOTÃO ACESSAR JOGO (link externo)
// ------------------------------
btnAcessar.addEventListener("click", () => {
  window.open("https://gamifyhealth.itch.io/educatea", "_blank");
});
