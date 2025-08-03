import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import { Box, Tab, Tabs } from "@mui/material";
import PortfolioCard from "./PortfolioCard";
import StyledHeading from "./StyledHeading";
import MobilePortfolioDropdown from "./MobilePortfolioDropdown";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Mobile app images import
import logo1 from "../assets/font/Logo/l1.jpg";
import logo2 from "../assets/font/Logo/l2.jpg";
import logo3 from "../assets/font/Logo/l3.jpg";
import logo4 from "../assets/font/Logo/l4.jpg";
import logo5 from "../assets/font/Logo/l5.jpg";
import logo6 from "../assets/font/Logo/l6.jpg";
import logo7 from "../assets/font/Logo/l7.jpg";
import logo8 from "../assets/font/Logo/l8.jpg";
import logo9 from "../assets/font/Logo/l9.jpg";

import stat1 from "../assets/font/Stationary/s1.jpg";
import stat2 from "../assets/font/Stationary/s2.jpg";
import stat3 from "../assets/font/Stationary/s3.jpg";
import stat4 from "../assets/font/Stationary/s4.jpg";
import stat5 from "../assets/font/Stationary/s5.jpg";
import stat6 from "../assets/font/Stationary/s6.jpg";
import stat7 from "../assets/font/Stationary/s7.jpg";
import stat8 from "../assets/font/Stationary/s8.jpg";
import stat9 from "../assets/font/Stationary/s9.jpg";

// Web apps import
import web1 from "../assets/font/WebDevelopment/1.jpg";
import web2 from "../assets/font/WebDevelopment/2.jpg";
import web3 from "../assets/font/WebDevelopment/3.jpg";
import web4 from "../assets/font/WebDevelopment/4.jpg";
import web5 from "../assets/font/WebDevelopment/5.jpg";
import web6 from "../assets/font/WebDevelopment/6.jpg";
import web7 from "../assets/font/WebDevelopment/7.jpg";
import web8 from "../assets/font/WebDevelopment/8.jpg";
import web9 from "../assets/font/WebDevelopment/9.jpg";

// Video editing import
import vid1 from "../assets/font/VideoEditing/v1.jpg";
import vid2 from "../assets/font/VideoEditing/v2.jpg";
import vid3 from "../assets/font/VideoEditing/v3.jpg";
import vid4 from "../assets/font/VideoEditing/v4.jpg";
import vid5 from "../assets/font/VideoEditing/v5.jpg";
import vid6 from "../assets/font/VideoEditing/v6.jpg";
import vid7 from "../assets/font/VideoEditing/v7.jpg";
import vid8 from "../assets/font/VideoEditing/v8.jpg";
import vid9 from "../assets/font/VideoEditing/v9.jpg";

// Digital Marketing
import digital1 from "../assets/font/DigitalMarketing/d1.jpg";
import digital2 from "../assets/font/DigitalMarketing/d2.jpg";
import digital3 from "../assets/font/DigitalMarketing/d3.jpg";
import digital4 from "../assets/font/DigitalMarketing/d4.jpg";
import digital5 from "../assets/font/DigitalMarketing/d5.jpg";
import digital6 from "../assets/font/DigitalMarketing/d6.jpg";
import digital7 from "../assets/font/DigitalMarketing/d7.jpg";
import digital8 from "../assets/font/DigitalMarketing/d8.jpg";
import digital9 from "../assets/font/DigitalMarketing/d9.jpg";

// Graphic designing import
import grap1 from "../assets/font/GraphicDesigning/grap1.webp";
import grap2 from "../assets/font/GraphicDesigning/grap2.webp";
import grap3 from "../assets/font/GraphicDesigning/grap3.webp";
import grap4 from "../assets/font/GraphicDesigning/grap4.webp";
import CustomButton from "./Button";

export default function PortfolioSlider() {
  // Portfolio data for each category
  const allPortfolios = [
    // Digitizing examples
    {
      imageURL: "/images/our-portfolio/digitize/one.jpg",
      title: "Digitizing Project 1",
      desc: "Digitizing",
      category: "Digitizing",
    },
    {
      imageURL: "/images/our-portfolio/digitize/two.jpg",
      title: "Digitizing Project 2",
      desc: "Digitizing",
      category: "Digitizing",
    },
    {
      imageURL: "/images/our-portfolio/digitize/three.jpg",
      title: "Digitizing Project 3",
      desc: "Digitizing",
      category: "Digitizing",
    },
    {
      imageURL: "/images/our-portfolio/digitize/four.jpg",
      title: "Digitizing Project 4",
      desc: "Digitizing",
      category: "Digitizing",
    },
    {
      imageURL: "/images/our-portfolio/digitize/five.jpg",
      title: "Digitizing Project 5",
      desc: "Digitizing",
      category: "Digitizing",
    },
    {
      imageURL: "/images/our-portfolio/digitize/six.jpg",
      title: "Digitizing Project 6",
      desc: "Digitizing",
      category: "Digitizing",
    },
    {
      imageURL: "/images/our-portfolio/digitize/seven.jpg",
      title: "Digitizing Project 7",
      desc: "Digitizing",
      category: "Digitizing",
    },
    {
      imageURL: "/images/our-portfolio/digitize/eight.jpg",
      title: "Digitizing Project 8",
      desc: "Digitizing",
      category: "Digitizing",
    },

    // Vector examples
    {
      imageURL: logo1,
      title: "Vector Design 1",
      desc: "Vector Design",
      category: "Vector",
    },
    {
      imageURL: logo2,
      title: "Vector Design 2",
      desc: "Vector Design",
      category: "Vector",
    },
    {
      imageURL: logo3,
      title: "Vector Design 3",
      desc: "Vector Design",
      category: "Vector",
    },
    {
      imageURL: logo4,
      title: "Vector Design 4",
      desc: "Vector Design",
      category: "Vector",
    },
    {
      imageURL: logo5,
      title: "Vector Design 5",
      desc: "Vector Design",
      category: "Vector",
    },
    {
      imageURL: logo6,
      title: "Vector Design 6",
      desc: "Vector Design",
      category: "Vector",
    },
    {
      imageURL: logo7,
      title: "Vector Design 7",
      desc: "Vector Design",
      category: "Vector",
    },
    {
      imageURL: logo8,
      title: "Vector Design 8",
      desc: "Vector Design",
      category: "Vector",
    },
    {
      imageURL: logo9,
      title: "Vector Design 9",
      desc: "Vector Design",
      category: "Vector",
    },

    // Embroidery examples
    {
      imageURL: "/images/our-portfolio/embroidery/one.jpg",
      title: "Embroidery Project 1",
      desc: "Embroidery",
      category: "Embroidery",
    },
    {
      imageURL: "/images/our-portfolio/embroidery/two.jpg",
      title: "Embroidery Project 2",
      desc: "Embroidery",
      category: "Embroidery",
    },
    {
      imageURL: "/images/our-portfolio/embroidery/three.jpg",
      title: "Embroidery Project 3",
      desc: "Embroidery",
      category: "Embroidery",
    },
    {
      imageURL: "/images/our-portfolio/embroidery/four.jpg",
      title: "Embroidery Project 4",
      desc: "Embroidery",
      category: "Embroidery",
    },
    {
      imageURL: "/images/our-portfolio/embroidery/five.jpg",
      title: "Embroidery Project 5",
      desc: "Embroidery",
      category: "Embroidery",
    },
    {
      imageURL: "/images/our-portfolio/embroidery/six.jpg",
      title: "Embroidery Project 6",
      desc: "Embroidery",
      category: "Embroidery",
    },
    {
      imageURL: "/images/our-portfolio/embroidery/seven.jpg",
      title: "Embroidery Project 7",
      desc: "Embroidery",
      category: "Embroidery",
    },
    {
      imageURL: "/images/our-portfolio/embroidery/eight.jpg",
      title: "Embroidery Project 8",
      desc: "Embroidery",
      category: "Embroidery",
    },
    {
      imageURL: "/images/our-portfolio/embroidery/nine.jpg",
      title: "Embroidery Project 9",
      desc: "Embroidery",
      category: "Embroidery",
    },
    {
      imageURL: "/images/our-portfolio/embroidery/ten.jpg",
      title: "Embroidery Project 10",
      desc: "Embroidery",
      category: "Embroidery",
    },
    {
      imageURL: "/images/our-portfolio/embroidery/eleven.jpg",
      title: "Embroidery Project 11",
      desc: "Embroidery",
      category: "Embroidery",
    },
    {
      imageURL: "/images/our-portfolio/embroidery/twelve.jpg",
      title: "Embroidery Project 12",
      desc: "Embroidery",
      category: "Embroidery",
    },

    // Leather examples

    {
      imageURL: "/images/our-portfolio/leather/one.jpg",
      title: "Leather Project 1",
      desc: "Leather",
      category: "Leather",
    },
    {
      imageURL: "/images/our-portfolio/leather/two.jpg",
      title: "Leather Project 2",
      desc: "Leather",
      category: "Leather",
    },
    {
      imageURL: "/images/our-portfolio/leather/three.jpg",
      title: "Leather Project 3",
      desc: "Leather",
      category: "Leather",
    },
    {
      imageURL: "/images/our-portfolio/leather/four.jpg",
      title: "Leather Project 4",
      desc: "Leather",
      category: "Leather",
    },

    {
      imageURL: "/images/our-portfolio/sublimation/one.jpg",
      title: "Sublimation Project 1",
      desc: "Sublimation",
      category: "Sublimation",
    },
    {
      imageURL: "/images/our-portfolio/sublimation/two.jpg",
      title: "Sublimation Project 2",
      desc: "Sublimation",
      category: "Sublimation",
    },
    {
      imageURL: "/images/our-portfolio/sublimation/three.jpg",
      title: "Sublimation Project 3",
      desc: "Sublimation",
      category: "Sublimation",
    },
    {
      imageURL: "/images/our-portfolio/sublimation/four.jpg",
      title: "Sublimation Project 4",
      desc: "Sublimation",
      category: "Sublimation",
    },
    {
        imageURL: "/images/our-portfolio/sublimation/five.jpg",
      title: "Sublimation Project 5",
      desc: "Sublimation",
      category: "Sublimation",
    },
    {
      imageURL: "/images/our-portfolio/sublimation/six.jpg",
      title: "Sublimation Project 6",
      desc: "Sublimation",
      category: "Sublimation",
    },
    {
      imageURL: "/images/our-portfolio/sublimation/seven.jpg",
      title: "Sublimation Project 7",
      desc: "Sublimation",
      category: "Sublimation",
    },
    {
      imageURL: "/images/our-portfolio/sublimation/eight.jpg",
      title: "Sublimation Project 8",
      desc: "Sublimation",
      category: "Sublimation",
    },
         {
       imageURL: "/images/our-portfolio/sublimation/nine.jpg",
       title: "Sublimation Project 9",
       desc: "Sublimation",
       category: "Sublimation",
     },

     // Chenille examples
     {
       imageURL: "/images/our-portfolio/chenille/one.jpg",
       title: "Chenille Project 1",
       desc: "Chenille",
       category: "Chenille",
     },
     {
       imageURL: "/images/our-portfolio/chenille/two.jpg",
       title: "Chenille Project 2",
       desc: "Chenille",
       category: "Chenille",
     },
     {
       imageURL: "/images/our-portfolio/chenille/three.jpg",
       title: "Chenille Project 3",
       desc: "Chenille",
       category: "Chenille",
     },
     {
       imageURL: "/images/our-portfolio/chenille/four.jpg",
       title: "Chenille Project 4",
       desc: "Chenille",
       category: "Chenille",
     },
     {
       imageURL: "/images/our-portfolio/chenille/five.jpg",
       title: "Chenille Project 5",
       desc: "Chenille",
       category: "Chenille",
     },
     {
       imageURL: "/images/our-portfolio/chenille/six.jpg",
       title: "Chenille Project 6",
       desc: "Chenille",
       category: "Chenille",
     },
     {
       imageURL: "/images/our-portfolio/chenille/seven.jpg",
       title: "Chenille Project 7",
       desc: "Chenille",
       category: "Chenille",
     },

   ];

  const [tab, setTab] = useState("Digitizing");
  const [filteredPortfolioList, setFilteredPortfolioList] =
    useState(allPortfolios);
  const [displayedPortfolios, setDisplayedPortfolios] = useState([]);
  const [loadMoreCount, setLoadMoreCount] = useState(0);
  // Slick slider settings
  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 3,
    autoplay: true, // Adds smooth scrolling
    autoplaySpeed: 3000, // Delay between slides
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  useEffect(() => {
    const filtered =
      tab === "All"
        ? allPortfolios
        : allPortfolios.filter((item) => item.category === tab);
    setFilteredPortfolioList(filtered);
    setDisplayedPortfolios(filtered.slice(0, 4)); // Initial load
    setLoadMoreCount(0);
  }, [tab]);

  const handleLoadMore = () => {
    const morePortfolios = filteredPortfolioList.slice(
      displayedPortfolios.length,
      displayedPortfolios.length + 2
    );
    setDisplayedPortfolios((prev) => [...prev, ...morePortfolios]);
    setLoadMoreCount(loadMoreCount + 1);
  };

  return (
    <Box sx={{ padding: "0px", width: "100%" }}>
      <Box
        sx={{
          display: { md: "flex", xs: "block" },
          justifyContent: "space-between",
          maxWidth: "100%",
        }}
      >
        <Box sx={{ textAlign: "center", marginBottom: "20px" }}>
          <StyledHeading
            title1="Portfolio"
            title2="Our"
            sx1={{
              order: 2,
            }}
            styledSx={{
              gap: "20px",
              display: { md: "flex", xs: "flex" },
              flexDirection: { md: "row-reverse", xs: "row" },
            }}
            sx2={{ order: "2" }}
          />
        </Box>

        {/* Desktop Tabs for filtering portfolios */}
        <Box
          sx={{
            display: { xs: "none", md: "flex" },
            justifyContent: "center",
            marginBottom: "40px",
            backgroundColor: "#F7F7F7",
            padding: "19px 10px",
            borderRadius: "20px",
          }}
        >
          <Tabs
            value={tab}
            onChange={(e, v) => setTab(v)}
            aria-label="portfolio categories"
            indicatorColor="none"
            sx={{
              "& .MuiTabs-flexContainer": {
                gap: "40px",
              },
            }}
          >
            <Tab
              value="All"
              label="All"
              sx={{
                textTransform: "capitalize",
                fontFamily: "Inter",
                fontSize: "16px",
                fontWeight: 400,
                color: "#939393",
                height: "61px",
                "&.Mui-selected": {
                  fontWeight: "bold",
                  backgroundColor: "#000",
                  color: "#fff",
                  borderRadius: "15px",
                },
              }}
            />
            <Tab
              value="Digitizing"
              label="Digitizing"
              sx={{
                textTransform: "capitalize",
                fontFamily: "Inter",
                fontWeight: 400,
                fontSize: "16px",
                color: "#939393",
                "&.Mui-selected": {
                  fontWeight: "bold",
                  backgroundColor: "#000",
                  color: "#fff",
                  borderRadius: "15px",
                },
              }}
            />
            <Tab
              value="Vector"
              label="Vector"
              sx={{
                textTransform: "capitalize",
                fontFamily: "Inter",
                fontWeight: 400,
                fontSize: "16px",
                color: "#939393",
                "&.Mui-selected": {
                  fontWeight: "bold",
                  backgroundColor: "#000",
                  color: "#fff",
                  borderRadius: "15px",
                },
              }}
            />
            <Tab
              value="Embroidery"
              label="Embroidery"
              sx={{
                textTransform: "capitalize",
                fontFamily: "Inter",
                fontWeight: 400,
                fontSize: "16px",
                color: "#939393",
                "&.Mui-selected": {
                  fontWeight: "bold",
                  backgroundColor: "#000",
                  color: "#fff",
                  borderRadius: "15px",
                },
              }}
            />
            <Tab
              value="Leather"
              label="Leather"
              sx={{
                textTransform: "capitalize",
                fontFamily: "Inter",
                fontWeight: 400,
                fontSize: "16px",
                color: "#939393",
                "&.Mui-selected": {
                  fontWeight: "bold",
                  backgroundColor: "#000",
                  color: "#fff",
                  borderRadius: "15px",
                },
              }}
            />
            <Tab
              value="Sublimation"
              label="Sublimation"
              sx={{
                textTransform: "capitalize",
                fontFamily: "Inter",
                fontWeight: 400,
                fontSize: "16px",
                color: "#939393",
                "&.Mui-selected": {
                  fontWeight: "bold",
                  backgroundColor: "#000",
                  color: "#fff",
                  borderRadius: "15px",
                },
              }}
            />
            <Tab
              value="Chenille"
              label="Chenille"
              sx={{
                textTransform: "capitalize",
                fontFamily: "Inter",
                fontWeight: 400,
                fontSize: "16px",
                color: "#939393",
                "&.Mui-selected": {
                  fontWeight: "bold",
                  backgroundColor: "#000",
                  color: "#fff",
                  borderRadius: "15px",
                },
              }}
            />
          </Tabs>
        </Box>

        {/* Mobile Dropdown for filtering portfolios */}
        <MobilePortfolioDropdown tab={tab} setTab={setTab} />
      </Box>

      {/* Slick Slider for Portfolio Items */}
      <Box
        sx={{
          // display: "flex",
          position: { md: "relative", xs: "static" },
          left: "-10%",
          // right: "50%",
          // marginLeft: {md:"-50vw", xs:"0"},
          // marginRight:{md:"-50vw", xs:"0"},
          width: { md: "100vw", xs: "100%" },
          maxWidth: "none",
          // overflow:"hidden",
          // border:"2px solid red"
        }}
      >
        <Box
          sx={{
            mt: "20px",

            ".slick-slide": {
              padding: "0 10px", // Adds horizontal gap between slides (20px total)
              display: "flex",
              justifyContent: "center",
            },
            ".slick-list": {
              overflow: "hidden", // Prevents overflow issues
              width: "100%", // Ensures full container width
            },
            ".slick-track": {
              display: "flex", // Ensures all items align horizontally
            },
          }}
        >
          <Slider {...sliderSettings}>
            {filteredPortfolioList.map((portfolio, index) => (
              <div key={index}>
                <PortfolioCard
                  imageURL={portfolio?.imageURL}
                  title={portfolio?.title}
                  desc={portfolio?.desc}
                />
              </div>
            ))}
          </Slider>
        </Box>
      </Box>

      <Box
        sx={{
          paddingBottom: "130px",
          maxWidth: "1500px",
          display: "flex",
          justifyContent: "flex-end",
        }}
      >
        <CustomButton
          svgColor={"black"}
          buttonStyle={{
            fontWeight: 600,
            textTransform: "capitalize",
            color: "white",
            padding: { xs: "15px", md: "20px" },
            marginTop: "20px",
            fontFamily: "Outfit",
            fontSize: { xs: "14px", md: "16px" },
            lineHeight: "20.16px",
            backgroundColor: "black",
            borderRadius: "10px",
          }}
          title="Load More"
          onClick={handleLoadMore}
        />
      </Box>
    </Box>
  );
}
