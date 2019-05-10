import React from 'react';

class DeviceOrientation extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      alpha: '',
      beta: '',
      gamma: ''
    };

    this.handleOrientation = this.handleOrientation.bind(this);
  }

  componentDidMount() {
    if (window.DeviceOrientationEvent) {
      window.addEventListener('deviceorientation', this.handleOrientation);
    }
  }

  componentWillUnmount() {
    window.removeEventListener('deviceorientation', this.handleOrientation);
  }

  handleOrientation(event) {
    this.setState({
      alpha: event.alpha.toFixed(2),
      beta: event.beta.toFixed(2),
      gamma: event.gamma.toFixed(2)
    });
  }

  render() {
    return (
      <div>
        <h3>Device Orientation API</h3>
        <ul>
          <li>
            <strong>alpha</strong>: {this.state.alpha}
          </li>
          <li>
            <strong>beta</strong>: {this.state.beta}
          </li>
          <li>
            <strong>gamma</strong>: {this.state.gamma}
          </li>
        </ul>
      </div>
    );
  }
}

export default DeviceOrientation;
