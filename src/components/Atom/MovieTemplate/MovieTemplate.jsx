import React from "react";
import { Link } from "react-router-dom";
import "./MovieTemplate.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const MovieTemplate = ({ movieDetails }) => {
  return (
    <div className="movie-template-wrapper">
      <div className="movie-poster">
        <img src={movieDetails.medium_cover_image} alt="" />
        <Link
          to={`/download/movie_id=${movieDetails.id}`}
          className="more-details"
        >
          <div className="star-icon">
            <FontAwesomeIcon className="star" icon={faStar} />
            <h3 className="rating">
              {movieDetails.rating && `${movieDetails.rating}/10`}
            </h3>
          </div>
          <div className="genres">
            {movieDetails?.genres?.slice(0, 2).map((genre) => (
              <h3 key={movieDetails.id + genre}>{genre}</h3>
            ))}
          </div>
          <div className="more-details-btn">
            <button>View Details</button>
          </div>
        </Link>
      </div>
      <a href="#" className="movies-details">
        <h4 title={movieDetails.title}>
          {movieDetails.title.length > 24
            ? movieDetails.title.substring(0, 24) + "..."
            : movieDetails.title}
        </h4>
        <p>{movieDetails.year}</p>
      </a>
    </div>
  );
}

export default MovieTemplate;
