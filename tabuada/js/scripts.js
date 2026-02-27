const enviar = document.querySelector("#enviarcampo");
const conteudo = document.querySelector("#conteudo");
const campo1 = document.getElementById('campo1');
const campo2 = document.getElementById('campo2');


enviar.addEventListener("click", () =>{
     let resultado = '';
    if(campo1.value == '' || campo2.value == ''){
        resultado = "Erro! Preencha os campos";
    }else{
for(let x = 0; x <= campo2.value; x++){
        let multi = campo1.value* x;
        resultado = resultado + (x + "x" + campo1.value + ": " + multi)+"<br>";
        
        
    };
    }
   
    
    
    conteudo.innerHTML = resultado;
   
})

