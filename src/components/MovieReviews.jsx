import { reviewsFilms} from '../api'
import { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";

export default function MovieReviews() {
  const { movieId } = useParams(); //  movieId деструктизовано з paramsId
  const [reviews, setReviews] = useState("");

  useEffect(() => {
    async function dataFetch() {
      const data = await reviewsFilms(movieId);
      // console.log("data", data)
      setReviews(data);
      // setProfile(data.profile_path)
    }
    dataFetch();
  }, [movieId]);
  // console.log("reviewst", reviews)

  return (
    <div>
      {reviews.length > 0 &&
        reviews.map((review) => (
          <ul key={review.id}>
            <li>
              <h3>{review.author}</h3>
            </li>
            <li>
              <p>{review.content}</p>
            </li>
          </ul>
        ))}
      {!reviews.length && <p>Not found data</p>}
    </div>
  );
}