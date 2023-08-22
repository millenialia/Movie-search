import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Loader } from "components/Loader/Loader";

import { useDispatch, useSelector } from 'react-redux';
import { fetchMovieCreditsById } from "redux/operations";
import { selectCast, selectCastIsLoading } from "redux/selectors";

import { List, Profile } from "./Cast.styled";

const Cast = () => {

  // const [isLoading, setIsLoading] = useState(false)

  const { movieId } = useParams();

  const cast = useSelector(selectCast)
  const isLoading = useSelector(selectCastIsLoading)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchMovieCreditsById(movieId))
  },[dispatch, movieId])

  return (
    isLoading ? <Loader /> :
    <List>
      {  cast.length === 0 ? <p>No cast available</p> :
        cast.map(({ name, character, profile_path, id }) => {
          return (

            <li key={id}>

                {profile_path ? <img src={`https://image.tmdb.org/t/p/w500${profile_path}`} alt="profile" /> : <img src={'https://static.vecteezy.com/system/resources/previews/005/337/799/original/icon-image-not-found-free-vector.jpg'} alt="profile" />}

              <Profile>
                <p>{name}</p>
                <p>{character}</p>
              </Profile>
            </li>
          )
        })
      }
    </List>
  )
}

export default Cast;
