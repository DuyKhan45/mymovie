import React, {useState, useEffect} from "react";
import apiTMDB from "../../configAPI/apiTMDB"
import MovieList from "../MovieList/MovieList";
import "./index.css"

const Home = () => {

    const [movieNow, setMovieNow] = useState([])
    const [moviePopular, setMoviePopular] = useState([])
    const [movieTopRate, setMovieTopRate] = useState([])
    const [TvPopular, setTvPopular] = useState([])
    const [TvTopTate, setTvTopTate] = useState([])
    const [TvOnTheAir, setTvOnTheAir] = useState([])

    useEffect(() => {
        fetch(apiTMDB.apiMovieNow)
            .then(res => res.json())
            .then(data => {
                if(!data.errors) {
                    setMovieNow(data.results)
                } else {
                    setMovieNow([])
                }
            }) 
    },[])
    useEffect(() => {
        fetch(apiTMDB.apiMoviePopular)
            .then(res => res.json())
            .then(data => {
                if(!data.errors) {
                    setMoviePopular(data.results)
                } else {
                    setMoviePopular([])
                }
            }) 
    },[])
    useEffect(() => {
        fetch(apiTMDB.apiMovieTopRate)
            .then(res => res.json())
            .then(data => {
                if(!data.errors) {
                    setMovieTopRate(data.results)
                } else {
                    setMovieTopRate([])
                }
            }) 
    },[])

    useEffect(() => {
        fetch(apiTMDB.apiTVPopular)
            .then(res => res.json())
            .then(data => {
                if(!data.errors) {
                    setTvPopular(data.results)
                } else {
                    setTvPopular([])
                }
            }) 
    },[])
    useEffect(() => {
        fetch(apiTMDB.apiTVTopRate)
            .then(res => res.json())
            .then(data => {
                if(!data.errors) {
                    setTvTopTate(data.results)
                } else {
                    setTvTopTate([])
                }
            }) 
    },[])    
    useEffect(() => {
        fetch(apiTMDB.apiTVOnTheAir)
            .then(res => res.json())
            .then(data => {
                if(!data.errors) {
                    setTvOnTheAir(data.results)
                } else {
                    setTvOnTheAir([])
                }
            }) 
    },[])
    
    return (
        <div className="container none-padding" >
            <MovieList 
                data={movieNow} 
                title= "Hot Movie"
                category="movie"
            />
            
            <MovieList 
                data={movieTopRate} 
                title= "TopRate Movie"
                category="movie"
            />
            <MovieList 
                data={moviePopular} 
                title= "Popular Movie"
                category="movie"
            />
            <MovieList 
                data={TvPopular} 
                title= "TV Popular"
                category="tv"
            />
            <MovieList 
                data={TvTopTate} 
                title= "TV TopRate"
                category="movie"
            />
            <MovieList 
                data={TvOnTheAir} 
                title= "TV OnTheAir"
                category="movie"
            />          
        </div>
    )
}

export default Home
