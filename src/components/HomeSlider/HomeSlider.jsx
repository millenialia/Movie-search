import { Link } from "react-router-dom";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import { Item } from "./HomeSlider.styled";

const HomeSlider = ({movies}) => {

  const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 7
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

  return (
       <Carousel
        swipeable={false}
        draggable={false}
        responsive={responsive}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={5000}
        keyBoardControl={true}
        customTransition="all 1s linear"
        transitionDuration={1000}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        itemClass="carousel-item-padding-40-px">

        {movies.map(({ title, id, poster_path }) => {

          return (
            <Item key={id}>

              <Link to={`/movies/${id}`} state={{ from: "/" }}>
                <img src={'' || `https://image.tmdb.org/t/p/w500${poster_path}`} alt="poster" />
                <p>{title}</p>
              </Link>
        </Item>


          )
        } )}
        </Carousel>
  )
}

export default HomeSlider;
