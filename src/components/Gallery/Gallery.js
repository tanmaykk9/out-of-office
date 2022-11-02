import React, { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./gallery.css";

var photos = [
  "https://media.vrbo.com/lodging/85000000/84170000/84161800/84161709/f8cab0ae.f10.jpg",
  "https://media.vrbo.com/lodging/85000000/84170000/84161800/84161709/c57dd318.f10.jpg",
  "https://media.vrbo.com/lodging/85000000/84170000/84161800/84161709/9de21780.f10.jpg",
  "https://media.vrbo.com/lodging/85000000/84170000/84161800/84161709/481f0da4.f10.jpg",
  "https://media.vrbo.com/lodging/85000000/84170000/84161800/84161709/bfdff6a3.f10.jpg",
  "https://media.vrbo.com/lodging/85000000/84170000/84161800/84161709/334eecd4.f10.jpg",
];

const Gallery = () => {
  const [images, setImage] = useState(photos);
  const [current, setCurrent] = useState("");

  const getCurrentSliderSettings = () => {
    return {
      dots: true,
      autoplay: true,
      infinite: true,
      slideToShow: 3,
      slidesToScroll: 1,
    };
  };

  const handleClickImage = (e, image) => {
    e && e.preventDefault();
    setCurrent(image);
  };

  const handleCloseModal = e => {
    e && e.preventDefault();
    setCurrent("");
  };

  const settings = getCurrentSliderSettings();

  return (
    <div className="image-gallery my-5 carousel">
      <h2 className="text-center text-2xl font-bold text-sky-500">Gallery</h2>
      <section class="overflow-hidden text-gray-700 ">
        <div class="container px-5 py-2 mx-auto lg:pt-12 lg:px-32">
          <Carousel
            autoPlay
            onClickThumb={e => console.log(e)}
            infiniteLoop={true}
            dynamicHeight={true}
            stopOnHover={true}
            swipeable={true}
            showStatus={false}
          >
            {images.map(image => (
              <div className="w-full h-3/6">
                <img
                  alt="gallery"
                  className="block object-cover object-center w-full h-full rounded-lg"
                  src={image}
                />
              </div>
            ))}
          </Carousel>
        </div>
      </section>
    </div>
  );
};

export { Gallery };
