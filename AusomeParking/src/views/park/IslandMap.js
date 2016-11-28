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
import { status, json } from '../../utils/network';
import { CarparkCoords, SolarisCoord } from './islandMapData';

const TRANSPORT_API_KEY = 'rSyNcaNvT329rwQYNAc8xw=='; //Accountkey
const TRANSPORT_API = 'http://datamall2.mytransport.sg/ltaodataservice/CarParkAvailability';

function fetchCarParkInfo() {
  return fetch(`${TRANSPORT_API}`, {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Accountkey': TRANSPORT_API_KEY
    }
  })
  .then(status)
  .then(json)
  .then(json => console.log(json))
}

export default class IslandMap extends Component {

  static propTypes = {
    navigator: React.PropTypes.object.isRequired
  }
  
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
              style={styles.mapContainer}
              loadingEnabled={true}
              showsUserLocation={true}
              initialRegion={{
                latitude: SolarisCoord.lat,
                longitude: SolarisCoord.lon,
                latitudeDelta: 0.02,
                longitudeDelta: 0.02,
              }}
            >
              {CarparkCoords.map(marker => (
                <MapView.Marker
                  key={marker.CarParkID}
                  coordinate={{
                    latitude: marker.Latitude, 
                    longitude: marker.Longitude 
                  }}
                  title={marker.Area}
                  description={marker.Lots + ' lots available'}
                >
                </MapView.Marker>
              ))}
            </MapView>
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
  }
});
