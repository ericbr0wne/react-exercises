
import './App.css';
import Greeting from './components/Greeting'; 
import IncrementButton from './components/IncrementButton';
import DecrementButton from './components/DecrementButton';
import { useState } from 'react';
import JokeFetcher from './components/JokeFetcher';
import OnOffButton from './components/OnOffButton';


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
      <div>
      <h1>Skämt från API</h1>
      <JokeFetcher /> 
      <div>
        <h1>OnOffButton</h1>
        <OnOffButton/>
      </div>
    </div>
    </div>
    
  );
}

export default App;