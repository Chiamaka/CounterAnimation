import React, { PureComponent } from 'react';
import { View, Text, Animated, TouchableWithoutFeedback } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import PropTypes from 'prop-types';

export default class AddButton extends PureComponent {
  render() {
    const translatePlusCircle = this.props.animationValue.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 30]
    });

    const rotatePlusCircle = this.props.animationValue.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '90deg']
    });

    const incrementCirleTransforms = {
      transform: [
        {
          scale: this.props.animationValue.interpolate({
            inputRange: [0, 1],
            outputRange: [1, 0.7]
          })
        },
        { translateX: translatePlusCircle },
        { rotate: rotatePlusCircle }
      ]
    };

    return (
      <TouchableWithoutFeedback onPress={this.props.animateCircle}>
        <Animated.View style={[styles.counterIncrementStyle, incrementCirleTransforms]}>
          <Icon name="ios-add" size={30} color={'white'} />
        </Animated.View>
      </TouchableWithoutFeedback>
    );
  }
}

AddButton.propTypes = {
  animationValue: PropTypes.object,
  animateCircle: PropTypes.func.isRequired
};

const styles = {
  counterIncrementStyle: {
    borderRadius: 30,
    width: 60,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    shadowOpacity: 0.3,
    shadowOffset: {
      x: 0,
      y: 2
    },
    shadowColor: 'black',
    backgroundColor: 'rgb(49, 186, 201)'
  }
};
