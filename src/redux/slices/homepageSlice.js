import { createSlice } from "@reduxjs/toolkit";
import { fetchTrendingMovies, fetchCategories, fetchTopRated } from "../operations";

const handlePending = state => {
  state.isLoading = true
}

const handleRejected = (state, action) => {
  state.isLoading = false
  state.trendingMovies = []
  state.categories = []
  state.topRated = []
  state.error = action.payload
}

const homepageInitialState = {
  trendingMovies: [],
  categories: [],
  topRated: [],
  topRatedTotalPages: 1,
  isLoading: false,
  error: null
  };

const homepageSlice = createSlice({
  name: "homepage",
  initialState: homepageInitialState,
  extraReducers: {
    [fetchTrendingMovies.pending]: handlePending,
    [fetchTrendingMovies.rejected]: handleRejected,
    [fetchTrendingMovies.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;

      state.trendingMovies = action.payload
    },

    [fetchCategories.pending]: handlePending,
    [fetchCategories.rejected]: handleRejected,
    [fetchCategories.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;

      state.categories = action.payload
    },

    [fetchTopRated.pending]: handlePending,
    [fetchTopRated.rejected]: handleRejected,
    [fetchTopRated.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;

      state.topRated = action.payload.results
      state.topRatedTotalPages = action.payload.total_pages
    },
  }
})

export const homepageReducer = homepageSlice.reducer;
