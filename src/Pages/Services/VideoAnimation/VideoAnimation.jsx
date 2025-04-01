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
import SolutionFAQ from '../../../Components/SolutionFAQ';
import SectionPeragraph from '../../../Components/SectionPeragraph'
import DesignDevelop from '../../../Components/DesignDevelop'
import CustomButton from '../../../Components/Button'
import CmsImage from '../../../image/CmsImage.png'
import StyledHeading from '../../../Components/StyledHeading'
import { Carousel } from '@trendyol-js/react-carousel';
import PortfolioCard from "../../../Components/PortfolioCard";
import CustomPackage from '../../../Components/CustomPackage';
import AnimationTabs from '../../../Components/AnimatioonTabs';
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
// import LeftRightComponent from '../../../Components/LeftRightComponent';

import { Button, Element, Events, animateScroll as scroll, scrollSpy } from 'react-scroll';

import videoImg from '../../../assets/font/VideoAnimation/video2.png'

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

import BlogOne from '../../../image/videoB3.webp';
import BlogThree from '../../../image/blog33.webp';
import BlogTwo from '../../../image/appB2.webp';
import starRating from '../../../image/starRating.png';

// Video editing import
import vid1 from "../../../assets/font/VideoEditing/v1.jpg";
import vid2 from "../../../assets/font/VideoEditing/v2.jpg";
import vid3 from "../../../assets/font/VideoEditing/v3.jpg";
import vid4 from "../../../assets/font/VideoEditing/v4.jpg";
import vid5 from "../../../assets/font/VideoEditing/v5.jpg";
import vid6 from "../../../assets/font/VideoEditing/v6.jpg";
import vid7 from "../../../assets/font/VideoEditing/v7.jpg";
import vid8 from "../../../assets/font/VideoEditing/v8.jpg";
import vid9 from "../../../assets/font/VideoEditing/v9.jpg";

const faqData = [
  {
    id: 1,
    question: "How long does video editing take?",
    answer: "Timelines vary, but most edits are delivered within 2–3 business days based on complexity."
  },
  {
    id: 2,
    question: "What formats do you deliver the videos in?",
    answer: "We provide high-resolution videos in formats like MP4, MOV, and others based on your preference."
  },
  {
    id: 3,
    question: "Can you edit videos for social media platforms?",
    answer: "Yes! We specialize in videos optimized for Instagram, Facebook, TikTok, YouTube, and LinkedIn."
  },
  {
    id: 4,
    question: "Do you offer revisions?",
    answer: "Yes, we offer 2–3 free revisions to ensure the final video meets your requirements."
  },

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


const blogData = [
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


const videoAni = [
   { imageURL: vid1, title: "Video Editing 1", desc: "Video Editing", category: "Video Editing" },
     { imageURL: vid2, title: "Video Editing 2", desc: "Video Editing", category: "Video Editing" },
     { imageURL: vid3, title: "Video Editing 3", desc: "Video Editing", category: "Video Editing" },
     { imageURL: vid4, title: "Video Editing 4", desc: "Video Editing", category: "Video Editing" },
     { imageURL: vid5, title: "Video Editing 5", desc: "Video Editing", category: "Video Editing" },
     { imageURL: vid6, title: "Video Editing 6", desc: "Video Editing", category: "Video Editing" },
     { imageURL: vid7, title: "Video Editing 7", desc: "Video Editing", category: "Video Editing" },
     { imageURL: vid8, title: "Video Editing 8", desc: "Video Editing", category: "Video Editing" },
     { imageURL: vid9, title: "Video Editing 9", desc: "Video Editing", category: "Video Editing" },
]


const tabs = [
  { label: 'Cartoon', content: 'Creative and fun cartoon animations that engage and entertain your audience while conveying your message effectively. Perfect for ads, storytelling, and branding.', imageSrc: '../../src/assets/font/VideoAnimation/VideoAnimation.png' },
  { label: 'Explainer Videos', content: 'Simplify your product, service, or concept with concise and visually appealing explainer videos. Increase conversions by up to 60% with clear and engaging animations.', imageSrc: '../../src/assets/font/VideoAnimation/VideoAnimation.png' },
  { label: '3D Animation', content: 'High-quality 3D animations for product demonstrations, architectural visualizations, and interactive marketing campaigns that showcase every detail.', imageSrc: '../../src/assets/font/VideoAnimation/VideoAnimation.png' },
  { label: 'Logo Animation', content: 'Add life to your brand with animated logos. Animated logos increase brand recognition and add a professional touch to videos.', imageSrc: '../../src/assets/font/VideoAnimation/VideoAnimation.png' },

];

const VideoAnimation = () => {
  useEffect(() => {
    const scrollTo = () => {
      scroll.scrollTo(0); // Scrolling to 100px from the top of the page.
    };
    scrollTo()
  }, [])
  return (
    <>
      <Box>
      </Box>
      {/* Hero Section */}
      <Box sx={{
        mt: { md: "80px", xs: "40px" },
        padding: { lg: "0px 20px 0px 20px", md: "0px 20px 0px 20px", sm: "0px 0px 0px 0px", xs: "0px 0px 0px 0px" },
      }}

      >
        <LeftRightComponent
          styledSx={{
            fontSize: { xl: "40px", md: "30px", sm: "20px", xs: "20px" },
            flexDirection: "column",
            justifyContent: "start",
            textAlign: "start",
          }}
          isRow={false}
          title1={"Why Choose"}
          title2={" Video Animations?"}
          buttonShow={true}
          image={CmsImage}
          SecondPera={false}
          content={`Animations simplify complex messages, making them fun and engaging. With 75% higher audience retention, animated videos are a powerful tool for marketing, education, and storytelling.`}
        />
      </Box>


      {/* {Animation Tabs} */}
      <Box sx={{ mt: { md: "80px", xs: "40px" } }} >
        <AnimationTabs 
        dataTab={tabs}
        />


      </Box>

      {/* Portfolio Section */}
      <Box
        sx={{
          mt: { md: "130px", sm: '70px', xs: "50px" },
          mb: { md: "130px", sm: "70px", xs: "50px" },
        }}
      >
        <StyledHeading title1="Our" sx1={{ fontFamily: 'satoshi !important' }} title2="Recent Works" sx2={{ fontFamily: 'satoshi-light !important' }}
          styledSx={{
            display: "flex",
            justifyContent: { md: "left", sm: "center", xs: "center" },
            alignItems: "center",
            mb: "10px",
            // padding:{sm: "0px 20px", xs: "0px 20px"},
          }}
        />
        <Typography
          sx={{
            color: "#939393",
            fontSize: {
              md: "13px",
              xl: "16px",

              sm: "14px",
              xs: "14px",
            },
            lineHeight: { xl: "36px", md: "30px", xs: "22px" },
          }}
        >

          Explore our latest video animation projects that have helped businesses boost engagement and convey their message effectively.
        </Typography>

        <KeenSliderPortfolio arrayToList={videoAni} />
        <Box
          sx={{
            mt: "30px",
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

      {/* Hero Section */}
      <Box sx={{
        mt: { md: "80px", xs: "40px" },
        padding: { lg: "0px 20px 0px 20px", md: "0px 20px 0px 20px", sm: "0px 0px 0px 0px", xs: "0px 0px 0px 0px" },
      }}

      >
        <LeftRightComponent
          styledSx={{
            fontSize: { xl: "40px", md: "30px", sm: "20px", xs: "20px" },
            // flexDirection: "column",
            // justifyContent: "start",
            display: "flex",
            textAlign: "start",
          }}
          isRow={true}
          title1={"Why Partner"}
          title2={"With Us?"}
          content={` `}
          content2={[
            "*500+ Successful Projects*: Delivered engaging video animations for businesses worldwide.",
            "*Creative Expertise*: Talented animators and storytellers.",
            "*Fast Turnaround*: Quality animations delivered on time.",
            "*Affordable Packages*: Cost-effective solutions without compromise."
          ]}
          buttonShow={false}
          image={videoImg}
          sx1={{ order: 2 }}
        />
      </Box>

      {/* FAQ Section */}
      <Box sx={{
        maxWidth: '1525px',
        margin: '0 auto',
        marginBottom: { md: '130px', sm: '70px', xs: '50px' },
        mt: { md: "70px", xs: "40px" }
      }}
        id="faqs"
      >
        <StyledHeading title1="frequently" title2="asked questions" />
        <FAQ sx={{ padding: '0px' }} faqData={faqData} />
      </Box>

      {/* Blog Section */}
      <Box sx={{
        maxWidth: '1525px', margin: '0 auto',
        marginBottom: { md: '130px', sm: '70px', xs: '50px' },
      }}
        id="blogs"

      >
        <StyledHeading title1="Our latest news &" title2="articles from the blog" sx={{ display: 'block' }} />
        <BlogSlider blogData={blogData} />
      </Box>

      {/* Second FAQ Slider */}
      <Box sx={{ padding: '65px 0', maxWidth: '1525px', margin: '0 auto' }}>
        <StyledHeading title1="frequently" title2="asked questions" sx={{ marginBottom: '69px' }} />
        <Box
          sx={{
            overflow: { xs: "hidden", xl: "visible" },
          }}
        >

          <SecondFAQSlider data={SecondFaq} />
        </Box>
      </Box>

      {/* Contact Form Section */}
      <Box sx={{ padding: '65px 0', maxWidth: '1525px', margin: '0 auto' }}>
        <ContactForm />
      </Box>

    </>
  );
}

export default VideoAnimation