import React from "react";
import { GalleryItem } from "../../components";

import { gallery } from "./gallery";
import Blob from "../../assets/blob-gallery.png";
import "./styles.css";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const PictureGallery = () => {
  return (
    <div className="gallery-container">
      <div className="gallery-header">
        <span>Our Happy Moments</span>
        <img src={Blob} alt="blob-gallery" />
      </div>
      <div>
        <div className="gall-item-container item-desktop">
          <Carousel
            swipeable={false}
            draggable={false}
            responsive={responsive}
            infinite={true}
            autoPlay={true}
            transitionDuration={500}
            containerClass="carousel-container"
            removeArrowOnDeviceType={["tablet", "mobile"]}
            deviceType={"desktop"}
          >
            {gallery[0].desktop.map((data) => (
              <GalleryItem data={data} />
            ))}
          </Carousel>
        </div>
        <div className="gall-item-container item-mobile">
          <Carousel
            swipeable={false}
            draggable={false}
            responsive={responsive}
            infinite={true}
            autoPlay={true}
            transitionDuration={500}
            containerClass="carousel-container"
            removeArrowOnDeviceType={["tablet", "mobile"]}
            deviceType={"mobile"}
          >
            {gallery[0].mobile.map((data) => (
              <GalleryItem data={data} />
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default PictureGallery;
