import { createStackNavigator, createAppContainer } from 'react-navigation';

import PeoplePage from './src/pages/PeoplePage';
// export default PeoplePage;

const AppNavigator = createStackNavigator({
  'Main': {
    screen: PeoplePage,
    navigationOptions: {
      title: 'People',
      headerStyle: {
        backgroundColor: '#6ca2f7',
        borderBottomWidth: 1,
        borderBottomColor: '#c5c5c5'
      },
      headerTitleStyle: {
        color: 'white',
        fontSize: 30,
        textAlign: 'center',
        flexGrow: 1
      }
    }
  }
});

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;