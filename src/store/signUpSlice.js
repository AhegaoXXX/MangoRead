import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { setCookie, getCookie} from "react-use-cookie";




export const getAccount = createAsyncThunk(
    'getLogin',
    async (logUser, {rejectWithValue, dispatch}) => {
        try {
          const response = await axios.get(`http://134.122.75.14:8666/api/auth/profile/`,
            {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            }
          )
          const foundAccount = response?.data.find(info => info.username === logUser);
          dispatch(infoAccount(foundAccount))
        } 
        catch (error) {
          console.error(error);
        }
    }
)
export const logOutAcc = createAsyncThunk(
    'logOutAcc',
    async (data, {rejectWithValue, dispatch}) => { 
        try {
           await axios.post(`http://134.122.75.14:8666/api/auth/logout/`, 
            data,  
            {   
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${JSON.parse(localStorage.getItem('tokenA'))}`
                },
                body:data
            }
          )
          dispatch(AccountLogOut())
        } 
        catch (error) {
          console.error(error);
        }
    }
)


const signUpSlice = createSlice({
    name:"signUpSlice",
    initialState:{
        mode: false,
        account:false,
        user:"",

        addComment:false,
    },
    reducers:{
        infoModalOpen: (state) =>{
            state.mode = true;
        },
        infoModalClose: (state) =>{
            state.mode = false;
        },
        AccountLogOut: (state) =>{
            state.account = false;
        },
        infoAccount: (state, action) =>{
            state.mode = false;
            state.account = true;
            state.user = action.payload;
        },
        addCommentOpen: (state) =>{
            state.addComment = true;
        },
        
    }
})



export const {infoModalOpen, infoModalClose,infoAccount, AccountLogOut, addCommentOpen} = signUpSlice.actions;

export default signUpSlice.reducer;