export const selectTrendingMovies = state => state.homepage.trendingMovies;
export const selectCategories = state => state.homepage.categories;
export const selectTopRated = state => state.homepage.topRated;
export const selectTopRatedTotalPages = state => state.homepage.topRatedTotalPages
export const selectHomepageIsLoading = state => state.homepage.isLoading


export const selectMovies = state => state.movies.movies;
export const selectMoviesPages = state => state.movies.totalPages;
export const selectMoviesIsLoading = state => state.movies.isLoading

export const selectMovieDetails = state => state.movieDetails
export const selectDetailsIsLoading = state => state.movieDetails.isLoading

export const selectCast = state => state.cast.cast
export const selectCastIsLoading = state => state.cast.isLoading

export const selectReviews = state => state.reviews.reviews
export const selectReviewsIsLoading = state => state.reviews.isLoading

