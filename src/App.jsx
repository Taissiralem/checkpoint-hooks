import React from "react";
import { useState } from "react";
import MovieList from "./components/MovieList";
import Filtre from "./components/Filter";
import "./App.css";

export const initialMovies = [
  {
    id: 1,
    title: "Interstellar",
    description:
      "Interstellar is a 2014 epic science fiction film directed and produced by Christopher Nolan.",
    posterURL: "inter.jpg",
    note: 9.2,
  },
  {
    id: 2,
    title: "The Shawshank Redemption",
    description:
      "The Shawshank Redemption is a 1994 American drama film written and directed by Frank Darabont, It stars Tim Robbins and Morgan Freeman.",
    posterURL: "shawshank.jpg",
    note: 9.3,
  },
];
export default function App() {
  const [movies, setMovies] = useState(initialMovies);

  const [filterTitle, setFilterTitle] = useState("");
  const [filterRate, setFilterRate] = useState("");

  const handleTitleChange = (event) => {
    setFilterTitle(event.target.value);
  };

  const handleRateChange = (event) => {
    setFilterRate(event.target.value);
  };

  const filteredMovies = movies.filter((movie) => {
    return (
      movie.title.toLowerCase().includes(filterTitle.toLowerCase()) &&
      (filterRate === "" || movie.note >= parseFloat(filterRate))
    );
  });
  return (
    <div className="app">
      <h1>Ma liste de films</h1>
      <Filtre
        filterTitle={filterTitle}
        filterRate={filterRate}
        handleTitleChange={handleTitleChange}
        handleRateChange={handleRateChange}
      />
      <MovieList movies={filteredMovies} />
    </div>
  );
}
