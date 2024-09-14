import { useEffect, useState } from "react";
import {searchFilm} from "../api"
//  Описаний у документації
import iziToast from "izitoast";
// Додатковий імпорт стилів
import "izitoast/dist/css/iziToast.min.css";
import { Link, useLocation, useSearchParams } from "react-router-dom";


export default function MoviesPage() {
  const [searchFilmArr, setSearchFilmArr] = useState([])

  //  створення параметру
  const [params, setParams] = useSearchParams()

  //  ф-ція повернення значення form
  const formSubmit = (evn) => {
    //  створення параметру в url зі значенням query
    params.set("query", evn.target.elements.query.value);
    setParams(params);
    console.log("evn", evn.target.elements.query.value);

    evn.preventDefault();
    // setQuery(evn.target.elements.query.value);
    const search = evn.target.elements.query.value;
    if (!search) {
      return iziToast.show({
        message: "Sorry, input field cannot be empty. Please try again!",
        messageColor: `rgb(0,0,0)`,
        messageSize: 18,
        position: `topCenter`,
        progressBarColor: `rgb(255,0,0)`,
      });
    }
    evn.target.reset()
  };
  const query = params.get(`query`) ?? "";

  // const onHandeleChange = (evn) => {
  //   setSearchQuery(evn.target.value);
  // };

  useEffect(() => {
    if (!query) {
      return;
    }
    const dataFeatch = async () => {
      const { data } = await searchFilm(query);
      //   console.log("data", data.results);
      setSearchFilmArr(data.results);
      // console.log("searchFilm", searchFilmArr);
    };
    dataFeatch();
  }, [query]);
  
  // const params = useSearchParams()
  

  const location = useLocation();
  console.log("MP", location)
  return (
    <div>
      <form onSubmit={formSubmit}>
        <input
          // value={query}
          name="query"
          type="text"
          placeholder="Input search"
          // onChange={onHandeleChange}
        />
        <button type="submit">Search</button>
      </form>
      <ul>
        {
          searchFilmArr.length > 0 &&
          searchFilmArr.map((film) => (
            <li key={film.id}>
              <Link to={`/movies/${film.id}`} state={location} >
                {film.title}
              </Link>
            </li>
          ))}
      </ul>
    </div>
  );
}


