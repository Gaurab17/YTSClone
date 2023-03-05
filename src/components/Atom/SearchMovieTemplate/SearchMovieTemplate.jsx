import React from 'react';
import { Link } from "react-router-dom";
import "./SearchMovieTemplate.css";

const SearchMovieTemplate = ({ onClick, data }) => {
    return (
        <li className="search-result_link">
            <Link
                onClick={onClick}
                to={`/download/movie_id=${data.id}`}
                className="link"
            >
                <img src={data.small_cover_image} alt="" className="movie-icon" />
                <div className="link-right">
                    <h4>{data.title}</h4>
                    <p>{data.year}</p>
                </div>
            </Link>
        </li>
    );
}

export default SearchMovieTemplate;
