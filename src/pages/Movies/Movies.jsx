import { useEffect, useState, Suspense } from "react";
import { Outlet, useSearchParams, useLocation } from "react-router-dom";

import { useDispatch, useSelector } from 'react-redux';
import { fetchMovieByName, fetchMoviesByGenre } from "redux/operations";
import { selectMovies, selectMoviesPages, selectMoviesIsLoading } from "redux/selectors";

import { Loader } from "components/Loader/Loader";
import MovieList from "components/MovieList/MovieList";
import { Container, Heading } from "./Movies.styles"

const Movies = () => {

  const [heading, setHeading] = useState('')

  const [searchParams, setSearchParams] = useSearchParams();

  const searchQuery = searchParams.get("query") ?? ""
  const searchGenre = searchParams.get("genre") ?? ""
  const genreName = searchParams.get("name") ?? ""
  const page = searchParams.get("page") ?? ""

  const location = useLocation();

  const isLoading = useSelector(selectMoviesIsLoading)
  const movies = useSelector(selectMovies)
  const totalPages = useSelector(selectMoviesPages)
  const dispatch = useDispatch()

  useEffect(() => {

    if (searchQuery !== '') {
    const search = {
      name: searchQuery,
      page
    }
    dispatch(fetchMovieByName(search))
    setHeading(searchQuery)
  } else if (searchGenre !== '') {
    const search = {
      genre: searchGenre,
      page
    }
    dispatch(fetchMoviesByGenre(search))
    setHeading(genreName)
  }

  },[dispatch, searchQuery, searchGenre, genreName, page])

  const handlePageChange = (selectedPage) => {
    const chosenPage = selectedPage.selected + 1

    const newSearchParams = {
  page: chosenPage,
};

setSearchParams((prevParams) => {
  return new URLSearchParams({
    ...Object.fromEntries(prevParams.entries()),
    ...newSearchParams,
  });
});
  };


  return (
    isLoading ? <Loader /> :
    <Container>
      <div>
          {movies.length === 0 ? <Heading> No movies found </Heading> :

            <MovieList
          heading={ heading }
          movies={movies}
          searchQuery={searchQuery}
          location={location}
          handlePageChange={handlePageChange}
          totalPages={totalPages}
          currentPage={page}
        />}


      <Suspense fallback={<Loader/>}>
        <Outlet />
        </Suspense>
      </div>
      </Container>
  )
}

export default Movies;
