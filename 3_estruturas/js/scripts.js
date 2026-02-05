// //1 - variaveis
// let nome = "Renan"

// console.log(nome)

// const idade = 20;

// //idade = 22 (Não pode mudar pq é constante)

// //2 - Aprofundamento em variaveis
// let a = 10, b = 9, c = 11;

// console.log(a, b, c);

// const nomeCompleto = "Topzinho";
// const nomecompleto = "Maneiro";
// console.log(nomeCompleto);
// console.log(nomecompleto);

// let _teste = "OK";
// let $teste = "OK";

// console.log(_teste, $teste);

// //3 - prompt
// const age = prompt("Digite sua idade");
// console.log(`Sua idade é ${age}`)

// //4 - alert
// alert("Olá");
// alert(`Sua idade é ${age}`);

// 5 - Math
console.log(Math.max(5,2,1,10));
console.log(Math.floor(5.14));
console.log(Math.ceil(5.14)); //arredonda para cima
console.log(Math.round(5.4));

// 6- Console
console.log("teste!");
console.error("Error!");
console.warn("Aviso!")

// 7 - do while
let o = 10;

do{
    console.log(`O valor de O é ${o}`);
    o--;
}while(o >= 1);

//8 - For
for(let t = 0; t < 10; t++){
    console.log(`Repetindo ${t}`);
}

let r = 10;

for(r;r>0; r=r-1){
    console.log(`O R está diminuindo:${r}`);
}

//9- break
for(let g = 0; g < 10; g++){
    console.log("g é igual a "+g);
    if(g === 8){
        console.log(`g é igual a oito`);
        break;
    }
}

//10 - continue (pula para a proxima execução)
for(let numero = 0; numero < 10; numero++){
    if(numero % 2 === 0){
        console.log("Número par!")
        continue;
    }
    console.log(numero)
}

//11 - switch
let profissao = "programador";
switch(profissao){
    case "advogado":
        console.log("Legal");
        break;
    case "programador":
        console.log("Maneiro");
        break;
    default:
        console.log("Desempregado");
        break;
    }
