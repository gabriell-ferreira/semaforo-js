let semaforo = document.querySelector('#img');
let corIndex = 0;
let intervalo = '';

function acenderVermelho() {
  semaforo.src = './images/vermelho.png';
  clearInterval(intervalo);
}

function acenderAmarelo() {
  semaforo.src = './images/amarelo.png';
  clearInterval(intervalo);
}

function acenderVerde() {
  semaforo.src = './images/verde.png';
  clearInterval(intervalo);
}

function trocarCores() {
  if(corIndex == 0){
    semaforo.src = './images/vermelho.png';
  } else if (corIndex == 1){
    semaforo.src = './images/amarelo.png';
  } else {
    semaforo.src = './images/verde.png';
  }

  corIndex < 2 ? corIndex++ : corIndex = 0;
}

function acenderAutomatico() {
  intervalo = setInterval(trocarCores, 1000);
}

function desligarSemaforo() {
  semaforo.src = './images/desligado.png';
  clearInterval(intervalo);
}