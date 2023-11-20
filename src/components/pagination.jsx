import React from "react";
import _ from "lodash";

const Pagination = ({ itemsCount, pageSize, onPageChange, currentPage }) => {
  const pageCount = Math.ceil(itemsCount / pageSize);

  const pages = _.range(1, pageCount + 1);
  if (pageCount == 1) {
    return null;
  }

  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination">
        {pages.map((p) => (
          <li
            key={p}
            className={currentPage == p ? "page-item active" : "page-item "}
          >
            <a className="page-link" href="#" onClick={() => onPageChange(p)}>
              {p}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
