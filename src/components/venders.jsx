// import React from 'react'

// export default function Venders() {
//     return (
//         <>
//             <div className="container-fluid py-5">
//                 <div className="row px-xl-5">
//                     <div className="col">
//                         <div className="owl-carousel vendor-carousel">
//                             <div className="bg-light p-4">
//                                 <img src="img/vendor-1.jpg" alt="" />
//                             </div>
//                             <div className="bg-light p-4">
//                                 <img src="img/vendor-2.jpg" alt="" />
//                             </div>
//                             <div className="bg-light p-4">
//                                 <img src="img/vendor-3.jpg" alt="" />
//                             </div>
//                             <div className="bg-light p-4">
//                                 <img src="img/vendor-4.jpg" alt="" />
//                             </div>
//                             <div className="bg-light p-4">
//                                 <img src="img/vendor-5.jpg" alt="" />
//                             </div>
//                             <div className="bg-light p-4">
//                                 <img src="img/vendor-6.jpg" alt="" />
//                             </div>
//                             <div className="bg-light p-4">
//                                 <img src="img/vendor-7.jpg" alt="" />
//                             </div>
//                             <div className="bg-light p-4">
//                                 <img src="img/vendor-8.jpg" alt="" />
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </>
//     )
// }

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Vendors() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
    };

    const vendors = [
        { src: "img/vendor-1.jpg", alt: "Vendor 1" },
        { src: "img/vendor-2.jpg", alt: "Vendor 2" },
        { src: "img/vendor-3.jpg", alt: "Vendor 3" },
        { src: "img/vendor-4.jpg", alt: "Vendor 4" },
        { src: "img/vendor-5.jpg", alt: "Vendor 5" },
        { src: "img/vendor-6.jpg", alt: "Vendor 6" },
        { src: "img/vendor-7.jpg", alt: "Vendor 7" },
        { src: "img/vendor-8.jpg", alt: "Vendor 8" },
    ];

    return (
        <div className="container-fluid py-5">
            <div className="row px-xl-5">
                <div className="col">
                    <Slider {...settings}>
                        {vendors.map((vendor, index) => (
                            <div key={index} className="bg-light p-4">
                                <img src={vendor.src} alt={vendor.alt} />
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </div>
    );
}