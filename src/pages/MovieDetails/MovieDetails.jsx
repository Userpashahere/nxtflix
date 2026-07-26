import { useParams, useNavigate, Navigate } from "react-router-dom";
import movies from "../../data/movies";
import { useWatchLater } from "../../context/WatchLaterContext";
import "./MovieDetails.css";

const MovieDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { isInWatchLater, toggleWatchLater } = useWatchLater();

  const movie = movies.find((m) => m.id === Number(id));

  if (!movie) {
    return <Navigate to="/not-found" replace />;
  }

  const saved = isInWatchLater(movie.id);

  return (
    <div className="movie-details-page">
      <div
        className="movie-details-backdrop"
        style={{ backgroundImage: `url(${movie.backdrop})` }}
      >
        <div className="movie-details-backdrop-overlay" />
      </div>

      <div className="movie-details-content">
        <button className="movie-details-back" onClick={() => navigate(-1)}>
          ← Go Back
        </button>

        <div className="movie-details-main">
          <img
            src={movie.poster}
            alt={movie.title}
            className="movie-details-poster"
          />

          <div className="movie-details-info">
            <h1 className="movie-details-title">{movie.title}</h1>

            <div className="movie-details-meta">
              <span className="movie-details-genre-tag">{movie.genre}</span>
              <span>{movie.year}</span>
              <span>{movie.duration}</span>
              <span>★ {movie.rating}</span>
            </div>

            <p className="movie-details-overview">{movie.overview}</p>

            <button
              className={`watch-later-btn ${saved ? "added" : ""}`}
              onClick={() => toggleWatchLater(movie)}
            >
              {saved ? "✓ Added to Watch Later" : "+ Watch Later"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;