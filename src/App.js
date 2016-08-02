import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
    };
  }

  render() {
    return (
      <div>
        { this.state.counter } <a onClick={() => this.setState({ counter: this.state.counter + 1 })}>increment</a>
      </div>
    );
  }
}

export default App;
