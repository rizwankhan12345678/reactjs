import ReactPaginate from 'react-paginate';

function Pagination(props) {
    const { range, handlePageClick, pageCount, currentPage } = props;
    return (
        <ReactPaginate
            pageClassName="page-item"
            pageLinkClassName="page-link"
            previousClassName="page-item"
            previousLinkClassName="page-link"
            nextClassName="page-item"
            nextLinkClassName="page-link"
            breakLabel="..."
            breakClassName="page-item"
            breakLinkClassName="page-link"
            containerClassName="pagination"
            nextLabel="next >"
            onPageChange={(event) => handlePageClick(event)}
            pageRangeDisplayed={range}
            pageCount={pageCount}
            previousLabel="< previous"
            activeClassName="active"
            renderOnZeroPageCount={null}
            forcePage={currentPage}
        />
    )
}

export default Pagination;