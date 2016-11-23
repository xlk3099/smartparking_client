'use strict';

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableHighlight 
} from 'react-native';
import { Color } from '../../utils/theme';
import NavigationBar from 'react-native-navbar';

export default class Park extends Component {
  
  render() {
    const { navigator } = this.props;
    return (
      <View style={styles.container}>
        <NavigationBar
          title={{ title: 'Park my car' }}
          leftButton={{
            title: 'back',
            handler: this.props.navigator.pop
          }}
        />
        <View style={styles.content}>
          <Text >Map to be dislayed</Text>
          <TouchableHighlight 
            style={styles.button}
            onPress={() => navigator.push({ id: 'floowPlan' })}
          >
            <Text style={styles.buttonText}>Go</Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  button: { 
    padding: 10,
    backgroundColor: Color.Primary
  },
  buttonText: {
    color: Color.White
  }
});
