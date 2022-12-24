import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";



export const signUp = createAsyncThunk(
    'signUp',
    async function(infoUser, {rejectWithValue, dispatch}){
        try {
            const options = {
                method:"POST",
                headers:{
                    'Content-Type':'application/json',
                    'Authorization': 'X-CSRFToken: RkxYIKgNWOPv8htYxCZSd8SqAGWXglSAJaLR9bpHwcYEElYxl1GsE0mAKCYbHPLX'
                },
                body: JSON.stringify(infoUser)
            }
            const response = await fetch('http://134.122.75.14:8666/api/auth/signup/', options)
        }
        catch (e){
            console.log(e);
        }
    }
)