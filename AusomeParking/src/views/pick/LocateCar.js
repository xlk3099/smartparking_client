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
import { fetchCarparkStatus } from '../../utils/network';

export default class LocateCar extends Component {
  static propTypes = {
    plateNo: React.PropTypes.string.isRequired
  }

  constructor(props) {
    super(props);
    this.state = {
      status: {}
    };
  }

  componentDidMount() {
    let { plateNo } = this.props;
    fetchCarparkStatus()
    .then(data => {
      Object.keys(data).map((id) => {
        data[id].highlight = data[id].plateNo.toLowerCase() === plateNo.toLowerCase()
      });
      this.setState({ status: data });
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <NavigationBar
          title={{ title: 'Locate ' + this.props.plateNo }}
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
