

import './App.css'
import MyComponent from './components/MyComponent'
import Title from './components/Title';

function App() {
  const x = 30;
  const redTitle = true;

  return (
    <>
      <h1>CSS GLOBAL</h1>
      <MyComponent />
      <p>Pegou o css do componente a cima</p>
      <p style={{color:"blue",padding:"25px", borderTop:"1px dotted blue"}}>Esse elemento tem estilos inline</p>
      <p style={x > 10 ? {color: 'purple'} : {color: 'blue'}}>CSS Dinamico</p>
      <p style={x < 20 ? {color: 'purple'} : {color: 'magenta'}}>CSS Dinamico 2</p>
      <h2 className={redTitle ? "red-title" : "title"}>Esse titulo tem uma classe</h2>
      <Title />
    </>
  )
}

export default App
