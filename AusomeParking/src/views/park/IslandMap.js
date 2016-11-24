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
import MapView from 'react-native-maps';

export default class IslandMap extends Component {
  
  render() {
    const { navigator } = this.props;
    return (
      <View style={styles.container}>
        <NavigationBar
          title={{ title: 'Locate carpark' }}
          leftButton={{
            title: 'back',
            handler: this.props.navigator.pop
          }}
        />
        <View style={styles.content}>
          <View style={styles.mapContainer}>
            <MapView
              style={styles.map}
              initialRegion={{
                latitude: 1.3246301,
                longitude: 103.7643437,
                latitudeDelta: 0,
                longitudeDelta: 0,
              }}
            />
          </View>
          <Button
            onPress={() => navigator.push({ id: 'carparkMap' })}
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
    alignItems: 'stretch'
  },
  button: {
    flex: 0,
    padding: 10,
    backgroundColor: Color.Primary
  },
  buttonText: {
    color: Color.White
  },
  mapContainer: {
    flex: 1
  },
  map: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0
  }
});
