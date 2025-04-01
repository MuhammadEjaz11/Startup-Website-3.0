import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import { Box, Tab, Tabs } from "@mui/material";
import PortfolioCard from "./PortfolioCard";
import StyledHeading from "./StyledHeading";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Import portfolio images
import portfolioOne from "../image/portfolioOne.png";
import portfolioTwo from "../image/portfolioTwo.png";
import portfolioThree from "../image/portfolioThree.png";
import portfolioFour from "../image/portfolioFour.png";

import socialMediaOne from "../image/portfolioOne.png";
import socialMediaTwo from "../image/portfolioTwo.png";
import socialMediaThree from "../image/portfolioThree.png";
import socialMediaFour from "../image/portfolioFour.png";

export default function PortfolioSlider() {
  const allPortfolios = [
    {
      imageURL: portfolioOne,
      title: "UI UX Design",
      desc: "SaaS Dashboard E Commerce",
      category: "Website",
    },
    {
      imageURL: portfolioTwo,
      title: "UI UX Design",
      desc: "SaaS Dashboard E Commerce",
      category: "Logo",
    },
    {
      imageURL: portfolioThree,
      title: "UI UX Design",
      desc: "SaaS Dashboard E Commerce",
      category: "Video",
    },
    {
      imageURL: portfolioFour,
      title: "UI UX Design",
      desc: "SaaS Dashboard E Commerce",
      category: "Stationery",
    },
    {
      imageURL: portfolioTwo,
      title: "UI UX Design",
      desc: "SaaS Dashboard E Commerce",
      category: "Social Media",
    },
    {
      imageURL: portfolioOne,
      title: "UI UX Design",
      desc: "SaaS Dashboard E Commerce",
      category: "Website",
    },
    {
      imageURL: portfolioTwo,
      title: "UI UX Design",
      desc: "SaaS Dashboard E Commerce",
      category: "Logo",
    },
    {
      imageURL: portfolioThree,
      title: "UI UX Design",
      desc: "SaaS Dashboard E Commerce",
      category: "Video",
    },
    {
      imageURL: portfolioFour,
      title: "UI UX Design",
      desc: "SaaS Dashboard E Commerce",
      category: "Stationery",
    },
    {
      imageURL: portfolioTwo,
      title: "UI UX Design",
      desc: "SaaS Dashboard E Commerce",
      category: "Social Media",
    },
    {
      imageURL: portfolioOne,
      title: "UI UX Design",
      desc: "SaaS Dashboard E Commerce",
      category: "Website",
    },
    {
      imageURL: portfolioTwo,
      title: "UI UX Design",
      desc: "SaaS Dashboard E Commerce",
      category: "Logo",
    },
    {
      imageURL: portfolioThree,
      title: "UI UX Design",
      desc: "SaaS Dashboard E Commerce",
      category: "Video",
    },
    {
      imageURL: portfolioFour,
      title: "UI UX Design",
      desc: "SaaS Dashboard E Commerce",
      category: "Stationery",
    },
    {
      imageURL: portfolioTwo,
      title: "UI UX Design",
      desc: "SaaS Dashboard E Commerce",
      category: "Social Media",
    },
  ];

  const [tab, setTab] = useState("Website");
  const [filteredPortfolioList, setFilteredPortfolioList] = useState(allPortfolios);

  // Slick slider settings
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 1,
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
    if (tab === "Website") {
      const filtered = allPortfolios.filter((item) => item.category === "Website");
      setFilteredPortfolioList(filtered);
    } else {
      const filtered = allPortfolios.filter((item) => item.category === tab);
      setFilteredPortfolioList(filtered);
    }
  }, [tab]);

  return (
    <Box sx={{ padding: "0px" }}>
      <Box
        sx={{
          display: { md: "flex", xs: "block" },
          justifyContent: "space-between",
        }}
      >
        <Box sx={{ textAlign: "center", marginBottom: "20px" }}>
          <StyledHeading
            title1="Portfolio"
            title2="Our"
            sx1={{
              order: 1,
            }}
            styledSx={{
              gap: "20px",
              display: { md: "flex", xs: "flex" },
              flexDirection: { md: "row-reverse", xs: "row" },
            }}
          />
        </Box>

        {/* Tabs for filtering portfolios */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            marginBottom: "40px",
            backgroundColor: "#F7F7F7",
            padding: "12px 11px",
            borderRadius: "20px",
          }}
        >
          <Tabs
            value={tab}
            onChange={(e, v) => setTab(v)}
            aria-label="portfolio categories"
            indicatorColor="none"
          >
         
            <Tab
              value="Website"
              label="Website"
              sx={{
                textTransform: "capitalize",
                fontFamily: "Inter",
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
              value="Logo"
              label="Logo"
              sx={{
                textTransform: "capitalize",
                fontFamily: "Inter",
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
              value="Video"
              label="Video"
              sx={{
                textTransform: "capitalize",
                fontFamily: "Inter",
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
              value="Stationery"
              label="Stationery"
              sx={{
                textTransform: "capitalize",
                fontFamily: "Inter",
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
              value="Social Media"
              label="Social Media"
              sx={{
                textTransform: "capitalize",
                fontFamily: "Inter",
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
      </Box>

      {/* Slick Slider for Portfolio Items */}
      <Box
        sx={{
          mt: "20px",
          // Add padding to ensure the gap between the slides
          ".slick-slide": {
            margin: "0 10px", // Adds horizontal gap between slides (20px total)
          },
        //  border:"2px solid red", height:"100%"
        }}
      >
        <Slider {...sliderSettings}>
          {filteredPortfolioList.map((portfolio, index) => (
            <div key={index} >
              <PortfolioCard
                imageURL={portfolio.imageURL}
                title={portfolio.title}
                desc={portfolio.desc}
              />
            </div>
          ))}
        </Slider>
      </Box>
    </Box>
  );
}
