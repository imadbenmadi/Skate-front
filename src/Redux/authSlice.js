// authSlice.js
import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: "auth",
    initialState: {
        accessToken: null,
        refreshToken: null,
        userData: {},
    },
    reducers: {
        setTokens: (state, action) => {
            state.accessToken = action.payload.accessToken;
            state.refreshToken = action.payload.refreshToken;
        },
        setUserData: (state, action) => {
            state.userData = action.payload;
        },
    },
});

export const { setTokens, setUserData } = authSlice.actions;
export const selectAuth = (state) => state.auth;
export default authSlice.reducer;
