// import { useState } from 'react'
// import './App.css'
import {Routes, Route} from "react-router-dom"
import Navigation from './components/Navigation'

import HomePage from './pages/HomePage'
import MovieDetailsPage from './pages/MovieDetailsPage'
import NotFoundPage from './pages/NotFoundPage'
import MovieCast from "./components/MovieCast"
import MovieReviews from "./components/MovieReviews"
import MoviesPage from "./pages/MoviesPage"


export default function App() {
  
  

return (
    <div>
      <Navigation/>
      <Routes>
              <Route path="/" element={<HomePage/>}/>
              <Route path="/movies/:movieId" element={<MovieDetailsPage/>}>
                  <Route path="cast" element={<MovieCast/>}/>
                  <Route path="reviews" element={<MovieReviews/>}/>
              </Route>
              <Route path="/movies" element={<MoviesPage/>}/>
              <Route path="*" element={<NotFoundPage/>}/>
      </Routes>
    </div>
  )
}
