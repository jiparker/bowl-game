import React from 'react';
import PropTypes from 'prop-types';

const Workstation = (props) => {
  let station = <span>This is workstation# {props.workstation.id}</span>;
  return (station);
};
Workstation.propTypes = {
  workstation: PropTypes.object.isRequired
};

export default Workstation;
