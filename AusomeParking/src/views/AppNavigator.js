'use strict';

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Navigator 
} from 'react-native';
import { Color } from '../utils/theme';
import Home from './Home';
import PlateNumber from './pick/PlateNumber';
import LocateCar from './pick/LocateCar';
import IslandMap from './park/IslandMap';
import CarparkMap from './park/CarparkMap';

export default class AppNavigator extends Component {
  constructor(props) {
    super(props);
    this.renderScene = this.renderScene.bind(this);
  }

  renderScene(route, navigator) {
    switch(route.id) {
      case 'home':
        return <Home navigator={navigator} />;
      case 'pick':
        return <PlateNumber navigator={navigator} />;
      case 'locateCar':
        return <LocateCar navigator={navigator} plateNo={route.plateNo}/>;
      case 'park':
        return <IslandMap navigator={navigator} />;
      case 'carparkMap':
        return <CarparkMap navigator={navigator} />;
      default:
        return <Home navigator={navigator} />;
    }
  }

  render() {
    return (
      <Navigator
        style={styles.container}
        initialRoute={{ id: 'home' }}
        renderScene={this.renderScene}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
