import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import mangaReducer from "./mangaSlice";
import signUpReducer from "./signUpSlice"



export default configureStore({
    reducer: {
        mangaReducer,
        signUpReducer,
    },
    middleware: getDefaultMiddleware({
        serializableCheck: false,
      }),
})