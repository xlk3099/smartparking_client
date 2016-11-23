'use strict';

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator 
} from 'react-native';
import { Color } from '../utils/theme';
import Home from './Home';
import Pick from './pick/Pick';
import Park from './park/Park';
import FloorPlan from './components/FloorPlan';

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
        return <Pick navigator={navigator} />;
      case 'park':
        return <Park navigator={navigator} />;
      case 'floowPlan':
        return <FloorPlan navigator={navigator} />;
      default:
        return <Home navigator={navigator} />;
    }
  }

  render() {
    return (
      <Navigator
        ref={this._setNavigatorRef}
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
