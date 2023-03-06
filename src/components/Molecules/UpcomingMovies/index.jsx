import React, { useState, useEffect } from "react";
import MovieTemplate from "../../Atom/MovieTemplate/MovieTemplate";
import "./UpcomingMovies.css";

const UpcomingMovies = ({ movieDetails: upcomingMovies }) => {
    return (
        <section className="upcoming-movies">
            <div className="upcoming-movies_container">
                <div className="upcoming-movies-header-section">
                    <h1 className="upcoming-movies_title">Upcoming YIFY Movies</h1>
                    <a href="#" className="upcoming-movies_browse-more">
                        Request a Movie
                    </a>
                </div>
                <ul className="upcoming-movies_movie">
                    {upcomingMovies.map((movie) => {
                        return <MovieTemplate key={movie.id} movieDetails={movie} />;
                    })}
                </ul>
            </div>
        </section>
    );
}

export default UpcomingMovies;
