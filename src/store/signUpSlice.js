import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";



const signUpSlice = createSlice({
    name:"modalSlice",
    initialState:{
        mode: false,
        account:false,
    },
    reducers:{
        infoModalOpen: (state, action) =>{
            state.mode = true;
        },
        infoModalClose: (state, action) =>{
            state.mode = false;
        },
        infoLogin: (state, action) =>{
            state.mode = false;
            state.account = true;
        },
        
    }
})



export const {infoModalOpen, infoModalClose,infoLogin} = signUpSlice.actions;

export default signUpSlice.reducer;