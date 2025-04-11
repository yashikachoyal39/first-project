import React, { useCallback, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router'
import axiosClient from '../webservices/getway'
import { ApiUrls } from '../webservices/webApis'
import { toast } from 'react-toastify'
import { useDispatch, useSelector } from 'react-redux'

export default function Login() {
    const navigate = useNavigate()
    const { isLoggedIn } = useSelector(store => store.user)
    const dispatch = useDispatch()
    const { register, reset, handleSubmit, formState: { errors } } = useForm()

    const userLogin = useCallback(async (data) => {

        try {
            let res = await axiosClient.post(ApiUrls.LOGIN, data)
            if (res.data.accessToken) {
                reset()
                dispatch({ type: "user/userData", payload: res.data })
                localStorage.setItem("etoken", res.data.accessToken)
                toast.success("login Success")
                navigate(-1)
            }
        } catch (error) {
            // toast.error(error.response.data.message)
            console.log(error);
        }

    }, [])

    useEffect(() => {

        if (isLoggedIn) {
            navigate("/")
        }

    }, [isLoggedIn])

    return (
        <>
            <div className="container-fluid">
                <div className="row px-xl-5 justify-content-center">
                    <div className="col-lg-4 col-md-4 col-sm-6 mb-5">
                        <div className="contact-form bg-light p-30 rounded">
                            <h2 className="section-title text-center position-relative text-uppercase mx-xl-5 mb-4">
                                <span className="pr-3">Login</span>
                            </h2>
                            <form name="sentMessage" onSubmit={handleSubmit(userLogin)}>
                                <div className="control-group">
                                    <label htmlFor="name" className='m-0'>Username</label>
                                    <input
                                        type="text"
                                        className={`${errors.username?.message ? "border-danger form-control" : "form-control"}`}
                                        id="name"
                                        placeholder="User Name"
                                        {...register('username', { required: "username is required !" })}
                                    />
                                    <p className="help-block fa text-danger">{errors.username?.message}</p>
                                </div>
                                <div className="control-group">
                                    <label htmlFor="password" className='m-0'>Password</label>
                                    <input
                                        type="password"
                                        className={`${errors.password?.message ? "border-danger form-control" : "form-control"}`}
                                        id="password"
                                        placeholder="Password"
                                        {...register('password', { required: "password is required !" })}
                                    />
                                    <p className="help-block fa text-danger">{errors.password?.message}</p>
                                </div>
                                <div className='d-flex justify-content-end'>
                                    <Link to="#">Forgot Password ?</Link>
                                </div>
                                <div className='d-flex justify-content-center mt-2'>
                                    <button
                                        className="btn btn-primary py-2 px-5"
                                        type="submit"
                                    >
                                        Login
                                    </button>
                                </div>
                                <div className='d-flex justify-content-center mt-3'>
                                    <p>Dont Have An Account <Link to="/sign-up" className='text-info'>Sign up ?</Link></p>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
