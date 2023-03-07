import "./BrowseMovies.css";
import BrowseMoviesFilters from "../Filters/BrowseMoviesFilters";
import SearchFilters from "../Filters/SearchFilters";
import { useState } from "react";

const BrowseMovies = () => {
    const [filteredUrlParams, setFilteredUrlParams] = useState(null);

    const handleMovieFilter = (params) => {
        setFilteredUrlParams(params)
    }

    return (
        <section className="Browse-movies-section">
            <BrowseMoviesFilters filterParams={filteredUrlParams} onMovieFilter={handleMovieFilter} />
            <SearchFilters filterParams={filteredUrlParams} />
        </section>
    );
}

export default BrowseMovies;
