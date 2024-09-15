import { useEffect, useState } from "react";
import { searchFilm } from "../api"
import css from "./MoviesPage.module.css";
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
    // console.log("evn", evn.target.elements.query.value);
    // console.log("params", params);

    evn.preventDefault();
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
  // console.log("query", query);

 useEffect(() => {
    if (!query) {
      return;
    }
    const dataFeatch = async () => {
      const { data } = await searchFilm(query);
        console.log("data", data);
      setSearchFilmArr(data.results);
      // console.log("searchFilm", searchFilmArr);
    };
    dataFeatch();
  }, [query]);
  
  const location = useLocation();
  // console.log("MP", location)

  return (
    <div className={css.container}>
      <form className={ css.form} onSubmit={formSubmit}>
        <input className={css.input} name="query" type="text" placeholder="Input search" />
        <button className={css.button} type="submit">Search</button>
      </form>
      <ul className={css.containerList}>
        {searchFilmArr.length > 0 &&
          searchFilmArr.map((film) => (
            <li className={css.list} key={film.id}>
              <img
                className={css.img}
                src={`https://image.tmdb.org/t/p/w500${film.poster_path}`}
                alt={`${film.title}`}
              />
              <Link to={`/movies/${film.id}`} state={location}>
                {film.title}
              </Link>
            </li>
          ))}
      </ul>
    </div>
  );
}


