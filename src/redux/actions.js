import {types} from "./types";

function mangaInfoAction (data) {
    return {
        type: types.MANGA_INFO,
        payload: data
    }
}
export function getMangaAction () {
    return async function (dispatch) {
        const response = await fetch('http://134.122.75.14:8666/api/v1/top-manga/')
        const data = await response.json()
        dispatch(mangaInfoAction(data?.results))
    }
}

function getInfoMangaDispatch (data){
    return {
        type: types.MORE_INFO,
        payload: data
    }
}
export function getInfoMangaAction (params){
    return async (dispatch)=>{
        const response = await fetch(`http://134.122.75.14:8666/api/v1/manga/${params}`)
        const data = await response.json()
        dispatch(getInfoMangaDispatch(data))
    }
}

function getCommentDispatch (data){
    return {
        type: types.COMMENT_INFO,
        payload: data
    }
}
export function getCommentAction (params){
    return async (dispatch)=>{
        const response = await fetch(`http://134.122.75.14:8666/api/v1/manga/${params}/comments/`)
        const data = await response.json()
        dispatch(getCommentDispatch(data))
    }
}

function getGenreDispatch (data){
    return {
        type: types.GENRE_INFO,
        payload: data
    }
}
export function getGenreAction (){
    return async (dispatch)=>{
        const response = await fetch('http://134.122.75.14:8666/api/v1/genre/')
        const data = await response.json()
        dispatch(getGenreDispatch(data))
    }
}