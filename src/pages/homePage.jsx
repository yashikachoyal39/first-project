import React from 'react'
import Carrousel from '../components/carousel'
import Featured from '../components/featured'
import Category from '../components/category'
import Products from '../components/products'
import Offers from '../components/offers'
import Venders from '../components/venders'

export default function Home({ categories }) {
    return (
        <>
            <Carrousel />
            <Featured />
            <Category categories={categories} />
            <Products form={0} to={8} />
            <Offers />
            <Products from={8} to={16}/>
            <Venders />
        </>
    )
}
