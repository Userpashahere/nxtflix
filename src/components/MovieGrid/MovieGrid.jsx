import MovieCard from "../MovieCard/MovieCard";
import "./MovieGrid.css";

const MovieGrid = ({ movies }) => {
  if (movies.length === 0) {
    return <p className="movie-grid-empty">No movies found for this genre.</p>;
  }

  return (
    <div className="movie-grid">
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default MovieGrid;