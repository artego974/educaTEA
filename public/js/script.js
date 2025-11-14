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
let slideInterval;

function showSlide(i) {
  slider.style.transform = `translateX(${-i * 100}%)`;
}

function iniciarSlider() {
  slideInterval = setInterval(() => {
    index = (index + 1) % totalSlides;
    showSlide(index);
  }, 5000);
}

function pausarSlider() {
  clearInterval(slideInterval);
}

// Inicializa autoplay do slider
iniciarSlider();

document.getElementById("next").addEventListener("click", () => {
  index = (index + 1) % totalSlides;
  showSlide(index);
});

document.getElementById("prev").addEventListener("click", () => {
  index = (index - 1 + totalSlides) % totalSlides;
  showSlide(index);
});

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
// BOTÃO ACESSAR JOGO (link externo)
// ------------------------------
btnAcessar.addEventListener("click", () => {
  window.open("https://gamifyhealth.itch.io/educatea", "_blank");
});

// ------------------------------
// CONTROLE DO YOUTUBE VIA API
// ------------------------------
let player;

function onYouTubeIframeAPIReady() {
  player = new YT.Player("video-youtube"); // ID do seu iframe
}

// ------------------------------
// BOTÃO PAUSAR (slider + vídeo)
// ------------------------------
const btnPausar = document.querySelector("#btn-pausar");
let pausado = false;

btnPausar.addEventListener("click", () => {
  pausado = !pausado;

  if (pausado) {
    pausarSlider();

    if (player && player.pauseVideo) {
      player.pauseVideo();
    }
  } else {
    iniciarSlider();

    if (player && player.playVideo) {
      player.playVideo();
    }
  }
});
