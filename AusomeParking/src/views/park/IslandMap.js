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

const SolarisCoord = {
  lat: 1.2982,
  lon: 103.7895
}

const MockCarparkCoords = [{
  "CarParkID": 1,
  "Area": "Marina",
  "Development": "Suntec City",
  "Latitude": 1.29375,
  "Longitude": 103.85718,
  "Lots": 628
  }, {
  "CarParkID": 2,
  "Area": "Marina",
  "Development": "Marina Square",
  "Latitude": 1.29115,
  "Longitude": 103.85728,
  "Lots": 507
  }, {
  "CarParkID": 4,
  "Area": "Marina",
  "Development": "The Esplanade",
  "Latitude": 1.29011,
  "Longitude": 103.85561,
  "Lots": 372
  }, {
  "CarParkID": 5,
  "Area": "Marina",
  "Development": "Millenia Singapore",
  "Latitude": 1.29251,
  "Longitude": 103.86009,
  "Lots": 332
  }, {
  "CarParkID": 6,
  "Area": "Marina",
  "Development": "Singapore Flyer",
  "Latitude": 1.28944,
  "Longitude": 103.86311,
  "Lots": 258
  }, {
  "CarParkID": 16,
  "Area": "Harbfront",
  "Development": "VivoCity P3",
  "Latitude": 1.26421,
  "Longitude": 103.82263,
  "Lots": 13
  }, {
  "CarParkID": 17,
  "Area": "Harbfront",
  "Development": "Sentosa",
  "Latitude": 1.25017,
  "Longitude": 103.83126,
  "Lots": 721
  }, {
  "CarParkID": 19,
  "Area": "Harbfront",
  "Development": "Harbourfront Centre",
  "Latitude": 1.26426,
  "Longitude": 103.82011,
  "Lots": 314
  }, {
  "CarParkID": 50,
  "Area": "Harbfront",
  "Development": "VivoCity P2",
  "Latitude": 1.26426,
  "Longitude": 103.82164,
  "Lots": 60
  }, {
  "CarParkID": 20,
  "Area": "Orchard",
  "Development": "Far East Plaza",
  "Latitude": 1.3071,
  "Longitude": 103.83359,
  "Lots": 87
  }, {
  "CarParkID": 18,
  "Area": "Orchard",
  "Development": "Tang Plaza",
  "Latitude": 1.30491,
  "Longitude": 103.83312,
  "Lots": 148
  }, {
  "CarParkID": 13,
  "Area": "Orchard",
  "Development": "Ngee Ann City",
  "Latitude": 1.30236,
  "Longitude": 103.8349,
  "Lots": 342
  }, {
  "CarParkID": 12,
  "Area": "Orchard",
  "Development": "Mandarin Hotel",
  "Latitude": 1.30216,
  "Longitude": 103.83601,
  "Lots": 92
  }, {
  "CarParkID": 24,
  "Area": "Orchard",
  "Development": "313@Somerset",
  "Latitude": 1.30084,
  "Longitude": 103.83872,
  "Lots": 1
  }, {
  "CarParkID": 7,
  "Area": "Orchard",
  "Development": "Orchard Point",
  "Latitude": 1.30135,
  "Longitude": 103.84061,
  "Lots": 92
  },
    {
  "CarParkID": 22,
  "Area": "Orchard",
  "Development": "Concorde Hotel",
  "Latitude": 1.3006,
  "Longitude": 103.84191,
  "Lots": 139
  }, {
  "CarParkID": 9,
  "Area": "Orchard",
  "Development": "Plaza Singapura",
  "Latitude": 1.30103,
  "Longitude": 103.84503,
  "Lots": 0
  }, {
  "CarParkID": 10,
  "Area": "Orchard",
  "Development": "The Cathay",
  "Latitude": 1.2995,
  "Longitude": 103.84762,
  "Lots": 0
  }, {
  "CarParkID": 23,
  "Area": "Orchard",
  "Development": "ION Orchard",
  "Latitude": 1.30403,
  "Longitude": 103.83206,
  "Lots": 1
  }, {
  "CarParkID": 14,
  "Area": "Orchard",
  "Development": "Wisma Atria",
  "Latitude": 1.30366,
  "Longitude": 103.83327,
  "Lots": 22
  }, {
  "CarParkID": 8,
  "Area": "Orchard",
  "Development": "The Heeren",
  "Latitude": 1.30255,
  "Longitude": 103.83739,
  "Lots": 0
  }, {
  "CarParkID": 26,
  "Area": "Harbfront",
  "Development": "Resorts World Sentosa",
  "Latitude": 1.25667,
  "Longitude": 103.82012,
  "Lots": 1573
  }, {
  "CarParkID": 27,
  "Area": "Orchard",
  "Development": "Orchard Central",
  "Latitude": 1.30072,
  "Longitude": 103.83979,
  "Lots": 0
  }, {
  "CarParkID": 29,
  "Area": "Marina",
  "Development": "Marina Bay Sands",
  "Latitude": 1.28225028515239,
  "Longitude": 103.858300275795,
  "Lots": 19
  }, {
  "CarParkID": 43,
  "Area": "JurongLakeDistrict",
  "Development": "Westgate",
  "Latitude": 1.3343,
  "Longitude": 103.74282,
  "Lots": 0
  }, {
  "CarParkID": 51,
  "Area": "Orchard",
  "Development": "Holiday Inn",
  "Latitude": 1.30228007106279,
  "Longitude": 103.841129960081,
  "Lots": 134
  }, {
  "CarParkID": 53,
  "Area": "JurongLakeDistrict",
  "Development": "IMM Building",
  "Latitude": 1.334847,
  "Longitude": 103.746815,
  "Lots": 7
  }, {
  "CarParkID": 54,
  "Area": "JurongLakeDistrict",
  "Development": "JCube",
  "Latitude": 1.33341,
  "Longitude": 103.740088,
  "Lots": 1
  }, {
  "CarParkID": 55,
  "Area": "Orchard",
  "Development": "Paragon",
  "Latitude": 1.3038,
  "Longitude": 103.83585,
  "Lots": 12
  }, {
  "CarParkID": 56,
  "Area": "Marina",
  "Development": "National Gallery",
  "Latitude": 1.29027,
  "Longitude": 103.85167,
  "Lots": 132
  }, {
    "CarParkID": 57,
    "Area": "One North",
    "Development": "JTC",
    "Latitude": SolarisCoord.lat,
    "Longitude": SolarisCoord.lon,
    "Lots": 12
  }
]

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
                latitudeDelta: 0.04,
                longitudeDelta: 0.04,
              }}
              onCalloutPress={(e) => {
                console.log('callout pressed:', e)
                navigator.push({ id: 'carparkMap' })
              }}
            >
              {MockCarparkCoords.map(marker => (
                <MapView.Marker
                  key={marker.CarParkID}
                  coordinate={{latitude: marker.Latitude, longitude: marker.Longitude }}
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
  },
  // map: {
  //   position: 'absolute',
  //   top: 0,
  //   left: 0,
  //   right: 0,
  //   bottom: 0
  // }
});
