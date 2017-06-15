import React from 'react';
import PropTypes from 'prop-types';
import TextInput from './TextInput';
import Workstations from './Workstations';

class GameSettingsForm extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.workstationCountKeyPress = this.workstationCountKeyPress.bind(this);
  }

  workstationCountKeyPress(name, value) {
    this.props.setupWorkstations(this.props.gameData, name, value);
  }

  render() {
    const {gameData} = this.props;

    return (
      <div>
        <h2>title</h2>
        <table>
          <tbody>
            <tr>
              <td>
                <label htmlFor="workstationCount">Number of Workstations</label>
              </td>
              <td><TextInput onChange={this.workstationCountKeyPress} name="workstationCount" placeholder="enter number" value={gameData.workstationCount}/>
              </td>
            </tr>
          </tbody>
        </table>
        <Workstations gameData={gameData}/>
      </div>
    );
  }
}
GameSettingsForm.propTypes = {
  setupWorkstations: PropTypes.func.isRequired,
  gameData: PropTypes.object.isRequired
};

export default GameSettingsForm;
