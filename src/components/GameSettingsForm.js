import React from 'react';
import PropTypes from 'prop-types';

class GameSettingsForm extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <div>Form!!!!</div>
    );
  }
}
GameSettingsForm.propTypes = {
  setupWorkstations: PropTypes.func.isRequired
};

export default GameSettingsForm;
