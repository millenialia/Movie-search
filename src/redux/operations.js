import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://api.themoviedb.org/3/";

const TOKEN = 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5ODMwOTVkYjFjMzBjMTEyYWY4NmMzZTkxNjI2ODQ1ZCIsInN1YiI6IjY0YzIyOTgwMmYxYmUwMDBjYTI3NTFkYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._7s7ANDTjvRolXC55iraUkBQjE0gdiu5wGUEiZzr4fE'

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: TOKEN
  }
};

const langParams = 'language=en-US'

export const fetchTrendingMovies = createAsyncThunk("movies/fetchTrendingMovies",
  async (_, thunkAPI) => {
    try {
      const {data} = await axios.get(`/trending/movie/day?${langParams}`, options);
      return data.results;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
)
export const fetchCategories = createAsyncThunk("movies/fetchCategories",
  async (_, thunkAPI) => {
    try {
      const {data} = await axios.get(`/genre/movie/list`, options);
      return data.genres;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
)

export const fetchTopRated = createAsyncThunk("movies/fetchTopRated",
  async (page, thunkAPI) => {
    try {
      const {data} = await axios.get(`/movie/top_rated?language=en-US&page=${page}`, options);
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
)

export const fetchMovieByName = createAsyncThunk("movies/fetchMovieByName",
  async ({name, page}, thunkAPI) => {
    try {
      const {data} = await axios.get(`/search/movie?query=${name}&${langParams}&include_adult=false&page=${page}`, options);
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
)

export const fetchMoviesByGenre = createAsyncThunk("movies/fetchMoviesByGenre",
  async ({genre, page}, thunkAPI) => {
    try {
      const {data} = await axios.get(`/discover/movie?with_genres=${genre}&${langParams}&include_adult=false&page=${page}`, options);
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
)

export const fetchMovieDetailsById = createAsyncThunk("movies/fetchMovieDetailsById",
  async (id, thunkAPI) => {
    try {
      const {data} = await axios.get(`/movie/${id}?${langParams}`, options);
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
)

export const fetchSimilarMovies = createAsyncThunk("movies/fetchSimilarMovies",
  async (id, thunkAPI) => {
    try {
      const {data} = await axios.get(`/movie/${id}/similar`, options);
      return data.results;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
)

export const fetchMovieCreditsById = createAsyncThunk("movies/fetchMovieCreditsById",
  async (id, thunkAPI) => {
    try {
      const {data} = await axios.get(`/movie/${id}/credits?${langParams}`, options);
      return data.cast;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
)

export const fetchMovieReviewsById = createAsyncThunk("movies/fetchMovieReviewsById",
  async (id, thunkAPI) => {
    try {
      const {data} = await axios.get(`/movie/${id}/reviews?${langParams}`, options);
      return data.results;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
)



