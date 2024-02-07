import React, { createContext, useContext, useReducer } from "react";

const AppContext = createContext();

export const useAppContext = () => {
    return useContext(AppContext);
};

const initialState = {
    isAuth: false,
    FirstName: "",
    LastName: "",
    Email: "",
    Gender: null,
    Age: null,
    Courses: [],
    _id: null,
    Verify_id: "",
    Verify_email: "",
    Verify_FirstName: "",
    Verify_LastName: "",
    Verify_Password: "",
    
};
const reducer = (state, action) => {
    switch (action.type) {
        case "LOGIN":
            return {
                ...state,
                isAuth: true,
                FirstName: action.payload.FirstName,
                LastName: action.payload.LastName,
                Email: action.payload.Email,
                Gender: action.payload.Gender,
                Age: action.payload.Age,
                Courses: action.payload.Courses,
                _id: action.payload._id,
            };
        case "LOGOUT":
            return {
                ...state,
                isAuth: false,
                FirstName: "",
                LastName: "",
                Email: "",
                Gender: null,
                Age: null,
                Courses: [],
                _id: null,
            };
        case "SET_AUTH":
            return {
                ...state,
                isAuth: action.payload,
            };
        case "REGISTER":
            return {
                ...state,
                Verify_id: action.payload._id,
                Verify_FirstName: action.payload.FirstName,
                Verify_LastName: action.payload.LastName,
                Verify_email: action.payload.Email,
                Verify_Password: action.payload.Password,
            };
        default:
            return state;
    }
};

export const AppProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const set_Auth = (isAuth) => {
        dispatch({ type: "SET_AUTH", payload: isAuth });
    };
    const store_login = (
        FirstName,
        LastName,
        Email,
        Gender,
        Age,
        Courses,
        _id
    ) => {
        dispatch({
            type: "LOGIN",
            payload: {
                FirstName,
                LastName,
                Email,
                Gender,
                Age,
                Courses,
                _id,
            },
        });
    };

    const store_logout = () => {
        dispatch({ type: "LOGOUT" });
    };
    
    const Store_register = (
        Verify_id,
        Verify_FirstName,
        Verify_LastName,
        Verify_email,
        Verify_Password,
    ) => {
        dispatch({
            type: "REGISTER",
            payload: {
                Verify_id,
                Verify_FirstName,
                Verify_LastName,
                Verify_email,
                Verify_Password,
            },
        });
    };
    const AppContextValue = {
        ...state,
        store_login,
        store_logout,
        set_Auth,
        Store_register,
    };

    return (
        <AppContext.Provider value={AppContextValue}>
            {children}
        </AppContext.Provider>
    );
};
