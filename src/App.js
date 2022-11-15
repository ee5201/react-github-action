import logo from './logo.svg';
import './App.css';
import { useState } from 'react';


function App() {
  const[count,setCount] =useState(0)
  const [disabled,setdisabled] = useState(false);
  return (
    <div className="App">
      <header className="App-header">
        <h3 data-teestid="counter">{count}</h3>
        <button data-testid="minus-button" onClick= {() => setCount(prev => prev - 1)}
        disabled={disabled}>-</button>
        <button data-testid="plus-button" onClick= {() => setCount(prev => prev + 1)}
        disabled={disabled}>+</button>
        <div>
          <button style={{backgroundColor:"blue"}}
          data-testid="on/off-button"
          onClick={() => setdisabled(prev => !prev)}>
            on/off
          </button>
        </div>

        
      </header>
    </div>
  );
}

export default App;
