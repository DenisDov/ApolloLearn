import React, { Component } from 'react';
import { TouchableOpacity, Text, Button, FlatList } from 'react-native';
import PropTypes from 'prop-types';

import { Query } from 'react-apollo';
import gql from 'graphql-tag';

import { Container } from './../components/Container';

const GET_POSTS = gql`
  {
    allPosts {
      id
      title
    }
  }
`;

const PostsQuery = () => (
  <Query query={GET_POSTS}>
    {({ loading, error, data }) => {
      if (loading) return <Text>Loading...</Text>;
      if (error) return <Text>Error :(</Text>;
      return (
        <FlatList
          data={data.allPosts}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => console.log('press post id: ', item.id)}
              style={{
                padding: 16,
                backgroundColor: 'white',
                marginBottom: 10,
                borderWidth: 0.5,
                borderColor: '#ddd',
                borderRadius: 5,
              }}
            >
              <Text>{item.title}</Text>
            </TouchableOpacity>
          )}
          keyExtractor={item => item.id}
        />
      );
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
