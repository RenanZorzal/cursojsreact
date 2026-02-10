//7- async function
async function somarComDelay(a,b) {
    return a + b;
}

somarComDelay(2, 4).then((value) => {
    console.log(`O valor da soma é: ${value}`)
});
console.log("teste async")

//8 - async await
function resolveComDelay(){
    return new Promise(resolve =>{
        setTimeout(() =>{
            resolve("Resolveu a Promise")
        }, 2000)
    })
}

async function chamadaAsync(params) {
    console.log("Chamando a Promise, e esperando resultado");
    const result = await resolveComDelay();
    console.log(`O resultado chegou ${result}`)
}

chamadaAsync();