import React from 'react';
import { FlexibleWidthXYPlot, HorizontalBarSeries} from 'react-vis';

class HorizontalBars extends React.Component {
  render() {
    return (
      <FlexibleWidthXYPlot margin={{left: 10, bottom: 10}} height={56} xDomain={[0, 60]}>
        <HorizontalBarSeries
          color={this.props.color.dark}
          data={[{x: this.props.series[0], y: 1}]}
        />
        <HorizontalBarSeries
          color={this.props.color.light}
          data={[{x: this.props.series[1], y: 1}]}
        />
      </FlexibleWidthXYPlot>
    );
  }
}

export default HorizontalBars;
