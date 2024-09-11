import {Link} from 'react-router-dom'

export default function NotFoundPage(){
    return (
        <div>
            <p>Not found pages!</p>
            <p>Please use this link <Link to="/">go to back</Link></p>
        </div>
    )
}