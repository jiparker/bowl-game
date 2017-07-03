import React from 'react';
import PropTypes from 'prop-types';
import DiceSpinning from './DiceSpinning';
import DiceStopped from './DiceStopped';

const Dice = (props) => {

  let spinning = <DiceSpinning colorNumber={props.colorNumber}/>;
  let stopped = <DiceStopped colorNumber={props.colorNumber} faceValue={props.variantCapacity}/>;

  let diceResult;
  if (props.dice.status === "spinning") {
    diceResult = spinning;
  } else if (props.dice.status === "not spinning") {
    diceResult = stopped;
  } else {
    diceResult = <div id="empty"/>;
  }

  return (
    <div>
      {diceResult}
    </div>
  );
};

Dice.propTypes = {
  dice: PropTypes.object.isRequired,
  variantCapacity: PropTypes.number.isRequired,
  colorNumber: PropTypes.number.isRequired
};

export default Dice;
