import React from 'react';
import PropTypes from 'prop-types';

const TextInput = (props) => {
  const handleChange = (e) => {
    props.onChange(props.name, e.target.value);
  };
  return (<input className="small " type="text" placeholder={props.placeholder} value={props.value} onChange={handleChange}/>);
};
TextInput.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
export default TextInput;
