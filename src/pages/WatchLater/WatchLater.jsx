import { Link } from "react-router-dom";
import { useWatchLater } from "../../context/WatchLaterContext";
import MovieGrid from "../../components/MovieGrid/MovieGrid";
import "./WatchLater.css";

const WatchLater = () => {
  const { watchLater } = useWatchLater();

  return (
    <div className="watch-later-page">
      <h1>Watch Later</h1>

      {watchLater.length === 0 ? (
        <div className="watch-later-empty">
          <p>Your Watch Later list is empty.</p>
          <Link to="/" className="browse-movies-link">
            Browse Movies
          </Link>
        </div>
      ) : (
        <MovieGrid movies={watchLater} />
      )}
    </div>
  );
};

export default WatchLater;