import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { API } from "../../../shared/API/API";
import { commentInfo } from "../mangaSlice";

const { apiMangaListV1 } = API;
export const addCommentAction = createAsyncThunk(
  "addCommentAction",
  async (data, { rejectWithValue, dispatch }) => {
    const { id, dataX } = data;
    try {
      await axios.post(`${apiMangaListV1}${id}/add-comment/`, dataX, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${JSON.parse(localStorage.getItem("tokenA"))}`,
        },
      });
    } catch (error) {
      console.error(error);
    }
  }
);

export const getComment = createAsyncThunk(
  "getComment",
  async (id, { rejectWithValue, dispatch }) => {
    const response = await fetch(`${apiMangaListV1}${id}/comments/`);
    const dataX = await response.json();
    dispatch(commentInfo(dataX));
  }
);
