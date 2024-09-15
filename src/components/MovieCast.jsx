import {castFilms} from '../api'
import { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";
import css from "./MovieCast.module.css"

export default function MovieCast(){
    const paramsId = useParams();
    const [casts, setCast] = useState("")
    const [profile, setProfile] = useState("")

  useEffect (()=>{
        async function dataFetch() {
            const data = await castFilms(paramsId)
            // console.log("data", data)
            setCast(data)
            setProfile(data.profile_path)
        }
        dataFetch()
    }, [paramsId])

// console.log("cast", casts)

    return (
      <div className={css.container}>
        {casts.length > 0 &&
          casts.map((cast) => (
            <ul key={cast.id}>
              <li>
                <img
                  className={css.imgProfile}
                  src={`https://image.tmdb.org/t/p/w500${cast.profile_path}`}
                  alt=""
                />
              </li>
              <li>
                <p className={css.text}>{cast.name}</p>
              </li>
              <li>
                <p className={css.text}>Character: {cast.character}</p>
              </li>
            </ul>
          ))}
      </div>
    );
}