import React, { useEffect, useState } from "react";
import apiConfig from "../../configAPI/apiConfig";
import ApiTMDB from "../../configAPI/apiTMDB"
import Movie from "../../main/MovieList/Movie"

import "./index.css"


const Movies = () => {
    const [movie, setMovie] = useState([])
    const [dataSearch, setDataSearch] = useState([])
    const [query, setQuery] = useState("")

    const handleOnChange = (e) => {
        e.preventDefault()
        setQuery(e.target.value)

        fetch(`
            ${apiConfig.baseURL}search/movie?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1&include_adult=false&query=${e.target.value}`)
            .then(res => res.json())
            .then(data => {
                if(!data.errors) {
                    setDataSearch(data.results)
                } else {
                    setDataSearch([])
                }
            }
        )
    }

    useEffect(() => {
        fetch(ApiTMDB.apiMovieTab)
            .then(res => res.json())
            .then(data => {
                setMovie(data.results)
            })
    },[])

    
    

    return (
        <div className="container movies-nav">
            <div className="movie-search">
                <input 
                    placeholder="Search...."
                    type="text"
                    onChange={handleOnChange}
                    value={query}
                />
                <i className="ti-search icon-search"></i>
            </div>
            {dataSearch.length > 0 ? 
                <div className=" row">
                    {dataSearch && 
                        dataSearch.map((movie) => (
                            <Movie movie={movie}/>
                        ))
                    }
                </div> :

                <div className=" row">
                    {movie && 
                        movie.map((movie) => (
                            <Movie movie={movie}/>
                        ))
                    }
                </div>
            }
        </div>
    )
}

export default Movies
