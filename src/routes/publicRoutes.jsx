import React, { useEffect } from 'react'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import Topbar from '../components/topbar'
import { Outlet, useNavigate } from 'react-router'
import { useDispatch } from 'react-redux'
import axiosClient from '../webservices/getway'
import { ApiUrls } from '../webservices/webApis'
import { toast } from 'react-toastify'

export default function PublicRoutes({ categories }) {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    useEffect(() => {

        (async () => {
            let token = localStorage.getItem("etoken")
            if (token) {
                try {
                    let res = await axiosClient.get(ApiUrls.ME, {
                        headers: {
                            "Authorization": `Bearer ${token}`
                        }
                    })
                    dispatch({ type: "user/userData", payload: res.data })
                } catch (err) {
                    if (err?.response?.data?.message) {
                        navigate("/login")
                    }
                    toast.error(err?.response?.data?.message);
                }
            }
        })()

    }, [])

    return (
        <>
            <Topbar />
            <Navbar categories={categories} />
            <Outlet />
            <Footer />
        </>
    )
}
