import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Post from './components/Post/Post';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

class App extends Component {
  state = {};
  render() {
    return (
      <View style={styles.container}>
        <Post />
        <Text>Open up App.js to start working on your app!</Text>
      </View>
    );
  }
}

export default App;
