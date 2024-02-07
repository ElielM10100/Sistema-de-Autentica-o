document.getElementById('authForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    // Obtenha os valores do formulário
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
  
    // Simulação de lógica de autenticação no lado do cliente (em um ambiente real, isso seria feito no lado do servidor)
    authenticateUser(username, password);
  });
  
  function authenticateUser(username, password) {
    // Simulação de backend (verificação no lado do cliente, apenas para fins de exemplo)
    const users = [
      { username: 'usuario', password: 'senha123' },
      // Adicione mais usuários conforme necessário
    ];
  
    const user = users.find(u => u.username === username && u.password === password);
  
    if (user) {
      // Simulação de criação de sessão (em um ambiente real, isso seria feito no lado do servidor)
      sessionStorage.setItem('authenticatedUser', JSON.stringify(user));
      alert('Login bem-sucedido!');
      // Redirecionar ou realizar outras ações após o login
    } else {
      document.getElementById('error-message').textContent = 'Usuário ou senha incorretos';
    }
  }
  