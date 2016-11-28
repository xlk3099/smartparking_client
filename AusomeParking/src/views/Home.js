'use strict';

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  Image,
  View,
  Dimensions 
} from 'react-native';
import { Color } from '../utils/theme';
import Button from './components/Button';

let  { height, width } = Dimensions.get('window');

export default class Home extends Component {
  static PropTypes = {
    navigator: React.PropTypes.func.isRequired
  }
  
  render() {
    const { navigator } = this.props;
    return (
      <View style={styles.container}>
        <Image 
          style={styles.hero} 
          source={require('../img/parking.jpg')} 
        />
        <Text style={styles.title}>
          Welcome to 
          <Text style={styles.branding}> auSome Parking!</Text>
        </Text>
        <Button 
          onPress={() => navigator.push({ id: 'park' }) }
          text='PARK my Car'
        />
        <Text style={styles.or}>or</Text>
        <Button 
          onPress={() => navigator.push({ id: 'pick' }) }
          text='PICK my Car'
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    fontSize: 24,
    marginBottom: 300
  },
  branding: {
    fontWeight: 'bold',
    color: Color.DarkPrimary
  },
  hero: {
    position: 'absolute',
    left: 0,
    top: 0,
    height: height,
    opacity: 0.5,
    backgroundColor: Color.Accent
  },
  or: {
    fontSize: 18
  }
});
