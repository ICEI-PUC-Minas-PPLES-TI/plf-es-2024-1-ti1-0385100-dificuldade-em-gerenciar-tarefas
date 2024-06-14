// Exemplo de dados de amigos
var amigos = [
  {
    nome: 'Rebeca', foto: '../assets/images/amigo1.jpg', info: 'Rebeca Assis Fonseca, 41 anos, São Paulo, Brasil'
  },
  { nome: 'Afonso', foto: '../assets/images/amigo2.jpg', info: 'Afonso Pereira Magalhães, 31 anos, Rio de Janeiro, Brasil' },
  { nome: 'João', foto: '../assets/images/amigo3.jpg', info: 'João Neves Ferreira, 14 anos, Belo Horizonte, Brasil' },
];

// Função para criar a lista de amigos
function criarListaAmigos() {
  var listaAmigos = document.getElementById('listaAmigos');
  // Limpa a lista de amigos antes de preenchê-la
  listaAmigos.innerHTML = '';
  amigos.forEach(function(amigo) {
    var divAmigo = document.createElement('div');
    divAmigo.className = 'amigo';
    var imgAmigo = document.createElement('img');
    imgAmigo.src = amigo.foto;
    var spanAmigo = document.createElement('span');
    spanAmigo.textContent = amigo.nome;
    spanAmigo.addEventListener('mouseover', function() {
      alert(amigo.info); // Mostra um alerta com as informações adicionais
    });
    divAmigo.appendChild(imgAmigo);
    divAmigo.appendChild(spanAmigo);
    listaAmigos.appendChild(divAmigo);
  });
}

// Função para ordenar a lista de amigos por nome
function ordenarAmigos() {
  amigos.sort(function(a, b) {
    return a.nome.localeCompare(b.nome);
  });
  criarListaAmigos();
}

// Chamar a função ao carregar a página
window.onload = function() {
  criarListaAmigos();
  document.getElementById('botaoOrdenar').addEventListener('click', ordenarAmigos);
};
