import React from 'react'
import { Navigate, Outlet } from 'react-router'

export default function ProtectedRoute() {
    const auth = localStorage.getItem("etoken")
    return (
        <>
            {auth ? <Outlet /> : <Navigate to="/login" />}
        </>
    )
}
