import { Routes, Route, useParams } from "react-router-dom";
import { initialMovies } from "../App";
import MovieCard from "./MovieCard";
export default function OneMovie() {
  let { title } = useParams();
  console.log(title);
  const movie = initialMovies.find((elem) => elem.title === title);
  return (
    <div className="movie-card">
      <img src={movie.posterURL} alt={movie.title} />
      <h2>{movie.title}</h2>
      <p>{movie.description}</p>
      <p>Note: {movie.note}</p>
    </div>
  );
}
