import React, { useEffect, useState } from "react";
import { getMovies } from "../services/fakeMovieService";
import { getGenres } from "../services/fakeGenreService";
import Like from "./like";
import Pagination from "./pagination";
import ListGroup from "./listGroup";

//import { usePagination } from "react-use-pagination";

const Movie = () => {
  const [movies, setMovies] = useState(getMovies());

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

  if (movies.length === 0) {
    return <p>there are no movies</p>;
  }

  return (
    <>
      <div className="row">
        <div className="col-sm-3 ">
          <div className="p-3"></div>
        </div>
        <div className="col-sm-9">
          <div className="p-3">
            <h1>there is {movies.length} movies</h1>
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">Title</th>
                  <th scope="col">Genre</th>
                  <th scope="col">Stock</th>
                  <th scope="col">Rate</th>
                  <th scope="col"></th>
                  <th scope="col"></th>
                </tr>
              </thead>
              <tbody>
                {movies.map((movie) => (
                  <tr key={movie._id}>
                    <td>{movie.title}</td>
                    <td>{movie.genre.name}</td>
                    <td>{movie.numberInStock}</td>
                    <td>{movie.dailyRentalRate}</td>
                    <td>
                      <Like movie={movie} onLike={onLike} />
                    </td>

                    <td>
                      <button
                        onClick={() => deleteMovie(movie)}
                        type="button"
                        className="btn btn-danger"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <Pagination itemsCount={movies.length} pageSize={4} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Movie;
