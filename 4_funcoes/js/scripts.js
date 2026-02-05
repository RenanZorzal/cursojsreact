// //1 - Criando uma função
// function minhaFuncao(){
//     console.log("Testando");
// }
// minhaFuncao();

// const minhaFuncaoEmVariavel = function(){
//     console.log("Função em váriavel");
// };

// minhaFuncaoEmVariavel();

// function funcaoComParametro(txt){
//     console.log(`Imprimindo: ${txt}`)
// }

// funcaoComParametro("Texto teste")

// //2- return
// let a = 10;
// let b = 20;
// let c = 30;

// function somarNumeros(num1, num2){
//     return num1+num2;
// };

// let soma = somarNumeros(a,b);

// console.log(soma);

// //3 - Escopo da função
// let y = 10
// function testandoEscopo(){
//     let y = 20;
//     console.log(`y dentro da função: ${y}`);
// }
// testandoEscopo();
// console.log(`y fora da função: ${y}`);
// testandoEscopo();

// //4- escopo aninhado
// let m = 10;
// function escopoAninhado(){
//     let m = 20;

//     if(true){
//         let m = 30;
//         if(true){
//             let m = 40
//             console.log(m);
//         }
//         console.log(m)
//     }
//     console.log(m);
// }
// escopoAninhado();
// console.log(m)

// //5 - arrow function

// const parOuImpar = (n) => {
//     if(n%2 === 0){
//         console.log("Par");
//         return;
//     }
//     console.log("Impar");
// }
// parOuImpar(5);

// // 6 - mais sobre arrow function
// const potencia = (x) => x*x;
// potencia(10);

// const potencia2 = (x) => console.log(x*x);
// potencia(2)

// //7 - Parametro opcional
// const multiplication = function(m,n){
//     if(n === undefined){
//         return(m*2);
//     }else{
//         return(m*n);
//     }
// }
// console.log(multiplication(1));

// console.log(multiplication(2,4));

// const greeting = (name) =>{
//     if(!name){
//         console.log("Olá");
//         return
//     }
//     console.log(`Olá ${name}`);
// }
// greeting();

//8 - valor default
const customGreeting = (name, greet = "Olá") =>{
    return(`${greet} ${name}`)
}
console.log(customGreeting("Renan"));
console.log(customGreeting("Renan", "Bom dia! "));

//9 - closure
function someFunction(){
    let txt = "Texto";

    function display(){
        console.log(txt);
    }
    display();
}
someFunction();

//10 - mais sobre closure
const multiplicarClosure = (n) => {
    return (m) => {
        return n*m;
    };
};

const c1 = multiplicarClosure(5);
const c2 = multiplicarClosure(10);

console.log(c1);
console.log(c2);

console.log(c1(5));
console.log(c2(10));

//11 - recursion
const untilTen = (n,m) => {
    if(n<10){
        console.log("A função parou de executar")
    }else{
        const x = n-m;
        console.log(x);
        untilTen(x,m)
    }
    
}
untilTen(100, 7);

function factorial(x){
    if(x === 0){
        return 1;
    }else {
        return x*factorial(x-1);
    }
}
const num = 6;
const result = factorial(num);
console.log(`O factorial do numero ${num} é ${result}`)