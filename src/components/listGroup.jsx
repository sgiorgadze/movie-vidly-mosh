import React from "react";
const ListGroup = ({ genres, onGenres, selectedGenre }) => {
  return (
    <ul className="list-group">
      {/* <li className="list-group-item active">All Genres </li> */}
      {genres.map((g) => (
        <li
          key={g._id}
          className={
            g.name == selectedGenre
              ? "list-group-item active "
              : "list-group-item "
          }
          onClick={() => onGenres(g)}
        >
          {g.name}
        </li>
      ))}
    </ul>
  );
};

export default ListGroup;
