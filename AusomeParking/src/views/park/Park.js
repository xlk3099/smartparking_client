'use strict';

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import { Color } from '../../utils/theme';
import NavigationBar from 'react-native-navbar';
import Button from '../components/Button';

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
          <Text>Map to be dislayed</Text>
          <Button
            onPress={() => navigator.push({ id: 'parkingMap' })}
            text='Go'
          />
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
