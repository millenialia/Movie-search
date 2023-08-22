import { createSlice } from "@reduxjs/toolkit";
import { fetchMovieByName, fetchMoviesByGenre } from "../operations";

const handlePending = state => {
  state.isLoading = true
}

const handleRejected = (state, action) => {
  state.isLoading = false
  state.movies = []
  state.error = action.payload
}

const moviesInitialState = {
  movies: [],
  totalPages: 1,
  isLoading: false,
  error: null
  };

const moviesSlice = createSlice({
  name: "movies",
  initialState: moviesInitialState,
  extraReducers: {
    [fetchMovieByName.pending]: handlePending,
    [fetchMovieByName.rejected]: handleRejected,
    [fetchMovieByName.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.movies = action.payload.results
      state.totalPages = action.payload.total_pages<300 ? action.payload.total_pages : 300
    },

    [fetchMoviesByGenre.pending]: handlePending,
    [fetchMoviesByGenre.rejected]: handleRejected,
    [fetchMoviesByGenre.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.movies = action.payload.results
      state.totalPages = action.payload.total_pages<300 ? action.payload.total_pages : 300
    },


  }
})

export const moviesReducer = moviesSlice.reducer;
