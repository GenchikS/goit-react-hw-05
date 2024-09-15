import { lazy, Suspense } from "react"
import { Routes, Route } from "react-router-dom"
// import MoviesPage from "./pages/MoviesPage";

const Navigation = lazy(() => import(`./components/Navigation`)); 
const HomePage = lazy(() => import(`./pages/HomePage`)); 
const MovieDetailsPage = lazy(() => import(`./pages/MovieDetailsPage`)); 
const MovieCast = lazy(() => import(`./components/MovieCast`)); 
const MovieReviews = lazy(() => import(`./components/MovieReviews`)); 
const MoviesPage = lazy(() => import(`./pages/MoviesPage`)); 
const NotFoundPage = lazy(() => import(`./pages/NotFoundPage`)); 

export default function App() {
return (
  <div>
    <Navigation />
    <Suspense fallback={null}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
          <Route path="cast" element={<MovieCast />} />
          <Route path="reviews" element={<MovieReviews />} />
        </Route>
        <Route path="/movies/" element={<MoviesPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Suspense>
  </div>
);
}
