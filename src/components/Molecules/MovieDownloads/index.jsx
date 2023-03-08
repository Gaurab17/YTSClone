import React, { useState, useEffect } from "react";
import "./MovieDownloads.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { useParams } from "react-router-dom";
import SimilarMovies from "../../Atom/SimilarMovies";
import Footer from "../Footer";
import DownloadOptModal from "./common/DownloadOptModal";

const MovieDownload = () => {
    const { movie_id } = useParams();
    const [data, setData] = useState();
    const [foo, setFoo] = useState(0);
    const [similarMovies, setSimilarMovies] = useState([]);
    const [movieReview, setMovieReview] = useState();
    const [showDownloadELe, setShowDownloadEle] = useState(false)

    const hideModel = () => {
        setShowDownloadEle(false)
    }

    const showModel = () => {
        setShowDownloadEle(true)
    }

    useEffect(() => {

        axios
            .get(
                `https://yts.mx/api/v2/movie_details.json?${movie_id}&with_images=true&with_cast=true&with_rt_ratings`
            )
            .then((resp) => {
                const dataArray = [resp.data.data.movie];
                setData(dataArray);
                return resp.data.data.movie.id;
            })
        axios
            .get(`https://yts.mx/api/v2/movie_suggestions.json?${movie_id}`)
            .then((resp) => {
                setSimilarMovies(resp.data.data.movies);
            });
        axios
            .get(`https://yts.mx/api/v2/movie_reviews.json?${movie_id}`)
            .then((resp) => {
                setMovieReview(resp)
                console.log(resp)
            })
        return () => {
            setData(null);
            setSimilarMovies(null);
        };
    }, [movie_id]);

    return (
        <>
            {showDownloadELe ?
                <DownloadOptModal hideModel={hideModel} /> : null}
            <section className="download-section-container">
                {data && (
                    <div className="download-section-container_wrapper">
                        <div className="top-content">
                            <div className="left-container movie-poster-container">
                                <figure className="poster-figure">
                                    <img
                                        src={data[0].medium_cover_image}
                                        style={
                                            data[0].medium_cover_image
                                                ? { minWidth: "232.66px", minHeight: "349px" }
                                                : null
                                        }
                                        alt=""
                                    />
                                </figure>

                                <button className="download-btn" onClick={showModel}>
                                    <span>
                                        <FontAwesomeIcon icon={faDownload} />
                                    </span>
                                    Download
                                </button>

                                <button style={{ backgroundColor: " #00ffe7a3" }}
                                    onClick={() => {
                                        console.log("Clicked")
                                    }}
                                    className="download-btn"
                                >
                                    Watch Now
                                </button>
                            </div>
                            <div className="middle-content">
                                <h1>{data[0].title}</h1>
                                <h3>{data[0].year}</h3>
                                <h3>
                                    {data[0].genres.map((genre, index) => {
                                        return index === data[0].genres.length - 1 ? (
                                            <span key={genre}>{genre}</span>
                                        ) : (
                                            <span key={genre}>{genre} / </span>
                                        );
                                    })}
                                </h3>
                                <div className="Available-quality">
                                    <div className="Available-quality_wrapper">
                                        <h4>Available in: </h4>
                                        <ul>
                                            {data[0].torrents.map((item) => {
                                                return (
                                                    <li key={item.quality + item.type}>
                                                        <a
                                                            onClick={() => {
                                                                alert(`Are you sure you want to download ?`);
                                                            }}
                                                            href={item.url}
                                                        >
                                                            {item.quality}.{item.type}
                                                        </a>
                                                    </li>
                                                );
                                            })}
                                        </ul>

                                    </div>
                                    {foo < 0 ? (
                                        <p>
                                            WEB: same quality as BluRay, but ripped earlier from a
                                            streaming service
                                        </p>
                                    ) : null}
                                </div>
                                <a href="#" className="subtitle-download-btn">
                                    <span>
                                        <FontAwesomeIcon icon={faDownload} />{" "}
                                    </span>
                                    Download Subtitle
                                </a>
                                <div className="middle-content_bottom-info">
                                    <div className="likes">
                                        <div className="icon-wrapper heart-icon">
                                            <FontAwesomeIcon icon={faHeart} />
                                        </div>
                                        <span>{data[0].like_count}</span>
                                    </div>
                                    <div className="likes">
                                        <div className="icon-wrapper heart-icon">
                                            <FontAwesomeIcon icon={faDownload} />
                                        </div>
                                        <span>{data[0].download_count} - Downloads</span>
                                    </div>
                                    <div className="rating-number">
                                        <img
                                            className="imdb-icon"
                                            src="https://yts.mx/assets/images/website/logo-imdb.svg"
                                            alt=""
                                        />
                                        <span>{data[0].rating}</span>
                                        <FontAwesomeIcon
                                            icon={faStar}
                                            style={{
                                                marginLeft: ".8rem",
                                                color: "#6ac045",
                                                fontSize: "16px",
                                            }}
                                        />

                                    </div>
                                </div>
                            </div>
                            <div className="right-content">
                                <h3>Similar Movies</h3>
                                <div className="similar-movies-container">
                                    {similarMovies &&
                                        similarMovies.map((movie) => {
                                            return (
                                                <SimilarMovies
                                                    small_cover_image={movie.medium_cover_image}
                                                    movie_id={movie.id}
                                                    key={movie.id}
                                                />
                                            );
                                        })}
                                </div>
                            </div>
                        </div>
                        <section className="middle-container movie-snapShots">
                            <div className="preview-trailer">
                                <iframe
                                    src={`https://www.youtube.com/embed/${data[0].yt_trailer_code}`}
                                    title="YouTube video player"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                ></iframe>
                            </div>

                            <img src={data[0].medium_screenshot_image1} alt="" />
                            <img src={data[0].medium_screenshot_image2} alt="" />

                        </section>
                        <section className="synopsis">
                            <div className="synopsis-left">
                                <h3>Plot Summary</h3>
                                <p>{data[0].description_full}</p>
                                <a href="#" className="parental-guide">
                                    Parental Guide
                                </a>
                                <div className="uploaded-date-time">
                                    <h5>
                                        Uploaded by: <span>FREEMAN</span>
                                    </h5>
                                    <h5>September 15, 2021 at 11:52 AM</h5>
                                </div>
                            </div>
                            <div className="synopsis-right">
                                <h3>Cast</h3>

                                <div>

                                </div>
                            </div>
                        </section>
                    </div>
                )}
                <Footer />
            </section>

        </>
    );
}

export default MovieDownload;
