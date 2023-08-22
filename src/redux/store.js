import { configureStore, combineReducers } from "@reduxjs/toolkit";
import logger from 'redux-logger'
import { homepageReducer } from "./slices/homepageSlice";
import { moviesReducer } from "./slices/moviespageSlice";
import { movieDetailsReducer } from "./slices/movieDetailsSlice";
import { castReducer } from "./slices/castSlice";
import { reviewsReducer } from "./slices/reviewsSlice";

const rootReducer = combineReducers( {
  homepage: homepageReducer,
  movies: moviesReducer,
  movieDetails: movieDetailsReducer,
  cast: castReducer,
  reviews: reviewsReducer,
})

export const store = configureStore({
  reducer: rootReducer,
   middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(logger)
});
