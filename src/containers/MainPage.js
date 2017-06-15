import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../actions/gameActions';
import GameSettingsForm from '../components/GameSettingsForm';

export const MainPage = (props) => {
  return (<GameSettingsForm setupWorkstations={props.actions.setupWorkstations} gameData={props.gameData}/>);
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
