import React from 'react';
import PropTypes from 'prop-types';
import QueueItems from './QueueItems';

const Workstation = (props) => {
  let clazz = props.currentWorkstation
    ? 'player current'
    : 'player';
  let image = <img src={require(`../images/Player${props.workstation.imageNumber}.png`)} className="img"/>;
  let station = (
    <td>
      <div className="queue">
        <QueueItems queueSize={props.workstation.queueSize}/>
      </div>
      <div className={clazz}>
        {image}
      </div>
    </td>
  );
  return (station);
};
//     let imageNumber = getRandomInt(1, 10);
// let image = <img src={require(`../images/Player${imageNumber}.png`)} className="img"/>;
// function getRandomInt(min, max) {
//   min = Math.ceil(min);
//   max = Math.floor(max);
//   return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
// }
Workstation.propTypes = {
  workstation: PropTypes.object.isRequired
};

export default Workstation;
