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
        <View style={styles.heroContainer}>
          <Image 
            style={styles.hero} 
            source={require('../img/parking.jpg')}
          />
          <View style={styles.heroOverlay} />
        </View>
        <View style={styles.header}>
          <Text style={styles.title}>
            Good Morning  
            <Text style={styles.branding}> Luke</Text>,
          </Text>
          <Text style={styles.subtitle}>
            Your car registration number is 
            <Text style={styles.plate}> 9CA300</Text>,
          </Text>
        </View>
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
  header: {
    marginBottom: 150,
    alignItems: 'center',
    flexDirection: 'column'
  },
  title: {
    marginVertical: 5,
    fontSize: 24,
    textAlign: 'center'
  },
  branding: {
    
  },
  subtitle: {
    marginVertical: 5,
    fontSize: 18,
    textAlign: 'center'
  },
  plate: {
    color: Color.Accent,
    fontWeight: 'bold'
  },
  heroContainer: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0
  },
  hero: {
    flex: 1
  },
  heroOverlay: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: Color.LightGray,
    opacity: .8
  },
  or: {
    fontSize: 18
  }
});
