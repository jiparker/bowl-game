import React from 'react';
import PropTypes from 'prop-types';
import InputRange from 'react-input-range';

class GameSettingsForm extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.workstationCountKeyPress = this.workstationCountKeyPress.bind(this);
    this.runTurn = this.runTurn.bind(this);
    this.runIterations = this.runIterations.bind(this);
    this.state = {
      value: 6
    };
  }

  componentDidMount() {
    this.workstationCountKeyPress(this.state.value);
  }

  workstationCountKeyPress(value) {
    this.setState({value});
    this.props.setupWorkstations(this.props.gameData, "workstationCount", value);
  }

  firing(value) {
    this.setState({value});
  }

  runTurn() {
    this.props.runTurn(this.props.gameData);
  }

  runIterations() {
    this.props.runIterations(this.props.gameData);
  }

  render() {
    const turnButtonText = `Run Turn`;
    const iterationButtonText = `Run Iteration`;

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
              <div/>
            </td>
            <td>
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
  runTurn: PropTypes.func.isRequired,
  runIterations: PropTypes.func.isRequired,
  gameData: PropTypes.object.isRequired
};

export default GameSettingsForm;
