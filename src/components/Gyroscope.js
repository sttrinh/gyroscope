import React from 'react';

class Gyroscope extends React.Component {
  constructor(props) {
    super(props);

    this.sensor = undefined;

    this.state = {
      x: '',
      y: '',
      z: ''
    };

    this.handleReading = this.handleReading.bind(this);
  }

  componentDidMount() {
    if (window.Gyroscope) {
      navigator.permissions.query({ name: 'gyroscope' })
      .then((result) => {
        if (result.state === 'denied') {
          return;
        }

        this.sensor = new window.Gyroscope();
        this.sensor.addEventListener('reading', this.handleReading);
        this.sensor.start();
      });
    }
  }

  componentWillUnmount() {
    this.sensor && this.sensor.removeEventListener('reading', this.handleReading);
  }

  handleReading() {
    this.setState({
      x: this.sensor.x,
      y: this.sensor.y,
      z: this.sensor.z
    });
  }

  render() {
    return (
      <div>
        <h3>Gyroscope API</h3>
        <ul>
          <li>
            <strong>x</strong>: {this.state.x}
          </li>
          <li>
            <strong>y</strong>: {this.state.y}
          </li>
          <li>
            <strong>z</strong>: {this.state.z}
          </li>
        </ul>
      </div>
    );
  }
}

export default Gyroscope;
