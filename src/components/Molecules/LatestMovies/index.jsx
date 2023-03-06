import React from "react";
import MovieTemplate from "../../Atom/MovieTemplate/MovieTemplate";
import "./LatestMovies.css";

const LatestMovies = ({ movieDetails: latestMovies }) => {
    return (
        <section className="latest-movies">
            <div className="latest-movies_container">
                <div className="latest-movies-header-section">
                    <h1 className="latest-movies_title">Latest YIFY Movies Torrents</h1>
                    <a href="#" className="latest-movies_browse-more">
                        Browse All
                    </a>
                </div>
                <ul className="latest-movies_movie">
                    {latestMovies.map((movie) => {
                        return <MovieTemplate key={movie.id} movieDetails={movie} />;
                    })}
                </ul>
            </div>
        </section>
    );
}

export default LatestMovies;
