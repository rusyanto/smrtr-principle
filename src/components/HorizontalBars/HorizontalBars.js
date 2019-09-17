import React from 'react';
import { FlexibleWidthXYPlot, HorizontalBarSeries, Hint} from 'react-vis';

class HorizontalBars extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: false};
  }

  render() {
    const {value} = this.state;
    return (
      <FlexibleWidthXYPlot margin={{left: 10, bottom: 10}} height={56} xDomain={[0, 60]}>
        <HorizontalBarSeries
          color={this.props.color.dark}
          onValueMouseOver={v => this.setState({value: v})}
          onValueMouseOut={v => this.setState({value: false})}
          data={[{x: this.props.series[0], y: 1}]}
        />
        <HorizontalBarSeries
          color={this.props.color.light}
          onValueMouseOver={v => this.setState({value: v})}
          onValueMouseOut={v => this.setState({value: false})}
          data={[{x: this.props.series[1], y: 1}]}
        />
        {value !== false && <Hint value={value} />}
      </FlexibleWidthXYPlot>
    );
  }
}

export default HorizontalBars;
