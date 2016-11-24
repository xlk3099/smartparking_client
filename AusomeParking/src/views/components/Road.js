'use strict';

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { Color } from '../../utils/theme';

export default class Carpark extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.road}>
        <View style={styles.roadEmpty} />
        <View style={styles.roadMark} />
        <View style={styles.roadEmpty} />
        <View style={styles.roadMark} />
        <View style={styles.roadEmpty} />
        <View style={styles.roadMark} />
        <View style={styles.roadEmpty} />
        <View style={styles.roadMark} />
        <View style={styles.roadEmpty} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  road: {
    width: 60,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  roadMark: {
    height: 30,
    width: 2,
    backgroundColor: Color.Dark
  },
  roadEmpty: {
    height: 60
  }
});
