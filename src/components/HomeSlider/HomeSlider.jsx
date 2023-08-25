import { Link } from 'react-router-dom';

import 'react-multi-carousel/lib/styles.css';

import { HomeSliderBox, Heading, Item, CarouselStyled} from './HomeSlider.styled';

const HomeSlider = ({ movies }) => {
  const responsive = {
    desktop: {
      breakpoint: { max: 5000, min: 1200 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1200, min: 768 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 768, min: 0 },
      items: 1,
    },
  };

  return (
    <HomeSliderBox>
      <Heading>Trending today</Heading>
      <CarouselStyled
        swipeable={true}
        draggable={true}
        responsive={responsive}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={5000}
        keyBoardControl={true}
        customTransition="all 1s linear"
        transitionDuration={1000}
        removeArrowOnDeviceType={['tablet', 'mobile', 'desktop']}
        centerMode
        minimumTouchDrag={80}
        pauseOnHover
      >
        {movies.map(({ title, id, backdrop_path, overview, vote_average }) => {
          return (
            <Item key={id}>
              <Link to={`/movies/${id}`} state={{ from: '/' }}>
                <div>
                {backdrop_path ? (
                  <img
                    src={`https://image.tmdb.org/t/p/original${backdrop_path}`}
                    alt="poster"
                  />
                ) : (
                  <img
                    src={
                      'https://static.vecteezy.com/system/resources/previews/005/337/799/original/icon-image-not-found-free-vector.jpg'
                    }
                    alt="profile"
                      />
                      )}
                  <h2 className="title">{title}</h2>
                  <div>
                  <p>{overview}</p> <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path d="M12 17.27l4.15 2.51c.76.46 1.69-.22 1.49-1.08l-1.1-4.72 3.67-3.18c.67-.58.31-1.68-.57-1.75l-4.83-.41-1.89-4.46c-.34-.81-1.5-.81-1.84 0L9.19 8.63l-4.83.41c-.88.07-1.24 1.17-.57 1.75l3.67 3.18-1.1 4.72c-.2.86.73 1.54 1.49 1.08l4.15-2.5z"></path>
              </svg>
              {vote_average.toFixed(1)}
                    </span>
                    </div>
                  </div>
              </Link>
            </Item>
          );
        })}
      </CarouselStyled>
    </HomeSliderBox>
  );
};

export default HomeSlider;
