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

export default Pagination;
