import { useEffect, useState } from "react";
import { NavLink, Link, Outlet } from "react-router-dom";
import { useParams } from "react-router-dom";
import {filmId} from '../api'
import css from './MovieDeteilsPage.module.css'
// import axios from "axios";


export default function MovieDetailsPage(){
    const paramsId = useParams();
    // перевірка ID з хука useParams
    // console.log("paramsId", paramsId)

    const [photo, setPhoto] = useState("")
    const [title, setTitle] = useState("")
    const [rating, setRating] = useState("")
    const [overview, setOverview] = useState("")
    const [genres, setGenres] = useState([])

    useEffect(()=>{
        async function fetchData () {
            const data = await filmId(paramsId);
            // console.log("data", data)
            // console.log("poster_pathe", data.poster_path)
            setPhoto(data.poster_path)
            setTitle(data.title)
            setRating(() => {return (data.vote_average*10).toFixed()})
            setOverview(data.overview)
            const allganres = data.genres;
            setGenres(() => {allganres.map((all)=> <p>{all.name}</p>)})
            // console.log("ganres", allganres)
            // console.log("ganres", genres)

        }
        fetchData ()
    },[paramsId])
    

    return (
        <div>
            <Link to="/">Go back</Link>
            <div className={css.container}>
            <img className={css.img} src={`https://image.tmdb.org/t/p/w500${photo}`} alt={title} />
            <div className={css.textContainer}>
            <h2>{title}</h2>
            <p>User Score: {rating}%</p>
            <h3 className={css.titleText}>Overview</h3>
            <p>{overview}</p>
            <h3 className={css.titleText}>Genres</h3>
            <p>{genres}</p>
            </div>
            </div>
            <div>
                <p>Additionl information</p>
                <ul>
                    <li><NavLink to="cast">Cast</NavLink></li>
                    <li><NavLink to="reviews">Reviews</NavLink></li>
                </ul>
            </div>
            <Outlet/>
        </div>
    )
}