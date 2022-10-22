import './App.css';
import VPButtons from './components/TurnTracker';
import {useState} from 'react';
import TurnComponent from './components/TurnTracker';

function App() {
  const [turn, setTurn] = useState(1);
  return (
    <div className="App">
      <TurnComponent turn={turn} setTurn={setTurn}/>
    </div>
  );
}

export default App;
