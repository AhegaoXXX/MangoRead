import { configureStore } from "@reduxjs/toolkit";
import mangaReducer from "./mangaSlice";
import modalReducer from "./modalSlice"


export default configureStore({
    reducer: {
        mangaReducer,
        modalReducer,
    }
})