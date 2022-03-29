import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { AccessToken } from '../../api/userEndpoint'

type AuthState = {
    isLoggedIn: boolean,
    token: AccessToken
}

const initialState: AuthState = {
    isLoggedIn: false,
    token: {
        access_token: '',
        token_type: ''
    }
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        LoginUser: (state, action: PayloadAction<AccessToken>) => {
            state.isLoggedIn = true;
            state.token = action.payload;
        },
        LogoutUser: (state) => {
            state.isLoggedIn = false;
            state.token = {
                access_token: '',
                token_type: ''
            }
        }
    }
})

export const { LoginUser, LogoutUser } = authSlice.actions;
