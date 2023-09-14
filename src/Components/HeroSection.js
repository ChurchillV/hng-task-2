import React, { useState, useEffect } from 'react';
import logo from '../assets/movie-icon.png';
import Banner from '../assets/banner-img.jpg';
import '../styles/hero-style.css'
import SearchBar from './SearchBar';

function HeroSection({start, end}) {
    const [movies, setMovies] = useState([]);
    const apiKey = 'd5240ed815546eca143f3847378fb9ca';

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}`)
          .then((response) => response.json())
          .then((data) => {
            setMovies(data.results);
          });
      }, []);

      const movie = movies.slice(0,12);
    return ( 
        <div className="header-movie">
            <div className="navbar">
                <div className="site-title">
                        <span>
                            <img src={ logo } 
                            alt="site-logo"
                            style={{
                                width: '15px',
                                // marginRight: '5%',
                            }} />
                            MovieBox
                        </span>
                </div>
                <div className="search-bar">
                   <SearchBar />
                </div>
                <div className="sign-in">
                    <span> Sign In </span>
                </div>
            </div>
        </div>
     );
}
 
export default HeroSection;