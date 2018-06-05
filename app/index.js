import React, { Component } from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';

import PostsNavigator from './screens';

EStyleSheet.build({
  $main: '#129F67',
  $transparent: 'rgba(0,0,0,0)',
});

class App extends Component {
  render() {
    return <PostsNavigator />;
  }
}

export default App;
