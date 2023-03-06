import React, { useState, useEffect } from 'react'
import TrendingMovies from '../../Atom/TrendingMovies';
import axios from 'axios';

const Trending = () => {
    const [trendingMovies, setTrendingMovies] = useState(null);
    const [trendingMoviesError, setTrendingMoviesError] = useState(null);
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        axios
            .get("https://yts.mx/api/v2/list_movies.json", {
                params: {
                    limit: 16,
                },
            })
            .then((resp) => {
                setTrendingMovies(resp.data.data.movies);
                setTrendingMoviesError(null);
            })
            .catch((err) => {
                setTrendingMoviesError(err);
            });
        setIsLoading(false);
    }, []);

    if (isLoading) {
        return <div style={{ fontSize: "240px" }}>Loading...</div>;
    }
    return (
        <div>
            {trendingMovies && <TrendingMovies movieDetails={trendingMovies} />}
        </div>
    )
}

export default Trending