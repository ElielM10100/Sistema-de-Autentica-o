Para criar um sistema de autenticação mais robusto que se assemelhe à realidade, você precisará incorporar alguns conceitos adicionais, como criptografia de senhas, gerenciamento de sessões e talvez um backend para lidar com o armazenamento seguro dos dados do usuário. Abaixo, fornecerei um exemplo básico que você pode expandir conforme necessário. Este exemplo incluirá uma simulação de backend usando JavaScript no lado do cliente, mas em um ambiente de produção real, o backend deve ser implementado em uma linguagem de servidor, como Node.js, Python, PHP, etc.

**1. Estrutura HTML:**
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="styles.css">
  <title>Sistema de Autenticação</title>
</head>
<body>
  <div class="container">
    <form id="authForm">
      <h2>Login</h2>
      <label for="username">Usuário:</label>
      <input type="text" id="username" required>
      <label for="password">Senha:</label>
      <input type="password" id="password" required>
      <button type="submit">Entrar</button>
    </form>
    <p id="error-message"></p>
  </div>
  <script src="script.js"></script>
</body>
</html>
```

**2. Estilos CSS (styles.css):**
```css
/* ... (mesmo estilo do exemplo anterior) */
```

**3. JavaScript (script.js):**
```javascript
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
```

Este exemplo inclui uma simulação de backend com um array de usuários e a função `authenticateUser` verifica se o usuário e a senha correspondem a algum usuário na lista. Em um ambiente real, você substituiria essa lógica de verificação por um servidor backend com um banco de dados.

Além disso, em um ambiente de produção real, você deve implementar medidas de segurança, como hash de senhas, uso de HTTPS, e gerenciamento seguro de sessões. Recomenda-se também o uso de bibliotecas específicas para autenticação, como o Passport.js no caso de Node.js, para uma implementação mais robusta.
