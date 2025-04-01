import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import { Box, Tab, Tabs } from "@mui/material";
import PortfolioCard from "./PortfolioCard";
import StyledHeading from "./StyledHeading";

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
import digital1 from '../assets/font/DigitalMarketing/d1.jpg'
import digital2 from '../assets/font/DigitalMarketing/d2.jpg'
import digital3 from '../assets/font/DigitalMarketing/d3.jpg'
import digital4 from '../assets/font/DigitalMarketing/d4.jpg'
import digital5 from '../assets/font/DigitalMarketing/d5.jpg'
import digital6 from '../assets/font/DigitalMarketing/d6.jpg'
import digital7 from '../assets/font/DigitalMarketing/d7.jpg'
import digital8 from '../assets/font/DigitalMarketing/d8.jpg'
import digital9 from '../assets/font/DigitalMarketing/d9.jpg'






// Graphic designing import
import grap1 from "../assets/font/GraphicDesigning/grap1.webp";
import grap2 from "../assets/font/GraphicDesigning/grap2.webp";
import grap3 from "../assets/font/GraphicDesigning/grap3.webp";
import grap4 from "../assets/font/GraphicDesigning/grap4.webp";
import CustomButton from "./Button";

export default function PortfolioSlider() {
  // Portfolio data for each category
  const allPortfolios = [
    // Website examples
    { imageURL: web1, title: "Website Project 1", desc: "Web Development", category: "Website" },
    { imageURL: web2, title: "Website Project 2", desc: "Web Development", category: "Website" },
    { imageURL: web3, title: "Website Project 3", desc: "Web Development", category: "Website" },
    { imageURL: web4, title: "Website Project 4", desc: "Web Development", category: "Website" },
    { imageURL: web5, title: "Website Project 5", desc: "Web Development", category: "Website" },
    { imageURL: web6, title: "Website Project 6", desc: "Web Development", category: "Website" },
    { imageURL: web7, title: "Website Project 7", desc: "Web Development", category: "Website" },
    { imageURL: web8, title: "Website Project 8", desc: "Web Development", category: "Website" },
    { imageURL: web9, title: "Website Project 9", desc: "Web Development", category: "Website" },


    // Logo App examples
    { imageURL: logo1, title: "Logo Design 1", desc: "Logo Design", category: "logo" },
    { imageURL: logo2, title: "Logo Design 2", desc: "Logo Design", category: "logo" },
    { imageURL: logo3, title: "Logo Design 3", desc: "Logo Design", category: "logo" },
    { imageURL: logo4, title: "Logo Design 4", desc: "Logo Design", category: "logo" },
    { imageURL: logo5, title: "Logo Design 5", desc: "Logo Design", category: "logo" },
    { imageURL: logo6, title: "Logo Design 6", desc: "Logo Design", category: "logo" },
    { imageURL: logo7, title: "Logo Design 7", desc: "Logo Design", category: "logo" },
    { imageURL: logo8, title: "Logo Design 8", desc: "Logo Design", category: "logo" },
    { imageURL: logo9, title: "Logo Design 9", desc: "Logo Design", category: "logo" },

    // Video Editing examples
    { imageURL: vid1, title: "Video Editing 1", desc: "Video Editing", category: "Video Editing" },
    { imageURL: vid2, title: "Video Editing 2", desc: "Video Editing", category: "Video Editing" },
    { imageURL: vid3, title: "Video Editing 3", desc: "Video Editing", category: "Video Editing" },
    { imageURL: vid4, title: "Video Editing 4", desc: "Video Editing", category: "Video Editing" },
    { imageURL: vid5, title: "Video Editing 5", desc: "Video Editing", category: "Video Editing" },
    { imageURL: vid6, title: "Video Editing 6", desc: "Video Editing", category: "Video Editing" },
    { imageURL: vid7, title: "Video Editing 7", desc: "Video Editing", category: "Video Editing" },
    { imageURL: vid8, title: "Video Editing 8", desc: "Video Editing", category: "Video Editing" },
    { imageURL: vid9, title: "Video Editing 9", desc: "Video Editing", category: "Video Editing" },


        // Digital Marketing Editing examples

        { imageURL: digital1, title: "Digital Marketing 1", desc: "Digital marketing", category: "Digital marketing" },
        { imageURL: digital2, title: "Digital Marketing 2", desc: "Digital marketing", category: "Digital marketing" },
        { imageURL: digital3, title: "Digital Marketing 3",  desc: "Digital marketing", category: "Digital marketing" },
        { imageURL: digital4, title: "Digital Marketing 4", desc: "Digital marketing", category: "Digital marketing" },
        { imageURL: digital5, title: "Digital Marketing 5",  desc: "Digital marketing", category: "Digital marketing" },
        { imageURL: digital6, title: "Digital Marketing 6",  desc: "Digital marketing", category: "Digital marketing" },
        { imageURL: digital7, title: "Digital Marketing 7",  desc: "Digital marketing", category: "Digital marketing" },
        { imageURL: digital8, title: "Digital Marketing 8",  desc: "Digital marketing", category: "Digital marketing" },
        { imageURL: digital9, title: "Digital Marketing 9",  desc: "Digital marketing", category: "Digital marketing" },

    

        { imageURL: stat1, title: "Stationery Design 1", desc: "Stationery Design", category: "Graphic Design" },
        { imageURL: stat2, title: "Stationery Design 2", desc: "Stationery Design", category: "Graphic Design" },
        { imageURL: stat3, title: "Stationery Design 3", desc: "Stationery Design", category: "Graphic Design" },
        { imageURL: stat4, title: "Stationery Design 4", desc: "Stationery Design", category: "Graphic Design" },
        { imageURL: stat5, title: "Stationery Design 5", desc: "Stationery Design", category: "Graphic Design" },
        { imageURL: stat6, title: "Stationery Design 6", desc: "Stationery Design", category: "Graphic Design" },
        { imageURL: stat7, title: "Stationery Design 7", desc: "Stationery Design", category: "Graphic Design" },
        { imageURL: stat8, title: "Stationery Design 8", desc: "Stationery Design", category: "Graphic Design" },
        { imageURL: stat9, title: "Stationery Design 9", desc: "Stationery Design", category: "Graphic Design" },
  ];


  const extraPortfolioContent = [
     // Website examples
    { imageURL: web2, title: "Website Project 1", desc: "Web Development", category: "Website" },
    { imageURL: web3, title: "Website Project 4", desc: "Web Development", category: "Website" },
    { imageURL: web2, title: "Website Project 2", desc: "Web Development", category: "Website" },
    { imageURL: web3, title: "Website Project 3", desc: "Web Development", category: "Website" },

       // Logo App examples
       { imageURL: logo6, title: "Logo Design 6", desc: "Mobile App Development", category: "logo" },
       { imageURL: logo7, title: "Logo Design 7", desc: "Mobile App Development", category: "logo" },
       { imageURL: logo8, title: "Logo Design 8", desc: "Mobile App Development", category: "logo" },
       { imageURL: logo9, title: "Logo Design 9", desc: "Mobile App Development", category: "logo" },
   
  // Video Editing examples
  { imageURL: vid3, title: "Video Editing 1", desc: "Video Editing", category: "Video Editing" },
  { imageURL: vid2, title: "Video Editing 2", desc: "Video Editing", category: "Video Editing" },
  { imageURL: vid3, title: "Video Editing 3", desc: "Video Editing", category: "Video Editing" },
  { imageURL: vid2, title: "Video Editing 4", desc: "Video Editing", category: "Video Editing" },

  // Graphic Designing examples
  { imageURL: stat1, title: "Stationery Design 1", desc: "Stationery Design", category: "Graphic Design" },
  { imageURL: stat2, title: "Stationery Design 2", desc: "Stationery Design", category: "Graphic Design" },
  { imageURL: stat3, title: "Stationery Design 3", desc: "Stationery Design", category: "Graphic Design" },
  { imageURL: stat4, title: "Stationery Design 4", desc: "Stationery Design", category: "Graphic Design" },
  { imageURL: stat5, title: "Stationery Design 5", desc: "Stationery Design", category: "Graphic Design" },
  { imageURL: stat6, title: "Stationery Design 6", desc: "Stationery Design", category: "Graphic Design" },
  { imageURL: stat7, title: "Stationery Design 7", desc: "Stationery Design", category: "Graphic Design" },
  { imageURL: stat8, title: "Stationery Design 8", desc: "Stationery Design", category: "Graphic Design" },
  { imageURL: stat9, title: "Stationery Design 9", desc: "Stationery Design", category: "Graphic Design" },



  ]

  const [tab, setTab] = useState("Website");
  const [filteredPortfolioList, setFilteredPortfolioList] = useState(allPortfolios);
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
    const filtered = tab === "All" ? allPortfolios : allPortfolios.filter(item => item.category === tab);
    setFilteredPortfolioList(filtered);
    setDisplayedPortfolios(filtered.slice(0, 4)); // Initial load
    setLoadMoreCount(0);
  }, [tab]);

  const handleLoadMore = () => {
    const morePortfolios = filteredPortfolioList.slice(displayedPortfolios.length, displayedPortfolios.length + 2);
    setDisplayedPortfolios(prev => [...prev, ...morePortfolios]);
    setLoadMoreCount(loadMoreCount + 1);
  };

  return (
    <Box sx={{ padding: "0px", width: '100%' }}>
      <Box
        sx={{
          display: { md: "flex", xs: "block" },
          justifyContent: "space-between",
          maxWidth: '100%',
      
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
            sx2={{order:"2"}}
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
              value="logo"
              label="Graphic Design"
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
              value="Digital marketing"
              label="Digital marketing"
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
              value="Graphic Design"
              label="Stationary Design"
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
        // display: "flex",
        position: {md:"relative", xs:"static"},
        left: "-10%",
        // right: "50%",
        // marginLeft: {md:"-50vw", xs:"0"},
        // marginRight:{md:"-50vw", xs:"0"},
        width: {md:"100vw", xs:"100%"}, 
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
