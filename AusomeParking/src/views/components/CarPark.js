'use strict';

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Button,
  Image
} from 'react-native';
import { Color } from '../../utils/theme';
import ParkingLot from './ParkingLot';
import Road from './Road';

const HandicappedLotID = '3';

export default class Carpark extends Component {
  static PropTypes = {
    status: React.PropTypes.object.isRequired
  }

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <Image
          resizeMode='cover'
          style={styles.floorPlan}
          source={require('../../img/carpark_cropped.gif')}
        >
          {Object.keys(this.props.status).map((id) => {
            let lot = this.props.status[id];
            return (
              <ParkingLot
                handicapped={id === HandicappedLotID}
                available={lot.available}
                highlight={lot.highlight}
                key={lot.id}
                id={lot.id}
              />
            )
          })
          }    
        </Image>
        <View style={styles.legend}>
          <View style={styles.legendItem}>
            <View style={[styles.box, styles.free]} />
            <Text>available</Text>
          </View>
          <View style={styles.legendItem}>
            <View style={[styles.box, styles.busy]} />
            <Text>occupied</Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row'
  },
  floorPlan: {
    flex: 1,
  },
  legend: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    width: 150,
    height: 100,
    backgroundColor: Color.LightGray,
    opacity: 0.8,
    padding: 10,
    borderWidth: 1,
    borderColor: Color.Gray
  },
  legendItem: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  box: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderColor: Color.Dark,
    margin: 10
  },
  free: {
    backgroundColor: Color.Primary
  },
  busy: {
    backgroundColor: Color.LightGray
  }
});
