import React from "react";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import apiConfig from "../../configAPI/apiConfig";

const Movie = ({ movie, category }) => {

   
    const path =
        category === 'movie' ? `/movie/${movie.id}/play` : `/tv/${movie.id}/play`;

    return (
        <div className="col-xl-3 col-sm-6 movies-container">
            <div 
                className=" movie-item-con" 
                style={{backgroundImage: `linear-gradient(180deg, rgba(16,16,15,0.5), rgba(15,15,16,0.5)), url(${apiConfig.w500Image(movie.backdrop_path || movie.poster_path)})`}}
            >
                <div className="movie-title ">
                    <div>
                        <h3 className="movie-item-title">{movie.title || movie.name}</h3>

                    </div>
                    <div>
                        <span className="vote">{movie.vote_average.toFixed(1)}/10</span>

                    </div>
                    <Link to={path} props={{movie}}>
                        <div className="btn-play" >
                            <button className="play-video">Play</button>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Movie
