import React, { useState, useEffect } from 'react';
import '../styles/movie-style.css';
import MovieCard from './MovieCard';

function Movies ({start, end}) {
    const [movies, setMovies] = useState([]);
    const apiKey = 'd5240ed815546eca143f3847378fb9ca';

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}`)
          .then((response) => response.json())
          .then((data) => {
            setMovies(data.results);
          });
      }, []);

    return (
        <div className="movie-list">
        {movies.slice(start,end).map((movie) => (
            <a>
            <MovieCard movie = {movie} />
            </a>
        ))}
      </div>
     );
}
 
export default Movies;