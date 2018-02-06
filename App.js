import React, { Component } from 'react';
import { View } from 'react-native';
import { CompleteComponent } from './app/components/';

export default class App extends Component<{}> {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <CompleteComponent />
      </View>
    );
  }
}
