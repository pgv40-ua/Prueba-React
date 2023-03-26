import { useEffect, useState } from "react";
import { get } from "../data/httpClient";
import { MovieCard } from "./Card";
import "../components/ContextCard.css";
import React from 'react'

export function ContextCard() {
  const [movies, SetMovies] = useState([]);
  useEffect(() => {
    get("/discover/movie").then((data) => {
      SetMovies(data.results);
    });
  }, []);
  return (
    <ul className="container">
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </ul>
  );
}
