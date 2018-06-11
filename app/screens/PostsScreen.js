import React, { Component } from 'react';
import { SafeAreaView, ScrollView } from 'react-native';
import PropTypes from 'prop-types';

import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

import { Container } from './../components/Container';
import { Loader } from './../components/Loader';
import PostEl from './../components/Post/Post';

class PostsScreen extends Component {
  render() {
    const { Post, loading } = this.props;
    if (loading) return <Loader />;
    return (
      <SafeAreaView>
        <ScrollView>
          <Container>
            <PostEl title={Post.title} description={Post.description} img={Post.imgUrl} />
          </Container>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

PostsScreen.propTypes = {
  Post: PropTypes.object,
  loading: PropTypes.bool,
};

const postDetailQuery = gql`
  query Post($id: ID!) {
    Post(id: $id) {
      id
      title
      imgUrl
      description
    }
  }
`;

export default graphql(postDetailQuery, {
  props: ({ data }) => ({ ...data }),
  options: ({ navigation }) => ({
    variables: {
      id: navigation.state.params.id,
    },
  }),
})(PostsScreen);
