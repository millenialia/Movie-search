import {
  fetchTrendingMovies,
  // fetchCategories,
  fetchTopRated,
} from '../../services/api';
import { useEffect, useState } from 'react';
import Categories from 'components/Categories/Categories';
import { Container, HomeBox, CategoriesBox } from './Home.styled';
import HomeSlider from '../../components/HomeSlider/HomeSlider';
import TopRated from 'components/TopRated/TopRated';
import { RecentlyViewed } from 'components/RecentlyViewed/RecentlyViewed';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [topRated, setTopRated] = useState([]);
  const [totalPageTopRated, setTotalPagesTopRated] = useState(1);
  const [currentPageTopRated, setCurrentPageTopRated] = useState(1);

  useEffect(() => {

    const fetchMovies = async () => {
      try {
        const { results } = await fetchTrendingMovies();

        setMovies(results);
      } catch (error) {
        console.log(error);
      }
    };

    const fetchTopRatedMovies = async () => {
      try {
        const data = await fetchTopRated(currentPageTopRated);
        const results = data.results;
        const pages = data.total_pages;
        setTotalPagesTopRated(pages);

        setTopRated(results);
      } catch (error) {
        console.log(error);
      }
    };

    // fetchGenres();
    fetchMovies();
    fetchTopRatedMovies();
  }, [currentPageTopRated]);

  const handlePageChange = selectedPage => {
    const chosenPage = selectedPage.selected + 1;

    setCurrentPageTopRated(chosenPage);
  };

  return (
    <div>
      <Container>
        <CategoriesBox>
          <Categories />
        </CategoriesBox>
        <HomeSlider movies={movies} />
        <HomeBox>
          <TopRated
            topRated={topRated}
            handlePageChange={handlePageChange}
            totalPageTopRated={totalPageTopRated}
            currentPageTopRated={currentPageTopRated}
          ></TopRated>
          <RecentlyViewed></RecentlyViewed>
        </HomeBox>
      </Container>
    </div>
  );
};

export default Home;
