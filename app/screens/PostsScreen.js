import React, { Component } from 'react';
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
      <Container>
        <PostEl title={`Post id: ${Post.id}`} message={Post.title} />
      </Container>
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
