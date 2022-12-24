import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


export const signUp = createAsyncThunk(
    'signUp',
    async function(infoUser, {rejectWithValue, dispatch}){
        try {
            // const options = {
            //     method:"POST",
            //     headers:{
            //         'Content-Type':'application/json',
            //         'Authorization': 'X-CSRFToken: RkxYIKgNWOPv8htYxCZSd8SqAGWXglSAJaLR9bpHwcYEElYxl1GsE0mAKCYbHPLX'
            //     },
            //     body: JSON.stringify(infoUser)
            // }
            // const response = await fetch('http://134.122.75.14:8666/api/auth/signup/', options)
            axios.post('http://134.122.75.14:8666/api/auth/signup/', {
                username: [
                    "This field is required."
                  ],
                nickname: [
                    "This field is required."
                  ],
                image_file: [
                    "No file was submitted."
                  ],
                password: [
                    "This field is required."
                ]
              })
              .then(function (response) {
                console.log(response);
              })
              .catch(function (error) {
                console.log(error);
            });
        }
        catch (e){
            console.log(e);
        }
    }
)