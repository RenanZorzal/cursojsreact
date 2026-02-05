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
const car ={
    engine: 2.0,
    brand: "VW",
    model: "Tiguan",
    km: 20000,
};

console.log(car);

car.doors = 4;

console.log(car);

delete car.km;

console.log(car);

//7 - mais sobre objetos
const obj = {
    a: "teste",
    b: true,
};

console.log(obj instanceof Object);

const obj2 = {
    c: [],
};

Object.assign(obj2,obj);

console.log(obj2);