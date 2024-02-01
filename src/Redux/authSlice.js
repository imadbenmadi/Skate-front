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
            state.accessToken = action.payload.data.jwt;
        },
        setUserData: (state, action) => {
            state.userData = action.payload.data.userData;
        },
    },
});

export const { setTokens, setUserData } = authSlice.actions;
export const selectAuth = (state) => state.auth;
export default authSlice.reducer;
