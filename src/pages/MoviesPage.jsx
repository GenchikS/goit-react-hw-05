import { useEffect, useState } from "react";
import {searchFilm} from "../api"
//  Описаний у документації
import iziToast from "izitoast";
// Додатковий імпорт стилів
import "izitoast/dist/css/iziToast.min.css";
import { Link, useLocation, useSearchParams } from "react-router-dom";


export default function MoviesPage() {
  const [query, setQuery] = useState("")
  const [searchQuery, setSearchQuery] = useState("");
  const [searchFilmArr, setSearchFilmArr] = useState([])
  
  const [searchParams, setSearchParams] = useSearchParams();
  // const queryAll = params.get(`query`);
  // console.log("queryAll", queryAll);
  
  //  ф-ція повернення значення form
  const formSubmit = (evn) => {
    evn.preventDefault();
    setQuery(searchQuery);
    if (!searchQuery.trim()) {
      return iziToast.show({
        message: "Sorry, input field cannot be empty. Please try again!",
        messageColor: `rgb(0,0,0)`,
        messageSize: 18,
        position: `topCenter`,
        progressBarColor: `rgb(255,0,0)`,
      });
    }
    // перевірка значення парамутру
    // console.log(`query`, evn.target.elements.query.value);
    // params.set("query", evn.target.elements.query.value);
    // setParams(params) // ?? ""  //  якщо параметр null то поверне ""
    setSearchQuery("");
    //  перевірка значення яке повертає form
      // console.log("searchQuery", searchQuery);
  };
  
  const onHandeleChange = (evn) => {
      setSearchQuery(evn.target.value);
  };
  
  useEffect(() => {
    if (!query.trim()) {
      return
    }
    const dataFeatch = async () => {
        const { data } = await searchFilm(query);
    //   console.log("data", data.results);
        setSearchFilmArr(data.results);
      // console.log("searchFilm", searchFilmArr);
    };
    dataFeatch();
  }, [query]);
  
  const location = useLocation();
  console.log("MP", location)
  return (
    <div>
      <form onSubmit={formSubmit}>
        <input
          value={searchQuery}
          name="query"
          type="text"
          placeholder="Input search"
          onChange={onHandeleChange}
        />
        <button type="submit">Search</button>
      </form>
      <ul>
        {searchFilmArr.length > 0 &&
          searchFilmArr.map((film) => (
            <li key={film.id}>
              <Link to={`/movies/${film.title}`} state={location}>
                {film.title}
              </Link>
            </li>
          ))}
      </ul>
    </div>
  );
}
