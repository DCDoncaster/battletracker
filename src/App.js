import './App.css';
import {useState} from 'react';
import TurnComponent from './components/TurnTracker';
import ChivalryComponent from './components/ChivalricTracker';
import Header from './components/Header';
import CommandComponent from './components/CommandTracker';

function App() {
  const [turn, setTurn] = useState(1);
  const [chivalry, setChivalry] = useState(1);
  const [commandPoints, setCommandPoints] = useState(1);
  const [totalVP, setTotalVP] = useState(0);


  return (
    <div className="App">
      <div className='Component'><Header chivalry={chivalry} totalVP={totalVP}/></div>

      <div id='row1'>
      <div className='Component'><TurnComponent turn={turn} setTurn={setTurn} commandPoints={commandPoints} setCommandPoints={setCommandPoints}/></div>
      <div className='Component'> <ChivalryComponent chivalry={chivalry} setChivalry={setChivalry}/></div>
      <div className='Component'><CommandComponent commandPoints={commandPoints} setCommandPoints={setCommandPoints}/></div>
      </div>

    </div>
  );
}

export default App;
