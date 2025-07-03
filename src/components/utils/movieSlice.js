import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movie",
  initialState: {
    nowPlayingMovies: null,
    movieVedio: null,
    popularMovies: null,
    trendingMovies: null,
    upcomingMovies: null,
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addTrailerVedio: (state, action) => {
      state.movieVedio = action.payload;
    },
    addPopularMovies: (state, action) => {
      state.popularMovies = action.payload;
    },
    addTrendingMovies: (state, action) => {
      state.trendingMovies = action.payload;
    },
    addUpcomingMovies: (state, action) => {
      state.upcomingMovies = action.payload;
    },

    removeMovies: (state) => {
      return [];
    },
  },
});

export const {
  addNowPlayingMovies,
  removeMovies,
  addTrailerVedio,
  addPopularMovies,
  addTrendingMovies,

  addUpcomingMovies,
} = movieSlice.actions;
export default movieSlice.reducer;
