import { useNavigate, createSearchParams } from "react-router-dom";
import { List } from "./Categories.styled"

const Categories = ({ genres }) => {

  const navigate = useNavigate()

  const onClick = (e) => {
    const genre = e.target.id
    navigate({pathname: "/movies", search: `?${createSearchParams({genre})}` });
    console.log(genre);
  }


  return (
    <List>
      {genres.map(({ name, id }) => {
        return (
          <li key={id}>
            <button type='button' onClick={onClick} id={id} >{name}</button>
        </li>
        )
      })
      }

    </List>
  )
}


export default Categories;
