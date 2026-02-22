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

//3 - argumento de um evento
const myTitle = document.querySelector("#my-title");

myTitle.addEventListener("click", (event) =>{
    console.log(event);
    console.log(event.offsetX);
    console.log(event.pointerType);
    console.log(event.target);
})

//4- propagation
const container1 = document.querySelector("#container1");
const button4 = document.querySelector("#btn-4");

container1.addEventListener("click", (e) =>{
    console.log("Container 1!");
});

button4.addEventListener("click", (e) =>{
    e.stopPropagation();
    console.log("Button 4!")
});

//5- prevent default
const a = document.querySelector("a");

a.addEventListener("click", (e) =>{
    e.preventDefault();

    console.log("Não abriu o link");
})

//6- keyup e keydown
addEventListener("keyup", (e) =>{
    console.log(`Soltou a tecla ${e.key}`)
});

addEventListener("keydown", (e) =>{
    console.log(`Apertou a tecla ${e.key}`)
});

//7 - eventos do mouse (mouseup, mousedown, dblclick)
const mouseEvent = document.querySelector("#mouse");

mouseEvent.addEventListener("mousedown", (e) =>{
    console.log("Segurou o mouse");
});

mouseEvent.addEventListener("mouseup", (e) =>{
    console.log("Soltou o mouse");
});

mouseEvent.addEventListener("dblclick", (e) =>{
    console.log("Duplo clique");
});

//8 - mousemove
// document.addEventListener("mousemove", (e) =>{
//     console.log(`No eixo X: ${e.x}`);
//     console.log(`No eixo Y: ${e.y}`)
// });

// 9 - evento de scroll
window.addEventListener("scroll", (e) => {
    if(window.pageYOffset > 200){
        console.log("Passamos de 200 px");
    }
})

//10 - evento de focus
const input = document.querySelector("#my-input");
input.addEventListener("focus", (e) =>{
    console.log("Entrou no input");
})

input.addEventListener("blur", (e) =>{
    console.log("Saiu no input");
})

//11 - evento de carregamento
window.addEventListener("load", (e) =>{
    console.log("A pagina carregou!");
    e.preventDefault();
    e.returnValue = "teste";
});

window.addEventListener("beforeunload", (e) =>{
    e.preventDefault();
    e.returnValue = "teste";
});

//12- debounce
const debounce = (f, delay) =>{
    let timeout;

    return(...args) => {
        if(timeout){
            clearTimeout(timeout);
        }

        timeout = setTimeout(() =>{
            f.apply(args);
        }, delay);
    };
};

window.addEventListener("mousemove",debounce(() =>{
    console.log("Executando a cada 400ms")
}, 400))