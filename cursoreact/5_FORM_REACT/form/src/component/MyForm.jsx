import "./MyForm.css";
import { useState } from 'react'
const MyForm = ({ userName, userEmail }) => {
  const [name, setName] = useState(userName);
  const [email, setEmail] = useState(userEmail);
  const [bio, setBio] = useState("");
  const [role, setRole] = useState("");
  const handleEmail = (e) => {
    setEmail(e.target.value)
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, email, bio, role)
    setEmail("");
    setName("");
    setBio("");
    setRole("");
  }

  console.log(email)
  console.log(name)
  console.log(bio)
  console.log(role)

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Digite seu nome:</label>
          <input type="text" name="name" placeholder="Digite o seu nome" onChange={(e) => setName(e.target.value)} value={name || ""} />

        </div>
        <label>
          <div>
            <span>Digite seu email:</span>
            <input type="text" name="email" placeholder="Digite o seu email" onChange={handleEmail} value={email} />
          </div>
        </label>
        <label>
          <span>Digite sua bio:</span>
          <textarea name="bio" onChange={(e) => setBio(e.target.value)

          } value={bio}></textarea>
        </label>
        <label>
          <span>Função do sistema</span>
          <select name="role" onChange={(e) => setRole(e.target.value)} value={role}>
            <option value="user">Usuario</option>
            <option value="editor">Editor</option>
            <option value="admin">Admin</option>
          </select>
        </label>

        <input type="submit" value="Enviar" />
      </form>
    </div>
  )
}

export default MyForm