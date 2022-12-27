import { configureStore } from "@reduxjs/toolkit";
import mangaReducer from "./mangaSlice";
import signUpReducer from "./signUpSlice"


export default configureStore({
    reducer: {
        mangaReducer,
        signUpReducer,
    }
})