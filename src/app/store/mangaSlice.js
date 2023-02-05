import { createSlice } from "@reduxjs/toolkit";

const mangaSlice = createSlice({
  name: "mangaSlice",
  initialState: {
    mangas: [],
    filtered: [],
    manga: [],
    comment: [],
    addCommentModal: false,
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
    addCommentMode: (state) => {
      state.addCommentModal = !state.addCommentModal;
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
  addCommentMode,
} = mangaSlice.actions;

export default mangaSlice.reducer;
