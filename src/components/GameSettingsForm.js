import React from 'react';
import PropTypes from 'prop-types';
import TextInput from './TextInput';
import InputRange from 'react-input-range';

// import Report from './Report';

class GameSettingsForm extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.workstationCountKeyPress = this.workstationCountKeyPress.bind(this);
    this.iterationCountKeyPress = this.iterationCountKeyPress.bind(this);
    this.runTurn = this.runTurn.bind(this);
    this.runIterations = this.runIterations.bind(this);
    this.state = {
      value: 1
    };
  }

  workstationCountKeyPress(value) {
    this.setState({value});
    this.props.setupWorkstations(this.props.gameData, "workstationCount", value);
  }

  firing(value) {
    this.setState({value});
  }

  iterationCountKeyPress(name, value) {
    this.props.setIterationCount(this.props.gameData, name, value);
  }

  runTurn() {
    this.props.runTurn(this.props.gameData);
  }

  runIterations() {
    this.props.runIterations(this.props.gameData);
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
            <td>
              <div className="slider">
                <InputRange maxValue={10} minValue={1} name="workstationCount" value={this.state.value} onChange={this.workstationCountKeyPress}/>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <label htmlFor="interationCount">Number of Turns</label>
            </td>
            <td>
              <TextInput onChange={this.iterationCountKeyPress} name="iterationCount" placeholder="enter number" value={gameData.iterationCount}/>
              <button onClick={this.runTurn}>{turnButtonText}</button>
              <button onClick={this.runIterations}>{iterationButtonText}</button>
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
  runIterations: PropTypes.func.isRequired,
  gameData: PropTypes.object.isRequired
};

export default GameSettingsForm;
