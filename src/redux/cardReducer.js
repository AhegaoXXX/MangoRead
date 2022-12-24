import { cardTypes } from "../types/cardTypes"

const initial = {
    card:[],
    page:[]
}

export const cardReducer=(state=initial,action)=>{
    switch(action.type){
        case cardTypes.GETINFO:
            return{...state,catagory:action.payload}
        case cardTypes.GETPAGE:
            return {...state,page:action.payload}
        default:return state
    }
}

