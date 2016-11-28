'use strict';

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  TextInput
} from 'react-native';
import { Color } from '../../utils/theme';
import NavigationBar from 'react-native-navbar';
import Button from '../components/Button';

export default class PlateNumber extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ''
    };
  }

  render() {
    const { navigator } = this.props;
    return (
      <View style={styles.container}>
        <NavigationBar
          title={{ title: 'Pick my car' }}
          leftButton={{
            title: 'back',
            handler: navigator.pop
          }}
        />
        <View style={styles.content}>
          <Text style={styles.desc}>Enter car your plate number:</Text>
          <TextInput
            style={styles.textInput}
            onChangeText={(text) => this.setState({ text })}
            value={this.state.text}
            autoCapitalize='none'
            autoCorrect={false}
          />
          <Button 
            text='Locate my car' 
            onPress={() => navigator.push({ id: 'locateCar', plateNo: this.state.text }) }
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.White
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  desc: {
    margin: 10,
    color: Color.DarkPrimary,
    fontSize: 16
  },
  textInput: {
    marginHorizontal: 10,
    marginVertical: 5,
    height: 40,
    borderColor: Color.Gray, 
    borderWidth: 1
  }
});
