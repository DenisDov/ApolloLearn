import React, { Component } from 'react';
import { Text, Button } from 'react-native';
import PropTypes from 'prop-types';

import { Container } from './../components/Container';

class HomeScreen extends Component {
  goToPost = () => {
    this.props.navigation.navigate('PostsScreen');
  };
  render() {
    return (
      <Container>
        <Text> HomeScreen </Text>
        <Button title="To Posts" onPress={this.goToPost} />
      </Container>
    );
  }
}

HomeScreen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }),
};

export default HomeScreen;
