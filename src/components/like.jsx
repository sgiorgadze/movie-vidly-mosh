import React from "react";

const Like = ({ movie, onLike }) => {
  let likeClass = `fa fa-heart${movie.liked ? "" : "-o"}`;
  return (
    <i
      className={likeClass}
      aria-hidden="true"
      onClick={() => onLike(movie)}
    ></i>
  );
};

export default Like;
