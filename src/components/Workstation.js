import React from 'react';
import PropTypes from 'prop-types';
import QueueItems from './QueueItems';

const Workstation = (props) => {
  let imageNumber = getRandomInt(1, 10);
  let image = <img src={require(`../images/Player${imageNumber}.png`)} className="img"/>;
  let station = (
    <td>
      <div className="queue">
        <QueueItems queueSize={props.workstation.queueSize}/>
      </div>
      {image}
    </td>
  );
  return (station);
};

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}
Workstation.propTypes = {
  workstation: PropTypes.object.isRequired
};

export default Workstation;
