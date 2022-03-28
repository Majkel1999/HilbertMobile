import { SafeAreaView, TextInput, StyleSheet, Button } from "react-native";
import { styles } from "./Styles";

export default function JoinForm() {
    return (
        <SafeAreaView>
            <TextInput placeholder="inviteUrl" style={styles.input} />
            <Button title="Join" onPress={() => { }} />
        </SafeAreaView>
    )
}
