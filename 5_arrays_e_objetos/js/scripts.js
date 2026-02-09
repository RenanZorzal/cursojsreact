// //1- arrays
// const lista =  [1, 2, 3, 4, 5];

// console.log(lista);

// console.log(typeof lista);

// const itens = ["Renan", true, 2, 4.12, []];

// console.log(itens);

// //2 - mais sobre arrays
// const arr = ["a","b","c","d","e"];
// console.log(arr[0])

// //3 - propriedades
// const numbers = [5, 3, 4];
// console.log(numbers.length);
// console.log(numbers["lenght"])

// const myName = "Renan";
// console.log(myName.length);

// //4 - metodos
// const otherNumbers = [1,2,3];

// const allNumbers = numbers.concat(otherNumbers);
// console.log(allNumbers);
// const text = "algum texto";
// console.log(text.toUpperCase());
// console.log(typeof text.toUpperCase);
// console.log(text.indexOf("g"));

// //5 - objetos
// const person = {
//     name: "Renan",
//     age: 20,
//     job: "Programador",
// };
// console.log(person);
// console.log(person.name);
// console.log(person.name.length);
// console.log(typeof person);

//6 - criando e deletando propriedades
// const car ={
//     engine: 2.0,
//     brand: "VW",
//     model: "Tiguan",
//     km: 20000,
// };

// console.log(car);

// car.doors = 4;

// console.log(car);

// delete car.km;

// console.log(car);

// //7 - mais sobre objetos
// const obj = {
//     a: "teste",
//     b: true,
// };

// console.log(obj instanceof Object);

// const obj2 = {
//     c: [],
// };

// Object.assign(obj2,obj);

// console.log(obj2);

// //8 - conhecendo melhor os objetos
// console.log(Object.keys(obj));
// console.log(Object.keys(obj2));
// console.log(Object.keys(car))

// console.log(Object.entries(car))

// //9 - mutação
// const a = {
//     name: "Renan",
// }
// const b = a;

// console.log(a);
// console.log(b);

// console.log(a === b);

// a.age = 31;

// console.log(a);
// console.log(b);

// delete b.age;

// console.log(a);
// console.log(b);

// //10 - loop em array
// const user = ["User1","User2","User3","User4"];

// for(let i = 0; i < user.length; i++){
//     console.log(`Olá ${user[i]}`)
// }

// //11- push(adiciona no final da array) e pop(remove o ultimo elemento do array)
// const letras = ["a","b","c"];

// letras.push("d","e");
// console.log(letras);

// letras.pop();
// console.log(letras);

// const letraRemovida = letras.pop();
// console.log(letras);
// console.log(letraRemovida)

//12- unshift(adiciona no começo) e shift(remove do começo)
// const letters = ["a","b","c"];
// const letter = letters.shift();

// console.log(letters);
// console.log(letter);

// letters.unshift("p","q","r");
// letters.unshift("z");

// console.log(letters);

//13 - indexOf e lastIndexOf
// const myElements = ["Morango", "Maça", "Abacate","Pera","Abacate"];
// console.log(myElements.indexOf("Maça"));
// console.log(myElements.indexOf("Abacate"))

// console.log(myElements.lastIndexOf("Mamão"));
// console.log(myElements.indexOf("Mamão"));

//14 - Slice
// const testeSlice = ["a","b","c","d","e","f"];
// const subArray = testeSlice.slice(2,4);
// console.log(subArray);
// console.log(testeSlice);
// const subArray2 = testeSlice.slice(2,4+1);
// console.log(subArray2);
// const subArray3 = testeSlice.slice(10,20);
// console.log(subArray3);
// const subArray4 = testeSlice.slice(2);

//15 - foreach
// const nums = [1,2,3,4,5];
// nums.forEach((numero) => {
//     console.log(`O numero é ${numero}`);
// });

// const posts = [
//     {title: "Primeiro Post", category: "PHP"},
//     {title:"Segundo Post", category:"JavaScript"},
//     {title: "Terceiro Post", category:"Python"},
// ];

// posts.forEach((post) =>{
//     console.log(`Exibindo post: ${post.title}, da categoria:${post.category}`);
// });

// //16 - foreach
// const brands = ["BMW","VW","Fiat"];
// console.log(brands.includes("Fiat"));
// console.log(brands.includes("KIA"))

// if(brands.includes("BMW")){
//     console.log("Há carros da marca BMW")
// }


// //17 - reverse (reverte a ordem de um array)
// const reverseTeste = [1,2,3,4];
// reverseTeste.reverse();
// console.log(reverseTeste);

//18 - trim (remove caracteres especiais)
const trimTest = " testant \n";
console.log(trimTest.trim());
console.log(trimTest.length);
console.log(trimTest.trim().length);

//19 - padstart (insere texto no começo da String, até preencher) e padend
const testePadStart = "1"

const newNumber = testePadStart.padStart(4, "0");
console.log(testePadStart);
console.log(newNumber);

const testPadEnd = newNumber.padEnd(10, "0");
console.log(testPadEnd);

//20 - split
const frase = "O rato roeu a roupa do rei de Roma";
const arrayDaFrase = frase.split(" ");
console.log(arrayDaFrase);

//21 - join
const fraseDeNovo = arrayDaFrase.join(" ");
console.log(fraseDeNovo);

const itensParaComprar = ["Mouse","Teclado", "Monitor"]
const fraseDeCompra = `Precisamos comprar: ${itensParaComprar.join(", ")}.`
console.log(fraseDeCompra);

//22 - repeat
const palavra = "Testando "
console.log(palavra.repeat(5));

//23- rest operator
const somaInfinita = (...args) => {
    let total = 0;
    for(let i = 0; i < args.length; i++){
        total += args[i]
    }
    return total;
};

console.log(somaInfinita(1,2,3)); 
console.log(somaInfinita(1,2,3,1999,323));

//24 - for of
const somaInfinita2 = (...args) => {
    let total = 0;
    for(num of args){
        total += num
    }
    return total;
};
console.log(somaInfinita2(2,1))