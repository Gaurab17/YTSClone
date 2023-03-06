import { h1 } from 'fontawesome'
import React from 'react'
import MovieTemplate from '../MovieTemplate/MovieTemplate'
import "./Trending.css"

const TrendingMovies = ({ movieDetails: trendingMovies }) => {


    return (
        <div className="trending-movies">
            <div className="trending-movies_container">
                <div className="trending-movies-header-section">
                    <h1 className="trending-movies_title">24h YIFY Trending Movies</h1>
                </div>
                <ul className="trending-movies_movie">
                    {trendingMovies.map((movie) => {
                        return (
                            <div>
                                <MovieTemplate key={movie.id} movieDetails={movie} />
                            </div>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}

export default TrendingMovies