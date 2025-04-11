import React, { useEffect, useState } from 'react'
import Breadcrumb from '../components/breadcrumb'
import ShopPage from './shopPage/main'
import axiosClient from '../webservices/getway'
import { ApiUrls } from '../webservices/webApis'
import { toast } from 'react-toastify'
import { useParams } from 'react-router'

export default function ProductbycategoryPage() {
    const { slug } = useParams()
    const [productData, setProductData] = useState([])

    useEffect(() => {
        (async () => {
            try {
                let res = await axiosClient.get(ApiUrls.GET_PRODUCT_BY_CATEGORY + slug)
                   console.log(res);
                   
                if (res?.data.products.length) {
                    setProductData(res.data.products)
                }
            } catch (error) {
                toast.error(error.response?.data?.message)
            }
        })()
    }, [slug])

    return (
        <>
            <ShopPage productData={productData}/>
        </>
    )
}
