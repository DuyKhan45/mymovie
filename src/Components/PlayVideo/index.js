import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";


import "./index.css"
import apiConfig from "../../configAPI/apiConfig";
import Video from "./Video";
import MovieList from "../../main/MovieList/MovieList";


const PlayVideo = () => {

    const { id, category } = useParams();
    const [playMovie, setPlayMovie] = useState([])
    const [src, setSrc] = useState([])
    const [similar, setSimilar] = useState([])

    const handleSrc = (season = 1) => {
        if (category === 'movie') {
            setSrc(apiConfig.videoMovie(id));
        } else {
            if (playMovie.episode_number) {
                setSrc(apiConfig.tvVideo(id, season, playMovie.episode_number));
            } else {
                setSrc(apiConfig.tvVideo(id, season, 1));
            }
        }
    }

    useEffect(() => {
        fetch(`${apiConfig.baseURL}${category}/${id}?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US`)
            .then(res => res.json())
            .then(data => {
                if (!data.errors) {
                    setPlayMovie(data)
                } else {
                    setPlayMovie([])
                }
            })

    }, [])
    useEffect(() => {
        fetch(`${apiConfig.baseURL}${category}/${id}/similar?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1`)
            .then(res => res.json())
            .then(data => {
                if(!data.errors) {
                    setSimilar(data.results)
                }
                else {
                    setSimilar([])
                }
            })
    },[])

    useEffect(() => {
        handleSrc()
    }, [])

    return (
        <div 
            className= "playvideo"
            style={ {backgroundImage:  `linear-gradient(180deg, rgba(16,16,15,0.5), rgba(15,15,16,0.5)), url(${apiConfig.w500Image(playMovie.poster_path)})`}}
        >   
            <div
                className="container "
            >
                <div className="row">
                    <div className="col-9">
                        <Video src={src} />
                    </div>
                    <div className="video-title col-3" >
                        <div>
                            <h4 className="video-title-item">{playMovie.title || playMovie.original_name}</h4>
                        </div>
                        <div className="video-title-overview">
                            <p>{playMovie.overview}</p>
                        </div>
                        <div className="video-title-vote">
                            <span>Vote Point: {playMovie.vote_average}/10</span>
                        </div>

                        <div className="video-title-vote">
                            <span>Vote Count: ({playMovie.vote_count}) </span>
                        </div>
                        <div className="video-title-vote">
                            <span>Release Date: {playMovie.release_date}</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container similar-play-video">

                <MovieList 
                    data={similar}
                    title="Similar"
                    category={category}
                />
            </div>

        </div>
    )
}

export default PlayVideo
