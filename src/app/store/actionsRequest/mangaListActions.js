import { createAsyncThunk } from "@reduxjs/toolkit";
import { API } from "../../../shared/API/API";
import { mangasInfo, infoManga, commentInfo, genreInfo } from "../mangaSlice";

const { apiMangaListV1, apiGenreListV1 } = API;
export const getMangas = createAsyncThunk(
  "getMangas",
  async (data, { rejectWithValue, dispatch }) => {
    const response = await fetch(`${apiMangaListV1}?limit=12&${data}`);
    const dataX = await response.json();
    dispatch(mangasInfo(dataX));
  }
);
export const getInfoManga = createAsyncThunk(
  "getInfoManga",
  async (id, { rejectWithValue, dispatch }) => {
    const response = await fetch(`${apiMangaListV1}${id}`);
    const dataX = await response.json();
    dispatch(infoManga(dataX));
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
export const getGenre = createAsyncThunk(
  "getGenre",
  async (data, { rejectWithValue, dispatch }) => {
    const response = await fetch(`${apiGenreListV1}`);
    const dataX = await response.json();
    dispatch(genreInfo(dataX));
  }
);
