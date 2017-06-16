import React from 'react';
import PropTypes from 'prop-types';

const DoneBucket = (props) => {
  let total = `Total Processed:  ${props.doneCount}`;
  let runs = `Total Runs:  ${props.runsCount}`;
  let avg = Math.round(props.doneCount / props.runsCount * 100) / 100;
  let avgText = `Average Processed/Run:  ${avg}`;
  return (
    <td>
      <div>{total}</div>
      <div>{runs}</div>
      <div>{avgText}</div>
    </td>
  );
};
DoneBucket.propTypes = {
  doneCount: PropTypes.number.isRequired,
  runsCount: PropTypes.number.isRequired
};

export default DoneBucket;
