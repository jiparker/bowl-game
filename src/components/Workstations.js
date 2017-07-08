import React from 'react';
import PropTypes from 'prop-types';
import Workstation from './Workstation';
import DoneBucket from './DoneBucket';

const Workstations = (props) => {

  let items = [];
  for (let i = 0; i < props.gameData.workstations.length; i++) {
    let ws = (<Workstation key={props.gameData.workstations[i].id} workstation={props.gameData.workstations[i]} currentWorkstation={props.gameData.currentWorkstationId == i} timerActions={props.timerActions}/>);
    items.push(ws);
  }
  let done = (
    <td key={1000}>
      <DoneBucket doneCount={props.gameData.doneCount} runsCount={props.gameData.runsCount} newInDone={props.gameData.newInDone}/>

    </td>
  );
  if (items.length > 0) {
    items.push(done);
    return (
      <tr>{items}</tr>
    );
  } else {
    return (null);
  }
};
Workstations.propTypes = {
  gameData: PropTypes.object.isRequired,
  timerActions: PropTypes.object.isRequired
};

export default Workstations;
