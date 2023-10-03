import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RootStackParamList} from 'src/types/router';
import Detail from 'src/views/Detail';
import Home from 'src/views/Home';

const Stack = createNativeStackNavigator<RootStackParamList>();

const routesDefaultOptions = {
  headerStyle: {
    backgroundColor: 'rgba(7,26,93,255)',
  },
  headerTitleStyle: {color: '#FFF'},
  headerTintColor: '#fff',
};

const AppRouter = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Home}
          options={routesDefaultOptions}
        />
        <Stack.Screen
          name="Detail"
          component={Detail}
          options={routesDefaultOptions}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppRouter;
