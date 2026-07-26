import { GENRES } from "../../data/movies";
import "./GenreFilterBar.css";

const GenreFilterBar = ({ activeGenre, onSelectGenre }) => {
  const allGenres = ["All", ...GENRES];

  return (
    <div className="genre-filter-bar">
      {allGenres.map((genre) => (
        <button
          key={genre}
          className={`genre-chip ${activeGenre === genre ? "active" : ""}`}
          onClick={() => onSelectGenre(genre)}
        >
          {genre}
        </button>
      ))}
    </div>
  );
};

export default GenreFilterBar;