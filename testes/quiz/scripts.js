const cor = document.getElementById('cor');
const cor2 = document.getElementById('cor2');
const botao1 = document.getElementById('botao1');
const botao2 = document.getElementById('botao2');
const body = document.getElementById('corpo');

botao1.addEventListener("click", ()=>{
    body.style.backgroundColor = cor.value;
})

botao2.addEventListener("click", ()=>{
    body.style.color = cor2.value;
})