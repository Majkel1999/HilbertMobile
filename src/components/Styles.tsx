import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        borderRadius: 10,
        padding: 10,
    },
    listItem: {
        margin: 10,
        color: '#00ff00',
        alignSelf: 'center'
    },
    linkText: {
        color: '#06066b',
        alignSelf: 'center',
        marginTop: 20,
        fontWeight: "bold"
    },
    header: {
        fontSize: 32,
        marginTop: 100,
        marginBottom: 20,
        alignSelf: 'center'
    },
    mainContainer: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'stretch',
        width: '100%'
    },
    centerContainer: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'stretch',
        justifyContent: 'center',
        width: '100%'
    },
    formContainer: {
        marginTop: 50,
        marginBottom: 50,
        marginHorizontal: 50,
        alignItems: 'stretch',
        flex: 1,
        justifyContent: 'space-around'
    }
});