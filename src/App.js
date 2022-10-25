import './App.css';
import React from 'react';
import TurnComponent from './components/TurnTracker';
import ChivalryComponent from './components/ChivalricTracker';
import Header from './components/Header';
import CommandComponent from './components/CommandTracker';
import VPComponent from './components/VPTracker';

//Code to store state in local storage
function useStickyState(defaultValue, key) {
  const [value, setValue] = React.useState(() => {
    const stickyValue = window.localStorage.getItem(key);
    //If there's a value parse it, if not apply the default value provided from state
    return stickyValue !== null
      ? JSON.parse(stickyValue)
      : defaultValue;
  });
  React.useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);
  return [value, setValue];
}



function App() {
  //DONE: Add a reset button to reset all counters to 0
  const [turn, setTurn] = useStickyState(1, "turn");
  const [chivalry, setChivalry] = useStickyState(1, "chivalry");
  const [commandPoints, setCommandPoints] = useStickyState(1, "commandPoints");
  const [totalVP, setTotalVP] = useStickyState([0,0,0,0,0], "totalVP");
  const [code1, setCode1] = useStickyState("Select an Oath", "code1");
  const [code2, setCode2] = useStickyState("Select an Oath", "code2");

  return (
    <div className="App">
      <div className='Component'><Header chivalry={chivalry} totalVP={totalVP} setTurn={setTurn} setChivalry={setChivalry} setCommandPoints={setCommandPoints} setTotalVP={setTotalVP} setCode1={setCode1} code1={code1} code2={code2} setCode2={setCode2}/></div>
      <div id='row1'>
      <div className='Component'><TurnComponent turn={turn} setTurn={setTurn} commandPoints={commandPoints} setCommandPoints={setCommandPoints}/></div>
      <div className='Component'><ChivalryComponent chivalry={chivalry} setChivalry={setChivalry} setCode1={setCode1} setCode2={setCode2} code1={code1} code2={code2}/></div>
      <div className='Component'><CommandComponent commandPoints={commandPoints} setCommandPoints={setCommandPoints}/></div>
      <div className='Component'><VPComponent totalVP={totalVP} setTotalVP={setTotalVP}/></div>
      </div>
    </div>
  );
}

export default App;
