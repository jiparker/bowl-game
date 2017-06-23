import React from 'react';
import PropTypes from 'prop-types';
import QueueItems from './QueueItems'

const DoneBucket = (props) => {
  let total = `Total Processed: ${props.doneCount}`;
  let runs = `Total Runs: ${props.runsCount}`;
  let avg = Math.round(props.doneCount / props.runsCount * 100) / 100;
  let avgText = `Avg/Run: ${avg}`;
  return (
    <div className="bucket">
      <div className="queue done">
        <QueueItems queueSize={props.doneCount}/>
      </div>
      <div>{total}</div>
      <div>{runs}</div>
      <div>{avgText}</div>
    </div>
  );
};
DoneBucket.propTypes = {
  doneCount: PropTypes.number.isRequired,
  runsCount: PropTypes.number.isRequired
};

export default DoneBucket;
