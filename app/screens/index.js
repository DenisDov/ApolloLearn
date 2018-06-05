import { createStackNavigator } from 'react-navigation';
import HomeScreen from './HomeScreen';
import PostsScreen from './PostsScreen';

const PostsNavigator = createStackNavigator({
  HomeScreen: {
    screen: HomeScreen,
    navigationOptions: () => ({
      title: 'Home',
    }),
  },
  PostsScreen: {
    screen: PostsScreen,
    navigationOptions: () => ({
      title: 'Posts',
    }),
  },
});

export default PostsNavigator;
