import { Link, useNavigate } from "react-router-dom";

export default function MovieCard({ movie }) {
  const navigate = useNavigate();
  function userClicked() {
    navigate(`/${movie.title}`);
  }
  return (
    <div className="movie-card" onClick={() => userClicked()}>
      <img src={movie.posterURL} alt={movie.title} />
      <h2>{movie.title}</h2>
      <p>{movie.description}</p>
      <p>Note: {movie.note}</p>
    </div>
  );
}
