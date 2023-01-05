import ReactPaginate from "react-paginate";

const Pagination = ({ totalItemsCount, pageSize, setCurrentPage }) => {
  let pagesCount = Math.ceil(totalItemsCount / pageSize);
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  const handlePageClick = (event) => {
    let currentPageSelected = event.selected + 1;
    {
      pages.map((page) => {
        if (currentPageSelected === page) {
          setCurrentPage(currentPageSelected);
        }
      });
    }
  };

  return (
    <div>
      <ReactPaginate
        breakLabel="..."
        nextLabel="next"
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        pageCount={pagesCount}
        marginPagesDisplayed={3}
        previousLabel="prev"
        renderOnZeroPageCount={null}
        containerClassName={"pagination justify-content-center"}
        pageClassName={"page-item"}
        pageLinkClassName={"page-link"}
        previousClassName={"page-item"}
        previousLinkClassName={"page-link"}
        nextClassName={"page-item"}
        nextLinkClassName={"page-link"}
        breakClassName={"page-item"}
        breakLinkClassName={"page-link"}
        activeClassName={"active"}
      />
    </div>
  );
};

// const Pagination = ({
//   totalItemsCount,
//   pageSize,
//   currentPage,
//   onpageChange,
//   portionSize = 10,
// }) => {
//   let pagesCount = Math.ceil(totalItemsCount / pageSize);

//   let pages = [];
//   for (let i = 1; i <= pagesCount; i++) {
//     pages.push(i);
//   }

//   let portionCount = Math.ceil(pagesCount / portionSize);
//   let [portionNumber, setPortionNumber] = useState(1);
//   let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
//   let rightPortionPageNumber = portionNumber * portionSize;

//   return (
//     <div className={styles.paginator}>
//       {portionNumber > 1 && (
//         <button
//           onClick={() => {
//             setPortionNumber(portionNumber - 1);
//           }}
//         >
//           PREV
//         </button>
//       )}

//       {pages
//         .filter(
//           (p) => p >= leftPortionPageNumber && p <= rightPortionPageNumber
//         )
//         .map((p) => {
//           return (
//             <span
//               className={cn(
//                 {
//                   [styles.selectedPage]: currentPage === p,
//                 },
//                 styles.pageNumber
//               )}
//               key={p}
//               onClick={(e) => {
//                 onpageChange(p);
//               }}
//             >
//               {p}
//             </span>
//           );
//         })}
//       {portionCount > portionNumber && (
//         <button
//           onClick={() => {
//             setPortionNumber(portionNumber + 1);
//           }}
//         >
//           NEXT
//         </button>
//       )}
//     </div>
//   );
// };

// const Pagination = ({ users }) => {
//   const [usersFromAPI, setUsers] = useState([]);
//   setUsers(() => [...users]);
//   //Map users
//   {
//     usersFromAPI.map((user) => {
//       return <div>{user}</div>;
//     });
//   }

//   const [currentUsers, setCurrentUsers] = useState(null);
//   const [pageCount, setPageCount] = useState(0);
//   const [usersOffset, setUsersOffset] = useState(0);

//   useEffect(() => {
//     const endOffset = usersOffset + 100;
//     setCurrentUsers(usersFromAPI.slice(usersOffset, endOffset));
//     setPageCount(Math.ceil(usersFromAPI.length / 100));
//   }, [usersFromAPI, usersOffset]);

//   const handlePageClick = (event) => {
//     const newOffset = (event.selected * 100) % usersFromAPI.length;
//     setUsersOffset(newOffset);
//   };
//   return (
//     <div className="pagination">
//       <ReactPaginate
//         breakLabel="..."
//         nextLabel="next >"
//         onPageChange={handlePageClick}
//         pageRangeDisplayed={5}
//         pageCount={pageCount}
//         previousLabel="< previous"
//         renderOnZeroPageCount={null}
//         breakClassName={"page-item"}
//         breakLinkClassName={"page-link"}
//         containerClassName={"pagination"}
//         pageClassName={"page-item"}
//         pageLinkClassName={"page-link"}
//         previousClassName={"page-item"}
//         previousLinkClassName={"page-link"}
//         nextClassName={"page-item"}
//         nextLinkClassName={"page-link"}
//         activeClassName={"active"}
//       />
//     </div>
//   );
// };

export default Pagination;
