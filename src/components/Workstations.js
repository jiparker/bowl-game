import React from 'react';
import PropTypes from 'prop-types';
import Workstation from './Workstation';

const Workstations = (props) => {

  let items = [];
  for (let i = 0; i < props.gameData.workstations.length; i++) {
    let ws = (<Workstation key={props.gameData.workstations[i].id} workstation={props.gameData.workstations[i]}/>);
    items.push(ws);
  }
  if (items.length > 0) {
    return (
      <div>{items}</div>
    );
  } else {
    return (null);
  }
};
Workstations.propTypes = {
  gameData: PropTypes.object.isRequired
};

export default Workstations;
