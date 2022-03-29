import React from "react";
import { Button, SafeAreaView, TextInput, Text } from "react-native";
import { useDispatch } from "react-redux";
import { API_LoginUser } from "../api/userEndpoint";
import { LoginUser } from "../store/slices/AuthSlice";
import { styles } from "./Styles";

type LoginFormProps = {
    callback: CallableFunction
}

export default function LoginForm(props: LoginFormProps) {
    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [loading, setLoading] = React.useState(false);
    const dispatch = useDispatch()

    async function HandleLoginClick() {
        setLoading(true);
        API_LoginUser(username, password).then((response) => {
            setLoading(false);
            dispatch(LoginUser(response));
        }).catch(() => {
            alert("Incorrect username or password!");
            setLoading(false);
        })
    }

    return (
        <SafeAreaView>
            <Text style={styles.listItem}>Login to your account to manage your projects</Text>
            <TextInput placeholder="Login" style={styles.input} onChangeText={setUsername} value={username} editable={!loading} />
            <TextInput placeholder="Password" style={styles.input} onChangeText={setPassword} value={password} editable={!loading} secureTextEntry={true} />
            <Button title="Login" onPress={HandleLoginClick} disabled={loading} />
            <Text style={styles.linkText} onPress={() => { props.callback(); }}>No account? Register here!</Text>
        </SafeAreaView>
    )
}
