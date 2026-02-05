//1- Números
console.log(typeof 1)
console.log(typeof 3.5)
console.log(typeof -1)

//2- Operadores
console.log(1+5)
console.log(5-2)
console.log(5*2)
console.log(10/2)

//3- Special numbers
console.log(typeof Infinity)
console.log(typeof -Infinity)
console.log(typeof NaN)
console.log(1*"A")

//4 - String
console.log("Texto 1")
console.log('Texto 2')
console.log(`Texto 3`)

//5 - Simbolos especiais em String
console.log("Testando a \n quebra de linha")

console.log("Espaçamento \t de tab")

//6 - Concatenação
console.log("Oi, "+"tudo "+"bem?")

//7 - Interpolação (Deve ser entre ``)
console.log(`A soma de 2+2 = ${2+2}`)
console.log(`Podemos executar qualquer coisa aqui ${console.log("Teste")}`)

//8 - Boolean
console.log(true);
console.log(30 < 10);
console.log(30 > 10);
console.log(typeof false);

//9 - Comparações
console.log(5 <= 5);
console.log(5 < 5);
console.log(10 == 10)
console.log(10 === '10');
console.log(10 != 9);

//10 - Idêntico
console.log(10 == 10);
console.log(10 === '10');
console.log(9 != '9');
console.log(9 !== "9");

//11 - Operadores lógicos
console.log(true && true);
console.log(true && false);
console.log(5 > 2 && 2 < 10 );
console.log(5 > 2 || 5 < 10 );
console.log(!5 > 2);

//12 - empty values
console.log("Empty Values:")
console.log(typeof null, typeof undefined);
console.log(null === undefined);
console.log(null == undefined);
console.log(null == false);
console.log(undefined == false);

// 13 - Mudança de tipos
console.log(5*null);
console.log("teste"*"opa");
console.log("10"+1);
console.log("10" - 1);