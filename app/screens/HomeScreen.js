import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import PropTypes from 'prop-types';

const styles = EStyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: 'coral',
  },
});

class HomeScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text> HomeScreen </Text>
        <Button title="To Posts" onPress={() => this.props.navigation.navigate('PostsScreen')} />
      </View>
    );
  }
}

HomeScreen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }),
};

export default HomeScreen;
