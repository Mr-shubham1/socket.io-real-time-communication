import {createSlice} from "@reduxjs/toolkit";

const userSlice = createSlice({
    name:"user",
    initialState:{
        authuser:null
    },
    reducers:{
        setAuthuser:(state,action)=>{
            state.authuser = action.payload;
        }
    }
});

export const {setAuthuser} = userSlice.actions;
export default userSlice.reducer;