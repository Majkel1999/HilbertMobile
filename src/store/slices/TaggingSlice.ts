import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { AccessToken } from '../../api/userEndpoint'

type TaggingState = {
    link: string
}

const initialState: TaggingState = {
    link: ''
}

export const taggingSlice = createSlice({
    name: 'tag',
    initialState,
    reducers: {
        SetProjectLink: (state, action: PayloadAction<string>) => {
            state.link = action.payload;
        }
    }
})

export const { SetProjectLink } = taggingSlice.actions;
