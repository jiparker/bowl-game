import React from 'react';
import PropTypes from 'prop-types';
import DiceSpinning from './DiceSpinning';

const Dice = (props) => {
  let stuff = `num: ${props.num}`;
  return (
    <div>{stuff}<DiceSpinning colorNumber={props.colorNumber}/></div>
  );
};

Dice.propTypes = {
  num: PropTypes.number.isRequired,
  colorNumber: PropTypes.number.isRequired
};

export default Dice;
