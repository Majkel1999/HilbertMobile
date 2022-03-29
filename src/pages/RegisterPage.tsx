import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import RegisterForm from "../components/RegisterForm";
import { styles } from "../components/Styles";

export default function RegisterPage() {
    return (
        <View style={styles.centerContainer}>
            <StatusBar />
            <Text style={styles.header}>Register</Text>
            <RegisterForm callback={() => { }}/>
        </View>
    )
}