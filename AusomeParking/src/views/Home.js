'use strict';

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableHighlight 
} from 'react-native';
import { Color } from '../utils/theme';

export default class Home extends Component {
  static PropTypes = {
    navigator: React.PropTypes.func.isRequired
  }
  
  render() {
    const { navigator } = this.props;
    return (
      <View style={styles.container}>
        <TouchableHighlight 
          style={styles.button} 
          onPress={() => navigator.push({ id: 'park' }) }
        >
          <Text style={styles.buttonText}>Park my Car</Text>
        </TouchableHighlight>
        <TouchableHighlight 
          style={styles.button}
          onPress={() => navigator.push({ id: 'pick' }) }
        >
          <Text style={styles.buttonText}>Pick my Card</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  button: {
    backgroundColor: Color.Primary,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginVertical: 20,
    borderRadius: 10
  },
  buttonText: {
    color: Color.White,
    fontSize: 20
  }
});
