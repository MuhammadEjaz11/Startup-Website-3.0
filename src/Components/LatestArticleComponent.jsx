import React from "react";
import BlogOne from "../image/BlogOne-min.webp";
import BlogTwo from "../image/BlogTwo-min.webp";
import BlogThree from "../image/blog33.webp";
import { Box, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import person from "../image/person.png";
import time from "../image/time.png";
import laptopImage from '../assets/laptop.webp'

const LatestArticleComponent = () => {
  const data = [
    {
      id: 1,
      title: "How Agencies Put Your Audience First",
      description:
        "Continue to read more information and updates from the Mozack blog and gain new knowledge about Mozack and its industry. This way, our team ensures you are updated with relevant information on app development, digital innovation and customer-centric strategies that will keep you on top in today’s competitive technological marketplace. As a result, let us scrutinise how Mozack is approaching AI to redefine customer experiences.",
      image: laptopImage,
      author: "By Admin",
      date: "November 11, 2024",
    },
    {
      id: 2,
      title: "How Agencies Put Your Audience First",
      description:
        "Mozack is positioning itself as a cutting-edge organisation in the digital domain, which is currently experiencing radical changes due to the integration of Artificial Intelligence (AI). In this article, we explore how Mozack is harnessing AI to design new applications that are much more attuned to users’ requirements on the fly. Find out how particular AI integrated tools work and improve the overall customer experience and application usage. Sustainable App Development: Mozack's Green Approach.",
      image: laptopImage,
      author: "By  Admin",
      date: "November 11, 2024",
    },
  
  ];

  console.log(Array.isArray(data));

  return (
    <div>
      <Box
        sx={{
          display: "flex",
          pb:"30px"
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
          Latest
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
        &nbsp;Article
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: {
            sm:"140px",
            xs:"200px"
          },
        }}
      >
        {data?.map((item) => (
          <Box
            key={item.id}
            className="keen-slider__slide"
            sx={{
              borderRadius: "15px",
              width: "100%",
              minWidth: "200px",
              maxWidth: "100%",
              margin: { md: "0 10px", xs: "0px 0px " },
              //        overflow: 'hidden', // Ensure image and text don't overflow
              position: "relative", // For positioning text overlay
              cursor: "pointer",
            }}
          >
            <img
              src={item.image}
              alt={item.title}
              style={{
                width: "100%",
                // height: "557px",
                objectFit: "contain",
                borderRadius: "12px",
                overflow: "hidden",
                position: "relative",
              }}
            />

            <Box
              sx={{
                padding: "20px 25px",
                backgroundColor: "#fff",
                boxSizing: "border-box",
                borderRadius: { md: "15px", sm: "15px", xs: "10px" },
                boxShadow: "0px -3px 12px rgba(0, 0, 0, 0.1)",
                position: "absolute",
                bottom: {lg:"-12%", md:"-10%", xs:"-35%" , sm:"-17%"}, // Align at the bottom of the image
                left: "50%", // Center horizontally
                transform: "translateX(-50%)", // Keep it centered horizontally
                width: "90%", // Full width of the image
                textAlign: "center", // Center text
              }}
            >
              <Typography
                sx={{
                  fontFamily: "Outfit",
                  fontSize: { xl: "21px", mf: "18px", xs: "13px" },
                  fontWeight: "bold",
                  color: "#161616",
                  textAlign: "start",
                  
                }}
              >
                {item.title}
              </Typography>

              <Typography
                sx={{
                  fontFamily: "Inter",
                  color: "#939393",
                  fontSize: { xl: "16px", md: "14", xs: "10px" },

                  lineHeight: { md: "30px", xs: "24px" },
                  //   marginTop: '10px',
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  textAlign: "start",
                  mt:"10px"
                }}
              >
                {item.description.slice(0, 75)}
                {" ..."}
                {/* <NavLink style={{ fontSize: "16px" }}>Read More</NavLink> */}
              </Typography>

              <Box
                sx={{
                  alignItems: "center",
                  display: "flex",
                  justifyContent: "space-between",
                  mt:"10px"
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    
                  }}
                >
                  <img
                    src={person}
                    style={{
                      width: "24px",
                      height: "24px",
                      marginRight: "12px",
                     
                    }}
                  />
                  <Typography
                    sx={{
                      fontSize: { xl: "16px", sm: "16", xs: "10px" },
                      marginRight: "10px",
                      color: "#A3A3A3",
                      fontWeight: "400",
                      fontFamily: "Inter",
                     
                    }}
                  >
                    {item.author}
                  </Typography>
                </Box>
                <Box>
                  <Typography
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: "10px",
                      fontSize: { sm: "14px", xs: "10px" },
                      marginRight: "10px",
                      color: "#A3A3A3",
                      fontWeight: "400",
                      fontFamily: "Inter",
                    }}
                  >
                    <img src={time} alt="" /> {item.date}
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        ))}
      </Box>
    </div>
  );
};

export default LatestArticleComponent;
