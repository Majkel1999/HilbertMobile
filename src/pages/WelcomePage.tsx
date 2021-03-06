import { Text, View } from 'react-native';
import { styles } from '../components/Styles';
import LoginForm from '../components/LoginForm';
import Separator from '../components/Separator';
import JoinForm from '../components/JoinForm';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../Navigator';

type NavigationProps = NativeStackScreenProps<RootStackParamList, 'WelcomePage'>;

export default function WelcomePage({route, navigation} : NavigationProps) {
    return (
        <View style={styles.mainContainer}>
            <Text style={styles.header}>Hilbert Mobile</Text>
            <View style={styles.formContainer}>
                <JoinForm />
                <Separator text='or' />
                <LoginForm callback={() => navigation.navigate('RegisterPage')}/>
            </View>
        </View>
    );
}
