import { useState } from "react";
import { SafeAreaView,Text, TextInput, Button } from "react-native";
import { useDispatch } from "react-redux";
import { API_GetNewText } from "../api/tagEndpoints";
import { styles } from "./Styles";

export default function JoinForm() {
    const [link, setLink] = useState('JDUkcm91bmRzPTUzNTAwMCREN0RMNFJURXN5Vk1zZG85JDNoc08xenJCQXJ2MUc0WjBzQXJFcFo2TXlkTTlUallzTlgvWkp4bGsxZTY');
    const dispatch = useDispatch();

    return (
        <SafeAreaView>
            <Text style={styles.listItem}>Tag texts in projects</Text>
            <TextInput placeholder="inviteUrl" style={styles.input} onChangeText={setLink} value={link} />
            <Button title="Join" onPress={async () => {
                API_GetNewText(link).then((response) => console.log(response.data)).catch(() => console.warn(`problem`));
            }} />
        </SafeAreaView>
    )
}
