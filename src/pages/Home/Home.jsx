import { useState } from "react";
import movies from "../../data/movies";
import GenreFilterBar from "../../components/GenreFilterBar/GenreFilterBar";
import MovieGrid from "../../components/MovieGrid/MovieGrid";
import MovieCarousel from "../../components/MovieCarousel/MovieCarousel";
import "./Home.css";

const Home = () => {
  const [activeGenre, setActiveGenre] = useState("All");

  const filteredMovies =
    activeGenre === "All"
      ? movies
      : movies.filter((movie) => movie.genre === activeGenre);

  const trendingNow = [...movies]
    .sort((a, b) => Number(b.rating) - Number(a.rating))
    .slice(0, 16);

  const freshReleases = movies
    .filter((movie) => movie.year >= 2015)
    .slice(0, 16);

  return (
    <div className="home-page">
      <section className="home-hero">
        <h1>Discover your next favourite</h1>
        <p>
          Browse {movies.length} movies and save your favourites to Watch
          Later.
        </p>
      </section>

      <MovieCarousel title="Trending Now" movies={trendingNow} direction="left" />
      <MovieCarousel title="Fresh Releases" movies={freshReleases} direction="right" />

      <GenreFilterBar
        activeGenre={activeGenre}
        onSelectGenre={setActiveGenre}
      />

      <MovieGrid movies={filteredMovies} />
    </div>
  );
};

export default Home;