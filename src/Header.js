import React from 'react';

const header = props => {
  return <h2 style={{ color: props.color }}>{props.title}</h2>;
};

export default header;
