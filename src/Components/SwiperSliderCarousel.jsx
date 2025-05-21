import React, { useEffect, useState } from "react";
import { Zoom } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { Typewriter } from "react-simple-typewriter";

const SwiperSliderCarousel = () => {
  const [eventSlides, setEventSlides] = useState([]);
  console.log(eventSlides);
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    fetch("http://localhost:3000/eventCollection")
      .then((res) => res.json())
      .then((data) => setEventSlides(data));
  }, []);
  console.log(eventSlides);

  return (
    <div className="w-full mx-auto my-6 rounded-xl overflow-hidden max-w-screen backGround pb-4">
      <Zoom
        scale={1.2}
        indicators={true}
        autoplay={true}
        duration={4000}
        onChange={(prev, next) => setActiveSlide(next)} // Track active slide
      >
        {eventSlides.map((slide, index) => (
          <div
            key={index}
            className="relative w-full h-[400px] bg-center bg-cover flex items-center justify-center text-center"
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="w-full h-full bg-black/40 flex flex-col justify-center items-center p-6 text-[#f5f5f4]">
              <h2 className="text-4xl font-bold mb-1">
                {activeSlide === index ? (
                  <Typewriter
                    words={[slide.title]}
                    loop={1}
                    cursor
                    cursorStyle="|"
                    typeSpeed={60}
                    deleteSpeed={30}
                    delaySpeed={1000}
                  />
                ) : (
                  slide.title
                )}
              </h2>
              <p className="text-xl font-medium italic">{slide.date}</p>
              <p className="text-2xl font-medium mb-3">{slide.desc}</p>
              <button className="bg-[#05a540] text-sm px-4 py-2 rounded hover:bg-green-600 transition w-fit">
                {slide.buttonLabel}
              </button>
            </div>
          </div>
        ))}
      </Zoom>
    </div>
  );
};

export default SwiperSliderCarousel;
