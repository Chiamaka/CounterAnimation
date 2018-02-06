import React, { PureComponent } from 'react';
import { View, Animated, Text } from 'react-native';
import PropTypes from 'prop-types';

export default class Counter extends PureComponent {
  render() {
    const textStyle = this.props.counterAnimation.interpolate({
      inputRange: [0, 0.5, 1],
      outputRange: [1, 1.5, 1]
    });

    const textStyleTransform = {
      transform: [{
        scale: textStyle
      }]
    };

    const shakeMotionTransform = {
      transform: [
        {
          translateX: this.props.shakeMotion.interpolate({
            inputRange: [0, 0.08, 0.25, 0.41, 0.58, 0.75, 0.92, 1],
            outputRange: [0, -10, 10, -10, 10, -5, 5, 0]
          })
        }
      ]
    };

    const counterDisplayTransforms = {
      transform: [
        {
          translateX: this.props.animationValue.interpolate({
            inputRange: [0, 1],
            outputRange: [120, 100]
          })
        }
      ]
    };

    const conditionalStyle = () => this.props.counter > 0 ? textStyleTransform : shakeMotionTransform;

    return (
      <Animated.View style={[styles.counterDisplayStyle, counterDisplayTransforms]}>
        <Animated.Text style={[styles.textStyle, conditionalStyle()]}>
          {this.props.counter}
        </Animated.Text>
      </Animated.View>
      );
  }
}

Counter.propTypes = {
  counterAnimation: PropTypes.object,
  shakeMotion: PropTypes.object,
  animationValue: PropTypes.object,
  counter: PropTypes.number
};

const styles = {
  counterDisplayStyle: {
    backgroundColor: 'rgb(240,240,240)',
    borderRadius: 30,
    borderColor: 'rgb(240,240,240)',
    borderWidth: 1,
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textStyle: {
    fontSize: 28
  }
};
