import { configureStore } from "@reduxjs/toolkit";
import { appSlice } from "./slices/AppSlice";
import { authSlice } from "./slices/AuthSlice";
import { taggingSlice } from "./slices/TaggingSlice";
import { userSlice } from "./slices/UserSlice";

export const store = configureStore({
    reducer: {
        app: appSlice.reducer,
        tag: taggingSlice.reducer,
        auth: authSlice.reducer,
        user: userSlice.reducer,
    },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

store.subscribe(() => console.log(store.getState()))