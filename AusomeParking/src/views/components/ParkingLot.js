'use strict';

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Animated,
  Image
} from 'react-native';
import { Color } from '../../utils/theme';
import NavigationBar from 'react-native-navbar';

export default class ParkingLot extends Component {
  static propTypes = {
    available: React.PropTypes.bool.isRequired,
    highlight: React.PropTypes.bool.isRequired,
    transform: React.PropTypes.array,
    handicapped: React.PropTypes.bool
  }

  static defaultProps = {
    available: false,
    highlight: false,
    transform: [],
    handicapped: false
  }

  constructor(props) {
    super(props);
    this.highlightColor = new Animated.Value(0)
  }

  componentDidMount() {
    this.cycleAnimation();
  }

  cycleAnimation() {
    Animated.sequence([
      Animated.timing(this.highlightColor, {
        toValue: 0,
        duration: 300,
        delay: 150
      }),
      Animated.timing(this.highlightColor, {
        toValue: 1,
        duration: 300,
        delay: 300
      })
    ]).start(() => {
      this.cycleAnimation();
    });
  }
  
  render() {
    const { available, highlight, transform } = this.props;
    return (
      <Animated.View style={[
        styles.cell,
        {
          backgroundColor: available? Color.Primary : Color.LightGray,
          borderColor: this.highlightColor.interpolate({
            inputRange: [0, 1],
            outputRange: ['red', 'rgba(0, 0, 0, 0)'],
          }),
          borderWidth: highlight? 3: 0,
          transform: transform
        }]}
      >
        {this.props.handicapped? 
          <Image 
            source={require('../../img/handi.png')} 
            resizeMode='contain'
            style={{
              opacity: 1,
              width: 24,
              height: 24
            }}
          /> : <View />
        }
        <Text style={{ 
            color: available? Color.White : Color.Dark, 
            fontWeight: 'bold' 
          }}
        >
          {this.props.id}
        </Text>
      </Animated.View>
    );
  }
}

const styles = StyleSheet.create({
  cell: {
    width: 63,
    height: 47.5,
    borderWidth: 1,
    margin: 1,
    alignItems: 'center',
    justifyContent: 'center',
    opacity: 0.8,
    flexDirection: 'row'
  }
});
