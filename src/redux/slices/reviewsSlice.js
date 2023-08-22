import { createSlice } from "@reduxjs/toolkit";
import { fetchMovieReviewsById } from "../operations";

const handlePending = state => {
  state.isLoading = true
}

const handleRejected = (state, action) => {
  state.reviews = []
  state.isLoading = false

  state.error = action.payload
}

const reviewsInitialState = {
  reviews:[],
  isLoading: false,
  error: null
  };

const reviewsSlice = createSlice({
  name: "reviews",
  initialState: reviewsInitialState,
  extraReducers: {

    [fetchMovieReviewsById.pending]: handlePending,
    [fetchMovieReviewsById.rejected]: handleRejected,
    [fetchMovieReviewsById.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.reviews = action.payload
    },


  }
})

export const reviewsReducer = reviewsSlice.reducer;
