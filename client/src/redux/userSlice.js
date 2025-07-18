import {createSlice} from "@reduxjs/toolkit";

const userSlice = createSlice({
    name:"user",
    initialState:{
        authuser:null,
        otherusers:null,
        selecteduser:null
    },
    reducers:{
        setAuthuser:(state,action)=>{
            state.authuser = action.payload;
        },
        setOtherusers:(state,action)=>{
            state.otherusers  = action.payload;
        },
        setSelecteduser:(state,action)=>{
            state.selecteduser = action.payload;
        }
    }
});

export const {setAuthuser,setOtherusers,setSelecteduser} = userSlice.actions;
export default userSlice.reducer;