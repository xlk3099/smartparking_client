'use strict';

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Animated
} from 'react-native';
import { Color } from '../../utils/theme';
import NavigationBar from 'react-native-navbar';

export default class ParkingLot extends Component {

  static propTypes = {
    available: React.PropTypes.bool.isRequired,
    highlight: React.PropTypes.bool.isRequired,
    transform: React.PropTypes.array
  }

  static defaultProps = {
    available: false,
    highlight: false,
    transform: []
  }
  
  render() {
    const { available, highlight, transform } = this.props;
    return (
      <Animated.View style={[
        styles.cell,
        {
          backgroundColor: available? Color.LightPrimary : Color.LightGray,
          borderColor: highlight? 'red' : Color.DarkGray,
          borderWidth: highlight? 3: 1,
          transform: transform
        }]}
      >
        <Text>{this.props.id}</Text>
      </Animated.View>
    );
  }
}

const styles = StyleSheet.create({
  cell: {
    width: 60,
    height: 40,
    borderWidth: 1,
    margin: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
