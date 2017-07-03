import React from 'react';
import PropTypes from 'prop-types';

const DiceStopped = (props) => {
  let color = `color-${props.colorNumber}`;
  let face;
  switch (props.faceValue) {
    case 1:
      face = (
        <div className="side front">
          <div className="dot center"/>
        </div>
      );
      break;
    case 2:
      face = (
        <div className="side front">
          <div className="dot dtop dleft"/>
          <div className="dot dbottom dright"/>
        </div>
      );
      break;
    case 3:
      face = (
        <div className="side front">
          <div className="dot dtop dleft"/>
          <div className="dot center"/>
          <div className="dot dbottom dright"/>
        </div>
      );
      break;
    case 4:
      face = (
        <div className="side front">
          <div className="dot dtop dleft"/>
          <div className="dot dtop dright"/>
          <div className="dot dbottom dleft"/>
          <div className="dot dbottom dright"/>
        </div>
      );
      break;
    case 5:
      face = (
        <div className="side front">
          <div className="dot center"/>
          <div className="dot dtop dleft"/>
          <div className="dot dtop dright"/>
          <div className="dot dbottom dleft"/>
          <div className="dot dbottom dright"/>
        </div>
      );
      break;
    case 6:
      face = (
        <div className="side front">
          <div className="dot dtop dleft"/>
          <div className="dot dtop dright"/>
          <div className="dot dbottom dleft"/>
          <div className="dot dbottom dright"/>
          <div className="dot center dleft"/>
          <div className="dot center dright"/>
        </div>
      );
      break;
  }

  return (
    <div id="stationary" className={color}>{face}</div>
  );
};

DiceStopped.propTypes = {
  colorNumber: PropTypes.number.isRequired,
  faceValue: PropTypes.number.isRequired
};

export default DiceStopped;
