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
    handicapped: React.PropTypes.bool
  }

  static defaultProps = {
    available: false,
    highlight: false,
    handicapped: false
  }

  constructor(props) {
    super(props);
    this.color = new Animated.Value(0);
  }

  componentDidMount() {
    if(this.props.highlight) this.cycleAnimation();
  }

  shouldComponentUpdate(nextProps) {
    return this.props.available !== nextProps.available ||
      this.props.highlight !== nextProps.highlight ||
      this.props.handicapped !== nextProps.handicapped;
   }

  componentDidUpdate() {
    if(this.props.highlight) this.cycleAnimation();
  }

  cycleAnimation() {
    Animated.sequence([
      Animated.timing(this.color, {
        toValue: 1,
        duration: 300,
        delay: 300
      }),
      Animated.timing(this.color, {
        toValue: 0,
        duration: 300,
        delay: 150
      })
    ]).start(() => {
      if(this.props.highlight) this.cycleAnimation();
    });
  }
  
  render() {
    const { available, handicapped } = this.props;
    return (
      <Animated.View style={[
        styles.cell,
        {
          backgroundColor: this.color.interpolate({
            inputRange: [0, 1],
            outputRange: [available? Color.Primary : Color.Accent, 'rgba(0, 0, 0, 0)'],
          })
        }]}
      >
        {handicapped? 
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
