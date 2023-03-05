import React from 'react';
import { useState, useRef, useEffect } from 'react';
import NavLinks from "./NavLinks"
import './Navbar.css';
import axios from 'axios';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import SearchMovieTemplate from '../../Atom/SearchMovieTemplate/SearchMovieTemplate';

const Navbar = () => {
  const [searchResult, setSearchResult] = useState(null);
  const [searchValue, setSearchValue] = useState();
  const [isResultActive, setIsResultActive] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [inputFocus, setInputFocus] = useState(false);
  const refInput = useRef();

  useEffect(() => {
    if (inputFocus && searchValue && searchValue.length > 1) {
      setIsLoading(true);
      axios
        .get('https://yts.mx/api/v2/list_movies.json', {
          params: {
            limit: 5,
            sort_by: 'rating',
            order_by: 'desc',
            query_term: searchValue,
          },
        })
        .then(resp => {
          const updatedResult = resp.data.data.movies;
          if (updatedResult) {
            setSearchResult(resp.data.data.movies);
            setIsLoading(false);
            setIsResultActive(true);
          } else {
            setSearchResult(null);
            setIsResultActive(false);
          }
        });
    } else {
      setSearchResult(null);
      setIsLoading(false);
      setIsResultActive(false);
    }
    return () => {
      setSearchResult(null);
    };
  }, [searchValue]);

  const hideSearchResult = () => {
    refInput.current.value = '';
    setIsResultActive(false);
  };
  const handleFocus = () => {
    setInputFocus(true);
  };

  return (
    <div className="navigation">
      <div className="navigation-left_section">
        <a href="/">
          <img
            src="https://yts.mx/assets/images/website/logo-YTS.svg"
            alt=""
            className="logo"
          />
        </a>
        <h3 className="navigation-site_description">
          Download HD movies in yts's clone website.
        </h3>
      </div>

      <div className="navigation-right_section">
        <div
          className="navigation-search_input"
          title="Only few High Rated Movies are displayed"
        >
          <div className="navigation-search_input-border">
            <FontAwesomeIcon className="search-icon" icon={faSearch} />
            <input
              ref={refInput}
              onFocus={handleFocus}
              onChange={e => {
                setSearchValue(e.target.value);
              }}
              type="text"
              placeholder="Quick Search"
            />
            <div className="spinner">{isLoading && <Loading />}</div>
          </div>
          <ul
            className="search-result-wrapper"
            style={
              isResultActive && searchValue
                ? { transform: 'scaleY(1)' }
                : { transform: 'scaleY(0)', border: 'none' }
            }
          >
            {searchResult &&
              searchResult.map(result => {
                return (
                  <SearchMovieTemplate
                    onClick={hideSearchResult}
                    key={result.id}
                    data={result}
                  />
                );
              })}
          </ul>
        </div>

        <ul className="nav-right_navLinks">
          <NavLinks links="/">Home</NavLinks>
          <NavLinks className="fourKLink" links="/browse-movies/quality=2160p">
            4K
          </NavLinks>
          <NavLinks links="trending">Trending</NavLinks>
          <NavLinks links="/browse-movies">Browse Movies</NavLinks>
        </ul>

        <ul className="navigation-right_userLogin">
          <NavLinks links="#">Login</NavLinks>
          <div className="divider"></div>
          <NavLinks links="#">Register</NavLinks>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
