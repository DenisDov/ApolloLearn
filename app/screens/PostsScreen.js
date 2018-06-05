import React, { Component } from 'react';

import { Container } from './../components/Container';
import Post from './../components/Post/Post';

export default class PostsScreen extends Component {
  render() {
    return (
      <Container>
        <Post title="My first Apollo app 🚀" />
      </Container>
    );
  }
}
