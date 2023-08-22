import { createSlice } from "@reduxjs/toolkit";
import { fetchMovieDetailsById, fetchSimilarMovies } from "../operations";

const handlePending = state => {
  state.isLoading = true
}

const handleRejected = (state, action) => {
  state.title= ''
  state.year= ''
  state.overview= ''
  state.genres= []
  state.poster= ''
  state.backdrop= ''
  state.rating= 0
  state.similarMovies = []
  state.isLoading = false

  state.error = action.payload
}

const movieDetailsInitialState = {
  title: '',
  year: '',
  overview: '',
  genres: [],
  poster: '',
  backdrop: '',
  rating: 0,
  similarMovies: [],
  isLoading: false,
  error: null
  };

const movieDetailsSlice = createSlice({
  name: "movieDetails",
  initialState: movieDetailsInitialState,
  extraReducers: {
    [fetchMovieDetailsById.pending]: handlePending,
    [fetchMovieDetailsById.rejected]: handleRejected,
    [fetchMovieDetailsById.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.title = action.payload.title
      state.year = action.payload.release_date.split('-')[0]
      state.overview = action.payload.overview
      state.genres = action.payload.genres
      state.poster = action.payload.poster_path
      state.backdrop = action.payload.backdrop_path
      state.rating = action.payload.vote_average.toFixed(1)
    },

    [fetchSimilarMovies.pending]: handlePending,
    [fetchSimilarMovies.rejected]: handleRejected,
    [fetchSimilarMovies.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.similarMovies = action.payload
    },


  }
})

export const movieDetailsReducer = movieDetailsSlice.reducer;
