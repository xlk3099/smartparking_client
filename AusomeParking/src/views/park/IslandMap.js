'use strict';

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Animated
} from 'react-native';
import { Color } from '../../utils/theme';
import NavigationBar from 'react-native-navbar';
import Button from '../components/Button';
import MapView from 'react-native-maps';
import { status, json } from '../../utils/network';
import { CarparkCoords, SolarisCoord } from './islandMapData';

export default class IslandMap extends Component {
  static propTypes = {
    navigator: React.PropTypes.object.isRequired
  }

  constructor(props) {
    super(props);
    this.state = {
      selectedMarker: null,
      height: new Animated.Value(0)
    };
  }

  render() {
    const { navigator } = this.props;
    const { selectedMarker } = this.state;
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
                onSelect={() => {
                  this.setState({ selectedMarker: marker });
                  Animated.timing(
                    this.state.height, {
                      toValue: 150,
                      duration: 300
                  }).start();
                }}
              >
              </MapView.Marker>
            ))}
          </MapView>
          <Animated.View style={{
            backgroundColor: Color.White, 
            height: this.state.height
          }}>
            <Text style={styles.area}>
              {selectedMarker? selectedMarker.Area : ''}
            </Text>
            <Text style={styles.info}>
              <Text style={{fontWeight: 'bold'}}>
                {selectedMarker? selectedMarker.Lots + ' ' : ' '} 
              </Text>
               lots available 
            </Text>
            <Button 
              onPress={() => navigator.push({ id: 'carparkMap' })}
              text='Find empty lots'
            />
          </Animated.View>
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
  mapContainer: {
    flex: 1
  },
  area: {
    marginHorizontal: 10,
    marginTop: 10,
    marginBottom: 5,
    fontSize: 14
  },
  info: {
    marginHorizontal: 10,
    marginVertical: 5,
    fontSize: 18,
    color: Color.DarkPrimary
  }
});
