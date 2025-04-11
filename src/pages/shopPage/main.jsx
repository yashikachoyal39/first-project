import React, { useState } from 'react'
import Breadcrumb from '../../components/breadcrumb'
import Filters from './filters'
import Pagination from './pagination'
import ProductCard from '../../components/productCard'
import { Link } from 'react-router'

export default function ShopPage({ productData }) {
    const [isFilter, setIsFilter] = useState(false)
    const [startPage, setStartPage] = useState(0)
    const [currentPage, setCurrentPage] = useState(1)
    const [itemsPerPage, setItemsPerPage] = useState(9)
    const [filterProduct, setFilterProduct] = useState([])

    return (
        <>
            <Breadcrumb />
            <div className="container-fluid">
                <div className="row px-xl-5">
                    <Filters productData={productData} setFilterProduct={setFilterProduct} setIsFilter={setIsFilter} />
                    <div className="col-lg-9 col-md-8">
                        <div className="row pb-3">
                            <div className="col-12 pb-1">
                                <div className="d-flex align-items-center justify-content-between mb-4">
                                    <div>
                                        <button className="btn btn-sm btn-light">
                                            <i className="fa fa-th-large" />
                                        </button>
                                        <button className="btn btn-sm btn-light ml-2">
                                            <i className="fa fa-bars" />
                                        </button>
                                    </div>
                                    <div className="ml-2">
                                        <div className="btn-group">
                                            <button
                                                type="button"
                                                className="btn btn-sm btn-light dropdown-toggle"
                                                data-toggle="dropdown"
                                            >
                                                Sorting
                                            </button>
                                            <div className="dropdown-menu dropdown-menu-right">
                                                <a className="dropdown-item" href="#">
                                                    Latest
                                                </a>
                                                <a className="dropdown-item" href="#">
                                                    Popularity
                                                </a>
                                                <a className="dropdown-item" href="#">
                                                    Best Rating
                                                </a>
                                            </div>
                                        </div>
                                        <div className="btn-group ml-2">
                                            <button
                                                type="button"
                                                className="btn btn-sm btn-light dropdown-toggle"
                                                data-toggle="dropdown"
                                            >
                                                Showing
                                            </button>
                                            <div className="dropdown-menu dropdown-menu-right">
                                                <Link className={itemsPerPage === 9 ? "dropdown-item active" : "dropdown-item"} onClick={() => { setItemsPerPage(9) }}>
                                                    9
                                                </Link>
                                                <Link className={itemsPerPage === 12 ? "dropdown-item active" : "dropdown-item"} onClick={() => { setItemsPerPage(12) }}>
                                                    12
                                                </Link>
                                                <Link className={itemsPerPage === 15 ? "dropdown-item active" : "dropdown-item"} onClick={() => { setItemsPerPage(15) }}>
                                                    15
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {isFilter ? <>
                                {filterProduct && filterProduct.slice(startPage, itemsPerPage * currentPage).map((item, index) => (
                                    <ProductCard Data={item} key={index} className={"col-lg-4"} />
                                ))}
                            </> : <>
                                {productData && productData.slice(startPage, itemsPerPage * currentPage).map((item, index) => (
                                    <ProductCard Data={item} key={index} className={"col-lg-4"} />
                                ))}
                            </>}
                            <Pagination
                                totalCount={(filterProduct.length ? filterProduct.length : productData.length)}
                                itemsPerPage={itemsPerPage}
                                startPage={startPage}
                                setStartPage={setStartPage}
                                currentPage={currentPage}
                                setCurrentPage={setCurrentPage}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
