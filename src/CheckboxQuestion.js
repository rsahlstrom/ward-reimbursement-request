import React from 'react';

const CheckboxQuestion = (props) => {
  return (
    <p className="checkboxQuestion">
      <label>
        <input type="checkbox" />
        <span className="checkboxQuestion__checkBox" />
        {props.children}
      </label>
    </p>
  );
}

export default CheckboxQuestion;
