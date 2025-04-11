import React, { useCallback, useEffect, useState } from 'react'
import Products from '../components/products'
import Breadcrumb from '../components/breadcrumb'
import axiosClient from '../webservices/getway'
import { ApiUrls } from '../webservices/webApis'
import { toast } from 'react-toastify'
import { useNavigate, useParams } from 'react-router'
import { useDispatch } from 'react-redux'

export default function ProductDetail() {
    const { id } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [product, setProduct] = useState()

    const goToCart = useCallback((prod_data)=>{
         dispatch({type :"cart/addToCart",payload:prod_data})
            navigate('/cart')
    },[id])

    useEffect(() => {
        (async () => {
            try {
                let res = await axiosClient.get(ApiUrls.GET_PRODUCT_BY_ID + id)
                console.log(res);

                if (res?.data) {
                    setProduct(res.data)
                }
            } catch (error) {
                toast.error(error.response?.data?.message)
            }
        })()
    }, [])

    return (
        <>
            {/* breadcrum start */}
            <Breadcrumb />
            <div className="container-fluid pb-5">
                <div className="row px-xl-5">
                    <div className="col-lg-5 mb-30">
                        <div
                            id="product-carousel"
                            className="carousel slide"
                            data-ride="carousel"
                        >
                            <div className="carousel-inner bg-light">
                                {product?.images?.map((img, indx) => (
                                    <div className={!indx ? "carousel-item active" : "carousel-item"} key={indx}>
                                        <img className="w-100 h-100" loading='lazy' src={img} alt={img} style={{ aspectRatio: 3 / 3, objectFit: "contain" }} />
                                    </div>
                                ))}
                            </div>
                            <a
                                className="carousel-control-prev"
                                href="#product-carousel"
                                data-slide="prev"
                            >
                                <i className="fa fa-2x fa-angle-left text-dark" />
                            </a>
                            <a
                                className="carousel-control-next"
                                href="#product-carousel"
                                data-slide="next"
                            >
                                <i className="fa fa-2x fa-angle-right text-dark" />
                            </a>
                        </div>
                    </div>
                    <div className="col-lg-7 h-auto mb-30">
                        <div className="h-100 bg-light p-30">
                            <h3>{product?.title}</h3>
                            <div className="d-flex mb-3">
                                <div className="text-primary mr-2">
                                    {new Array(Math.floor(product ? product?.rating : 0))?.fill(0)?.map((item, indx) => (
                                        <small className="fas fa-star" key={indx} />
                                    ))}
                                    <small className="fas fa-star-half-alt" />
                                    {new Array(Math.floor(product ? 5 - product?.rating : 0))?.fill(0)?.map((item, indx) => (
                                        <small className="far fa-star" key={indx} />
                                    ))}
                                    {/* <small className="" /> */}
                                </div>
                                <small className="pt-1">({product?.reviews?.length} Reviews)</small>
                            </div>
                            <h6 className='text-success mb-3'>{product?.availabilityStatus}</h6>

                            <div className="d-flex mb-1">
                                <del className="text-dark mr-3">₹{product?.price}</del><span>{product?.discountPercentage}% Off</span>
                            </div>
                            <h3 className="font-weight-semi-bold text-success mb-4">₹{Math.round(product?.price - (Math.round(product?.price * product?.discountPercentage / 100)))}</h3>
                            <p className="mb-4">
                                {product?.description}
                            </p>
                            {product && product.size?<div className="d-flex mb-3">
                                <strong className="text-dark mr-3">Sizes:</strong>
                                <form>
                                    <div className="custom-control custom-radio custom-control-inline">
                                        <input
                                            type="radio"
                                            className="custom-control-input"
                                            id="size-1"
                                            name="size"
                                        />
                                        <label className="custom-control-label" htmlFor="size-1">
                                            XS
                                        </label>
                                    </div>
                                    <div className="custom-control custom-radio custom-control-inline">
                                        <input
                                            type="radio"
                                            className="custom-control-input"
                                            id="size-2"
                                            name="size"
                                        />
                                        <label className="custom-control-label" htmlFor="size-2">
                                            S
                                        </label>
                                    </div>
                                    <div className="custom-control custom-radio custom-control-inline">
                                        <input
                                            type="radio"
                                            className="custom-control-input"
                                            id="size-3"
                                            name="size"
                                        />
                                        <label className="custom-control-label" htmlFor="size-3">
                                            M
                                        </label>
                                    </div>
                                    <div className="custom-control custom-radio custom-control-inline">
                                        <input
                                            type="radio"
                                            className="custom-control-input"
                                            id="size-4"
                                            name="size"
                                        />
                                        <label className="custom-control-label" htmlFor="size-4">
                                            L
                                        </label>
                                    </div>
                                    <div className="custom-control custom-radio custom-control-inline">
                                        <input
                                            type="radio"
                                            className="custom-control-input"
                                            id="size-5"
                                            name="size"
                                        />
                                        <label className="custom-control-label" htmlFor="size-5">
                                            XL
                                        </label>
                                    </div>
                                </form>
                            </div>:null}
                            {product && product.color ? <div className="d-flex mb-4">
                                <strong className="text-dark mr-3">Colors:</strong>
                                <form>
                                    <div className="custom-control custom-radio custom-control-inline">
                                        <input
                                            type="radio"
                                            className="custom-control-input"
                                            id="color-1"
                                            name="color"
                                        />
                                        <label className="custom-control-label" htmlFor="color-1">
                                            Black
                                        </label>
                                    </div>
                                    <div className="custom-control custom-radio custom-control-inline">
                                        <input
                                            type="radio"
                                            className="custom-control-input"
                                            id="color-2"
                                            name="color"
                                        />
                                        <label className="custom-control-label" htmlFor="color-2">
                                            White
                                        </label>
                                    </div>
                                    <div className="custom-control custom-radio custom-control-inline">
                                        <input
                                            type="radio"
                                            className="custom-control-input"
                                            id="color-3"
                                            name="color"
                                        />
                                        <label className="custom-control-label" htmlFor="color-3">
                                            Red
                                        </label>
                                    </div>
                                    <div className="custom-control custom-radio custom-control-inline">
                                        <input
                                            type="radio"
                                            className="custom-control-input"
                                            id="color-4"
                                            name="color"
                                        />
                                        <label className="custom-control-label" htmlFor="color-4">
                                            Blue
                                        </label>
                                    </div>
                                    <div className="custom-control custom-radio custom-control-inline">
                                        <input
                                            type="radio"
                                            className="custom-control-input"
                                            id="color-5"
                                            name="color"
                                        />
                                        <label className="custom-control-label" htmlFor="color-5">
                                            Green
                                        </label>
                                    </div>
                                </form>
                            </div> : null}
                            <div className="d-flex align-items-center mb-4 pt-2">
                                <div className="input-group quantity mr-3" style={{ width: 130 }}>
                                    <div className="input-group-btn">
                                        <button className="btn btn-primary btn-minus">
                                            <i className="fa fa-minus" />
                                        </button>
                                    </div>
                                    <input
                                        type="text"
                                        className="form-control bg-secondary border-0 text-center"
                                        defaultValue={product?.minimumOrderQuantity}
                                    />
                                    <div className="input-group-btn">
                                        <button className="btn btn-primary btn-plus">
                                            <i className="fa fa-plus" />
                                        </button>
                                    </div>
                                </div>
                                <button className="btn btn-primary px-3" onClick={()=>{goToCart(product)}}>
                                    <i className="fa fa-shopping-cart mr-1" /> Add To Cart
                                </button>
                            </div>
                            <div className="d-flex pt-2">
                                <strong className="text-dark mr-2">Shipping :</strong>
                                <div className="d-inline-flex">
                                    <p>{product?.shippingInformation}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row px-xl-5">
                    <div className="col">
                        <div className="bg-light p-30">
                            <div className="nav nav-tabs mb-4">
                                <a
                                    className="nav-item nav-link text-dark active"
                                    data-toggle="tab"
                                    href="#tab-pane-1"
                                >
                                    Description
                                </a>
                                <a
                                    className="nav-item nav-link text-dark"
                                    data-toggle="tab"
                                    href="#tab-pane-2"
                                >
                                    Information
                                </a>
                                <a
                                    className="nav-item nav-link text-dark"
                                    data-toggle="tab"
                                    href="#tab-pane-3"
                                >
                                    Reviews ({product?.reviews?.length})
                                </a>
                            </div>
                            <div className="tab-content">
                                <div className="tab-pane fade show active" id="tab-pane-1">
                                    <h4 className="mb-3">Product Description</h4>
                                    <p>
                                        {product?.description}
                                    </p>
                                </div>
                                <div className="tab-pane fade" id="tab-pane-2">
                                    <h4 className="mb-3">Additional Information</h4>
                                    <p>
                                        {product?.description}
                                    </p>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <ul className="list-group list-group-flush">
                                                <li className="list-group-item px-0">
                                                    <strong>Brand : </strong>{product?.brand}
                                                </li>
                                                <li className="list-group-item px-0">
                                                    <strong>Category : </strong>{product?.category}
                                                </li>
                                                <li className="list-group-item px-0">
                                                    <strong>dimensions : </strong>{product?.dimensions?.height}mm x {product?.dimensions?.width}mm x {product?.dimensions?.depth}mm
                                                </li>
                                                <li className="list-group-item px-0">
                                                    <strong>Warranty Information : </strong>{product?.warrantyInformation}
                                                </li>
                                                <li className="list-group-item px-0">
                                                    <strong>Weight : </strong>{product?.weight} grams
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="tab-pane-3">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <h4 className="mb-4">{product?.reviews?.length} review for {product?.title}</h4>
                                            {product?.reviews?.map((item, indx) => (
                                                <div className="media mb-4" key={indx}>
                                                    <img
                                                        src="/img/user.jpg"
                                                        alt="Image"
                                                        className="img-fluid mr-3 mt-1"
                                                        style={{ width: 45 }}
                                                    />
                                                    <div className="media-body">
                                                        <h6>
                                                            {item.reviewerName}
                                                            <small>
                                                                - <i>{item?.date}</i>
                                                            </small>
                                                        </h6>
                                                        <div className="text-primary mb-2">
                                                            <i className="fas fa-star" />
                                                            <i className="fas fa-star" />
                                                            <i className="fas fa-star" />
                                                            <i className="fas fa-star-half-alt" />
                                                            <i className="far fa-star" />
                                                        </div>
                                                        <p>
                                                            {item?.comment}
                                                        </p>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                        <div className="col-md-6">
                                            <h4 className="mb-4">Leave a review</h4>
                                            <small>
                                                Your email address will not be published. Required fields are
                                                marked *
                                            </small>
                                            <div className="d-flex my-3">
                                                <p className="mb-0 mr-2">Your Rating * :</p>
                                                <div className="text-primary">
                                                    <i className="far fa-star" />
                                                    <i className="far fa-star" />
                                                    <i className="far fa-star" />
                                                    <i className="far fa-star" />
                                                    <i className="far fa-star" />
                                                </div>
                                            </div>
                                            <form>
                                                <div className="form-group">
                                                    <label htmlFor="message">Your Review *</label>
                                                    <textarea
                                                        id="message"
                                                        cols={30}
                                                        rows={5}
                                                        className="form-control"
                                                        defaultValue={""}
                                                    />
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="name">Your Name *</label>
                                                    <input type="text" className="form-control" id="name" />
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="email">Your Email *</label>
                                                    <input type="email" className="form-control" id="email" />
                                                </div>
                                                <div className="form-group mb-0">
                                                    <input
                                                        type="submit"
                                                        defaultValue="Leave Your Review"
                                                        className="btn btn-primary px-3"
                                                    />
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* product start */}
            <Products />
        </>
    )
}
