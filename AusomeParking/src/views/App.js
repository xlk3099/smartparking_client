'use strict';

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  StatusBar
} from 'react-native';
import Home from './Home';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar translucent={true} barStyle='default' />
        <Home />
      </View>  
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
