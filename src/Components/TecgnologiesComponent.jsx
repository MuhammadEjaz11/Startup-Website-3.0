import React, { useState, useEffect } from "react";
import { Box, Typography, Tabs, Tab } from "@mui/material";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

import StyledHeading from "./StyledHeading";

// Arrays for skills within the same component
const frontend = [
  { image: "/images/software-logo/AI.svg", type: "Ai" },
  { image: "/images/software-logo/Corel.svg", type: "Corel" },
  { image: "/images/software-logo/dg pulse.svg", type: "DG Pulse" },
  { image: "/images/software-logo/figma.svg", type: "Figma" },
  { image:  "/images/software-logo/Pr.svg", type: "Pr" },
  { image:  "/images/software-logo/Ps.svg", type: "Ps" },
  { image:  "/images/software-logo/tajima.svg", type: "Tajima" },
  { image: "/images/software-logo/wilcone.svg", type: "Wilcone" },
];


const TecgnologiesComponent = ({ title, heading1, heading2, content, content2 }) => {
  const [tab, setTab] = useState("Front-end");
  const [data, setData] = useState(frontend);



  const renderBoldText = (text) => {
    const parts = text.split(/(\*.*?\*)/g); // Split the text on `*...*`
    return parts.map((part, index) =>
      part.startsWith("*") && part.endsWith("*") ? (
        <strong className="li-tag-rendering" key={index}>{part.slice(1, -1)}</strong>
      ) : (
        part
      )
    );
  };

  const [sliderRef] = useKeenSlider({
    loop: true,
    spacing: 15,
    slides: {
      perView: 1,
      spacing: 15,
    },
    breakpoints: {
      "(min-width: 768px)": {
        slides: { perView: 2 },
      },
      "(min-width: 900px)": {
        slides: { perView: 7.5, spacing: 15 },
      },
    },
  });

  return (
    <Box
      sx={{
        backgroundColor: "#1E1E1E",
        paddingTop: "74px",
        paddingBottom: "74px",
        width: "100vw",
        maxWidth: "none",
        position: "relative",
        left: "50%",                 // Move the box to the left by 50% of the layout
        right: "50%",                // Move the box to the right by 50% of the layout
        marginLeft: "-50vw",         // Negative margin to offset left movement
        marginRight: "-50vw",        // Negative margin to offset right movement
        width: "100vw",
        padding: { md: '74px 0px !important', xs: '74px 0px' },

      }}
    >
      <Box
        sx={{
          padding: { md: "0px 20px", xs: "0px 20px" },
          maxWidth: "1526px",
          margin: "0 auto",
        }}
      >
        <StyledHeading
          title1={heading1 || "Technologies"}
          sx1={{
            fontFamily: 'satoshi !important',
            color: 'white',
            gap: '20px',
            textAlign: { xs: 'left', md: 'center' } // Align left on small screens, center on medium and larger screens
          }}
          title2={heading2 || "We Use"}
          sx2={{
            fontFamily: 'satoshi-light !important',
            color: 'white',
            textAlign: { xs: 'left', md: 'center' } // Align left on small screens, center on medium and larger screens
          }}
        />
        {
          content && (
            <Typography
              sx={{
                maxWidth: "865px",
                lineHeight: "36px",
                color: "#939393",
                fontFamily: "Inter",
                fontSize: { xs: "14px", md: "16px" },
                marginTop: "20px",

              }}
            >
              {content}
            </Typography>
          )
        }

        <Typography
          sx={{
            maxWidth: "865px",
            lineHeight: "36px",
            color: "#939393",
            fontFamily: "Inter",
            fontSize: { xs: "14px", md: "16px" },
            marginTop: "20px",

          }}
        >
          {Array.isArray(title) ? (
            <ul className="unordered-list" >
              {title.map((item, index) => (
                <li className="li-tag-rendering" key={index}>{renderBoldText(item)}</li>
              ))}
            </ul>
          ) : (
            <p>{title}</p>
          )}

        </Typography>
        {
          content2 && (
            <Typography
              sx={{
                maxWidth: "865px",
                lineHeight: "36px",
                color: "#939393",
                fontFamily: "Inter",
                fontSize: { xs: "14px", md: "16px" },
                marginTop: "20px",

              }}
            >
              {content2}
            </Typography>
          )
        }
      </Box>

      
      {/* Carousel for the selected tab */}
      <Box sx={{mt:'40px'}} ref={sliderRef} className="keen-slider" swiping={false}>
        {data.map((item, index) => (
          <Box
            key={index}
            className="keen-slider__slide"
            sx={{
              borderRadius: { md: "8px", xs: "0px" },
              background: "#252525",
              width: { md: "400px", sm: "100%" },
              height: "200px",
              display: "grid",
              placeContent: "center",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                placeContent: "center",
                gap: "20px",
                justifyContent: "center",
              }}
            >
              <img
                src={item?.image}
                alt={`Slide ${index}`}
                style={{ objectFit: "contain", width: "60px" }}
              />
              <Typography
                sx={{ color: "white", fontSize: "15px", textAlign: "center" }}
              >
                {item?.type}
              </Typography>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

const tabStyles = (isSelected) => ({
  borderRadius: "50px",
  width: { xs: "100px", md: "157px" },
  textTransform: "initial",
  fontFamily: "satoshi",
  color: isSelected ? "black" : "#939393",
  backgroundColor: isSelected ? "#FFC800" : "transparent",
  fontWeight: isSelected ? "bold" : "normal",
  textTransform: 'capitalize',
  padding: '12px 11px',
  fontSize: { xs: '10px', md: '16px' },

  borderRadius: '50px',

  lineHeight: '1.5',
  width: { xs: "100px", md: '157px' },
  '&::selection': {
    fontFamily: 'satoshi',
    borderRadius: '50px',
    backgroundColor: '#ffcc00',  // Change to your preferred color
    color: '#ffffff',            // Change to your preferred color
  },
  '&.Mui-selected': {
    fontFamily: 'satoshi',
    borderRadius: '50px',
    backgroundColor: '#FFC800',
    borderBottom: 'none',
    color: 'black',  // Change text color when selected
    fontWeight: 'bold',  // Apply bold font weight when selected
  },

});

export default TecgnologiesComponent;
