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
import { status, json } from '../../utils/network';

function fetchCarStatus() {
  return fetch('http://10.148.75.58:8080/parking')
  .then(status)
  .then(json)
}

export default class CarparkMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: {}
    };
  }

  componentDidMount() {
    this.updateState();
    this.inteval = setInterval(() => this.updateState(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.inteval);
  }

  updateState() {
    fetchCarStatus()
    .then(data => {
      this.setState({ status: data })
    });
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
