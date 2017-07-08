import React from 'react';
import PropTypes from 'prop-types';
import QueueItems from './QueueItems';
import Dice from './Dice';

const Workstation = (props) => {
  let clazz = props.currentWorkstation
    ? 'player current'
    : 'player';
  let image = <img src={require(`../images/Player${props.workstation.imageNumber}.png`)} className="img"/>;
  let station = (
    <td>
      <div className="queue">
        <QueueItems queueSize={props.workstation.queueSize} newInQueue={props.workstation.newInQueue}/>
      </div>
      <div className={clazz}>
        {image}
      </div>
      <div>
        <Dice dice={props.workstation.dice} colorNumber={props.workstation.imageNumber} variantCapacity={props.workstation.variantCapacity}/>
      </div>
    </td>
  );
  return (station);
};

Workstation.propTypes = {
  workstation: PropTypes.object.isRequired,
  timerActions: PropTypes.object.isRequired
};

export default Workstation;
