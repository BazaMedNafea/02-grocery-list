import './App.css'
import groceryCartImg from "./assets/pepe.gif"
import { useState } from "react"



function App() {

  const [inputvalue, setInputValue] = useState("");
  const [groceryItems, setGroceryItems] = useState([]);


  const handleChangeInputValue = (e) =>{
    setInputValue(e.target.value);
  };

  const handleAddGroceryItem =(e) => {
    if(e.key === 'Enter') {
      if(inputvalue) {
        const updatedGroceryList = [...groceryItems]  
        const itemIndex = updatedGroceryList.findIndex(item => item.name === inputvalue);
      if(itemIndex === -1) {
        updatedGroceryList.push({
          name: inputvalue,
          quantity: 1,
          completed: false
        })
      } else {
        updatedGroceryList[itemIndex].quantity++
      }

      setGroceryItems(updatedGroceryList)
      setInputValue("");
      }
    }
  };

  const handleRemoveItem = () => {

  }

  const renderGroceryList = () => {
    return groceryItems.map((item) => (
      <li key={item.name}>
          <div className='container'>
            <input type="checkbox" />
            <p>{
            item.name} {item.quantity > 1 && <span>x{item.quantity}</span>}
            </p>
          </div>
          <div>
            <button 
            className='remove-button'
            onClick={handleRemoveItem}
            >X
            </button>
          </div>
        </li>
    )); 

  };
  

  return (
    <main className="App">
      <div>
      <div>
        <h4 className='success'>You're Done</h4>
        <div className='header'>
          <h1>Shopping List</h1>
          <img src={groceryCartImg} alt="" />
          <input 
            type="text" 
            placeholder='Add an item' 
            className='item-input' 
            onChange={handleChangeInputValue}
            onKeyDown={handleAddGroceryItem}
            value={inputvalue}
          />
        </div>
      </div>
      <ul>
        {renderGroceryList()}
      </ul>
      </div>
    </main>
  )
}

export default App
