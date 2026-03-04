import React from 'react'

function Events() {
    const clicou = (e) =>{
        console.log(e);
        console.log("Clicou!");
    }
    //8- Fuçãode renderização
    const renderizacao= (check) =>{
        if(check){
            return <h2>Render True</h2>
        } else {
            return <h2>Render False</h2>
        }
    }
//Early Return para por exemplo quando utilizar uma api
//return 10 > 2 && <p>Carregando...</p>
  return (
    <div>
    {/*8- Evento*/}
    <button onClick={()=>console.log("Clicou")}>Clique aqui</button>
    {/*8- Evento com função*/}
    <button onClick={clicou}>Clique aqui com funcao</button>
    {renderizacao(true)}
    {renderizacao(false)}
    </div>
  )
}

export default Events