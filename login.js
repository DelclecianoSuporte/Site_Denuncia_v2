document.getElementById("entrarComite").addEventListener("click", async function() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("pass").value;

    if (!email || !password) {
        alert("Informe um email e uma senha para poder fazer o login.");
        return;
    }

    const response = await fetch("https://localhost:7114/api/usuarios/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ email, password })
    });

    if (response.ok) {
        const data = await response.json();
        localStorage.setItem("token", data.token);
        window.location.href = "comite.html";
    } 
    else {
        alert("Email ou senha incorretos.");
    }
});
