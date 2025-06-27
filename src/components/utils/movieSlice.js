import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movie",
  initialState: {
    nowPlayingMovies: null,
    movieVedio: null,
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addTrailerVedio: (state, action) => {
      state.movieVedio = action.payload;
    },
    removeMovies: (state) => {
      return [];
    },
  },
});

export const { addNowPlayingMovies, removeMovies, addTrailerVedio } =
  movieSlice.actions;
export default movieSlice.reducer;
