import React from "react";
import Like from "./like";
const MoviesTable = ({
  filtered,
  moviesForPagination,
  onLike,
  onDelete,
  onSort,
}) => {
  return (
    <div className="p-3">
      <h6>there is {filtered.length} movies</h6>
      <table className="table">
        <thead>
          <tr>
            <th scope="col" onClick={() => onSort("title")}>
              Title
            </th>
            <th scope="col" onClick={() => onSort("genre")}>
              Genre
            </th>
            <th scope="col" onClick={() => onSort("Stock")}>
              Stock
            </th>
            <th scope="col" onClick={() => onSort("Rate")}>
              Rate
            </th>
            <th scope="col"></th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {moviesForPagination.map((movie) => (
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
                  onClick={() => onDelete(movie)}
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
    </div>
  );
};

export default MoviesTable;
