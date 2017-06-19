import React from 'react';
import PropTypes from 'prop-types';
import QueueItems from './QueueItems'

const Workstation = (props) => {
  let station = (
    <td>

      <div className="queue">
        <QueueItems queueSize={props.workstation.queueSize}/>
        <span className="queue">{props.workstation.queueSize}</span>
      </div>
      <div className="workstation">
        # {props.workstation.id}</div>
    </td>
  );
  return (station);
};
Workstation.propTypes = {
  workstation: PropTypes.object.isRequired
};

export default Workstation;
