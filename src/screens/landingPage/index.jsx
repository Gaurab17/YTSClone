import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import MovieTemplate from '../../components/Atom/MovieTemplate/MovieTemplate';
import LatestMovies from '../../components/Molecules/LatestMovies';
import UpComingMovies from '../../components/Molecules/UpcomingMovies';
import Footer from '../../components/Molecules/Footer';
import './landing.css'

const LandingPage = () => {
  const [suggestionMovies, setSuggestionMovies] = useState(null);
  const [suggestionMoviesError, setSuggestionMoviesError] = useState(null);
  const [latestMovies, setLatestMovies] = useState(null);
  const [latestMoviesError, setLatestMoviesError] = useState(null);
  const [upcomingMovies, setUpcomingMovies] = useState(null);
  const [upcomingMoviesError, setUpcomingMoviesError] = useState();

  useEffect(() => {
    axios
      .get("https://yts.mx/api/v2/list_movies.json", {
        params: {
          limit: 4,
          order_by: "desc",
          sort_by: "date_added",
          minimum_rating: 7,
          quality: "1080p",
          page: 1,
        },
      })
      .then((resp) => {
        setSuggestionMovies(resp.data.data.movies);
        setSuggestionMoviesError(null);
      })
      .catch((err) => {
        setSuggestionMoviesError(err);
      });
    axios
      .get("https://yts.mx/api/v2/list_movies.json", {
        params: {
          limit: 8,
        },
      })
      .then((resp) => {
        setLatestMovies(resp.data.data.movies);
        setLatestMoviesError(null);
      })
      .catch((err) => {
        setLatestMoviesError(err);
      });
    axios
      .get("https://yts.mx/api/v2/list_upcoming.json")
      .then((resp) => {
        setUpcomingMovies(resp.data.data.movies);
        setUpcomingMoviesError(null);
      })
      .catch((err) => {
        setUpcomingMoviesError(err);
      });
    return () => {
      setSuggestionMovies(null);
      setLatestMovies(null);
    };
  }, []);

  return (
    <div className='landingHead'>
      <div className="movies-container">
        <h1>Download YTS YIFY movies: HD smallest size</h1>
        <p>
          Welcome to the UNOFFICIAL YTS.MX (.LT) website that I cloned. Here you
          can browse and download YIFY movies in excellent 720p, 1080p, 2160p 4K
          and 3D quality, all at the smallest file size.{" "}
        </p>
        <a href="https://yts.mx/blog/yts-mx-is-the-only-new-official-domain-for-yify-movies">
          IMPORTANT - YTS.MX is the only new official domain for YIFY Movies
        </a>
        <p className="popular-download-title">
          {" "}
          <span>
            <FontAwesomeIcon icon={faStar} />
          </span>
          Popular Downloads
        </p>
        <div className="divider"></div>
        <div className="popular-movies-lists">
          {suggestionMovies &&
            suggestionMovies.map((movie) => {
              return <MovieTemplate key={movie.id} movieDetails={movie} />;
            })}
          {suggestionMoviesError && (
            <p>Error is shown i know its not pretty....</p>
          )}
        </div>
      </div>
      {latestMovies && <LatestMovies movieDetails={latestMovies} />}
      {upcomingMovies && <UpComingMovies movieDetails={upcomingMovies} />}
      <Footer />
    </div>
  )
}

export default LandingPage