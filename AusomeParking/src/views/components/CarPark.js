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

export default class CarPark extends Component {
  constructor(props) {
    super(props);
    this.renderRoad = this.renderRoad.bind(this);
    this.renderLots = this.renderLots.bind(this);
  }

  renderRoad() {
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

  renderLots(startIndex, endIndex) {
    let lots = [];
    for(let ii = startIndex; ii <= endIndex; ii ++) {
      lots.push(
        <ParkingLot
          available={ii < 3}
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
        {this.renderLots(0, 9)}
        {this.renderRoad()}
        {this.renderLots(10, 19)}
        {this.renderRoad()}
        {this.renderLots(20, 29)}
        {this.renderRoad()}
        {this.renderLots(30, 39)}
        {this.renderRoad()}
        {this.renderLots(40, 49)}
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
