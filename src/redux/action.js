import axios from "axios";

export const req = ()=>{
    return async (dispatch) =>{
        const data = await axios.get("http://134.122.75.14:8666/api/v1/top-manga/");
        const result = await data;
        console.log(result, "result")
        dispatch({type:"GET_DATA", payload: result.data})
    }
}