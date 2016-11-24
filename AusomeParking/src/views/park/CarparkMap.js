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
import NavigationBar from 'react-native-navbar';
import Carpark from '../components/Carpark';

export default class CarparkMap extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <NavigationBar
          title={{ title: 'Carpark layout' }}
          leftButton={{
            title: 'back',
            handler: this.props.navigator.pop
          }}
        />
        <Carpark />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
