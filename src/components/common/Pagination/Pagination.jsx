import React from "react";
import style from "../Pagination/Pagination.module.css";

const Pagination = ({
  totalUsersCount,
  pageSize,
  currentPage,
  onpageChange,
}) => {
  let pagesCount = Math.ceil(totalUsersCount / pageSize);

  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }
  return (
    <div>
      {pages.map((p) => (
        <span
          className={currentPage === p && style.selectedPage}
          onClick={() => onpageChange(p)}
        >
          {p + " "}
        </span>
      ))}
    </div>
  );
};

export default Pagination;
