'use strict';

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Alert
} from 'react-native';
import { Color } from '../../utils/theme';
import NavigationBar from 'react-native-navbar';
import Carpark from '../components/Carpark';
import { fetchCarparkStatus } from '../../utils/network';

const MyPlateNo = '9CA300';
const HandicappedLotID = '3';

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
    fetchCarparkStatus()
    .then(data => {
      let myNo = MyPlateNo.toLowerCase();
      let status = this.state.status;
      let prevNo = status[HandicappedLotID] && status[HandicappedLotID].plateNo.toLowerCase();
      let newNo = data[HandicappedLotID] && data[HandicappedLotID].plateNo.toLowerCase();
      if(prevNo !== newNo && newNo === myNo) {
        clearInterval(this.inteval);
        Alert.alert(
          'Illegal Parking',
          'You have parked in a handicapped lot!',
          [
            {
              text: 'OK', 
              onPress: () => {
                this.inteval = setInterval(() => this.updateState(), 1000);
              }
            },
          ]
        );
      }
      this.setState({ status: data });
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
