import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { Loader } from "components/Loader/Loader";

import { useDispatch, useSelector } from 'react-redux';
import { fetchMovieReviewsById } from "redux/operations";
import { selectReviews, selectReviewsIsLoading } from "redux/selectors";

import { List } from "./Reviews.styled";

const Reviews = () => {

  const { movieId } = useParams();

  const reviews = useSelector(selectReviews)
  const isLoading = useSelector(selectReviewsIsLoading)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchMovieReviewsById(movieId))
  },[dispatch, movieId])


  return (

    isLoading ? <Loader /> :
    <List>
        {reviews.length === 0 ? <p>No reviews available</p> :
          reviews.map(({ author, content, id, author_details }) => {
        return (
          <li key={id}>

            <span>
              {author_details.avatar_path ? <img src={`https://image.tmdb.org/t/p/w500${author_details.avatar_path}`} alt="profile" /> : <img src={'https://static.vecteezy.com/system/resources/previews/005/337/799/original/icon-image-not-found-free-vector.jpg'} alt="profile" />}
            <p>
              {author}
            </p>
            </span>

            <p>
              {content}
            </p>
          </li>
        )
      })}
    </List>
  )
}

export default Reviews;
