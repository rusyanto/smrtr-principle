import React from 'react';
import { RadialChart } from 'react-vis'

class PieChart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: false};
  }

  render() {
    return (
      <RadialChart
        colorType={'literal'}
        data={this.props.data}
        width={125}
        height={125}
      />
    );
  }
}

export default PieChart;
