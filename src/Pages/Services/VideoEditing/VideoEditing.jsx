import React from 'react'
import { useState } from "react";
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom'
import { Link } from 'react-router-dom'
import Layout from '../../Layouts/Layout'
// import Box from '@mui/material'
import { Box, Typography, Accordion, AccordionDetails, AccordionSummary } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import AnimationTabs from '../../../Components/AnimatioonTabs';
import SolutionFAQ from '../../../Components/SolutionFAQ';
import SectionPeragraph from '../../../Components/SectionPeragraph'
import DesignDevelop from '../../../Components/DesignDevelop'
import CustomButton from '../../../Components/Button'
import CmsImage from '../../../image/CmsImage.png'
import StyledHeading from '../../../Components/StyledHeading'
import { Carousel } from '@trendyol-js/react-carousel';
import PortfolioCard from "../../../Components/PortfolioCard";
import CustomPackage from '../../../Components/CustomPackage';
import FAQ from '../../../Components/FAQ'
import LeftRightComponent from '../../../Components/LeftRightComponent'
import laptopImage from '../../../assets/font/MobileApp/appDevImage.png'
import BlogSlider from '../../../Components/OurBlog'
import RoundCircle from '../../../Components/RoundCircle'
import SecondFAQSlider from '../../../Components/SecondFAQ'
import ContactForm from '../../../Components/ContactForm'
import Technologies from "../../../Components/Technologies";
import TechnologyCarousel from "../../../Components/Carousels/TechnologyCarousel/TechnologyCarousel";
import Questions from '../../../Components/Questions';


import vid2 from "../../../assets/font/VideoEditing/vid2.webp";
import vid3 from "../../../assets/font/VideoEditing/vid3.webp";



import {
  CustomPackageDetail,
  PortfoliosList,
  services1,
  services2,
  technologiesCard,
  TestimoialCard,
  webDevQuestions
} from "../../../../utils";
import SectionHeading from '../../../Components/SectionHeading';
import SectionBox from '../../../Components/SectionBox';
import KeenSliderPortfolio from '../../../Components/KeenSliderPortfolio';

import BlogOne from '../../../image/videoB1.webp';
import BlogTwo from '../../../image/videoB2.webp';
import BlogThree from '../../../image/videoB3.webp';
import starRating from '../../../image/starRating.png';


import {Button, Element, Events, animateScroll as scroll, scrollSpy } from 'react-scroll';


const faqData = [
  { id: 1, 
    question: "What types of video animations do you offer?", 
    answer: "We offer cartoon animations, explainer videos, 3D animations, and logo animations tailored to your business needs." },
  { id: 2, 
    question: "How long does it take to create an animation?", 
    answer: "The timeline depends on the complexity, but most animations are delivered within 1–2 weeks." },
  { id: 3, 
    question: "Can I provide input during the animation process?", 
    answer: "Absolutely! We work closely with you to incorporate your feedback and ensure the final video aligns with your goals." },
    { id: 4, 
      question: "How can animations improve my business?", 
      answer: "Animations enhance audience engagement, simplify complex ideas, and improve 60% higher conversion rates on marketing campaigns." },
   
];
const SecondFaq = [
  {
    id: 1,
    title: 'Experience & Excellence',
    testimonialText:
      "Mozack combines years of experience, cutting-edge technology, and a client-centric approach to deliver exceptional solutions tailored to your needs.",
    starRating: starRating,
    videoId: 'mZ5hnNRBFsc', // A valid video ID
  },
  {
    id: 2,
    title: 'Quality & Dedication',
    testimonialText:
      "Our team follows a rigorous testing process, uses industry-leading standards, and prioritizes client feedback to deliver high-quality, scalable solutions.",
    starRating: starRating,
    videoId: 'mZ5hnNRBFsc', // Corrected video ID from the URL
  },
  {
    id: 3,
    title: 'Innovation & Creativity',
    testimonialText:
      " Mozack provides a range of services, including Mobile App Development, Custom Software Development, Web Design, and Digital Marketing—all designed to drive innovation and results.",
    starRating: starRating,
    videoId: 'mZ5hnNRBFsc', // Same video ID as example
  },
]

const videoAni = [
  { imageURL: vid3, title: "Video Editing 1", desc: "Video Editing", category: "Video Editing" },
  { imageURL: vid2, title: "Video Editing 2", desc: "Video Editing", category: "Video Editing" },
  { imageURL: vid3, title: "Video Editing 3", desc: "Video Editing", category: "Video Editing" },
  { imageURL: vid2, title: "Video Editing 4", desc: "Video Editing", category: "Video Editing" },
]

const blogData= [
  {
    id: 1,
    title: "How Agecis Puts Your Audience First",
    description: "Lorem ipsum is simply dummy text of the printing and typesetting industry...",
    image: BlogOne,
    author: "Admin",
    date: "April 20, 2024",
  },
  {
    id: 2,
    title: "How Agecis Puts Your Audience First",
    description: "Lorem ipsum is simply dummy text of the printing and typesetting industry...",
    image: BlogTwo,
    author: "Admin",
    date: "April 20, 2024",
  },
  {
    id: 3,
    title: "How Agecis Puts Your Audience First",
    description: "Lorem ipsum is simply dummy text of the printing and typesetting industry...",
    image: BlogThree,
    author: "Admin",
    date: "April 20, 2024",
  },
  {
    id: 4,
    title: "How Agecis Puts Your Audience First",
    description: "Lorem ipsum is simply dummy text of the printing and typesetting industry...",
    image: BlogTwo,
    author: "Admin",
    date: "April 20, 2024",
  },
]

const tabs = [
  { label: 'Promotional Videos', content: 'Enhance your brand with promotional videos that deliver your message effectively and boost conversions. Engaging videos increase sales by up to 80%.', imageSrc: '../../src/assets/font/VideoAnimation/VideoAnimation.png' },
  { label: ' Social Media Videos', content: 'Grab attention with fast-paced, visually appealing videos optimized for platforms like Instagram, Facebook, and TikTok.', imageSrc: '../../src/assets/font/VideoAnimation/VideoAnimation.png' },
  { label: 'Corporate Video Editing', content: 'From presentations to training content, our clean and professional edits ensure your business stays ahead with powerful visuals.', imageSrc: '../../src/assets/font/VideoAnimation/VideoAnimation.png' },
  { label: 'Event Highlights', content: 'Relive your best moments with seamless event highlight videos tailored to showcase important memories and details.', imageSrc: '../../src/assets/font/VideoAnimation/VideoAnimation.png' },
 
];


const VideoEditing = () => {
  useEffect(()=>{
    const scrollTo = () => {
      scroll.scrollTo(0); // Scrolling to 100px from the top of the page.
    };
    // scrollTo()
  },[])
  return (
    <>
      {/* Hero Section */}
      <Box sx={{ mt:{md:"80px",xs:"40px"} ,
        padding: {lg:"0px 20px 0px 20px", md:"0px 20px 0px 20px", sm:"0px 0px 0px 0px", xs:"0px 0px 0px 0px"},
       }}
      
      >
         <LeftRightComponent
          styledSx={{
            fontSize: {xl:"40px",md:"30px", sm:"20px", xs:"20px"},
            flexDirection: "column",
            justifyContent: "start",
            textAlign: "start",
          }}
          isRow={false}
          title1={"Why Choose Our"}
          title2={"Video Editing Services?"}
          buttonShow={true}
          image={CmsImage}
          SecondPera={false}
          content={`With over 500+ successful projects and 98% client satisfaction, we deliver professional, polished videos that stand out. Whether for marketing, social media, or events, we ensure your videos tell a compelling story.`}
        />
      </Box>



        {/* {ANimation Tabs} */}
        <Box sx={{mt:{md:"80px",xs:"40px"} }} >

        <AnimationTabs
        dataTab={tabs}
        />
</Box>
      {/* Portfolio Section */}
      <Box
      sx={{
        mt:{xl:"80px",md:"0px"},
        mb:"120px",
        display:"none"
      }}
      >
          <StyledHeading title1="Our" sx1={{fontFamily:'satoshi !important'}} title2="Recent Works"  sx2={{fontFamily:'satoshi-light !important'}} 
     styledSx={{
      display: "flex",
      justifyContent: {md: "left",sm: "center", xs: "center"},
      alignItems: "center",
      mb: "0px",
      // padding:{sm: "0px 20px", xs: "0px 20px"},
    }}
     />

        <KeenSliderPortfolio arrayToList={videoAni} />
        
        <Box
        sx={{
          mt:"0px",
          // paddingBottom: "130px",
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
        />
      </Box>
      </Box>

    
      {/* Custom Package Section */}
      <Box
        sx={{
          width: { md: "1590px", sm: '100%' },
          m: "0 auto",
          paddingTop: { md: "0px", sm: "40px" },
          mt:"70px"
        }}
      >
        <StyledHeading title1="Our Custom" title2="Packages"
          sx={{
            gap: '20px',
            marginBottom: '100px',
          }}
        />
        <Box sx={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          background: "white",
          boxShadow: '0px 31px 101.9px -12px #8080803d',
          borderRadius: '15px',
          marginBottom: '120px',
        }}>
          {CustomPackageDetail.map((item, index) => (
            <CustomPackage
              index={index}
              key={index}
              month={item?.month}
              PriceTag={item?.PriceTag}
              title={item?.title}
              desc={item?.desc}
              btnText={item?.btnText}
              btnURL={item?.btnURL}
              listItem={item?.listItem}
            />
          ))}
        </Box>
      </Box>

      {/* Design & Develop Section */}
      {/* <DesignDevelop /> */}

      
      <Box sx={{ mt:{md:"80px",xs:"40px"} ,
        padding: {lg:"0px 20px 0px 20px", md:"0px 20px 0px 20px", sm:"0px 0px 0px 0px", xs:"0px 0px 0px 0px"},
       }}
      
      >
         <LeftRightComponent
          styledSx={{
            fontSize: {xl:"40px",md:"30px", sm:"20px", xs:"20px"},
            flexDirection: "column",
            justifyContent: "start",
            textAlign: "start",
          }}
          isRow={false}
          title1={"Why Partner"}
          title2={"With Us?"}
          buttonShow={true}
          image={CmsImage}
         
          content={` `}
          content2={[
            "*600+ Edited Projects*: Delivering top-notch video solutions.",
            "*Skilled Editors*: Experienced professionals focused on quality.",
            "*Fast Turnaround*: Videos delivered within 48–72 hours.",
            "*Affordable Pricing*: Flexible packages for businesses of all sizes.",

          ]}
        />
      </Box>

      {/* FAQ Section */}
      <Box sx={{ 
        padding: '65px 0',
         margin: '0 auto',
         
         }}
         id="faqs"
         >
        <StyledHeading title1="frequently" title2="asked questions" />
        <FAQ faqData={faqData} />
      </Box>

      {/* Blog Section */}
      <Box sx={{ padding: '65px 0',  margin: '0 auto' }}
      id="blogs"
      >
        <StyledHeading title1="Our latest news &" title2="articles from the blog" sx={{ display: 'block' }} />
        <BlogSlider blogData={blogData} />
      </Box>

      {/* Second FAQ Slider */}
      <Box sx={{ padding: '120px 0',
         maxWidth: '1525px', 
         margin: '0 auto' ,
         }}>
        <StyledHeading title1="frequently" title2="asked questions" sx={{ marginBottom: '69px' }} />
        <Box
    sx={{
      overflow:{xs:"hidden", xl:"visible"},
      
      // width:"100%"
    }}
    >
          <SecondFAQSlider data={SecondFaq} />

    </Box>
      </Box>

      {/* Contact Form Section */}
      <Box sx={{ padding: {md:'120px 0', xs:'40px 0', sm:'50px 0px'},
         maxWidth: '1525px', margin: '0 auto' }}>
        <ContactForm />
      </Box>
    </>
  );
}

export default VideoEditing