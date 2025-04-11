import React from 'react'
import { Link } from 'react-router'

export default function CategoryCard({ Data }) {
    return (
        <>
            <div className="col-lg-3 col-md-4 col-sm-6 pb-1">
                <Link className="text-decoration-none" to={`/categories/${Data.slug}`}>
                    <div className="cat-item d-flex align-items-center mb-4">
                        <div
                            className="overflow-hidden"
                            style={{ width: 100, height: 100 }}
                        >
                            <img className="img-fluid" src='/img/cat-1.jpg' alt="" />
                        </div>
                        <div className="flex-fill pl-3">
                            <h6>{Data.name}</h6>
                            {/* <small className="text-body">{Data.prod_count} Products</small> */}
                        </div>
                    </div>
                </Link>
            </div>
        </>
    )
}
