import "./App.css"
import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from './layout/Layout'
import LandingPage from './screens/landingPage'
import MovieDownload from "./components/Molecules/MovieDownloads"
import Trending from "./components/Molecules/Trending"

const App = () => {
  return (
    <Routes>
      <Route path="" element={<Layout />}>
        <Route
          path="/"
          element={<LandingPage />}
        />
        <Route
          path="/download/:movie_id"
          element={<MovieDownload />}
        />
        <Route
          path="/trending-movies"
          element={<Trending />}
        />
      </Route>
    </Routes>
  )
}

export default App