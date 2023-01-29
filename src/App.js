import './App.css'
import { useState } from "react";
import AnimalShow from './AnimalShow'
function getRandomAnimal() {
  const animals = ['bird','cat','dog','gator','horse','cow']
  return animals[Math.floor(Math.random()* animals.length)]
}

function App() {
  
  const [animals,setAnimals] = useState([])
  const handleClick=()=>{
   setAnimals([...animals,getRandomAnimal()])
  }

  const rederedAnimals =animals.map((animal,index)=>{
    return <AnimalShow type={animal} key={index}/>
  })
  return (
   <div className='app'>
    <button onClick={handleClick}>Add Animals</button>
    <div className='animal-list'>{rederedAnimals}</div>
   </div>
  );
}

export default App;
