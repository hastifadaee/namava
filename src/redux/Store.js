import {configureStore} from "@reduxjs/toolkit";
import singleMovieSlice from "./slices/singleMovieSlice";
import loginSlice from './slices/loginSlice';

export const store = configureStore({
    reducer : {
        app : singleMovieSlice ,
        login : loginSlice
        
    }
})
