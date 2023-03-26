import React from "react";
import placeholder from "../img/placeholder.png"

export function getMovieImage(path, width){
    return path? `https://image.tmdb.org/t/p/w${width}${path}`:placeholder 
}

//const imageUrl = "https://image.tmdb.org/t/p/w300" + movie.poster_path;