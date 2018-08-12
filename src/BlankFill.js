import React from 'react';

const BlankFill = (props) => {
  let classes = [
    'blankFill',
    `blankFill--${props.type}`,
  ];
  if (props.spaceAfter) {
    classes.push('blankFill--marginRight');
  }
  return (
    <div className={classes.join(' ')}>
      <div className="blankFill__type">{props.children}</div>
    </div>
  );
};

export default BlankFill;
