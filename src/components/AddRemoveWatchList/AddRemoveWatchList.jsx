import { WatchListAddSvg } from '../Svg/WatchListAdd/WatchListAddSvg'
import { WatchListRemoveSvg } from '../Svg/WatchListRemove/WatchListRemoveSvg'
import { selectWatchList } from 'redux/selectors';
import { useDispatch, useSelector } from "react-redux";
import { addMovie, deleteMovie } from 'redux/watchListSlice';

import { AddRemoveWatchList } from "./AddRemoveWatchList.styled"


export const AddRemoveWatchListBtn = ({title, movieId, poster}) => {

  const dispatch = useDispatch();

  const watchList = useSelector(selectWatchList)

  const checkId = (movies, id) => {
    if (movies.find(movie => movie.id === id
    )) {
      return false;
    }
    return true;
  }

    const onAddClick = () => {
    if (checkId(watchList, movieId)) {
      dispatch( addMovie(
        title, movieId, poster
      ))
    }
  }

  const onRemoveClick = () => {
    dispatch(deleteMovie(movieId))
  }

  const isOnWatchlist = !checkId(watchList, movieId)

  return (
    <AddRemoveWatchList type='button' onClick={isOnWatchlist ? onRemoveClick : onAddClick}>{isOnWatchlist ? <WatchListRemoveSvg /> : <WatchListAddSvg />}</AddRemoveWatchList>
  )
}
