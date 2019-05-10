import React from 'react';

class RelativeOrientation extends React.Component {
  constructor(props) {
    super(props);

    this.sensor = undefined;

    this.state = {
      a: '',
      b: '',
      c: '',
      d: ''
    };

    this.handleReading = this.handleReading.bind(this);
  }

  componentDidMount() {
    if (window.RelativeOrientationSensor) {
      Promise.all([navigator.permissions.query({ name: 'accelerometer' }),
                   navigator.permissions.query({ name: 'gyroscope' })])
             .then((results) => {
               if (results.every(result => result.state === 'granted')) {
                 this.sensor = new window.RelativeOrientationSensor({
                   referenceFrame: 'device'
                 });
                 this.sensor.addEventListener('reading', this.handleReading);
                 this.sensor.start();
               }
             })
    }
  }

  componentWillUnmount() {
    this.sensor && this.sensor.removeEventListener('reading', this.handleReading);
  }

  handleReading() {
    this.setState({
      a: this.sensor.quaternion[0],
      b: this.sensor.quaternion[1],
      c: this.sensor.quaternion[2],
      d: this.sensor.quaternion[3]
    });
  }

  render() {
    return (
      <div>
        <h3>Relative Orientation Sensor API</h3>
        <ul>
          <li>
            <strong>[0]</strong>: {this.state.a}
          </li>
          <li>
            <strong>[1]</strong>: {this.state.b}
          </li>
          <li>
            <strong>[2]</strong>: {this.state.c}
          </li>
          <li>
            <strong>[3]</strong>: {this.state.d}
          </li>
        </ul>
      </div>
    );
  }
}

export default RelativeOrientation;
