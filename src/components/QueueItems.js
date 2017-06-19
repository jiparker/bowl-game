import React from 'react';
import PropTypes from 'prop-types';

const QueueItems = (props) => {
  let ball = (<div className="ball"/>);
  let items = [];
  let size = 0;
  if (props.queueSize >= 20) {
    size = 20;
  } else {
    size = props.queueSize;
  }
  for (let i = 0; i < size; i++) {
    items.push(ball);
  }
  return (
    <div className="balls">{items}</div>
  );
};

QueueItems.propTypes = {
  queueSize: PropTypes.object.isRequired
};

export default QueueItems;
