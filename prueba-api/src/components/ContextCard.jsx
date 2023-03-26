import { useEffect, useState } from "react";
import { get } from "../data/httpClient";
import { MovieCard } from "./Card";
import "../components/ContextCard.css";

export function ContextCard() {
  const [movies, SetMovies] = useState([]);
  useEffect(() => {
    get("/discover/movie").then((data) => {
      SetMovies(data.results);
    });
  }, []);
  return (
    <ul>
      {movies.map((movie) => (
        <MovieCard movie={movie} />
      ))}
    </ul>
  );
}
