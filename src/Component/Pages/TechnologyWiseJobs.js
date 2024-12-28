import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const TechnologyWiseJobs = () => {
  const CustomNextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={`${className} custom-arrow`}
        style={{
          ...style,
          display: "flex",
          width: "40px",
          zIndex: 1,
          cursor: "pointer",
        }}
        onClick={onClick}
      >
        <span
          style={{
            fontSize: "18px",
            fontWeight: "bold",
            color: "#000",
          }}
        >
          &#8250;
        </span>
      </div>
    );
  };

  const CustomPrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={`${className} custom-arrow`}
        style={{
          ...style,
          display: "flex",
          width: "40px",
          zIndex: 1,
          cursor: "pointer",
        }}
        onClick={onClick}
      >
        <span
          style={{
            fontSize: "18px",
            fontWeight: "bold",
            color: "#000",
          }}
        >
          &#8249;
        </span>
      </div>
    );
  };

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
 

  const technologies = [
    { name: "JAVA", logo: "/images/java.jpeg" },
    { name: "JAVA SCRIPT", logo: "/images/javascript.jpeg" },
    { name: "PHP", logo: "/images/php.jpeg" },
    { name: "Nodejs", logo: "/images/nodejs.jpeg" },
    { name: "C#", logo: "/images/c++.jpeg" },
    { name: "Reactjs", logo: "/images/reactjs.jpeg" },
    { name: "React Native", logo: "/images/reactjs.jpeg" },
  ];

  return (
    <div className="w-full shadow-custom border rounded-md p-4 mt-3 bg-white">
      <h2 className="font-semibold text-lg mb-4">Technology Wise Jobs</h2>
      <Slider {...sliderSettings}>
        {technologies.map((tech, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center p-2"
          >
            <div className="border rounded-lg shadow-md p-4">
              <img
                src={tech.logo}
                alt={tech.name}
                // className="w-20 h-20 object-contain"
                className="w-full h-20 object-contain shadow-custom border rounded-md "
              />
              <span className="mt-2 text-sm font-medium">{tech.name}</span>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default TechnologyWiseJobs;
