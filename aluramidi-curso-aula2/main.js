function tocaSom(idElementoAudio){
    document.querySelector(idElementoAudio).play();
}

const ListaDeTeclas = document.querySelectorAll(".tecla");

ListaDeTeclas[0].onclick = document.querySelectorAll(".tecla");

let contador = 0;

while(contador < ListaDeTeclas.length){
const efeito = ListaDeTeclas[contador].classList [1]
const idAudio = "#som_"+efeito;
ListaDeTeclas[contador].onclick = function(){
tocaSom(idAudio);
}
contador = contador + 1;
}



