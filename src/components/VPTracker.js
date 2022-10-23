import React from 'react';


function VPComponent(props) {

// TODO add a decrement button for VP
  function handleIncrementClick(index) {
    const nextVP = props.totalVP.map((c, i) => {
      if (i === index) {
        // Increment the clicked counter
        return c + 1;
      } else {
        // The rest haven't changed
        return c;
      }
    });
    props.setTotalVP(nextVP);
  }

  return (
    <ul>
      {props.totalVP.map((counter, i) => (
        <li key={i}>
          {counter}
          {/* TODO: Stop counting at 15 */}
          <button onClick={() => {
            handleIncrementClick(i);
          }}>+1</button>
        </li>
      ))}
    </ul>
  );
}
  
  export default VPComponent;