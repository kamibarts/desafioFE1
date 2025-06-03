
const secretCredentials = {
    
    email: "usuario@sistema.com",
    password: "senha123"
};

document.getElementById('loginBtn').addEventListener('click', function() {
    const emailInput = document.getElementById('email').value;
    const passwordInput = document.getElementById('password').value;
    
   
    if (!emailInput || !passwordInput) {
        alert("Por favor, preencha todos os campos.");
        return;
    }
    
   
    if (emailInput === secretCredentials.email && passwordInput === secretCredentials.password) {
        // Redirecionando para a página home.html se as credenciais estiverem corretas
        window.location.href = "home.html";
    } else {
       
        alert("Dados de email e senha não conferem");
    }
});
