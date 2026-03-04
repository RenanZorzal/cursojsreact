import './App.css'

//2- Importando componente
import FirstComponent from './components/FirstComponent';

// 4- TemplateExpression
import TemplateExpression from './components/TemplateExpression';

//5- Hierarquia de componentes
import MyComponent from './components/MyComponent';

//6-Evento de click
import Events from './components/Events';
function App() {

  return (
    //3- comentarios
    <>
      {/*Comentario JSX*/}
      <h1>Fundamentos do React</h1>
      
      <FirstComponent />
      <TemplateExpression />
      <MyComponent />
      <Events />
    </>
  )
}

export default App
