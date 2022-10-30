import React from "react";
//TODO: Stop VP being changed for none current turn
function VPComponent(props) {
  // DONE add a decrement button for VP
  function handleIncrementClick(index) {
    const nextVP = props.totalVP.map((list, i) => {
      if (i === index) {
        // Increment the clicked counter
        return list === 15 ? 15 : list + 1;
      } else {
        // The rest haven't changed
        return list;
      }
    });
    props.setTotalVP(nextVP);
  }
  function handleDecrementClick(index) {
    const nextVP = props.totalVP.map((list, i) => {
      if (i === index) {
        // Increment the clicked counter
        return list <= 0 ? 0 : list - 1;
      } else {
        // The rest haven't changed
        return list;
      }
    });
    props.setTotalVP(nextVP);
  }

return <div id='primaryVPHolder'>
{props.totalVP.map((mapVP,index)=>{
  return <div className="VPDiv">
    <button className="customBtn" onClick={() => handleIncrementClick(index)}>+</button>
    <p>Turn {index+1} VP: {mapVP}</p>
    <button className="customBtn" onClick={() => handleDecrementClick(index)}>-</button>
  </div>
})}
</div>


}

export default VPComponent;
