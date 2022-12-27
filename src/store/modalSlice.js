import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const modalSlice = createSlice({
    name:"modalSlice",
    initialState:{
        mode: false,
    },
    reducers:{
        infoModalOpen: (state, action) =>{
            state.mode = true;
        },
        infoModalClose: (state, action) =>{
            state.mode = false;
        },
    }
})


export const {infoModalOpen, infoModalClose} = modalSlice.actions;

export default modalSlice.reducer;