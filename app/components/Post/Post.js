import React from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import { AnimatedImage } from 'react-native-ui-lib';
import PropTypes from 'prop-types';

const PostEl = ({ title, description, img }) => (
  <View>
    <AnimatedImage
      containerStyle={{ marginBottom: 10 }}
      imageStyle={{ resizeMode: 'cover', height: 200 }}
      imageSource={{ uri: img }}
      loader={<ActivityIndicator />}
    />
    <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 10 }}>{title}</Text>
    <Text>{description}</Text>
  </View>
);

PostEl.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  img: PropTypes.string,
};

export default PostEl;
