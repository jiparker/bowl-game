import React from 'react';
import PropTypes from 'prop-types';
import TextInput from './TextInput';
import Workstations from './Workstations';
// import Report from './Report';

class GameSettingsForm extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.workstationCountKeyPress = this.workstationCountKeyPress.bind(this);
    this.iterationCountKeyPress = this.iterationCountKeyPress.bind(this);
    this.runIterations = this.runIterations.bind(this);
  }

  workstationCountKeyPress(name, value) {
    this.props.setupWorkstations(this.props.gameData, name, value);
  }

  iterationCountKeyPress(name, value) {
    this.props.setIterationCount(this.props.gameData, name, value);
  }

  runIterations() {
    this.props.runIterations(this.props.gameData);
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
            <tr>
              <td>
                <label htmlFor="interationCount">Number of Iterations</label>

              </td>
              <td><TextInput onChange={this.iterationCountKeyPress} name="iterationCount" placeholder="enter number" value={gameData.iterationCount}/>
                <button onClick={this.runIterations}>Go</button>
              </td>
            </tr>
          </tbody>
        </table>
        <table>
          <tbody>
            <Workstations gameData={gameData}/>
          </tbody>
        </table>
      </div>
    );
  }
}
GameSettingsForm.propTypes = {
  setupWorkstations: PropTypes.func.isRequired,
  setIterationCount: PropTypes.func.isRequired,
  runIterations: PropTypes.func.isRequired,
  gameData: PropTypes.object.isRequired
};

export default GameSettingsForm;
