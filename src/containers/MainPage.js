import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../actions/gameActions';
import GameSettingsForm from '../components/GameSettingsForm';
import Workstations from '../components/Workstations';

export const MainPage = (props) => {
  let setUp = props.actions.setupWorkstations;
  let setCount = props.actions.setIterationCount;
  let runIts = props.actions.runIterations;
  let runTs = props.actions.runTurns;
  let timerActions = {
    start: props.actions.timerStart,
    trigger: props.actions.timerTrigger,
    stop: props.actions.timerStop
  };

  return (

    <main>
      <GameSettingsForm setupWorkstations={setUp} setIterationCount={setCount} runIterations={runIts} runTurns={runTs} gameData={props.gameData}/>
      <table>
        <tbody>
          <Workstations gameData={props.gameData} timerActions={timerActions}/>
        </tbody>
      </table>
    </main>
  );
};

MainPage.propTypes = {
  actions: PropTypes.object.isRequired,
  gameData: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {gameData: state.gameData};
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
