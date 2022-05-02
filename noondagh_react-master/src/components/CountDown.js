import React, {Component} from 'react';
import {View} from 'react-native';
import {colors} from '../styles/publicStyles';
import {XText} from './XPublics';

export default class CountDown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      initialState: this.props.duration,
    };

    this.timer = null;
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      if (this.state.initialState === 1) {
        this.props.onFinish();
        clearInterval(this.timer);
      }

      this.setState({
        initialState: this.state.initialState - 1,
      });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    return (
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <XText
          textAlign="center"
          style={{width: 30}}
          light
          color={colors.cancelColor}
          h2>
          0{Math.floor(this.state.initialState / 60)}
          {' : '}
        </XText>
        <XText
          textAlign="center"
          style={{width: 30}}
          light
          color={colors.cancelColor}
          h2>
          {this.state.initialState % 60 < 10
            ? `0${this.state.initialState % 60}`
            : this.state.initialState % 60}
        </XText>
      </View>
    );
  }
}
