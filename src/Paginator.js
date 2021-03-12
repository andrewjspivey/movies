


const Paginator = ({ currentPage, numPages, onPrevPage, onNextPage }) => {
    return (
        <div className="paginator">
            <p>{currentPage} of {numPages}</p>
            <button onClick={onPrevPage}>&lt;</button>
            <button onClick={onNextPage}>&gt;</button>
        </div>
    )
}

export default Paginator;