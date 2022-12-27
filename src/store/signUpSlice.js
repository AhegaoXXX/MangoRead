import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


export const getLogin = createAsyncThunk(
    'getLogin',
    async (data, {rejectWithValue, dispatch})=>{
        const response = await fetch('http://134.122.75.14:8666/api/v1/top-manga/')
        const dataX = await response.json()
        dispatch(infoLogin(dataX))
    }
)



const signUpSlice = createSlice({
    name:"modalSlice",
    initialState:{
        mode: false,

        mode: false,
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
        },
    }
})



export const {infoModalOpen, infoModalClose,infoLogin} = signUpSlice.actions;

export default signUpSlice.reducer;