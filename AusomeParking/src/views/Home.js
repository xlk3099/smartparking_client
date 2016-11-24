'use strict';

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import { Color } from '../utils/theme';
import Button from './components/Button';

export default class Home extends Component {
  static PropTypes = {
    navigator: React.PropTypes.func.isRequired
  }
  
  render() {
    const { navigator } = this.props;
    return (
      <View style={styles.container}>
        <Button 
          onPress={() => navigator.push({ id: 'park' }) }
          text='PARK my Car'
        />
        <Button 
          onPress={() => navigator.push({ id: 'pick' }) }
          text='PICK my Car'
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
