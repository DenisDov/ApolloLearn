import React, { Component } from 'react';
import { ApolloProvider } from 'react-apollo';
import ApolloClient from 'apollo-boost';
import EStyleSheet from 'react-native-extended-stylesheet';

import PostsNavigator from './screens';

const client = new ApolloClient({
  uri: 'https://api.graph.cool/simple/v1/cji1nnnyw8hia0115y4ro03xr',
});

EStyleSheet.build({
  $main: '#129F67',
  $transparent: 'rgba(0,0,0,0)',
});

// client
//   .query({
//     query: gql`
//       {
//         allPosts {
//           id
//           title
//         }
//       }
//     `,
//   })
//   .then(result => console.log(result));

// // const postsQuery = gql`
// //   {
// //     allPosts {
// //       id
// //       title
// //     }
// //   }
// // `;

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <PostsNavigator />
      </ApolloProvider>
    );
  }
}

export default App;
