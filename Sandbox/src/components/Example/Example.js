import React from 'react'
import {View} from 'react-native';
import { ProgressCircle }  from 'react-native-svg-charts'

export default class ProgressCircleExample extends React.PureComponent {

  state = {
    progress: 0.6
  };

  componentDidMount() {
  }

  render() {
    const {progress} = this.state;

    return (
      <View style={{width: 200, height: 200}}>
        <ProgressCircle
          style={ { height: 200 } }
          progress={ progress }
          progressColor={'rgb(134, 65, 244)'}
        />
      </View>

    )
  }

}
