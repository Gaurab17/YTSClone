import React, { useState, useEffect } from 'react'
import TrendingMovies from '../../Atom/TrendingMovies';
import axios from 'axios';
import Footer from '../Footer';

const Trending = () => {
    const [trendingMovies, setTrendingMovies] = useState(null);
    const [trendingMoviesError, setTrendingMoviesError] = useState(null);
    const [isLoading, setIsLoading] = useState(false)

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
                setIsLoading(true);
            })
            .catch((err) => {
                setTrendingMoviesError(err);
            });
        return (() => {
            setIsLoading(false)
        })
    }, []);

    return (
        <>
            {!isLoading ? (
                <div style={{ display: "flex", justifyContent: "center", alignItems: "center", color: "white", background: "var(--secondary-black)", height: "780px", fontSize: "24px" }}>Data Loading.... Please Wait</div>
            ) : (
                <div>
                    {trendingMovies && <TrendingMovies movieDetails={trendingMovies} />}
                    <Footer />
                </div>
            )}
        </>
    );
}

export default Trending