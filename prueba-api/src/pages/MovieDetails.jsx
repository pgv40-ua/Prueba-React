import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { get } from "../data/httpClient";
import { getMovieImage } from "../utils/getMovieImg";
import "../pages/MovieDetails.css"

export function MovieDetails() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState([]);
  const [genero, setGenero] = useState([]);

  useEffect(() => {
    get("/movie/" + movieId).then((data) => {
      setMovie(data);
      setGenero(data.genres[0]);
    });
  }, [movieId]);

  const imageUrl = getMovieImage(movie.poster_path, 500);

  return (
    <div className="detailsContainer">
      <img className="col movieImage" src={imageUrl} alt={movie.title} />
      <div className="col movieDetails">
        <p className="titulo2">
          <strong>Título: </strong>
          {movie.title}
        </p>
        <p className="genero">
          <strong>Genero: </strong>
          {genero.name}
        </p>
        <p className="descripcion">
          <strong>Descripción: </strong>
          {movie.overview}
        </p>
      </div>
    </div>
  );
}
