import { createStore } from "@reduxjs/toolkit";
import reducer from "./reducer"
import { applyMiddleware } from "@reduxjs/toolkit";
import thunk from "redux-thunk";

export const store = createStore(reducer, applyMiddleware(thunk));