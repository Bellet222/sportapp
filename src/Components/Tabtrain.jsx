import React, { useState } from "react";




const Tabtrain = (props) => {
  return (
    <div className="blocktr">
      <div className="tab_tr">
        <p className="name_tr">{props.block.name}</p>
        <div className="left_tr">
          <p className="num_tr">{props.block.sides} \ {props.block.quant}</p>
          <button className="done_btn" onClick={() => props.remove(props.block)}>✓</button>
        </div>
      </div>
    </div>
  );
};

export default Tabtrain;
