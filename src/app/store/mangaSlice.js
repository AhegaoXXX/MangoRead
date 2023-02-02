import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getMangas = createAsyncThunk(
  "getMangas",
  async (data, { rejectWithValue, dispatch }) => {
    const response = await fetch(
      `http://134.122.75.14:8666/api/v1/manga/?limit=12&${data}`
    );
    const dataX = await response.json();
    dispatch(mangasInfo(dataX));
  }
);
export const getInfoManga = createAsyncThunk(
  "getInfoManga",
  async (id, { rejectWithValue, dispatch }) => {
    const response = await fetch(
      `http://134.122.75.14:8666/api/v1/manga/${id}`
    );
    const dataX = await response.json();
    dispatch(infoManga(dataX));
  }
);
export const getComment = createAsyncThunk(
  "getComment",
  async (id, { rejectWithValue, dispatch }) => {
    const response = await fetch(
      `http://134.122.75.14:8666/api/v1/manga/${id}/comments/`
    );
    const dataX = await response.json();
    dispatch(commentInfo(dataX));
  }
);
export const getGenre = createAsyncThunk(
  "getGenre",
  async (data, { rejectWithValue, dispatch }) => {
    const response = await fetch("http://134.122.75.14:8666/api/v1/genre/");
    const dataX = await response.json();
    dispatch(genreInfo(dataX));
  }
);

const mangaSlice = createSlice({
  name: "mangaSlice",
  initialState: {
    mangas: [],
    filtered: [],
    countMangas: 0,
    manga: [],
    comment: [],
    genres: [],
    modalChange: false,
  },
  reducers: {
    mangasInfo: (state, action) => {
      state.mangas = action.payload;
      state.countMangas = action.payload.count;
    },
    infoManga: (state, action) => {
      state.manga = [action.payload];
    },
    commentInfo: (state, action) => {
      state.comment = action.payload;
    },
    genreInfo: (state, action) => {
      state.genres = action.payload;
    },
    changeModalAction: (state) => {
      state.modalChange = !state.modalChange;
    },
    filterAction: (state, action) => {
      state.filtered = action.payload;
    },
  },
});

export const {
  mangasInfo,
  infoManga,
  commentInfo,
  genreInfo,
  changeModalAction,
  filterAction,
  filterReset,
} = mangaSlice.actions;

export default mangaSlice.reducer;
