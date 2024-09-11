import {Link} from "react-router-dom"

export default function MoviesPage({id, title}){

    return (
        <Link to={`/movies/${id}`}>{title}</Link>
    )
}