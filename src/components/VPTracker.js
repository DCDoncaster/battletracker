import React from 'react';


function VPComponent(props) {

// TODO add a decrement button for VP
  function handleIncrementClick(index) {
    const nextVP = props.totalVP.map((c, i) => {
      if (i === index) {
        // Increment the clicked counter
        return c===15? 15: c + 1;
      } else {
        // The rest haven't changed
        return c;
      }
    });
    props.setTotalVP(nextVP);
  }
  function handleDecrementClick(index) {
    const nextVP = props.totalVP.map((c, i) => {
      if (i === index) {
        // Increment the clicked counter
        return c<=0? 0: c - 1;
      } else {
        // The rest haven't changed
        return c;
      }
    });
    props.setTotalVP(nextVP);
  }

  return (
    <div><h3>VP</h3>
    <ul>
      {props.totalVP.map((counter, i) => (
        <li key={i}>
          {counter}
          {/* TODO: Stop counting at 15 */}
          <button onClick={() => {
            handleIncrementClick(i);
          }}>+1</button>
          <button onClick={() => {
            handleDecrementClick(i);
          }}>-1</button>
        </li>
      ))}
    </ul>
    </div>
  );
}
  
  export default VPComponent;