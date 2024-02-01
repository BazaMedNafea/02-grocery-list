import './App.css'
import groceryCartImg from "./assets/pepe.gif"
import { useState } from "react"
function App() {

  const [inputvalue, setInputValue] = useState("");

  const handleChangeInputValue = (e) =>{
    setInputValue(e.target.value);
  }
  return (
    <main className="App">
      <div>
      <div>
        <h4 className='success'>You're Done</h4>
        <div className='header'>
          {inputvalue}
          <button onClick={() =>{
            setInputValue("");
          }}>
            Clear Input
          </button>
          <h1>Shopping List</h1>
          <img src={groceryCartImg} alt="" />
          <input type="text" 
          placeholder='Add an item' 
          className='item-input' 
          onChange={handleChangeInputValue}
          value={inputvalue}
          />
        </div>
      </div>
      <ul>
        <li>
          <div className='container'>
            <input type="checkbox" />
            <p>Carrots</p>
          </div>
          <div>
            <button className='remove-button'>X</button>
          </div>
        </li>
      </ul>
      </div>
    </main>
  )
}

export default App
