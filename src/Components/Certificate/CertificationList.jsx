import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CertificationCard from "./CertificationCard";
import certifications from "./CertificationData";

const CertificationList = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Default to 3 slides
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    centerMode: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2, slidesToScroll: 1, centerMode: false }
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 1, slidesToScroll: 1, centerMode: false }
      }
    ]
  };

  return (
    <div className="w-full px-6 md:px-16 py-10 bg-gray-900 text-white">
      {/* <h2 className="text-3xl font-bold text-center mb-8">Certifications</h2> */}
      <Slider {...settings}>
        {certifications.map((cert) => (
          <div key={cert.id} className="px-4">
            <CertificationCard {...cert} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CertificationList;
