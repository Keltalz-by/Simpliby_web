import { useState, useRef } from "react";
import Slider from "react-slick";
import "./myStyle.css";

const Carousel = ({ children }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideRef = useRef();

  const handleChange = (Slide) => {
    setCurrentSlide(Slide);
    slideRef.current.slickGoTo(Slide);
  };

  const images = [
    { link: "/img1.png", desc: "Reserve and Pay for your selected item" },
    { link: "/img2.png", desc: "View items and shelf details" },
    { link: "/img3.png", desc: "Discover malls around you" },
  ];

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    // fade: true,
    autoplaySpeed: 4000,
    cssEase: "linear",
    dotsClass: "slick-dots custom-dots",
    beforeChange: (oldIndex, newIndex) => setCurrentSlide(newIndex),
  };

  return (
    <div className="grid grid-cols-6 no-scrollbar w-screen h-screen overflow-hidden relative">
      <div className="absolute bottom-[30px] left-[250px] text-center right-0 flex  gap-3 z-30 ">
        <span
          onClick={() => handleChange(0)}
          className={`bg-white ${
            currentSlide === 0 ? "w-5" : "w-3"
          } h-3 rounded-full  transition-[width] duration-500`}
        ></span>
        <span
          onClick={() => handleChange(1)}
          className={`bg-white ${
            currentSlide === 1 ? "w-5" : "w-3"
          } h-3 rounded-full transition-[width] duration-500 `}
        ></span>
        <span
          onClick={() => handleChange(2)}
          className={`bg-white ${
            currentSlide === 2 ? "w-5" : "w-3"
          } h-3 rounded-full  transition-[width] duration-500`}
        ></span>
      </div>
      <Slider {...settings} ref={slideRef} className="no-scrollbar col-span-3">
        {images.map((item, idx) => (
          <div
            key={idx}
            className="w-full h-screen outline-none no-scrollbar relative"
          >
            <img src={item.link} className=" w-full h-full object-cover" />
            <div className="absolute bottom-0 left-0 right-0 text-center text-[white] py-2 font-inter w-full h-[15%] bg-black/[0.4]">
              <p className="text-xl">{item.desc}</p>
            </div>
          </div>
        ))}
      </Slider>
      <div className="absolute right-0 h-screen bg-[white] w-[55%] rounded-l-2xl">
        {children}
      </div>
    </div>
  );
};

const sliderNav = () => {};
export default Carousel;
