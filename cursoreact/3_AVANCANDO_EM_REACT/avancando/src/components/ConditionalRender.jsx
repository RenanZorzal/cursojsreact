import React from 'react'

function ConditionalRender() {
    const x = 5;
    const nome = "Rnan";
  return (
    <div>
        <h3>Isso será exibido?</h3>
        {x > 2 && <p>Se x for true sim!</p>}

        <h3>Isso será exibido 2?</h3>
        {nome === "Renan"? (
            <div>
                <p>Olá Renan</p>
            </div>
        ): (
            <>
            <p>Nome não encontrado</p>
            </>
        )}
    </div>
  )
}

export default ConditionalRender