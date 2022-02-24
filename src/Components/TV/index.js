import React,{ useEffect, useState } from "react";

import "./index.css"
import apiConfig from "../../configAPI/apiConfig";
import ApiTMDB from "../../configAPI/apiTMDB";
import Movie from "../../main/MovieList/Movie"

const TV = () => {

    const [Tv, setTv] = useState([])
    const [dataSearch, setDataSearch] = useState([])
    const [query, setQuery] = useState("")

    const handleOnChange = (e) => {

        e.preventDefault()
        setQuery(e.target.value)

        fetch(`
            ${apiConfig.baseURL}search/tv?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1&include_adult=false&query=${e.target.value}`)
            .then(res => res.json())
            .then(data => {
                console.log("1223",data)
                if(!data.errors) {
                    setDataSearch(data.results)
                } else {
                    setDataSearch([])
                }
            }
        )

    }

    useEffect(() => {
        fetch(ApiTMDB.apiTvTab)
            .then(res => res.json())
            .then(data => {
                setTv(data.results)
            })
    },[])
    return (
        <div className="container tv-nav">
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
                    {Tv && 
                        Tv.map((movie) => (
                            <Movie movie={movie}/>
                        ))
                    }
                </div>             
            }
        </div>
    )
}

export default TV
