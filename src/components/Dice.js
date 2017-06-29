import React from 'react';
import PropTypes from 'prop-types';
import DiceSpinning from './DiceSpinning';

const Dice = (props) => {
  let stuff = `num: ${props.num}`;
  return (
    <div>{stuff}<DiceSpinning/></div>
  );
};

Dice.propTypes = {
  num: PropTypes.number.isRequired
};

export default Dice;
