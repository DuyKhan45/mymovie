import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./index.css"
import Movie from "./Movie";

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", background: "blue", zIndex: 1, position: "absolute", right: "6px" }}
            onClick={onClick}
        />
    );
}
function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", background: "green", zIndex: 1, position: "absolute", left: "6px" }}
            onClick={onClick}
        />
    );
}

const MovieList = (props) => {

    const settings = {
        infinite: true,
        dots: false,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 4,
        nextArrow: <SampleNextArrow className="nextBtn" />,
        prevArrow: <SamplePrevArrow className="prevBtn"/>,
        responsive: [
            {
                breakpoint: 1700,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                },
            },
            {
                breakpoint: 1280,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                },
            },
            {
                breakpoint: 813,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <div className="movie-list ">
            <h3 className="movie-list-title">
                {props.title}
            </h3>
            <div className="movie-item">
                <Slider {...settings}>
                    {  props.data &&
                        props.data.map((movie) => (

                            <Movie 
                                key = {movie.id}
                                movie={movie}
                                category={props.category}
                            />
                    ))}
                </Slider>
            </div>
            
        </div>
    )
}

export default MovieList
