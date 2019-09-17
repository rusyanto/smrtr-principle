import React from 'react';
import { FlexibleWidthXYPlot, LineSeries, Hint } from 'react-vis';

class LinePlot extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: false};
  }

  render() {
    const {value} = this.state;
    return (
      <FlexibleWidthXYPlot
        margin={{left: 10, bottom: 10}}
        height={56}
        onMouseLeave={v => this.setState({value: false})}
      >
        <LineSeries
          color={this.props.color}
          onNearestX={v => this.setState({value: v})}
          data={this.props.data}
        />
        {value !== false && <Hint value={value} />}
      </FlexibleWidthXYPlot>
    );
  }
}

export default LinePlot;
