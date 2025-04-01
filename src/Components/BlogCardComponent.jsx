import React from "react";
import BlogOne from "../image/BlogOne-min.webp";
import BlogTwo from "../image/BlogTwo-min.webp";
import BlogThree from "../image/blog33.webp";
import { Box, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import person from "../image/person.png";
import time from "../image/time.png";
import { useNavigate } from "react-router-dom";

const BlogCardComponent = () => {
    const navigate = useNavigate();

  const data = [
    {
      id: 1,
      title: "How Agencies Put Your Audience First",
      description:
        "Continue to read more information and updates from the Mozack blog and gain new knowledge about Mozack and its industry. This way, our team ensures you are updated with relevant information on app development, digital innovation and customer-centric strategies that will keep you on top in today’s competitive technological marketplace. As a result, let us scrutinise how Mozack is approaching AI to redefine customer experiences.",
      image: BlogOne,
      author: "By Admin",
      date: "November 11, 2024",
    },
    {
      id: 2,
      title: "How Agencies Put Your Audience First",
      description:
        "Mozack is positioning itself as a cutting-edge organisation in the digital domain, which is currently experiencing radical changes due to the integration of Artificial Intelligence (AI). In this article, we explore how Mozack is harnessing AI to design new applications that are much more attuned to users’ requirements on the fly. Find out how particular AI integrated tools work and improve the overall customer experience and application usage. Sustainable App Development: Mozack's Green Approach.",
      image: BlogTwo,
      author: "By  Admin",
      date: "November 11, 2024",
    },
    {
      id: 3,
      title: "How Agencies Put Your Audience First",
      description:
        "At Mozack, it is our mission to embrace the new world of sustainable practices and provide green digital solutions. In this article, you will learn about our best practices in creating an energy-efficient app and choosing a cloud provider with clean energy. Find out how Mozack ensures that it contributes to environmental causes while offering clients the best digital services. Cybersecurity in App Development: Safety of The Users of Mozack’s App 👥",
      image: BlogThree,
      author: "By  Admin",
      date: "November 11, 2024",
    },
    {
      id: 4,
      title: "How Agencies Puts Your Audience First",
      description:
        "In the contemporary world, app development cannot afford to overlook cybersecurity due to increased attacks. Today this post is a continuation of our discussions on how Mozack has taken measures to guarantee its data and its users’ privacy within the applications that we are developing. Find out how Mozack is ensuring users are safe from early design to the final product through proper coding and risk management.",
      image: BlogTwo,
      author: "Admin",
      date: "November 11, 2024",
    },
  ];



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
          Featured
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
          &nbsp;Post
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "140px",
          alignItems:"start"
        }}
      >
        {data?.map((item) => (
          <Box
            key={item.id}
            className="keen-slider__slide"
            sx={{
              borderRadius: "15px",
              width: "100%",
              minWidth: {
                sm:"400px",
                xs:"300px"
              },
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
                // height: "357px",
                objectFit: "cover",
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
                bottom: {lg:"-27%", md:"-10%", xs:"-35%" , sm:"-17%"}, 
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
              onCLick={()=> navigate("/services/our-blogs/details")}

              >
                {item.title}
              </Typography>

              <Typography
                sx={{
                  fontFamily: "Inter",
                  color: "#939393",
                  fontSize: { xl: "16px", md: "14", xs: "10px" },

                  lineHeight: { md: "30px", xs: "24px" },
                    marginTop: '5px',
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  textAlign: "start",
                }}
              >
                {item.description.slice(0, 70)}
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

export default BlogCardComponent;
