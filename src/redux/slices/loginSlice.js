import {createSlice} from "@reduxjs/toolkit";
const initialState = {};
const loginSlice = createSlice({
    name : 'login' ,
    initialState ,
    reducers : {
        LOGIN : (state, action) => {
            return action.payload
        },
        LOGOUT : () =>{
            return {}
        }
    }
})
export const {LOGIN , LOGOUT} = loginSlice.actions;
export default loginSlice.reducer;