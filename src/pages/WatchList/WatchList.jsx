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



  const handlePageChange = selectedPage => {

    };

  return (
    <Container>
      <div>
          <MovieList
            heading="Watch List"
            movies={movies}
            location={location}
            handlePageChange={handlePageChange}
            totalPages= "500"
            currentPage="1"
          />

        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </div>
    </Container>
  );
};

export default WatchList;
