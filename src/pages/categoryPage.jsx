import React from 'react'
import Breadcrumb from '../components/breadcrumb'
import Category from '../components/category'
import Products from '../components/products'

export default function CategoryPage({ categories }) {

    return (
        <>
            <Breadcrumb />
            <Category categories={categories}/>
            <Products />
        </>
    )
}
