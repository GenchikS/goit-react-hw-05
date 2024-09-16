import { useEffect, useState } from "react"
import { collectionsFilms } from "../api"
import css from "./HomePage.module.css"

import MovieList from "../components/MovieList"


export default function HomePage(){
const [trendings, setTrending] = useState([])

    useEffect(() => {
      async function fetchData() {
        const data = await collectionsFilms();
        // перевірка масиву
        // console.log("data", data);
        setTrending(data);
      }
      fetchData();
    }, []);

return (
  <div className={css.title}>
    <p>Trending today</p>
    {trendings.length > 0 && <MovieList object={trendings} />}
  </div>
);
}