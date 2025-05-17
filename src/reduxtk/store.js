import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slices/counterSlice";
import userReducer from "./slices/userSlice";

export const store = configureStore({
    reducer: {
        qqq: counterReducer,
        users: userReducer
    }
})


export default store