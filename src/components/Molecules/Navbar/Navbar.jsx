import React from 'react';
import { useState, useRef, useEffect } from 'react';
import NavLinks from "./NavLinks"
import './Navbar.css';
import axios from 'axios';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import SearchMovieTemplate from '../../Atom/SearchMovieTemplate/SearchMovieTemplate';

const Navbar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState('');
  const [isResultActive, setIsResultActive] = useState(false);
  const [inputFocus, setInputFocus] = useState(false);
  const refInput = useRef();

  useEffect(() => {
    const delayDebounce = setTimeout(() => {
      setDebouncedSearchTerm(searchTerm);
    }, 1000);

    return () => clearTimeout(delayDebounce);
  }, [searchTerm]);

  useEffect(() => {
    const fetchData = () => {
      if (debouncedSearchTerm && inputFocus && searchTerm && searchTerm.length > 1) {
        axios
          .get('https://yts.mx/api/v2/list_movies.json', {
            params: {
              limit: 5,
              sort_by: 'rating',
              order_by: 'desc',
              query_term: debouncedSearchTerm,
            },
          }).then(resp => {
            console.log(resp)
            setSearchResults(resp.data.data.movies)
            setIsResultActive(true);
          });

      } else {
        setSearchResults([]);
      }
    }
    fetchData();
  }, [debouncedSearchTerm]);

  const handleSearchInput = (event) => {
    setSearchTerm(event.target.value);
  }

  const hideSearchResult = () => {
    refInput.current.value = '';
    setIsResultActive(false);
    setSearchResults([]);
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
              onChange={handleSearchInput}
              type="text"
              placeholder="Quick Search"
            />
          </div>
          <ul
            className="search-result-wrapper"
            style={
              isResultActive && searchTerm
                ? { transform: 'scaleY(1)' }
                : { transform: 'scaleY(0)', border: 'none' }
            }
          >

            {searchResults && searchResults.map(result => {
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
          <NavLinks className="fourKLink" links="/browse-movies">
            4K
          </NavLinks>
          <NavLinks links="/trending-movies">Trending</NavLinks>
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
