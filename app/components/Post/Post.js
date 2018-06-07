import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';

const PostEl = ({ title, message }) => (
  <View>
    <Text>{title}</Text>
    <Text>{message}</Text>
  </View>
);

PostEl.propTypes = {
  title: PropTypes.string,
  message: PropTypes.string,
};

export default PostEl;
