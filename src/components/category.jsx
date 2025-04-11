import React from "react";
import CategoryCard from "./categoryCard";


export default function Category({categories}) {
  return (
    <>
        {/* Categories Start */}
        <div className="container-fluid pt-5">
          <h2 className="section-title position-relative text-uppercase mx-xl-5 mb-4">
            <span className="bg-secondary pr-3">Categories</span>
          </h2>
          <div className="row px-xl-5 pb-3">
            {categories && categories.map((item,indx)=>(
              <CategoryCard Data={item} key={indx}/>
            ))}
          </div>
        </div>
        {/* Categories End */}
      </>
  );
}
