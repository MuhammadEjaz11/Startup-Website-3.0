import { Box, Typography, Link, IconButton } from "@mui/material";
import { NavLink, useLocation } from "react-router-dom";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import React from "react";
import { bannerData } from "../../utils";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowButtom from "../image/ArrowButtom.svg";
import ArrowTop from "../image/ArrowTop.svg";

function BannerSlider() {
  const location = useLocation();

  const WheelControls = (slider) => {
    let touchTimeout;
    let position;
    let wheelActive;

    function dispatch(e, name) {
      position.x -= e.deltaX;
      position.y -= e.deltaY;
      slider.container.dispatchEvent(
        new CustomEvent(name, {
          detail: {
            x: position.x,
            y: position.y,
          },
        })
      );
    }

    function wheelStart(e) {
      position = {
        x: e.pageX,
        y: e.pageY,
      };
      dispatch(e, "ksDragStart");
    }

    function wheel(e) {
      dispatch(e, "ksDrag");
    }

    function wheelEnd(e) {
      dispatch(e, "ksDragEnd");
    }

    function eventWheel(e) {
      e.preventDefault();
      if (!wheelActive) {
        wheelStart(e);
        wheelActive = true;
      }
      wheel(e);
      clearTimeout(touchTimeout);
      touchTimeout = setTimeout(() => {
        wheelActive = false;
        wheelEnd(e);
      }, 50);
    }

    slider.on("created", () => {
      slider.container.addEventListener("wheel", eventWheel, {
        passive: false,
      });
    });
  };

  const [sliderRef, slider] = useKeenSlider(
    {
      loop: true,
      rubberband: true,
      vertical: true,
    },
    [WheelControls]
  );

  const value = location.pathname.replace("/services/", "");

  return (
    <>
      <Box
        sx={{
          maxWidth: "100%",
          margin: "auto",
          display: "flex",
          position: "relative", // Important for positioning arrows
          zIndex: 10,
          pb:"20px",
          justifyContent: {
            md: "space-between ",
            // xs:""
          },
          gap: "1rem",
          flexDirection: {
            md: "row",
            xs: "column",
          },
          alignItems: "center",
        }}
      >
        {/* Left side (Text) */}
        <Box
          sx={{
            maxWidth: "605px",
            flexBasis: "40%",
            display: "flex",
            flexDirection: "column",
            alignItems: "middle",
            paddingBottom: "33px  ",
          }}
        >
          {/* Breadcrumb navigation */}
          <Box sx={{ display: "flex", alignItems: "center", mb: "10px" }}>
            <NavLink
              to={"/"}
              style={{
                textDecoration: "none",
                color: "#1E1E1E",
                fontSize: { xl: "16px", xs: "13px" },
                fontWeight: "400",
              }}
            >
              <Typography
                sx={{
                  textDecoration: "none",
                  color: "#1E1E1E",
                  fontSize: "16px",
                  fontWeight: "400",
                  fontFamily: "Lato",
                  lineHeight: { xl: "1.5", md: "1" },
                }}
              >
                {" "}
                Home
              </Typography>
            </NavLink>
            <Typography
              sx={{
                textTransform: "capitalize",
                color: "#1E1E1E",

                fontSize: "16px",
                paddingLeft: "10px",
                fontWeight: "400 !important",
                fontFamily: "Lato",
                lineHeight: { xl: "1.5", md: "1" },
              }}
            >
              / &nbsp;{" "}
              {` ${location?.pathname.split("-").join(" ").slice(1).slice(9)}`}
            </Typography>
          </Box>

          {/* Main heading */}
          <Box
            sx={{
              // maxWidth: '416px',
              fontFamily: "satoshi",
              fontSize: "50px",
            }}
          >
            <Typography
              sx={{
                fontFamily: "satoshi-light",
                fontSize: { xl: "50px", md: "35px" },
                fontWeight: 700,
                // lineHeight: ,
                color: "#1E1E1E",
                textTransform: "capitalize",
                lineHeight: { xl: "67.5px", md: "45px" },
              }}
            >
              {bannerData[value]?.title ? bannerData[value]?.title : " "}
              <Box
                component={"span"}
                sx={{
                  fontFamily: "'Bakbak One', sans-serif",
                  fontSize: { xl: "50px", md: "35px" },
                  ml: "10px",
                  fontWeight: 700,
                  lineHeight: { xl: "67.  ", md: "45px" },
                  color: "#1E1E1E",
                  textTransform: "capitalize",
                }}
              >
                {bannerData[value]?.titleSpan2
                  ? bannerData[value]?.titleSpan2
                  : bannerData[value]?.titleSpan2}
              </Box>
            </Typography>
            <Typography
              sx={{
                fontFamily: "satoshi",
                fontSize: { xl: "50px", md: "35px" },

                fontWeight: 700,
                lineHeight: { xl: "67.5px", md: "45px" },
                color: "#1E1E1E",
                textTransform: "capitalize",
              }}
            >
              {bannerData[value]?.titleSpan
                ? bannerData[value]?.titleSpan
                : bannerData[value]?.titleSpan}
            </Typography>
            <Typography
              sx={{
                marginTop: "25px",
                // maxWidth: '565px',
                fontFamily: "Inter",
                fontSize: "16px",
                fontWeight: 400,
                lineHeight: "36px",
                color: "#939393",
              }}
            >
              {bannerData[value]?.text
                ? bannerData[value]?.text
                : bannerData[value].text}
            </Typography>
          </Box>
        </Box>
        {value === "web-development" || value === "graphic-design" || value =="video-editing" ? (
          <Box
            component="img"
            src={bannerData[value]?.images[0]}
            alt={`banner-`}
            sx={{
              // width: "100%",
              maxWidth: {md:"650px !important", xs:"100%"},
              mb: "40px",
              objectFit: "contain",
              borderRadius: "50px",
              // minHeight: "300px",
              // maxHeight: "400px",
              // : {md:"253px",xs:"100%"},
              marginLeft: "50px",
            }}
          />
        ) : (
          <Box
            sx={{
              maxWidth: { xs: "100%", md: "453px" },
              // marginLeft: 'auto',
              position: "relative",
              flexBasis: "50%",
            }}
          >
            {/* // Up arrow  */}
            <IconButton
              sx={{
                position: "absolute",
                top: "45%", // Center vertically
                right: { sm: "103%", xs: "88%" }, // Place arrows on the left of the slider
                transform: "translateY(-100%)", // Offset the arrow upwards
                zIndex: 10,
                backgroundColor: "#fff",
                borderRadius: "19px",
                boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
                width: { sm: "50px", xs: "35px" },
                height: { sm: "50px", xs: "35px" },
                "&:hover": { backgroundColor: "#f0f0f0" },
              }}
              onClick={() => slider.current?.prev()}
            >
              <img src={ArrowTop} alt="arrow" />
            </IconButton>

            {/* Slider */}
            <Box
              ref={sliderRef}
              className="keen-slider"
              style={{ maxHeight: 486, maxWidth: 453 }}
            >
              {bannerData[value]?.images?.length > 0 &&
                bannerData[value]?.images.map((image, index) => (
                  <img
                    key={index}
                    className={`keen-slider__slide number-slide${index + 1}`}
                    src={image}
                    alt={`banner-${index}`}
                    style={{
                      width: "100%",
                      objectFit: "contain",
                      borderRadius: "50px",
                      minHeight: "300px",
                      maxHeight: "400px",
                      marginLeft: "50px",
                    }}
                  />
                ))}
            </Box>

            {/* Down arrow */}
            <IconButton
              sx={{
                position: "absolute",
                top: "50%", // Center vertically
                right: { sm: "103%", xs: "88%" }, // Place arrows on the left of the slider
                transform: "translateY(0)", // Offset the arrow downwards
                zIndex: 10,
                backgroundColor: "#fff",
                borderRadius: "19px",
                boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
                width: { sm: "50px", xs: "35px" },
                height: { sm: "50px", xs: "35px" },
                "&:hover": { backgroundColor: "#f0f0f0" },
              }}
              onClick={() => slider.current?.next()}
            >
              <img src={ArrowButtom} alt="arrow" />
            </IconButton>
          </Box>
        )}
        {/* Right side (Image slider with customized arrows) */}
      </Box>
    </>
  );
}

export default BannerSlider;
