import React from "react";
const ListGroup = ({ genres, onGenres, selectedGenre }) => {
  return (
    <ul className="list-group">
      {/* <li className="list-group-item active">All Genres </li> */}
      {genres.map((g, index) => (
        <li
          key={index}
          className={
            g.name == selectedGenre.name
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
