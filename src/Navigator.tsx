import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RegisterPage from './pages/RegisterPage';
import WelcomePage from './pages/WelcomePage';
import { useSelector } from 'react-redux';
import { RootState } from './store/ReduxStore';
import UserPage from './pages/UserPage';
import { AppStateTypes } from './store/slices/AppSlice';
import { View } from 'react-native';

export type RootStackParamList = {
    WelcomePage: undefined;
    RegisterPage: undefined;
};


const Stack = createNativeStackNavigator<RootStackParamList>();

export default function Navigator() {
    const appState = useSelector((state: RootState) => state.app.appState)

    if (appState == AppStateTypes.Start) {
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
            </NavigationContainer >
        );
    }
    else if (appState == AppStateTypes.LoggedIn) {
        return (
            <UserPage/>
        )
    }
    else {
        return (
            <View></View>
        )
    }
}
