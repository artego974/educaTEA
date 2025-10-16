document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("btn-logar");

  form.addEventListener("click", async (e) => {
    e.preventDefault();

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("senha").value.trim();

    if (!email || !password) {
      alert("Preencha todos os campos!");
      return;
    }

    try {
      const response = await fetch("http://localhost:3000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        alert("Login realizado com sucesso!");
        console.log("Usuário logado:", data.user);

        // Armazena o usuário logado no localStorage 
        localStorage.setItem("user", JSON.stringify(data.user));

        // Redireciona para a página principal
        window.location.href = "./index.html";
      } else {
        alert(data.message || "Email ou senha incorretos!");
      }
    } catch (error) {
      console.error("Erro ao logar:", error);
      alert("Erro de conexão com o servidor.");
    }
  });
});
