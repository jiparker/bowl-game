import React from 'react';
import PropTypes from 'prop-types';
import ballFactory from '../utils/ballFactory';

const QueueItems = (props) => {

  let ballObjects = ballFactory().buildBallObjects(props.queueSize);
  let items = [];

  for (let i = 0; i < 20; i++) {
    let ball = (<div key={i + 1} className={`ball ${ballObjects[i].clazzName}`}/>);
    items.push(ball);
  }

  return (
    <div className="balls">{items}</div>
  );
};

QueueItems.propTypes = {
  queueSize: PropTypes.number.isRequired
};

export default QueueItems;
