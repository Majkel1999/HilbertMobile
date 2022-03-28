import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RegisterPage from './pages/RegisterPage';
import WelcomePage from './pages/WelcomePage';

export type RootStackParamList = {
  WelcomePage: undefined;
  RegisterPage: undefined;
};


const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='WelcomePage' screenOptions={{ headerShown: false }}>
        <Stack.Screen
          name='WelcomePage'
          component={WelcomePage}
        />
        <Stack.Screen
          name='RegisterPage'
          component={RegisterPage}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
