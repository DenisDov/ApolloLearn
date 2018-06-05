import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import PropTypes from 'prop-types';

import { Query } from 'react-apollo';
import gql from 'graphql-tag';

import { Container } from './../components/Container';

const PostsQuery = () => (
  <Query
    query={gql`
      {
        allPosts {
          id
          title
        }
      }
    `}
  >
    {({ loading, error, data }) => {
      if (loading) return <Text>Loading...</Text>;
      if (error) return <Text>Error :(</Text>;
      return data.allPosts.map(({ id, title }) => (
        <View key={id}>
          <Text>{title}</Text>
        </View>
      ));
    }}
  </Query>
);

class HomeScreen extends Component {
  goToPost = () => {
    this.props.navigation.navigate('PostsScreen');
  };
  render() {
    return (
      <Container>
        <PostsQuery />
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
