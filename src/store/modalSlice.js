import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";



export const getModalOpenClose = createAsyncThunk(
    'getModalOpenClose',
    async (e, {rejectWithValue, dispatch})=> {
        e.preventDefault()
        dispatch(infoModalOpenClose())
    }
)


const modalSlice = createSlice({
    name:"modalSlice",
    initialState:{
        mode: false,
    },
    reducers:{
        infoModalOpenClose: (state, action) =>{
            state.mode = true;
        },
    }
})


export const {infoModalOpenClose} = modalSlice.actions;

export default modalSlice.reducer;