import { Link } from "react-router-dom";
import "./MovieCard.css";

const MovieCard = ({ movie }) => {
  const { id, title, genre, year, rating, duration, poster } = movie;

  return (
    <Link to={`/movies/${id}`} className="movie-card">
      <div className="movie-card-poster-wrapper">
        <img src={poster} alt={title} className="movie-card-poster" />
        <span className="movie-card-rating">★ {rating}</span>
        <div className="movie-card-play-overlay">
          <span className="movie-card-play-icon">▶</span>
        </div>
      </div>
      <h3 className="movie-card-title">{title}</h3>
      <p className="movie-card-meta">
        {genre} · {year} · {duration}
      </p>
    </Link>
  );
};

export default MovieCard;