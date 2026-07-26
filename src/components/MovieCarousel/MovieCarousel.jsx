import { Link } from "react-router-dom";
import "./MovieCarousel.css";

const MovieCarousel = ({ title, movies, direction = "left" }) => {
  const loopedMovies = [...movies, ...movies];

  return (
    <section className="carousel-section">
      <h2 className="carousel-title">{title}</h2>

      <div className="carousel-track-wrapper">
        <div
          className={`carousel-track ${
            direction === "right" ? "scroll-right" : "scroll-left"
          }`}
        >
          {loopedMovies.map((movie, index) => (
            <Link
              to={`/movies/${movie.id}`}
              key={`${movie.id}-${index}`}
              className="carousel-item"
            >
              <img
                src={movie.poster}
                alt={movie.title}
                className="carousel-poster"
              />
              <div className="carousel-overlay">
                <p className="carousel-item-title">{movie.title}</p>
                <p className="carousel-item-meta">
                  {movie.genre} · ★ {movie.rating}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MovieCarousel;