import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { get } from "../data/httpClient"
import { getMovieImage } from "../utils/getMovieImg"

export function MovieDetails(){
    const {movieId} = useParams
    const [movie, setMovie] = useState(null)
    const imageUrl = getMovieImage()
    useEffect(()=>{
        get("/movie/" + movieId).then((data)=>{
            setMovie(data)
        })
    },[movieId])
   
   return(<div>
        <img src="" alt="" />
   </div>)
}