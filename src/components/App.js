import React from 'react';
import PropTypes from 'prop-types';
// import {Link, IndexLink} from 'react-router';

// This is a class-based component because the current
// version of hot reloading won't hot reload a stateless
// component at the top-level.
class App extends React.Component {
  render() {
    return (
      <div>
        <header>
          <h2>Game Name</h2>
        </header>
        <br/> {this.props.children}
        <footer>
          <a target="_blank" href="https://github.com/jiparker/bowl-game">Source</a>
        </footer>
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.element
};

export default App;
