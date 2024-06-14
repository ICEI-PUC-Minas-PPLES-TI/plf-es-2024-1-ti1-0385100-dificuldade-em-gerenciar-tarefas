document.addEventListener('DOMContentLoaded', function() {
  const notificacoes = [
    'AULA DE INGLÊS 17H',
    'REUNIÃO DE PROJETO 15H',
    'ENTREGA DE TRABALHO 20H',
    'CONSULTA MÉDICA 14H',
    'ANIVERSÁRIO DO JOÃO 19H',
    'PAGAMENTO DE CONTAS 18H'
  ];

  const container = document.getElementById('notificacoesContainer');

  notificacoes.forEach((notificacao, indice) => {
    const div = document.createElement('div');
    div.classList.add('notificacao');
    div.textContent = notificacao;

    const botaoExcluir = document.createElement('button');
    botaoExcluir.textContent = 'X';
    botaoExcluir.classList.add('botaoExcluir');
    botaoExcluir.onclick = function() {
      container.removeChild(div);
    };

    div.appendChild(botaoExcluir);
    container.appendChild(div);
  });
});
