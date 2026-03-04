import React from 'react'
import { useState } from 'react';
function Data() {
    let num1 = 10;
    const [num2, setNum2] = useState(10);
  return (
    <div>
        <p>Valor: {num1}</p>
        <button onClick={()=>(num1=5)}>Mudar variavel</button>
        <p>Valor: {num2}</p>
        <button onClick={()=>(setNum2(5))}>Mudar variavel useState</button>
    </div>
  )
}

export default Data