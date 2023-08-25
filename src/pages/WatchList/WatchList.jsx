import { Suspense } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Loader } from 'components/Loader/Loader';
import MovieList from 'components/MovieList/MovieList';
import { Container} from '../Movies/Movies.styled';
import { selectWatchList } from 'redux/selectors';
import { useSelector } from 'react-redux';

const WatchList = () => {

  const movies =  useSelector(selectWatchList)

  const location = useLocation();

  const heading = movies.length ? `You have ${movies.length} movies in watch list`: `No movies in watch list`
  return (
    <Container>
          <MovieList
            heading = {heading}
            movies={movies}
            location={location}
            handlePageChange=""
            totalPages= "1"
            currentPage="1"
          />

        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
    </Container>
  );
};

export default WatchList;
