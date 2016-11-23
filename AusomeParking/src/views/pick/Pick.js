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

export default class Pick extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text >Enter your plate number:</Text>
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
