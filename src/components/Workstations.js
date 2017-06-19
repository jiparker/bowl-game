import React from 'react';
import PropTypes from 'prop-types';
import Workstation from './Workstation';
import DoneBucket from './DoneBucket';
import QueueItems from './QueueItems'

const Workstations = (props) => {

  let items = [];
  for (let i = 0; i < props.gameData.workstations.length; i++) {
    let ws = (<Workstation key={props.gameData.workstations[i].id} workstation={props.gameData.workstations[i]}/>);
    items.push(ws);
  }
  let done = <DoneBucket key={items.length + 1} doneCount={props.gameData.doneCount} runsCount={props.gameData.runsCount}/>;
  if (items.length > 0) {
    items.push(done);
    return (
      <tr>{items}<QueueItems queueSize={props.gameData.doneCount}/></tr>
    );
  } else {
    return (null);
  }
};
Workstations.propTypes = {
  gameData: PropTypes.object.isRequired
};

export default Workstations;
