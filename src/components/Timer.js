import React from 'react';
import PropTypes from 'prop-types';

class Timer extends React.Component {
  constructor(props, context) {
    super(props, context);

  }

  componentDidMount() {
    let timer = setInterval(this.trigger(), this.props.intervalLength);
    this.start(timer);
  }

  componentWillUnmount() {

  }

  start(timer) {
    this.props.timerActions.timerStart(timer);
  }

  trigger() {
    this.props.timerActions.timerTrigger();
  }

  stop(timer) {
    this.props.timerActions.timerStop(timer);
  }

  render() {
    return null;
  }
}

Timer.propTypes = {
  intervalLength: PropTypes.number.isRequired,
  timerActions: PropTypes.object.isRequired
};

export default Timer;
