import { createSlice } from "@reduxjs/toolkit";

const watchListInitialState = [];

const watchListSlice = createSlice({
  name: "watchList",
  initialState: watchListInitialState,
  reducers: {

    addMovie: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(title, id, poster_path,){
        return{
          payload: {
            title, id, poster_path,
          },
        }
      }
    },

    deleteMovie(state, action) {
          const index = state.findIndex(movie => movie.id === action.payload);
          state.splice(index, 1);
      },

  },
})

export const { addMovie, deleteMovie } = watchListSlice.actions;

export const watchListReducer = watchListSlice.reducer;
