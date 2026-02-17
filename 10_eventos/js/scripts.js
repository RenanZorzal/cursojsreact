//1- adicionando eventos
const btn = document.querySelector("#my-button");
const corpo = document.querySelector("body");
console.log(corpo)
btn.addEventListener("click", function(){
    corpo.style.backgroundColor = "black";
})

//2 - removendo evento
const secondBtn = document.querySelector('#btn');
function imprimirMensagem(){
    console.log("Teste")
}

secondBtn.addEventListener("click",imprimirMensagem);

const thirdBtn = document.querySelector("#btn-2");

thirdBtn.addEventListener("click", ()=>{
    console.log("Evento removido");
    secondBtn.removeEventListener("click" , imprimirMensagem);
}
)