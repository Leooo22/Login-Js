// JavaScript (seu_script.js)
const usuarios = [
    { username: 'adm@123', password: '' },
    { username: 'leo@00', password: '' },
    { username: 'math@002', password: '' }
];

document.getElementById('login-button').addEventListener('click', function () {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Verificar as credenciais do usuário
    const usuarioValido = usuarios.find(function (user) {
        return user.username === username && user.password === password;
    });

    if (usuarioValido) {
        // Autenticação bem-sucedida, criar uma sessão de autenticação
        sessionStorage.setItem('autenticado', 'true');
        // Redirecionar para a página principal
        window.location.href = 'home.html';
    } else {
        alert('Nome de usuário ou senha incorretos');
    }
});
