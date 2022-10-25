import React from 'react';

function ChivalryComponent(props) {
    return (
      // TODO: add a selector to allow to chose oaths and display these somewhere
      <div className='buttonWrapper'>
        {/* button to increase chivalry by 1 to max of 6*/}
        <button className='customBtn' onClick={() => props.chivalry <6? props.setChivalry(props.chivalry + 1):props.setChivalry}>+</button>
        {/* display current chivalry */}
        <p>Code Chivalric: {props.chivalry}</p>
        {/* button to decrease chivalry by 1 to minimum of 0*/}
        <button className='customBtn' onClick={() => props.chivalry >0 ?props.setChivalry(props.chivalry - 1):props.setChivalry}>-</button>
{/* set contents of props.setCode1 based on dropdown box */}
{/* TODO: Set value of last selected and check for duplicates in list */}
        <select onChange={(e) => props.setCode1(e.target.value)}>
        <option value="Last Selected">{props.code1}</option>
          <option value="Protect Those in Need">Protect Those in Need</option>
          <option value="Defend the Realm">Defend the Realm</option>
          <option value="Refuse No Challenge">Refuse No Challenge</option>
          <option value="Lay Low the Tyrants">Lay Low the Tyrants</option>
          </select>
          <select onChange={(e) => props.setCode2(e.target.value)}>
          <option value="Last Selected">{props.code2}</option>
          <option value="Protect Those in Need">Protect Those in Need</option>
          <option value="Defend the Realm">Defend the Realm</option>
          <option value="Refuse No Challenge">Refuse No Challenge</option>
          <option value="Lay Low the Tyrants">Lay Low the Tyrants</option>
          </select>
        </div>



    );
  }
  
  export default ChivalryComponent;