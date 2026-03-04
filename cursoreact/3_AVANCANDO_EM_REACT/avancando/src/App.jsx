import './App.css'
import backgroundImg from "./assets/imagem2.jpg"
import CarDetails from './components/CarDetails'
import ChangeMessage from './components/ChangeMessage'
import ConditionalRender from './components/ConditionalRender'
import Container from './components/Container'
import Data from './components/Data'
import ExecuteFunction from './components/ExecuteFunction'
import ListRender from './components/ListRender'
import Message from './components/Message'
import ShowUserName from './components/ShowUserName'
import { useState } from 'react';

function App() {
  const carros = [
    {id:1, brand:"Ferrari",color: "Amarelo",km:0},
    {id:2, brand:"KIA",color: "Branco",km:10},
    {id:3, brand:"Renault",color: "Azul",km:5},
  ];
  const imprimirMensagem = ()=>{
    console.log("Imprimiu!")
  }
  const [message, setMessage] = useState("");
  const handleMessage = (msg)=>{
    setMessage(msg);
  }
  return (
    <>
      <h1>Avançando em React</h1>
      {/*1- Imagem em public*/}
      <img src="/imagem1.jpg" alt="Imagem texto" />
      {/*1- Imagem em asset*/}
      {/*<img src={backgroundImg} alt="" />*/}
      {/*useState hook*/}
      <Data />
      <ListRender />
      <ConditionalRender />
      <ShowUserName name="Renan" />
      <CarDetails brand="vw" km={123} color="white"/>
      <CarDetails brand="vw" km={13} color="white"/>
      <CarDetails brand="vw" km={3} color="white"/>
      {carros.map((car)=>(
        <CarDetails key={car.id} brand={car.brand} color={car.color} km={car.km} />
      ))}
      <Container> 
      <p>Alguma coisa</p>  
      </Container>
      <ExecuteFunction myFunction={imprimirMensagem}/>
      <Message msg={message}/>
      <ChangeMessage handleMessage={handleMessage} />
    </>
  )
}

export default App
