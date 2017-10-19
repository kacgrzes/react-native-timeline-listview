/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native'

import BasicExample from './basicExample'

export default class Example extends Component {
  render() {
    return (
      <BasicExample />
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    color: 'white'
  },
	back: {
		paddingLeft:10,
		fontSize: 20,
		color: 'white',
    textAlign: 'center'
	},
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
