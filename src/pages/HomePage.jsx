import { useEffect, useState } from "react"

import { collectionsFilms } from "../api"
import css from "./HomePage.module.css"
import MoviesPage from "./MoviesPage"


export default function HomePage(){

    const [trendings, setTrending] = useState([])

    useEffect(()=>{
        async function fetchData() {
            const data = await collectionsFilms();
            // перевірка масиву
            // console.log("data", data)
            setTrending(data)
        }
        fetchData()
    }, [])


    return (
        <div>
            <p className={css.title}>Trending today</p>
            <ul className={css.list}>{
            trendings.length >0 && trendings.map((trending)=> <li key={trending.id}><MoviesPage id={trending.id} title={trending.original_title}/></li>)
            }
            </ul>
        </div>
    )
}