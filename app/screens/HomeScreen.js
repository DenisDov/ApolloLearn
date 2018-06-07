import React, { Component } from 'react';
import { View, TouchableOpacity, Text, FlatList } from 'react-native';
import PropTypes from 'prop-types';
import EStyleSheet from 'react-native-extended-stylesheet';

import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

import { Loader } from './../components/Loader';

const styles = EStyleSheet.create({
  post: {
    padding: 16,
    backgroundColor: 'white',
    borderWidth: 0.5,
    borderColor: '#ddd',
    borderRadius: 5,
    marginTop: 10,
    '@media ios': {
      shadowColor: 'rgba(0,0,0, .4)',
      shadowOffset: { height: 1, width: 1 },
      shadowOpacity: 0.5,
      shadowRadius: 1,
    },
    '@media android': {
      elevation: 2,
    },
  },
});

class HomeScreen extends Component {
  render() {
    const {
      allPosts, loading, error, navigation,
    } = this.props;
    return (
      <View style={{ flex: 1, paddingHorizontal: 16 }}>
        {loading && <Loader />}
        {error && <Text style={{ textAlign: 'center' }}>{`Error!: ${error}`}</Text>}
        <FlatList
          data={allPosts}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => navigation.navigate('PostsScreen', { id: item.id })}
              style={styles.post}
            >
              <Text>{item.title}</Text>
            </TouchableOpacity>
          )}
          keyExtractor={item => item.id}
        />
      </View>
    );
  }
}

HomeScreen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }),
  allPosts: PropTypes.array,
  loading: PropTypes.bool,
  error: PropTypes.string,
};

const getPostsQuery = gql`
  {
    allPosts {
      id
      title
    }
  }
`;

export default graphql(getPostsQuery, {
  props: ({ data }) => ({ ...data }),
})(HomeScreen);
