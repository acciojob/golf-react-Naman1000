import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showBall: false,
      ballPosition: 0, // Ball's position from the left in pixels
    };
    this.buttonClickHandler = this.buttonClickHandler.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  // Method to handle the Start button click
  buttonClickHandler() {
    this.setState({ showBall: true });
  }

  // Method to handle the Right Arrow key press
  handleKeyDown(event) {
    if (event.key === 'ArrowRight' || event.keyCode === 39) {
      this.setState((prevState) => ({
        ballPosition: prevState.ballPosition + 5,
      }));
    }
  }

  // Adding the keydown event listener when the component mounts
  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyDown);
  }

  // Removing the keydown event listener when the component unmounts
  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyDown);
  }

  // Method to render either the Start button or the Ball
  renderChoice() {
    if (this.state.showBall) {
      return (
        <div
          className="ball"
          style={{ left: `${this.state.ballPosition}px` }}
        ></div>
      );
    } else {
      return (
        <button className="start" onClick={this.buttonClickHandler}>
          Start
        </button>
      );
    }
  }

  render() {
    return <div className="playground">{this.renderChoice()}</div>;
  }
}

export default App;
