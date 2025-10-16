document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("btn-cadastro");

  form.addEventListener("click", async (e) => {
    e.preventDefault();

    const name = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("senha").value.trim();

    if (!name || !email || !password) {
      alert("Preencha todos os campos!");
      return;
    }

    try {
      const response = await fetch("http://localhost:3000/user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        alert("Usuário cadastrado com sucesso!");
        window.location.href = "./login.html"; // redireciona para página de login
      } else {
        alert(data.messagem || "Erro ao cadastrar usuário!");
      }
    } catch (error) {
      console.error("Erro no cadastro:", error);
      alert("Erro ao conectar com o servidor.");
    }
  });
});
