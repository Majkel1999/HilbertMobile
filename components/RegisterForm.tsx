import { Button, SafeAreaView, TextInput, Text } from "react-native";
import { styles } from "./Styles";

type LoginFormProps = {
    callback: CallableFunction
}

export default function RegisterForm(props: LoginFormProps) {
    return (
        <SafeAreaView>
            <TextInput placeholder="Login" style={styles.input} />
            <TextInput placeholder="Password" style={styles.input} />
            <Button title="Register" onPress={() => { }} />
        </SafeAreaView>
    )
}
