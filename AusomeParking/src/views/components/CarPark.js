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
import ParkingLot from './ParkingLot';
import Road from './Road';

export default class Carpark extends Component {
  static PropTypes = {
    status: React.PropTypes.object.isRequired
  }

  constructor(props) {
    super(props);
    this.renderLots = this.renderLots.bind(this);
  }

  renderLots(startIndex, endIndex) {
    let { status } = this.props;
    let lots = [];
    let highlight, available;
    for(let ii = startIndex; ii <= endIndex; ii ++) {
      highlight = status[ii] && status[ii].highlight;
      available = status[ii] && status[ii].available;
      lots.push(
        <ParkingLot
          available={available}
          highlight={highlight}
          key={ii}
          id={ii}
        />
      );
    }
    
    return (
      <View style={styles.lots}>
        {lots}
      </View>
    );
  }
  
  render() {
    return (
      <ScrollView style={styles.content} horizontal={true}>
        {this.renderLots(1, 10)}
        <Road />
        {this.renderLots(11, 20)}
        <Road />
        {this.renderLots(21, 30)}
        <Road />
        {this.renderLots(31, 40)}
        <Road />
        {this.renderLots(41, 50)}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    padding: 10
  },
  lots: {
    width: 60,
    flexDirection: 'column'
  },
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
