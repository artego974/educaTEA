
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

const pageContent = document.querySelector("#pageContent")

document.getElementById("btn-normal").addEventListener("click", () => {
  pageContent.classList.remove("tritanopia", "protanopia", "deuteranopia");
});

document.getElementById("btn-tritanopia").addEventListener("click", () => {
  pageContent.classList.add("tritanopia");
  pageContent.classList.remove("protanopia", "deuteranopia");
});

document.getElementById("btn-protanopia").addEventListener("click", () => {
  pageContent.classList.add("protanopia");
  pageContent.classList.remove("tritanopia", "deuteranopia");
});

document.getElementById("btn-deuteranopia").addEventListener("click", () => {
  pageContent.classList.add("deuteranopia");
  pageContent.classList.remove("tritanopia", "protanopia");
});

// ------------------------------
// BOTÃO AUMENTAR CURSOR
// ------------------------------

const btnCursor = document.querySelector("#btn-cursor");

let cursorAtivo = false; // estado do cursor

btnCursor.addEventListener("click", () => {
  const clickableElements = document.querySelectorAll("a, button, input, textarea");

  if (!cursorAtivo) {

    document.body.style.cursor = "url('./icones-acessibilidade/cursor/Cursor.png'), auto";
    clickableElements.forEach(el => {
      el.style.cursor = "url('./icones-acessibilidade/cursor/CursorLinks.png'), pointer";
    });
  } else {

    document.body.style.cursor = "auto";
    clickableElements.forEach(el => {
      el.style.cursor = "pointer"; 
    });
  }

  cursorAtivo = !cursorAtivo; 
});



// ------------------------------
// BOTÃO MASCARA DE LEITURA
// ------------------------------

const btnMascara = document.querySelector("#btn-mascara");
const iframes = document.querySelectorAll("iframe");

btnMascara.addEventListener("click", () => {
    
  let mascara = document.getElementById("maskOverlay");

  if (mascara) {
    mascara.remove();
    document.removeEventListener("mousemove", moveMascara);

    iframes.forEach(iframe => iframe.style.pointerEvents = "auto");
    return;
  }

  iframes.forEach(iframe => iframe.style.pointerEvents = "none");

  mascara = document.createElement("div");
  mascara.id = "maskOverlay";
  Object.assign(mascara.style, {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh",
    backgroundColor: "rgba(0,0,0,0.7)",
    pointerEvents: "none",
    mixBlendMode: "multiply",
    zIndex: 9999,
  });

  const foco = document.createElement("div");
  Object.assign(foco.style, {
    position: "absolute",
    width: "200%",     
    height: "150px",    
    backgroundColor: "rgba(255,255,255,0.9)",
    pointerEvents: "none",
    transform: "translate(-50%, -50%)",
    border: "5px solid white",  
    
  });

  mascara.appendChild(foco);
  document.body.appendChild(mascara);

  function moveMascara(e) {
    foco.style.left = `${e.clientX}px`;
    foco.style.top = `${e.clientY}px`;
  }

  document.addEventListener("mousemove", moveMascara);
});


// ------------------------------
// BOTÃO AUMENTAR CURSOR
// ------------------------------

const btnDislexia = document.querySelector("#btn-dislexia");

let dislexiaAtivada = false;

btnDislexia.addEventListener("click", () => {

  if (!dislexiaAtivada) {
    document.body.style.fontFamily = "OpenDyslexic, sans-serif";

    btnDislexia.innerHTML = `
      <img src="./icones-acessibilidade/semdislexia.webp" alt="" class="px-4 2xl:w-3/5 w-4/5">
      Desativar fonte
    `;

    dislexiaAtivada = true;
  } 
  else {
    document.body.style.fontFamily = "system-ui, sans-serif";

    btnDislexia.innerHTML = `
      <img src="./icones-acessibilidade/dislexia.webp" alt="" class="px-4 2xl:w-3/5 w-4/5">
      Ativar fonte
    `;

    dislexiaAtivada = false;
  }

});






