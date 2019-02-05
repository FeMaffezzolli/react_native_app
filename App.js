import { createStackNavigator, createAppContainer } from 'react-navigation';

import PeoplePage from './src/pages/PeoplePage';
import PeopleDetailPage from './src/pages/PeopleDetailPage';
import { capitalizeFirstLetter } from './src/utils';

const AppNavigator = createStackNavigator(
  {
    Main: { screen: PeoplePage },
    PeopleDetail: {
      screen: PeopleDetailPage,
      navigationOptions: ({ navigation }) => {
        const peopleName = capitalizeFirstLetter(
          navigation.state.params.person.name.first
        );

        return ({
          title: capitalizeFirstLetter(peopleName),
          headerTintColor: 'white',
          headerTitleStyle: {
            color: 'white',
            fontSize: 30
          }
        });
      }
    }
  },
  {
    initialRouteName: 'Main',
    defaultNavigationOptions:
    {
      title: 'Random People',
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
);

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;