import { createSlice } from "@reduxjs/toolkit";
import { fetchMovieCreditsById } from "../operations";

const handlePending = state => {
  state.isLoading = true
}

const handleRejected = (state, action) => {
  state.cast = []
  state.isLoading = false
  state.error = action.payload
}

const castInitialState = {
  cast: [],
  isLoading: false,
  error: null
  };

const castSlice = createSlice({
  name: "cast",
  initialState: castInitialState,
  extraReducers: {

    [fetchMovieCreditsById.pending]: handlePending,
    [fetchMovieCreditsById.rejected]: handleRejected,
    [fetchMovieCreditsById.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.cast = action.payload
    },

  }
})

export const castReducer = castSlice.reducer;
