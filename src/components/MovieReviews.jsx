import { reviewsFilms} from '../api'
import { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";
import css from "./MovieCast.module.css"

export default function MovieReviews(){
    const paramsId = useParams();
    const [reviews, setReviews] = useState("")
    // const [profile, setProfile] = useState("")

  useEffect (()=>{
        async function dataFetch() {
            const data = await reviewsFilms(paramsId)
            // console.log("data", data)
            setReviews(data)
            // setProfile(data.profile_path)
        }
        dataFetch()
    }, [paramsId])

// console.log("reviewst", reviews)

    return (
        <div>{
            reviews.length > 0 && reviews.map((review)=>
            <ul key={review.id}>
                <li><h3>{review.author}</h3></li>
                <li><p>{review.content}</p></li>
            </ul>    
            
        
        )
        }
    </div>
    )
}