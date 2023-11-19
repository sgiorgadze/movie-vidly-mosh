import React from "react";

const ListGroup = ({ genres, onGenres }) => {
  console.log(genres);
  return (
    <ul className="list-group">
      {/* <li className="list-group-item active">All Genres </li> */}
      {genres.map((g) => (
        <li
          key={g._id}
          className={
            g.name == genres.name
              ? "list-group-item "
              : "list-group-item active"
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
