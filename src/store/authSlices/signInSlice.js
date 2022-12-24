import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";



export const signIn = createAsyncThunk(
    'signUp',
    async function(infoUserLog, {rejectWithValue, dispatch}){
        try {
            const options = {
                method:"POST",
                headers:{
                    'Content-Type':'application/json',
                    'Authorization': 'X-CSRFToken: RkxYIKgNWOPv8htYxCZSd8SqAGWXglSAJaLR9bpHwcYEElYxl1GsE0mAKCYbHPLX'
                },
                body: JSON.stringify(infoUserLog)
            }
            const response = await fetch('http://134.122.75.14:8666/api/auth/signin/', options)
        }
        catch (e){
            console.log(e);
        }
    }
)