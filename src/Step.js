import React from 'react';

const Step = (props) => {
  return (
    <div className={`step step--lines${props.lines}`} style={props.style}>
      <span className="step__number">{props.number}</span>
      {props.children}
    </div>
  );
};

Step.defaultProps = {
  lines: 1
};

export default Step;
