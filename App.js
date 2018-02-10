import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SwipeCards from './SwipeCards.js';

export default class App extends React.Component {
  render() {
    return (

      <View style={styles.container}>
        <SwipeCards style={{flex: 1}} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#86D2E0',
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
