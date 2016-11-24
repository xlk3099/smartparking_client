'use strict';

import React, { Component } from 'react';
import {
  StyleSheet
} from 'react-native';
import { Color } from '../../utils/theme';
import NavigationBar from 'react-native-navbar';

export default class NavBar extends Component {
  static propTypes = {
    title: React.PropTypes.string.isRequired,
    onLeftPress: this.props.onLeftPress
  }
  render() {
    return (
      <NavigationBar
        title={{ title: this.props.title }}
        leftButton={{
          title: 'Back',
          handler: this.props.onLeftPress
        }}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
