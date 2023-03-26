import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { get } from "../data/httpClient"
import { getMovieImage } from "../utils/getMovieImg"

export function MovieDetails(){
    const {movieId} = useParams();
    const [movie, setMovie] = useState([]);
    useEffect(()=>{
        get("/movie/" + movieId).then((data)=>{
            setMovie(data)
        })
    },[movieId])

    const imageUrl = getMovieImage(movie.poster_path, 500)

   return(<div>
        <img src={imageUrl} />
   </div>)
}