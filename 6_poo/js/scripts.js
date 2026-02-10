// //1 - metodos
// const animal = {
//     name: "Bob",
//     latir: function(){
//         console.log("Au au");
//     }
// }

// console.log(animal.name);
// animal.latir();

// //2 - aprofundando em objetos
// const pessoa = {
//     nome: "Renan",
//     getNome: function(){
//         return this.nome;
//     },
//     setNome:function(novoNome){
//         this.nome = novoNome;
//     }
// }

// console.log(pessoa.nome);
// console.log(pessoa.getNome());
// pessoa.setNome("Renan2");
// console.log(pessoa.getNome());

// //3 - prototype
// const text = "asd"

// console.log(Object.getPrototypeOf(text));
// const bool = true;
// console.log(Object.getPrototypeOf(bool));
// const arr = [];
// console.log(arr.length);
// console.log(arr.length);
// console.log(Object.getPrototypeOf(arr));

// //6 - função como classe
// function criarCachorro(nome,raca){
//     const cachorro = Object.create({});
//     cachorro.nome = nome;
//     cachorro.raca = raca;

//     return cachorro;
// }
// const bob = criarCachorro("Bob", "Vira lata");
// console.log(bob)

// //7- Funções como classe
// function Cachorro(nome,raca){
//     this.nome = nome;
//     this.raca = raca;
// }
// const husky = new Cachorro("Ozzy", "Husky");
// console.log(husky);

// //8 - metodo na função construtora
// Cachorro.prototype.uivar = function(){
//     console.log("Auuuu!");
// };

// console.log(Cachorro.prototype);
// husky.uivar;

// //9 - classes es6
// class CachorroClasse{
//     constructor(nome,raca){
//         this.nome = nome;
//         this.raca = raca;
//     }
// }

// const jeff = new CachorroClasse("Jeff","Labrador");
// console.log(jeff);

// //10 - mais sobre classes
// class Caminhao{
//     constructor(eixos,cor){
//         this.eixos = eixos;
//         this.cor = cor;
//     }

//     descreverCaminhao(){
//         console.log(`Este caminhão tem ${this.eixos} eixos e é da cor ${this.cor}`);
//     }
// }
// const scania = new Caminhao(6, "Vermelho");
// console.log(scania);
// scania.descreverCaminhao();

// Caminhao.motor = 4;
// const c2 = new Caminhao(4,"Preta");
// console.log(c2);
// console.log(c2.motor);
// Caminhao.prototype.motor = 4.0;
// const c3 = new Caminhao(6, "azul");
// console.log(c3.motor)

// 12 - symbol

//13 - get e setter
class Post{
    constructor(titulo,descricao,tags){
        this.titulo = titulo;
        this.descricao = descricao;
        this.tags = tags;
    }
    get exibirTitulo(){
        return `Você está lendo ${this.titulo}`
    }
    set adicionarTag(tags){
        this.tags = tags;
    }
}

const myPost = new Post("Algum Post","É um Post sobre programação");
console.log(myPost);
console.log(myPost.exibirTitulo);

myPost.adicionarTag = "programação"
console.log(myPost);

//14 - herança
class Mamifero{
    constructor(patas){
        this.patas = patas;
    }
}
class Lobo extends Mamifero{
    constructor(patas,nome){
        super(patas,patas)
        this.nome = nome;
    }
}
const shark = new Lobo(4, "Shark")

//15- instanceof
console.log(shark instanceof Lobo);

console.log(Lobo(4,"teste") instanceof Mamifero);

console.log(new Post("a","b") instanceof Lobo);