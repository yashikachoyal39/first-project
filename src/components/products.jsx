import { useSelector } from "react-redux";
import ProductCard from "./productCard";

export default function Products({from,to}) {

  const productData = useSelector(store=>store.products.products)

  return (
    <>
      {/* Products Start */}
      <div className="container-fluid pt-5 pb-3">
        <h2 className="section-title position-relative text-uppercase mx-xl-5 mb-4">
          <span className="bg-secondary pr-3">Featured Products</span>
        </h2>
        <div className="row px-xl-5">
          {productData && productData.slice(from,to)?.map((item,index)=>(
            <ProductCard Data={item} key={index} />
           ))}
        </div>
      </div>
      {/* Products End */}
    </>
  );
}
