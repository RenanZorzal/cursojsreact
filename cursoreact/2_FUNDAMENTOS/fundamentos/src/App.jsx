import './App.css'
//2- Importando componente
import FirstComponnent from './components/FirstComponnent';

// 4- TemplateExpression
import TemplateExpression from './components/TemplateExpression';
function App() {

  return (
    //3- comentarios
    <>
      {/*Comentario JSX*/}
      <h1>Fundamentos do React</h1>
      
      <FirstComponnent />
      <TemplateExpression />
    </>
  )
}

export default App
