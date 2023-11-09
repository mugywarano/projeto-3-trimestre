function tocaSom(idElementoAudio){
    document.querySelector (idElementoAudio).play();
}

const listaDeTeclas = document.querySelectorAll(".tecla");

listaDeTecla [0].onclick = document.querySelectorAll("tecla");

let contador = 0;

while(contador < listaDeTeclas.length){
    const efeito = listaDeTecla[contador].classList[1]
    const ideAudio = "#som_"+efeito;
    listaDeTeclas[contador].onclick = function(){
tocaSom(ideAudio);
    }
    contador = contador + 1;
    
}





