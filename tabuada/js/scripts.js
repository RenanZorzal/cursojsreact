const enviar = document.querySelector("#enviarcampo");
const conteudo = document.querySelector("#conteudo");
const campo1 = document.getElementById('campo1');
const campo2 = document.getElementById('campo2');


enviar.addEventListener("click", () =>{
    
    for(const x = 0; x < campo2.value; x++){
        console.log(campo1.value);
        
        conteudo.textContent = (x) +"x" +(campo1.value)+"="+ (x*campo1.value);
    };
    conteudo.textContent = "Teste";
})

