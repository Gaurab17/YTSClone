import "./SearchFilters.css";
import { useState, useEffect } from "react";
import MovieTemplate from "../../Atom/MovieTemplate/MovieTemplate";
import axios from "axios";

const SearchFilters = ({ filterParams }) => {
    const [movies, setMovies] = useState(null);
    const urlParams = filterParams;
    const [moviesCount, setMoviesCount] = useState(null);

    useEffect(() => {
        axios
            .get("https://yts.mx/api/v2/list_movies.json ", {
                params: {
                    ...urlParams,
                },
            })
            .then((resp) => {
                setMoviesCount(resp.data.data.movie_count);
                setMovies(resp.data.data.movies);
            });
        return () => { };
    }, [urlParams]);

    return (
        <section className="filtered-movies-container">
            <div className="filtered-movies-wrapper">
                <h1>
                    <span>{(moviesCount && moviesCount) || `0`}</span>{" "}
                    <span style={{ fontWeight: "normal", color: "#00BBCC" }}>
                        {urlParams?.quality && urlParams.quality}
                    </span>{" "}
                    YIFY Movies Found (by{" "}
                    <span
                        style={{
                            textTransform: "capitalize",
                            fontStyle: "italic",
                            fontWeight: "normal",
                        }}
                    >
                        {urlParams?.sort_by === "date_added" ? "Latest" : urlParams?.sort_by})
                    </span>
                </h1>
                <ul className="filtered-movies_wrapper">
                    {movies &&
                        movies.map((movie) => {
                            return (
                                <MovieTemplate
                                    key={movie.id + movie.title}
                                    movieDetails={movie}
                                />
                            );
                        })}
                </ul>
            </div>
        </section>
    );
}

export default SearchFilters;
