import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import React, { useState } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import HomeSectionCard from "../homeSectionCard/HomeSectionCard";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import { Button } from "@mui/material";
// import { mens_kurta } from "../../../data/mens_kurta";

const HomeSectionCarosel = ({ data, sectionName }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const responsive = {
    desktopMax: {
      breakpoint: { max: 3000, min: 1244 },
      items: 5,
      slidesToSlide: 2, // optional, default to 1.
    },
    desktop: {
      breakpoint: { max: 1244, min: 1020 },
      items: 3,
      slidesToSlide: 2, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 957, min: 464 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 487, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

//   const slidePrev = () => setActiveIndex(activeIndex - 1);
//   const slideNext = () => setActiveIndex(activeIndex + 1);

//   const syncActiveIndex = ({ item }) => setActiveIndex(item);

  const items = data.slice(1, 11).map((item) => <HomeSectionCard product={item} />);

  return (
    <div className=" relative px-4 lg:px-8 ">
      <h2 className=" text-2xl font-extrabold text-gray-800 py-5">
        {sectionName}
      </h2>
      <div className=" relative p-5">
        <Carousel responsive={responsive}>{items}</Carousel>
        {/* disableButtonsControls
          responsive={responsive}
          disableDotsControls
          onSlideChanged={syncActiveIndex}
          activeIndex={activeIndex}
        /> */}
        {/* {activeIndex !== items.length - 4 && (
          <Button
            variant="contained"
            // aria-label="next"
            className="z-50 bg-white"
            sx={{
              position: "absolute",
              top: "8rem",
              right: "0rem",
              transform: "translateX(-50%) rotate(90deg)",
              bgcolor: "white",
            }}
            onClick={slideNext}
          >
            <KeyboardArrowLeftIcon
              sx={{ transform: "rotate(90deg)", color: "black" }}
            />
          </Button>
        )}
        {activeIndex !== 0 && (
          <Button
            variant="contained"
            // aria-label="prev"
            className="z-50 bg-white"
            sx={{
              position: "absolute",
              top: "8rem",
              left: "0rem",
              transform: "translateX(-50%) rotate(-90deg)",
              bgcolor: "white",
            }}
            onClick={slidePrev}
          >
            <KeyboardArrowLeftIcon
              sx={{ transform: "rotate(90deg)", color: "black" }}
            />
          </Button>
        )} */}
      </div>
    </div>
  );
};

export default HomeSectionCarosel;
