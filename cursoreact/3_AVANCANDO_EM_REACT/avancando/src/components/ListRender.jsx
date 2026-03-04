import React from 'react'
import { useState } from 'react';
function ListRender() {
    const [nomes] = useState(["Renan", "João", "Maria"]);
    const [users,setUsers] = useState([
        {id: 1,name: "Renan", age: 20},
        {id: 2,name: "Pessoa 2", age: 18},
        {id: 3,name: "Pessoa 3", age: 30},
    ]);

    const deleteRandom = () => {
        const randomNumber = Math.floor(Math.random()*4);
        setUsers((prevUsers) =>
    prevUsers.filter((user) => randomNumber !== user.id));
    }
    
  return (
    <div>
        <ul>
            {nomes.map((item)=> (
                <li>{item}</li>
            ))}
        </ul>
        <ul>
            {users.map((user)=> (
                <li key={user.id}>{user.name} - {user.age} anos</li>
            ))}
        </ul>
        <button onClick={deleteRandom}>Apagar</button>
    </div>
  )
}

export default ListRender