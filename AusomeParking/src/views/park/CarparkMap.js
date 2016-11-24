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
    this.state = {
      status: {
        1: {
          id: 1,
          available: true
        },
        2: {
          id: 2,
          available: true
        },
        3: {
          id: 2,
          available: true
        }
      }
    };
  }

  componentDidMount() {

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
        <Carpark status={this.state.status} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
