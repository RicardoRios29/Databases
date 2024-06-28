document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    const message = document.getElementById('message');

    // Hardcoded credentials
    const validCredentials = {
        username: 'richy',
        password: 'tottenham2024'
    };

    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();

        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        if (username === validCredentials.username && password === validCredentials.password) {
            message.textContent = 'Login successful! Welcome!';
            message.style.color = '#132257'; 
        } else {
            message.textContent = 'Invalid username or password. Please try again.';
            message.style.color = 'red';
        }
    });
});