import { createSlice, PayloadAction } from "@reduxjs/toolkit"

export enum AppStateTypes {
    Start,
    LoggedIn,
    Tagging
}

type AppState = {
    appState: AppStateTypes
}

const initialState: AppState = {
    appState: AppStateTypes.Start
}

export const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        SetAppState: (state, action: PayloadAction<AppStateTypes>) => {
            state.appState = action.payload
        }
    }
});