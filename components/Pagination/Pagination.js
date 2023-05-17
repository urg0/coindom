import React from "react";

import styles from "./Pagination.module.css";

const Pagination = ({ totalPosts, postsPerPage, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav className={styles.navigation}>
      <ul className={styles.pagination}>
        <button className={styles.pages}>{"<"}</button>
        {pageNumbers.map((number) => (
          <li
            key={number}
            onClick={() => paginate(number)}
            className={styles.pages}
          >
            {number}
          </li>
        ))}
        <button className={styles.pages}>{">"}</button>
      </ul>
    </nav>
  );
};

export default Pagination;
