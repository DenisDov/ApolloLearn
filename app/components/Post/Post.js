import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';

const Post = ({ title }) => (
  <View>
    <Text>{title}</Text>
  </View>
);

Post.propTypes = {
  title: PropTypes.string,
};

export default Post;
