'use strict';

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ScrollView  
} from 'react-native';
import { Color } from '../../utils/theme';
import NavigationBar from 'react-native-navbar';

export default class ParkingLot extends Component {

  static propTypes = {
    available: React.PropTypes.bool.isRequired,
    transform: React.PropTypes.array
  }

  static defaultProps = {
    available: true,
    transform: []
  }
  
  render() {
    const { available, transform } = this.props;
    return (
      <View style={[
        styles.cell,
        {
          backgroundColor: available? Color.LightPrimary : Color.LightGray,
          transform: transform
        }]}
      > 
      </View>
    );
  }
}

const styles = StyleSheet.create({
  cell: {
    width: 60,
    height: 40,
    borderColor: Color.Dark,
    borderWidth: 1,
    margin: 1
  }
});
