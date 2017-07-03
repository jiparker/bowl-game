import React from 'react';
import PropTypes from 'prop-types';
import {ROLL_MS} from '../constants/main';

class Timer extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.trigger = this.trigger.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.continue) {
      let timer = setTimeout(this.trigger, ROLL_MS);
      this.start(timer);
    }
  }

  componentWillUnmount() {
    if (this.props.timer) {
      clearTimeout(this.props.timer);
    }
  }

  start(timer) {
    this.props.timerActions.start(timer);
  }

  trigger() {
    this.props.timerActions.trigger();
  }

  render() {
    return null;
  }
}

Timer.propTypes = {
  intervalLength: PropTypes.number.isRequired,
  timerActions: PropTypes.object.isRequired,
  timer: PropTypes.number.isRequired
};

export default Timer;
