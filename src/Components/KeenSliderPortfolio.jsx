import React, { useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { Box } from "@mui/material"; // assuming you're using MUI
import PortfolioCard from "./PortfolioCard"; // adjust based on your actual file structure
import { PortfoliosList } from "../../utils";

export default function KeenSliderPortfolio({ filteredPortfolioList, arrayToList }) {
  const [sliderRef, instanceRef] = useKeenSlider({
    slides: {
      perView: 4,
      spacing: 40, // adjust the gap between slides
      gap: 20
    },
    loop: true,
    mode: "snap", // snapping behavior
    breakpoints: {
     
      
      "(max-width: 900px)": {
        slides: { perView: 1 },
      },
    },
  });

  return (
    <Box
      sx={{
        mt:"70px",
        display: "flex",
        position: {md:"relative", xs:"static"},
        left: "50%",
        right: "50%",
        marginLeft: {md:"-50vw", xs:"0"},
        marginRight:{md:"-50vw", xs:"0"},
        width: {md:"100vw", xs:"100%"}, 
        maxWidth: "none",
        overflow:"hidden",
        borderRadius:"20px",
      }}
    >
      <div ref={sliderRef} className="keen-slider"  >
        {arrayToList.map((x, i) => (
          <div className="keen-slider__slide" key={i}>
            <PortfolioCard
              imageURL={x?.imageURL}
              title={x?.title}
              desc={x?.desc}
            />
          </div>
        ))}
      </div>
    </Box>
  );
}
