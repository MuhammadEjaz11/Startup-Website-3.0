import React, { useState } from 'react';
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { Box, Typography, Avatar } from '@mui/material';
import BlogOne from '../image/BlogOne-min.webp';
import BlogTwo from '../image/BlogTwo-min.webp';
import BlogThree from '../image/blog33.webp';

import time from '../image/time.png';
import person from '../image/person.png';
import { NavLink } from 'react-router-dom';


const BlogSlider = ({
  perView = 1, // Number of blog posts visible at once by default
  spacing = 10, // Space between blog cards
  loop = false,
  blogData,
 data = [
    {
      id: 1,
      title: "How Agencies Put Your Audience First",
      description: "Continue to read more information and updates from the Mozack blog and gain new knowledge about Mozack and its industry. This way, our team ensures you are updated with relevant information on app development, digital innovation and customer-centric strategies that will keep you on top in today’s competitive technological marketplace. As a result, let us scrutinise how Mozack is approaching AI to redefine customer experiences.",
      image: BlogOne,
      author: "By Admin",
      date: "November 11, 2024",
    },
    {
      id: 2,
      title: "How Agencies Put Your Audience First",
      description: "Mozack is positioning itself as a cutting-edge organisation in the digital domain, which is currently experiencing radical changes due to the integration of Artificial Intelligence (AI). In this article, we explore how Mozack is harnessing AI to design new applications that are much more attuned to users’ requirements on the fly. Find out how particular AI integrated tools work and improve the overall customer experience and application usage. Sustainable App Development: Mozack's Green Approach.",
      image: BlogTwo,
      author: "By  Admin",
      date: "November 11, 2024",
    },
    {
      id: 3,
      title: "How Agencies Put Your Audience First",
      description: "At Mozack, it is our mission to embrace the new world of sustainable practices and provide green digital solutions. In this article, you will learn about our best practices in creating an energy-efficient app and choosing a cloud provider with clean energy. Find out how Mozack ensures that it contributes to environmental causes while offering clients the best digital services. Cybersecurity in App Development: Safety of The Users of Mozack’s App 👥",
      image: BlogThree,
      author: "By  Admin",
      date: "November 11, 2024",
    },
    {
      id: 4,
      title: "How Agencies Puts Your Audience First",
      description: "In the contemporary world, app development cannot afford to overlook cybersecurity due to increased attacks. Today this post is a continuation of our discussions on how Mozack has taken measures to guarantee its data and its users’ privacy within the applications that we are developing. Find out how Mozack is ensuring users are safe from early design to the final product through proper coding and risk management.",
      image: BlogTwo,
      author: "Admin",
      date: "November 11, 2024",
    },
  ]
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);

  const [sliderRef, instanceRef] = useKeenSlider({
    loop, // Enable continuous looping
    // mode:"free",
    slides: {
      perView: 1, // Number of slides visible at once by default
      spacing, // Space between slides
    },
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
    breakpoints: {
      '(max-width: 768px)': {
        slides: { perView: 1, spacing: 10 }, // Show 1 post on mobile devices
      },
      '(min-width: 768px) and (max-width: 1024px)': {
        slides: { perView: 2, spacing: 20 }, // Show 2 posts on tablets
      },
      '(min-width: 1024px)': {
        slides: { perView: 3, spacing: 30 }, // Show 3 posts on larger screens
      },
    },
  });

  return (
    <>
      <Box ref={sliderRef} className="keen-slider" sx={{ paddingTop: '73px', margin: '0 auto', height: '520px' }}>
        {data?.map((item) => (
          <Box
            key={item.id}
            className="keen-slider__slide"
            sx={{
              borderRadius: '15px',
              width: '100%',
              minWidth: "200px",
              maxWidth: '412px',
              margin: {md:'0 10px', xs:"0px 0px "},
              overflow: 'hidden', // Ensure image and text don't overflow
              position: 'relative', // For positioning text overlay
            
            }}
          >
            {/* Image with rounded corners */}
            <img 
              src={item.image} 
              alt={item.title} 
              style={{ 
                width: '100%', 
                height: '357px', 
                objectFit: 'cover', 
                borderRadius: "12px",
                overflow: "hidden",
                position:"relative"
              }} 
            />

            {/* Centered Overlay for Text */}
            <Box
              sx={{
                padding: '20px 25px',
                backgroundColor: '#fff',
                boxSizing: 'border-box',
                borderRadius: { md: '15px', sm: '0px', xs: '10px' },
                boxShadow: '0px -3px 12px rgba(0, 0, 0, 0.1)',
                position: "absolute",
                bottom: "5%", // Align at the bottom of the image
                left: "50%", // Center horizontally
                transform: "translateX(-50%)", // Keep it centered horizontally
                width: "90%", // Full width of the image
                textAlign: 'center', // Center text
              }}
            >
              <Typography
                sx={{
                  fontFamily: 'Outfit',
                  fontSize: {sm: "21px", xs:"16px"},
                  fontWeight: 'bold',
                  color: '#161616',
                  textAlign:"start"
                }}
              >
                {item.title} 
              </Typography>

              <Typography
                sx={{
                  fontFamily: 'Inter',
                  color: '#939393',
                  fontSize: {sm: "16px", xs:"12px"},

                  lineHeight: {sm: "36px", xs:"24px"},
                  marginTop: '10px',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  textAlign:"start"

                }}
              >
                {item.description.slice(0, 75)} <NavLink style={{fontSize:"16px"}} >Read More</NavLink>
              </Typography>

              {/* Author and Date */}
              <Box sx={{ alignItems: 'center', marginTop: '15px', display: 'flex', justifyContent: 'space-between' }}>
                <Box sx={{ display: 'flex' , justifyContent:"center", alignItems:"center"}}>
                  <img src={person} style={{ width: '24px', height: '24px', marginRight: '12px' }} />
                  <Typography sx={{ fontSize: {sm: "16px", xs:"12px"}, marginRight: '10px', color:"#A3A3A3", fontWeight:"400", fontFamily:"Inter" }}>
                    {item.author}
                  </Typography>
                </Box>
                <Box>
                  <Typography sx={{ display:"flex", justifyContent:"center", alignItems:"center", gap:"10px", fontSize: {sm: "16px", xs:"12px"}, marginRight: '10px', color:"#A3A3A3", fontWeight:"400", fontFamily:"Inter" }}>
                   <img src={time} alt="" /> {item.date}
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        ))}
      </Box>

      {/* Dots for navigation */}
      {loaded && instanceRef.current && (
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'right !important',
            alignContent: 'right !important',
            marginTop: '20px',
            backgroundColor: '#F6F6F6',
            width: '75px',
            borderRadius: '10px',
            padding: '17.02px 18.24px 15.8px 19.45px',
            float: 'right',
          }}
        >
          {[...Array(instanceRef.current.track.details.slides.length).keys()].map((idx) => {
            return (
              <Box
                key={idx}
                onClick={() => {
                  instanceRef.current?.moveToIdx(idx);
                }}
                sx={{
                  width: currentSlide === idx ? '23.1px' : '7.29px',
                  height: '7.29px',
                  borderRadius: '25px',
                  margin: '0 5px',
                  backgroundColor: currentSlide === idx ? '#FFC800' : '#E0E0E0',
                  transition: 'background-color 0.3s ease',
                  cursor: 'pointer',
                }}
              />
            );
          })}
        </Box>
      )}
    </>
  );
};

export default BlogSlider;
