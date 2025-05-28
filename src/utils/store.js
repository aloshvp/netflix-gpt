import { configureStore } from "@reduxjs/toolkit";
// import userSlice from "./userSlice";
import userReducer from "./userSlice"
import moviesReducer from "./moviesSlice"

export const store = configureStore({
    reducer: {
        user: userReducer,
        movies: moviesReducer,
    },
})