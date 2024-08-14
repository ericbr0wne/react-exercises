
import './App.css';
import Greeting from './components/Greeting'; 
import IncrementButton from './components/IncrementButton';
import DecrementButton from './components/DecrementButton';
import { useState } from 'react';

function App() {

  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  }

  const handleDecrement = () => {
    setCount(count - 1);
  }

  return (
    <div>
      <Greeting name="John"/>
      <IncrementButton onClick={handleIncrement} />
      <DecrementButton onClick={handleDecrement} />
      <p>Count: {count}</p>
    </div>
  );
}

export default App;