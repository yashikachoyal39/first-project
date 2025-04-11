import React, { useCallback } from 'react'
import Breadcrumb from '../components/breadcrumb'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router'
import { removeFromCart } from '../redux/slices/cartSlice'

export default function Cart() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const Cart = useSelector(store => store.cart.value)
    const totalPrice = Cart && Cart.reduce((prev, curr) => prev + curr.price * curr.quantity, 0)

    const checkOut = useCallback(() => {
        navigate("/user/checkout")
    }, [])

    return (
        <>
            {/* breadcrum */}
            <Breadcrumb />
            <div className="container-fluid">
                <div className="row px-xl-5">
                    <div className="col-lg-8 table-responsive mb-5">
                        <table className="table table-light table-borderless table-hover text-center mb-0">
                            <thead className="thead-dark">
                                <tr>
                                    <th>Products</th>
                                    <th>Price</th>
                                    <th>Quantity</th>
                                    <th>Total</th>
                                    <th>Remove</th>
                                </tr>
                            </thead>
                            <tbody className="align-middle">
                                {Cart && Cart.map((item, indx) => (
                                    <tr key={indx}>
                                        <td className="align-middle d-flex align-items-center justify-content-center" style={{ gap: "16px" }} >
                                            <img src={item?.thumbnail} alt="" style={{ width: 50 }} />
                                            <Link className='text-dark' to={`/products/${item.id}`}>{item?.title}</Link>
                                        </td>
                                        <td className="align-middle">₹{item?.price}</td>
                                        <td className="align-middle">
                                            <div
                                                className="input-group quantity mx-auto"
                                                style={{ width: 100 }}
                                            >
                                                <div className="input-group-btn">
                                                    <button className="btn btn-sm btn-primary btn-minus"
                                                        onClick={() => { dispatch({ type: "cart/decrementQuantity", payload: item.id }) }}
                                                        disabled={item.quantity <= item.minimumOrderQuantity ? true : false}
                                                    >
                                                        <i className="fa fa-minus" />
                                                    </button>
                                                </div>
                                                <input
                                                    type="text"
                                                    className="form-control form-control-sm bg-secondary border-0 text-center"
                                                    defaultValue={item?.quantity}
                                                />
                                                <div className="input-group-btn">
                                                    <button className="btn btn-sm btn-primary btn-plus"
                                                        onClick={() => { dispatch({ type: "cart/incrementQuantity", payload: item.id }) }}
                                                    >
                                                        <i className="fa fa-plus" />
                                                    </button>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="align-middle">₹{item.price * item?.quantity}</td>
                                        <td className="align-middle">
                                            <button className="btn btn-sm btn-danger" onClick={() => { dispatch(removeFromCart(item.id)) }}>
                                                <i className="fa fa-times" />
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <div className="col-lg-4">
                        <form className="mb-30" action="">
                            <div className="input-group">
                                <input
                                    type="text"
                                    className="form-control border-0 p-4"
                                    placeholder="Coupon Code"
                                />
                                <div className="input-group-append">
                                    <button className="btn btn-primary">Apply Coupon</button>
                                </div>
                            </div>
                        </form>
                        <h5 className="section-title position-relative text-uppercase mb-3">
                            <span className="bg-secondary pr-3">Cart Summary</span>
                        </h5>
                        <div className="bg-light p-30 mb-5">
                            <div className="border-bottom pb-2">
                                <div className="d-flex justify-content-between mb-3">
                                    <h6>Subtotal</h6>
                                    <h6>₹{totalPrice}</h6>
                                </div>
                                <div className="d-flex justify-content-between">
                                    <h6 className="font-weight-medium">Shipping</h6>
                                    <h6 className="font-weight-medium">₹0</h6>
                                </div>
                            </div>
                            <div className="pt-2">
                                <div className="d-flex justify-content-between mt-2">
                                    <h5>Total</h5>
                                    <h5>₹{totalPrice}</h5>
                                </div>
                                <button className="btn btn-block btn-primary font-weight-bold my-3 py-3" disabled={Cart && Cart.length ? false : true} onClick={checkOut}>
                                    Proceed To Checkout
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
