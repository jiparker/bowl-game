import React from 'react';
import PropTypes from 'prop-types';
import TextInput from './TextInput';

// import Report from './Report';

class GameSettingsForm extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.workstationCountKeyPress = this.workstationCountKeyPress.bind(this);
    this.iterationCountKeyPress = this.iterationCountKeyPress.bind(this);
    this.runTurn = this.runTurn.bind(this);
    this.runTurns = this.runTurns.bind(this);
  }

  workstationCountKeyPress(name, value) {
    this.props.setupWorkstations(this.props.gameData, name, value);
  }

  iterationCountKeyPress(name, value) {
    this.props.setIterationCount(this.props.gameData, name, value);
  }

  runTurn() {
    this.props.runTurn(this.props.gameData);
  }

  runTurns() {
    this.props.runTurns(this.props.gameData);
  }

  render() {
    const {gameData} = this.props;
    const turnButtonText = `Run ${this.props.gameData.iterationCount} Turn(s)`;
    const iterationButtonText = `Run ${this.props.gameData.iterationCount} Iteration(s)`;

    return (
      <table>
        <tbody>
          <tr>
            <td>
              <label htmlFor="workstationCount">Number of Workstations</label>
            </td>
            <td><TextInput onChange={this.workstationCountKeyPress} name="workstationCount" placeholder="enter number" value={gameData.workstationCount}/>
            </td>
          </tr>
          <tr>
            <td>
              <label htmlFor="interationCount">Number of Turns</label>
            </td>
            <td>
              <TextInput onChange={this.iterationCountKeyPress} name="iterationCount" placeholder="enter number" value={gameData.iterationCount}/>
              <button onClick={this.runTurn}>{turnButtonText}</button>
              <button>{iterationButtonText}</button>
            </td>
          </tr>
        </tbody>
      </table>
    );
  }
}
GameSettingsForm.propTypes = {
  setupWorkstations: PropTypes.func.isRequired,
  setIterationCount: PropTypes.func.isRequired,
  runTurn: PropTypes.func.isRequired,
  runTurns: PropTypes.func.isRequired,
  gameData: PropTypes.object.isRequired
};

export default GameSettingsForm;
