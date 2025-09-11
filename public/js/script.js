// document.addEventListener("DOMContentLoaded", async () => {
//   const comentariosContainer = document.querySelector("#comentarios");

//   async function carregarComentarios() {
//     try {
//       const response = await fetch("http://localhost:3000/comentarios");
//       console.log(response);
//       if (!response.ok) throw new Error("Erro ao buscar comentários");

//       const comentarios = await response.json();
//       comentariosContainer.innerHTML = "";

//       const lista = document.createElement("div");
//       lista.classList.add("mt-10", "flex", "flex-col", "gap-3");

//       comentarios.forEach((c, index) => {
//         const card = document.createElement("article");
//         card.className =
//           `border-[#0033FF] border-2 rounded-lg p-4 lg:py-6 flex items-center gap-4 ` +
//           (index % 2 === 0 ? "ml-10 -mr-2" : "mr-10 -ml-2") +
//           " lg:w-[500px] w-4/5";

//         card.innerHTML = `
//           <img src="./images/UserComment.png" alt="Avatar usuário" class="size-12 lg:size-16">
//           <div>
//             <p class="text-sm">${c.comentarioEscrito}</p>
//             <label class="text-xs">${c.name}</label>
//           </div>
//         `;
//         lista.appendChild(card);
//       });

//       comentariosContainer.appendChild(lista);
//     } catch (error) {
//       console.error(error);
//       comentariosContainer.innerHTML =
//         "<p class='text-red-600'>Não foi possível carregar os comentários.</p>";
//     }
//   }

//   carregarComentarios();
//   window.carregarComentarios = carregarComentarios;
// });

// MENU MOBILE

const btnMenu = document.getElementById("btn-menu");
const btnClose = document.getElementById("btn-close");
const overlay = document.getElementById("overlay");
const mobileMenu = document.getElementById("mobile-menu");

btnMenu.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden"); // abre/fecha
  overlay.classList.toggle("hidden"); // abre/fecha
});

// Fecha o menu ao clicar em um link
btnClose.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden"); // abre/fecha
  overlay.classList.toggle("hidden"); // abre/fecha
});
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

// Auto-play (opcional)
setInterval(() => {
  index = (index + 1) % totalSlides;
  showSlide(index);
}, 5000); // muda a cada 5s

const btn_acessar = document.querySelector("#btn-acessar");
const modal = document.getElementById("modal-acessar");
const modalBox = document.getElementById("modal-box");
const modalClose = document.getElementById("modal-close");

// Abrir modal com animação
btn_acessar.addEventListener("click", () => {
  alert("click")
  modal.classList.remove("hidden");
  setTimeout(() => {
    modalBox.classList.remove("scale-95", "opacity-0");
    modalBox.classList.add("scale-100", "opacity-100");
  }, 10);
});

// Fechar modal
function fecharModal() {
  modalBox.classList.remove("scale-100", "opacity-100");
  modalBox.classList.add("scale-95", "opacity-0");
  setTimeout(() => {
    modal.classList.add("hidden");
  }, 300); // mesmo tempo da duração do transition
}

modalClose.addEventListener("click", fecharModal);
modal.addEventListener("click", (e) => {
  if (e.target === modal) fecharModal();
});
