import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { UserState } from '../../api/userEndpoint';

const initialState: UserState = {
    username: '',
    email: '',
    full_name: ''
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        SetUserInfo(state, action: PayloadAction<UserState>) {
            console.log(action.payload);
            state.username = action.payload.username;
            state.full_name = action.payload.full_name;
            state.email = action.payload.email;
        }
    }
})

export const { SetUserInfo } = userSlice.actions;
