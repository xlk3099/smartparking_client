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
                available={lot.available}
                highlight={lot.highlight}
                key={lot.id}
                id={lot.id}
              />
            )
          })
          }    
        </Image>
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
  }

});
