import {types} from "./types";

const initialState = {
    mangas: [],
    manga: [],
    comment: [],
    genres: [],
}

export function mangaReducer (state = initialState, action) {
    switch (action.type) {
        case types.MANGA_INFO:
            return {...state, mangas: action.payload}
        case types.MORE_INFO:
            return {...state, manga: [action.payload]}
        case types.COMMENT_INFO:
            return {...state, comment: action.payload}
        case types.GENRE_INFO:
            return {...state, genres: action.payload}    


        default: return state
    }
}