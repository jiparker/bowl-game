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
        <QueueItems queueSize={props.workstation.queueSize}/>
      </div>
      <div className={clazz}>
        {image}
      </div>
      <div>
        <Dice num={props.workstation.variantCapacity} colorNumber={props.workstation.imageNumber} spinning={props.workstation.spinning} timerActions={props.timerActions}/>
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
