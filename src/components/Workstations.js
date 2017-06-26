import React from 'react';
import PropTypes from 'prop-types';
import Workstation from './Workstation';
import DoneBucket from './DoneBucket';

const Workstations = (props) => {

  let items = [];
  for (let i = 0; i < props.gameData.workstations.length; i++) {
    let ws = (<Workstation key={props.gameData.workstations[i].id} workstation={props.gameData.workstations[i]} currentWorkstation={props.gameData.currentWorkstation == i}/>);
    items.push(ws);
  }
  let done = (
    <td key={1000}>
      <DoneBucket doneCount={props.gameData.doneCount} runsCount={props.gameData.runsCount}/>

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
  gameData: PropTypes.object.isRequired
};

export default Workstations;
