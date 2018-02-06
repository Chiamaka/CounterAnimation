import React, { PureComponent } from 'react';
import { View, Text, Animated, TouchableWithoutFeedback } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import PropTypes from 'prop-types';

export default class MinusButton extends PureComponent {
  render() {
    const translateMinusCircle = this.props.animationValue.interpolate({
      inputRange: [0, 1],
      outputRange: [60, 0]
    });

    const decrementCircleTransforms = {
      transform: [
        {
          scale: this.props.animationValue.interpolate({
            inputRange: [0, 1],
            outputRange: [1, 0.7]
          })
        },
        { translateX: translateMinusCircle }
      ]
    };

    return (
      <TouchableWithoutFeedback onPress={this.props.decreaseNumber}>
        <Animated.View style={[styles.counterDecrementStyle, decrementCircleTransforms]}>
          <Icon name="ios-remove" size={30} color={'rgb(130, 130, 130)'} />
        </Animated.View>
      </TouchableWithoutFeedback>
    );
  }
}

MinusButton.propTypes = {
  decreaseNumber: PropTypes.func,
  animationValue: PropTypes.object
};

const styles = {
  counterDecrementStyle: {
    borderRadius: 30,
    width: 60,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    shadowOpacity: 0.3,
    shadowOffset: { x: 0, y: 2 },
    shadowColor: 'black',
    backgroundColor: 'white',
    borderColor: 'rgb(130, 130, 130)',
    borderWidth: 3
  }
};
