import { Route, Routes, useLocation } from "react-router"
import PublicRoutes from "./routes/publicRoutes"
import Home from "./pages/homePage"
import ShopPage from "./pages/shopPage/main"
import Contact from "./pages/contact"
import CheckoutPage from "./pages/checkoutPage"
import Cart from "./pages/cartPage"
import Login from "./pages/login"
import Signup from "./pages/signup"
import { toast, ToastContainer } from "react-toastify"
import { useEffect, useState } from "react"
import ProtectedRoute from "./routes/protectedRoute"
import CategoryPage from "./pages/categoryPage"
import axiosClient from "./webservices/getway"
import { ApiUrls } from "./webservices/webApis"
import Layout from "./components/layout"
import ProductDetail from "./pages/productDetail"
import ProductbycategoryPage from "./pages/productbycategoryPage"
import { useDispatch } from "react-redux"
import Profile from "./pages/profile/page"
import OrdersList from "./pages/orders"

function App() {
  const { pathname } = useLocation()
  const dispatch = useDispatch()
  const [productData, setProductData] = useState([])
  const [categories, setCategories] = useState([])

  useEffect(() => {
    window.scroll(0, 0)
  }, [pathname])


  useEffect(() => {
    (async () => {
      try {
        let res = await axiosClient.get(ApiUrls.GET_ALL_PRODUCTS)

        if (res?.data.products.length) {
          setProductData(res.data.products)
          dispatch({ type: "product/addProducts", payload: res.data.products })
        }
      } catch (error) {
        toast.error(error.response?.data?.message)
      }
    })()
  }, [])

  useEffect(() => {
    (async () => {
      try {
        let res = await axiosClient.get(ApiUrls.GET_ALL_CATEGORIES)
        console.log(res);

        if (res?.data) {
          setCategories(res.data)
        }
      } catch (error) {
        toast.error(error.response?.data?.message)
      }
    })()
  }, [])

  return (
    <>
      <Routes>
        <Route path="/" element={<PublicRoutes categories={categories} />} >

          <Route index element={<Home categories={categories} />} />

          <Route path="products" element={<Layout />}>
            <Route index element={<ShopPage productData={productData} />} />
            <Route path=":id" element={<ProductDetail />} />
          </Route>

          <Route path="categories" element={<Layout />}>
            <Route index element={<CategoryPage categories={categories} />} />
            <Route path=":slug" element={<ProductbycategoryPage />} />
          </Route>
          <Route path="contact" element={<Contact />} />
          <Route path="cart" element={<Cart />} />
          <Route path="login" element={<Login />} />
          <Route path="sign-up" element={<Signup />} />

          <Route path="user" element={<ProtectedRoute />}>
            <Route index element={<Profile />} />
            <Route path="checkout" element={<CheckoutPage />} />
            <Route path="orders" element={<OrdersList />} />
          </Route>

        </Route>
      </Routes>
      <ToastContainer />
    </>
  )
}

export default App
