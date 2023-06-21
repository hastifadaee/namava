import {createSlice} from "@reduxjs/toolkit";
const initialState = {};
const singleMovieSlice = createSlice({
    name : 'single' ,
    initialState,
    reducers : {
        SET : (state, action) => {
            return action.payload
        }
    }
})
export default singleMovieSlice.reducer;
export const {SET} = singleMovieSlice.actions;