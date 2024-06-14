
document.addEventListener('DOMContentLoaded', function() {
  var icone = document.querySelector('.notificacao_1 img'); 
  var caixaNotificacao = document.getElementById('caixaNotificacao');

  icone.addEventListener('mouseover', function() {
    caixaNotificacao.classList.remove('escondido');
  });

  icone.addEventListener('mouseout', function() {
    caixaNotificacao.classList.add('escondido');
  });
});
