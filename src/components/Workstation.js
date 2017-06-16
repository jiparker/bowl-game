import React from 'react';
import PropTypes from 'prop-types';

const Workstation = (props) => {
  let station = (
    <td>
      <div>station # {props.workstation.id}</div>
      <div>Items In Queue: {props.workstation.queueSize}</div>
    </td>
  );
  return (station);
};
Workstation.propTypes = {
  workstation: PropTypes.object.isRequired
};

export default Workstation;
