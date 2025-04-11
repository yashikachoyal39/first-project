import React from 'react'
import { Link } from 'react-router'

export default function Signup() {
    return (
        <>
            <div className="container-fluid">
                <div className="row px-xl-5 justify-content-center">
                    <div className="col-lg-4 col-md-4 col-sm-6 mb-5">
                        <div className="contact-form bg-light p-30 rounded">
                            <h2 className="section-title text-center position-relative text-uppercase mx-xl-5 mb-4">
                                <span className="pr-3">Sign Up</span>
                            </h2>
                            <form name="sentMessage" id="contactForm" noValidate="novalidate">
                                <div className="control-group">
                                    <label htmlFor="name" className='m-0'>Full Name</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="name"
                                        placeholder="Enter Your Full Name"
                                        required="required"
                                        data-validation-required-message="Please enter your name"
                                    />
                                    <p className="help-block text-danger" />
                                </div>
                                <div className="control-group">
                                    <label htmlFor="mobile" className='m-0'>Mobile</label>
                                    <input
                                        type="number"
                                        className="form-control"
                                        id="mobile"
                                        placeholder="Enter Your Mobile"
                                        required="required"
                                        data-validation-required-message="Please enter your name"
                                    />
                                    <p className="help-block text-danger" />
                                </div>
                                <div className="control-group">
                                    <label htmlFor="name" className='m-0'>Email</label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        id="name"
                                        placeholder="Enter Your Email"
                                        required="required"
                                        data-validation-required-message="Please enter your name"
                                    />
                                    <p className="help-block text-danger" />
                                </div>
                                <div className="control-group">
                                    <label htmlFor="password" className='m-0'>Password</label>
                                    <input
                                        type="password"
                                        className="form-control"
                                        id="password"
                                        placeholder="Password"
                                        required="required"
                                        data-validation-required-message="Please enter your email"
                                    />
                                    <p className="help-block text-danger" />
                                </div>
                                <div className="control-group">
                                    <label htmlFor="cpassword" className='m-0'>Confirm Password</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="cpassword"
                                        placeholder="Confirm Password"
                                        required="required"
                                        data-validation-required-message="Please enter your email"
                                    />
                                    <p className="help-block text-danger" />
                                </div>
                                <div className='d-flex justify-content-start'>
                                    <input type="checkbox" />&nbsp; I Agree &nbsp;<Link>terms And Conditions</Link>
                                </div>
                                <div className='d-flex justify-content-center mt-2'>
                                    <button
                                        className="btn btn-primary py-2 px-5"
                                        type="submit"
                                        id="sendMessageButton"
                                    >
                                        Sign Up
                                    </button>
                                </div>
                                <div className='d-flex justify-content-center mt-3'>
                                    <p>Have An Account <Link to="/login" className='text-info'>Login ?</Link></p>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
