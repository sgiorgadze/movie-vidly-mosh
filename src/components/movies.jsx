import React, { useEffect, useState } from "react";
import { getMovies } from "../services/fakeMovieService";
import { getGenres } from "../services/fakeGenreService";
import Like from "./like";
import Pagination from "./pagination";
import { paginate } from "../utilis/pagination";
import ListGroup from "./listGroup";
import MoviesTable from "./moviesTable";

const Movie = () => {
  const [movies, setMovies] = useState(getMovies());
  const [pageSize, setPageSize] = useState(4);
  const [currentPage, setCurrentPage] = useState(1);

  const [genres, setGenres] = useState([
    { name: "All movies" },
    ...getGenres(),
  ]);
  const [selectedGenre, setSelectedGenre] = useState("");

  if (movies.length === 0) {
    return <p>there are no movies</p>;
  }
  const filtered =
    selectedGenre && selectedGenre._id
      ? movies.filter((m) => m.genre._id === selectedGenre._id)
      : movies;

  const moviesForPagination = paginate(filtered, currentPage, pageSize);

  const deleteMovie = (movie) => {
    const mov = movies.filter((m) => m._id !== movie._id);
    setMovies(mov);
  };

  const onLike = (likedmovie) => {
    const mov = [...movies];
    const index = movies.indexOf(likedmovie);
    mov[index] = { ...movies[index] };
    mov[index].liked = !movies[index].liked;
    setMovies(mov);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handeGenres = (g) => {
    setSelectedGenre(g);
  };

  const handleSort = (item) => {
    console.log(item);
  };

  return (
    <>
      <div className="row">
        <div className="col-sm-3 ">
          <div className="p-3">
            <ListGroup
              genres={genres}
              onGenres={handeGenres}
              selectedGenre={selectedGenre}
            />
          </div>
        </div>
        <div className="col-sm-9">
          <MoviesTable
            filtered={filtered}
            moviesForPagination={moviesForPagination}
            onLike={onLike}
            onDelete={deleteMovie}
            onSort={handleSort}
          />
          <Pagination
            itemsCount={filtered.length}
            pageSize={pageSize}
            onPageChange={handlePageChange}
            currentPage={currentPage}
          />
        </div>
      </div>
    </>
  );
};

export default Movie;
