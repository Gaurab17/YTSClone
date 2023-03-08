import React from "react";
import { Link } from "react-router-dom";
import "./SimilarMovies.css";

const SimilarMovies = ({ small_cover_image, movie_id }) => {
    return (
        <Link
            to={`/download/movie_id=${movie_id}`}
            className="small-poster-wrapper"
        >
            <img src={small_cover_image} alt="" />
        </Link>
    );
}

export default SimilarMovies;
