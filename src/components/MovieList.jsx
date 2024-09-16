import { Link } from "react-router-dom";
import css from "./MovieList.module.css";

export default function MovieList({ object, location }) {
//   console.log("trendings", object);
  return (
    <ul className={css.container}>
      {object.map((film) => (
        <li key={film.id} className={css.list} >
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
  );
}


{/* <ul className={css.containerList}>
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
</ul>; */}