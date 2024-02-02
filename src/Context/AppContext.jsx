import React, { createContext, useContext, useReducer } from "react";

const AppContext = createContext();

export const useAppContext = () => {
    return useContext(AppContext);
};

const initialState = {
    accessToken: null,
    userData: null,
};

const reducer = (state, action) => {
    switch (action.type) {
        case "LOGIN":
            return {
                ...state,
                accessToken: action.payload.accessToken,
                userData: action.payload.userData,
            };
        case "LOGOUT":
            return {
                ...state,
                accessToken: null,
                userData: {
                    firstName: "",
                    lastName: "",
                },
            };
        default:
            return state;
    }
};

export const AppProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const store_login = (accessToken, userData) => {
        dispatch({ type: "LOGIN", payload: { accessToken, userData } });
    };

    const store_logout = () => {
        dispatch({ type: "LOGOUT" });
    };

    const AppContextValue = {
        ...state,
        store_login,
        store_logout,
    };

    return (
        <AppContext.Provider value={AppContextValue}>
            {children}
        </AppContext.Provider>
    );
};
