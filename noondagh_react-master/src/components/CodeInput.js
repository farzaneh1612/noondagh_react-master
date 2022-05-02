import React from 'react';
import {StyleSheet, View, TextInput} from 'react-native';
const numberSeparator = (number) => {
  const initialSeparated = number
    .toString()
    .replace(/\B(?=(\d{1})+(?!\d))/g, ',');
  return initialSeparated.split(',');
};

export default class CodeInput extends React.Component {
  constructor(props) {
    super(props);
    this.inputs = [];
    this.state = {
      inputValue: numberSeparator(this.props.code),
      showInputValue: [],
    };
  }

  componentDidMount() {
    if (this.state.inputValue) {
      this.state.inputValue.map((code, index) => {
        setTimeout(
          () =>
            this.setState({
              showInputValue: [...this.state.showInputValue, code],
            }),
          250 * (index + 1),
        );
        setTimeout(() => {
          if (index === this.props.inputsCount - 1) {
            this.props.onFillAll && this.props.onFillAll();
          }
        }, 250 * (this.props.inputsCount + 1));
      });
    }
  }

  _onKeyPress = (event, index) => {
    if (index > 0 && event.nativeEvent.key === 'Backspace') {
      this.inputs[index - 1].focus();
    }
  };

  _onChangeText = (text, index) => {
    console.log('text', text.length);
    if (index < this.props.inputsCount - 1 && text.length === 1) {
      this.inputs[index + 1].focus();
    } else if (text.length !== 0) {
      this.props.onFillAll && this.props.onFillAll();
    }
  };
  onChange = (e) => {
    console.log('event', e.target);
  };

  styles = StyleSheet.create({
    wrapper: {
      flexDirection: 'row',
      width: this.props.inputsCount * (this.props.inputWidth || 30),
      alignSelf: 'center',
    },
    input: {
      width: this.props.inputWidth || 30,
      textAlign: 'center',
    },
  });

  render() {
    const {inputsCount, inputsRef, wrapperStyles, inputStyles} = this.props;
    const {showInputValue} = this.state;

    return (
      <View ref={inputsRef} style={{...this.styles.wrapper, ...wrapperStyles}}>
        {[...Array(inputsCount)].map((_, index) => (
          <TextInput
            key={index + ''}
            ref={(input) => this.inputs.push(input)}
            maxLength={1}
            style={{...this.styles.input, ...inputStyles}}
            placeholder="__"
            defaultValue={
              (showInputValue[index] && showInputValue[index].toString()) || ''
            }
            onChangeText={(text) => this._onChangeText(text, index)}
            onChange={this.onChange}
            onKeyPress={(event) => this._onKeyPress(event, index)}
          />
        ))}
      </View>
    );
  }
}
