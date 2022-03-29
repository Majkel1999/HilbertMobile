import { useEffect } from "react";
import { View, Text, Button } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { API_GetUserInfo } from "../api/userEndpoint";
import { styles } from "../components/Styles";
import { LogoutUser } from "../store/slices/AuthSlice";
import { SetUserInfo } from "../store/slices/UserSlice";
import { RootState, store } from "../store/ReduxStore";

export default function UserPage() {
    const token = store.getState().auth.token;
    const dispatch = useDispatch();
    const UserInfo = useSelector((state: RootState) => state.user)

    const user = useEffect(() => {
        API_GetUserInfo(token).then((state) => {
            console.log(state.data);
            dispatch(SetUserInfo(state.data));
        }).catch(() => {
            console.warn("Get error");
        })
    })

    return (
        <View>
            <Button title="Logout" onPress={() => { dispatch(LogoutUser()) }}/>
            <Text style={styles.header}>{UserInfo.username}</Text>
        </View>
    )
}