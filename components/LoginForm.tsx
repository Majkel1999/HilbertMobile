import React from "react";
import { Button, SafeAreaView, TextInput, Text } from "react-native";
import { LoginUser } from "../api/userEndpoint";
import { styles } from "./Styles";

type LoginFormProps = {
    callback: CallableFunction
}

export default function LoginForm(props: LoginFormProps) {
    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');

    async function login() {
        LoginUser(username, password).then((response) => {
            alert(response.access_token);
        })
    }

    return (
        <SafeAreaView>
            <TextInput placeholder="Login" style={styles.input} onChangeText={setUsername} value={username} />
            <TextInput placeholder="Password" style={styles.input} onChangeText={setPassword} value={password} />
            <Button title="Login" onPress={login} />
            <Text style={styles.linkText} onPress={() => { props.callback(); }}>No account? Register here!</Text>
        </SafeAreaView>
    )
}
