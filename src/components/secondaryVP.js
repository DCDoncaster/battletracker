import React from "react";

function SecondaryVPComponent(props) {
  function incrementSecondaryVP(index) {
    const nextSecondaryVP = props.secondaryVP.map((list2, i) => {
      if (i === index) {
        // Increment the clicked counter
        return list2 === 15 ? 15 : list2 + 1;
      } else {
        // The rest haven't changed
        return list2;
      }
    });
    props.setSecondaryVP(nextSecondaryVP);
  }
function decrementSecondaryVP(index) {
    const nextSecondaryVP = props.secondaryVP.map((list2, i) => {
      if (i === index) {
        
        return list2 <= 0 ? 0 : list2 - 1;
      } else {
        
        return list2;
      }
    });
    props.setSecondaryVP(nextSecondaryVP);
  }

  return <div className="secondaryVPHolder">
{props.secondaryVP.map((map2ndVP,index)=>{
  return <div className="VP2Div">
    <button className="customBtn" onClick={() => incrementSecondaryVP(index)}>+</button>
    <p>Secondary {index+1} <br />VP: {map2ndVP}</p>
    <button className="customBtn" onClick={() => decrementSecondaryVP(index)}>-</button>
  </div>
})}
</div>






}

export default SecondaryVPComponent;
