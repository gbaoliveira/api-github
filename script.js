const username = 'nome_do_usuario';

fetch(`https://api.github.com/users/${username}`)
  .then(response => response.json())
  .then(data => {
    // Aqui estão as informações do usuário
    console.log(data);
    // Faça o que quiser com os dados retornados
  })
  .catch(error => {
    console.error('Ocorreu um erro:', error);
  });
