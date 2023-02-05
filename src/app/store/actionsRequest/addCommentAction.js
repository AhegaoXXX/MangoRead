import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { API } from "../../../shared/API/API";
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
