import React, { useState } from "react";
import '../styles/movie-card.css'

export default function MovieCard({movie}) {
    const [hoverEffect, setHoverEffect] = useState(false);
    function reduceTransparency() {
        setHoverEffect(true);
    }

    function restoreTransparency() {
        setHoverEffect(false);
    }

    const cardStyle = {
        filter: hoverEffect ? 'brightness(50%)' : 'none',
    }


    return (
        <div key={movie.id} className="movie-card">
                <div className="image-section">
                    <img
                    src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
                    alt={movie.title}
                    onMouseEnter={reduceTransparency}
                    onMouseLeave={restoreTransparency}
                    style={cardStyle}
                    />
                </div>
                <div className="movie-detais">
                    <h3 className='title'>{movie.title}</h3>
                    <span className="ratings">
                        <span className='average'>IMDB: {movie.vote_average}/10</span>
                    </span>
                        <p className='year'>{movie.release_date.slice(0,4)}</p>
                </div>
            </div>
    )
}