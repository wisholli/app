import styles from "../Pagination/Pagination.module.css";
import React, { useState } from "react";
import cn from "classnames";

// const Pagination = ({ totalUsersCount, pageSize, onpageChange }) => {
//   const [itemOffset, setItemOffset] = useState(0);
//   const pageCount = Math.ceil(totalUsersCount / pageSize);

//   const handlePageClick = (event) => {
//     const newOffset = (event.selected * pageSize) % totalUsersCount;
//     setItemOffset(onpageChange(newOffset));
//   };
//   const nextLabel = (event) => {
//     const newOffset = ((event.selected * pageSize) % totalUsersCount) + 1;
//     setItemOffset(onpageChange(newOffset));
//     // setItemOffset(newOffset);
//   };
//   const previousLabel = (event) => {
//     const newOffset = ((event.selected * pageSize) % totalUsersCount) - 1;
//     setItemOffset(onpageChange(newOffset));
//     // setItemOffset(newOffset);
//   };

//   return (
//     <>
//       <ReactPaginate
//         breakLabel="..."
//         nextLabel={<button onClick={nextLabel}>Next</button>}
//         onPageChange={handlePageClick}
//         pageRangeDisplayed={5}
//         pageCount={pageCount}
//         previousLabel={<button onClick={previousLabel}>previous</button>}
//         renderOnZeroPageCount={null}
//       />
//     </>
//   );
// };

const Pagination = ({
  totalItemsCount,
  pageSize,
  currentPage,
  onpageChange,
  portionSize = 10,
}) => {
  let pagesCount = Math.ceil(totalItemsCount / pageSize);

  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  let portionCount = Math.ceil(pagesCount / portionSize);
  let [portionNumber, setPortionNumber] = useState(1);
  let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
  let rightPortionPageNumber = portionNumber * portionSize;

  return (
    <div className={styles.paginator}>
      {portionNumber > 1 && (
        <button
          onClick={() => {
            setPortionNumber(portionNumber - 1);
          }}
        >
          PREV
        </button>
      )}

      {pages
        .filter(
          (p) => p >= leftPortionPageNumber && p <= rightPortionPageNumber
        )
        .map((p) => {
          return (
            <span
              className={cn(
                {
                  [styles.selectedPage]: currentPage === p,
                },
                styles.pageNumber
              )}
              key={p}
              onClick={(e) => {
                onpageChange(p);
              }}
            >
              {p}
            </span>
          );
        })}
      {portionCount > portionNumber && (
        <button
          onClick={() => {
            setPortionNumber(portionNumber + 1);
          }}
        >
          NEXT
        </button>
      )}
    </div>
  );
};

export default Pagination;
