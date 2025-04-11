import React, { useCallback, useMemo } from 'react'

export default function Pagination({ totalCount, itemsPerPage, setCurrentPage, currentPage, setStartPage, startPage }) {

    const totalPageNumber = useMemo(() => {
        return Math.floor(totalCount / itemsPerPage) + (totalCount % itemsPerPage !== 0 ? 1 : 0)
    }, [totalCount])

    const Previous = useCallback(() => {
        setStartPage(startPage - itemsPerPage)
        setCurrentPage(currentPage - 1)
    }, [startPage, currentPage, itemsPerPage])

    const Next = useCallback(() => {
        setStartPage(startPage + itemsPerPage)
        setCurrentPage(currentPage + 1)
    }, [startPage, currentPage, itemsPerPage])

    const jumpPage = useCallback((num) => {
        setStartPage((num - 1) * itemsPerPage)
        setCurrentPage(num)
    }, [itemsPerPage])

    return (
        <>
            <div className="col-12">
                <nav>
                    <ul className="pagination justify-content-center">
                        <li className={currentPage > 1 ? "page-item" : "page-item disabled"}>
                            <button className="page-link" onClick={Previous}>
                                Previous
                            </button>
                        </li>
                        {totalPageNumber && new Array(totalPageNumber)?.fill("page").map((item, index) => (
                            <li className={currentPage === index + 1 ? "page-item active" : "page-item"} key={index}>
                                <button className="page-link" onClick={() => { jumpPage(index + 1) }}>
                                    {index + 1}
                                </button>
                            </li>
                        ))}
                        <li className={totalPageNumber === currentPage ? "page-item disabled" : "page-item"}>
                            <button className="page-link" onClick={Next}>
                                Next
                            </button>
                        </li>
                    </ul>
                </nav>
            </div>
        </>
    )
}
