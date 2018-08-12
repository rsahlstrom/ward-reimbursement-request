import React from 'react';

const Step = (props) => {
  return (
    <div className="step" style={props.style}>
      <span className="step__number">{props.number}</span>
      {props.children}
    </div>
  );
};

export default Step;
