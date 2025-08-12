import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import Layout from "../../Layouts/Layout";
// import Box from '@mui/material'
import {
  Box,
  Typography,
  Accordion,
  AccordionDetails,
  AccordionSummary,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import AnimationTabs from "../../../Components/AnimatioonTabs";
import SolutionFAQ from "../../../Components/SolutionFAQ";
import SectionPeragraph from "../../../Components/SectionPeragraph";
import DesignDevelop from "../../../Components/DesignDevelop";
import CustomButton from "../../../Components/Button";
import CmsImage from "../../../image/CmsImage.png";
import StyledHeading from "../../../Components/StyledHeading";
import { Carousel } from "@trendyol-js/react-carousel";
import PortfolioCard from "../../../Components/PortfolioCard";
import CustomPackage from "../../../Components/CustomPackage";
import FAQ from "../../../Components/FAQ";
import LeftRightComponent from "../../../Components/LeftRightComponent";
import laptopImage from "../../../assets/font/MobileApp/appDevImage.png";
import BlogSlider from "../../../Components/OurBlog";
import RoundCircle from "../../../Components/RoundCircle";
import SecondFAQSlider from "../../../Components/SecondFAQ";
import ContactForm from "../../../Components/ContactForm";
import Technologies from "../../../Components/Technologies";
import TechnologyCarousel from "../../../Components/Carousels/TechnologyCarousel/TechnologyCarousel";
import Questions from "../../../Components/Questions";

import vid2 from "../../../assets/font/VideoEditing/vid2.webp";
import vid3 from "../../../assets/font/VideoEditing/vid3.webp";

import {
  CustomPackageDetail,
  CustomPackageDigitizing,
  CustomPackageVideo,
  PortfoliosList,
  services1,
  services2,
  technologiesCard,
  TestimoialCard,
  webDevQuestions,
} from "../../../../utils";
import SectionHeading from "../../../Components/SectionHeading";
import SectionBox from "../../../Components/SectionBox";
import KeenSliderPortfolio from "../../../Components/KeenSliderPortfolio";

import BlogOne from "../../../image/videoB1.webp";
import BlogTwo from "../../../image/videoB2.webp";
import BlogThree from "../../../image/videoB3.webp";
import starRating from "../../../image/starRating.png";

import {
  Button,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
} from "react-scroll";

const faqData = [
  {
    id: 1,
    question: "What types of videos do you edit?",
    answer:
      "We edit a wide range of videos including social media content, YouTube videos, corporate videos, brand promos, vlogs, product showcases, wedding videos, and more. Just tell us your goal—we'll take care of the rest.",
  },
  {
    id: 2,
    question: "What's your typical turnaround time?",
    answer:
      "Turnaround time depends on the complexity and length of the video, but typically ranges from 2 to 5 days. For urgent edits, we also offer express delivery options.",
  },
  {
    id: 3,
    question: "What formats do you deliver the final video in?",
    answer:
      "We can deliver in all major formats including MP4, MOV, AVI, or any custom format you need for web, social media, or broadcast use.",
  },
  {
    id: 4,
    question: "Can you work with footage shot on phones or low-resolution cameras?",
    answer:
      "Absolutely! We can enhance quality to a certain extent, stabilize shaky footage, and still create a polished, engaging final product.",
  },
  {
    id: 5,
    question: "Do you offer revisions?",
    answer:
      "Yes! We include 1–2 free revisions with every order to make sure you're completely happy with the final result.",
  },
  {
    id: 6,
    question: "Do I need to provide music or voiceovers?",
    answer:
      "Not necessarily. We can work with what you provide, or source royalty-free music, stock footage, and voiceovers as needed.",
  },
  {
    id: 7,
    question: "What if I'm not sure how I want the video to look?",
    answer:
      "No worries—we'll guide you through it. Share your footage and ideas, and we'll create a concept and editing style that aligns with your vision and brand.",
  },
];
const SecondFaq = [
  {
    id: 1,
    title: "Experience & Excellence",
    testimonialText:
      "Mozack combines years of experience, cutting-edge technology, and a client-centric approach to deliver exceptional solutions tailored to your needs.",
    starRating: starRating,
    videoId: "mZ5hnNRBFsc", // A valid video ID
  },
  {
    id: 2,
    title: "Quality & Dedication",
    testimonialText:
      "Our team follows a rigorous testing process, uses industry-leading standards, and prioritizes client feedback to deliver high-quality, scalable solutions.",
    starRating: starRating,
    videoId: "mZ5hnNRBFsc", // Corrected video ID from the URL
  },
  {
    id: 3,
    title: "Innovation & Creativity",
    testimonialText:
      " Mozack provides a range of services, including Mobile App Development, Custom Software Development, Web Design, and Digital Marketing—all designed to drive innovation and results.",
    starRating: starRating,
    videoId: "mZ5hnNRBFsc", // Same video ID as example
  },
];

const videoAni = [
  {
    imageURL: vid3,
    title: "Video Editing 1",
    desc: "Video Editing",
    category: "Video Editing",
  },
  {
    imageURL: vid2,
    title: "Video Editing 2",
    desc: "Video Editing",
    category: "Video Editing",
  },
  {
    imageURL: vid3,
    title: "Video Editing 3",
    desc: "Video Editing",
    category: "Video Editing",
  },
  {
    imageURL: vid2,
    title: "Video Editing 4",
    desc: "Video Editing",
    category: "Video Editing",
  },
];

const blogData = [
  {
    id: 1,
    title: "How Agecis Puts Your Audience First",
    description:
      "Lorem ipsum is simply dummy text of the printing and typesetting industry...",
    image: BlogOne,
    author: "Admin",
    date: "April 20, 2024",
  },
  {
    id: 2,
    title: "How Agecis Puts Your Audience First",
    description:
      "Lorem ipsum is simply dummy text of the printing and typesetting industry...",
    image: BlogTwo,
    author: "Admin",
    date: "April 20, 2024",
  },
  {
    id: 3,
    title: "How Agecis Puts Your Audience First",
    description:
      "Lorem ipsum is simply dummy text of the printing and typesetting industry...",
    image: BlogThree,
    author: "Admin",
    date: "April 20, 2024",
  },
  {
    id: 4,
    title: "How Agecis Puts Your Audience First",
    description:
      "Lorem ipsum is simply dummy text of the printing and typesetting industry...",
    image: BlogTwo,
    author: "Admin",
    date: "April 20, 2024",
  },
];

const tabs = [
  {
    label: "Cartoon",
    content:
      "Cartoon animation is the most fun, attractive yet creative video type. It engages the visitors to have a look even if they are in a rush and that minute attention from the visitor is all what you need for your business.",
    imageSrc: "/images/banner/cartoon.png",
  },
  {
    label: " Whiteboard",
    content:
      "Grab attention with fast-paced, visually appealing videos optimized for platforms like Instagram, Facebook, and TikTok.",
    imageSrc: "../../src/assets/font/VideoAnimation/VideoAnimation.png",
  },
  {
    label: "3D",
    content:
      "From presentations to training content, our clean and professional edits ensure your business stays ahead with powerful visuals.",
    imageSrc: "../../src/assets/font/VideoAnimation/VideoAnimation.png",
  },
  {
    label: "Screen-Cast",
    content:
      "Relive your best moments with seamless event highlight videos tailored to showcase important memories and details.",
    imageSrc: "../../src/assets/font/VideoAnimation/VideoAnimation.png",
  },
  {
    label: "Typography",
    content:
      "Relive your best moments with seamless event highlight videos tailored to showcase important memories and details.",
    imageSrc: "../../src/assets/font/VideoAnimation/VideoAnimation.png",
  },
  {
    label: "Motion Graphics",
    content:
      "Relive your best moments with seamless event highlight videos tailored to showcase important memories and details.",
    imageSrc: "../../src/assets/font/VideoAnimation/VideoAnimation.png",
  },
  {
    label: "Corporate",
    content:
      "Relive your best moments with seamless event highlight videos tailored to showcase important memories and details.",
    imageSrc: "../../src/assets/font/VideoAnimation/VideoAnimation.png",
  },
];

const VideoEditing = () => {
  useEffect(() => {
    const scrollTo = () => {
      scroll.scrollTo(0); // Scrolling to 100px from the top of the page.
    };
    // scrollTo()
  }, []);
  return (
    <>
      {/* Hero Section */}
      <Box
        sx={{
          mt: { md: "80px", xs: "40px" },
          padding: {
            lg: "0px 20px 0px 20px",
            md: "0px 20px 0px 20px",
            sm: "0px 0px 0px 0px",
            xs: "0px 0px 0px 0px",
          },
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
          title1={"Best Video Editing For"}
          title2={"As Low As $400?"}
          buttonShow={true}
          image={"/images/banner/editing.png"}
          SecondPera={false}
          content={`Get top-tier video editing without breaking the bank! Our expert editors craft cinematic visuals, smooth transitions, color correction, and engaging storytelling—all tailored to your brand or project. Whether it’s for YouTube, social media, ads, or business promos, we deliver stunning results starting at just $400. Quality meets affordability—let’s bring your vision to life!`}
        />
      </Box>

      {/* {ANimation Tabs} */}
      <Box sx={{ mt: { md: "80px", xs: "40px" } }}>
        <AnimationTabs dataTab={tabs} />
      </Box>
      {/* Portfolio Section */}
      <Box
        sx={{
          mt: { xl: "80px", md: "0px" },
          mb: "120px",
          display: "none",
        }}
      >
        <StyledHeading
          title1="Our"
          sx1={{ fontFamily: "satoshi !important" }}
          title2="Recent Works"
          sx2={{ fontFamily: "satoshi-light !important" }}
          styledSx={{
            display: "flex",
            justifyContent: { md: "left", sm: "center", xs: "center" },
            alignItems: "center",
            mb: "0px",
            // padding:{sm: "0px 20px", xs: "0px 20px"},
          }}
        />

        <KeenSliderPortfolio arrayToList={videoAni} />

        <Box
          sx={{
            mt: "0px",
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
      <Box mt={"100px"}>
        <StyledHeading
          title1="Our Custom"
          title2="Packages"
          sx={{
            gap: "20px",
            marginBottom: "100px",
          }}
        />
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            background: "white",
            // boxShadow: "0px 31px 101.9px -12px #8080803d",
            boxShadow: "0px 31px 101.9px -12px #00000014",
            justifyContent: "space-around",
            borderRadius: "15px",
            marginBottom: "120px",
            width: "100%",
            backgroundColor: "#fff",
            // border:"1px solid red",
          }}
        >
          {CustomPackageVideo.map((item, index) => (
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

      <Box
        sx={{
          mt: { md: "80px", xs: "40px" },
          padding: {
            lg: "0px 20px 0px 20px",
            md: "0px 20px 0px 20px",
            sm: "0px 0px 0px 0px",
            xs: "0px 0px 0px 0px",
          },
        }}
      >
        <LeftRightComponent
          styledSx={{
            fontSize: { xl: "40px", md: "30px", sm: "20px", xs: "20px" },
            flexDirection: "column",
            justifyContent: "start",
            textAlign: "start",
          }}
          sx={{
            flexDirection:"row-reverse"
          }}
          isRow={false}
          title1={"Why Partner"}
          title2={"With Us?"}
          buttonShow={true}
          image={"/images/banner/camera.png"}
          content={`At Patch Makers, we don’t just edit videos—we craft visual stories that move people. From brand promos and social reels to YouTube content and cinematic edits, our expert team transforms raw footage into polished, professional, and scroll-stopping masterpieces. `}
          content2={"We blend creativity with precision—seamless transitions, sharp cuts, dynamic effects, music syncing, and color grading—to make every second count. Whether you're launching a product, telling your story, or building your brand, we bring your vision to life, frame by frame."}
          content3={"Your content deserves to stand out—let's make it unforgettable."}
      
        />
      </Box>

      {/* FAQ Section */}
      <Box
        sx={{
          padding: "65px 0",
          margin: "0 auto",
        }}
        id="faqs"
      >
        <StyledHeading title1="frequently" title2="asked questions" />
        <FAQ faqData={faqData} />
      </Box>




      {/* Contact Form Section */}
      <Box
        sx={{
          padding: { md: "120px 0", xs: "40px 0", sm: "50px 0px" },
          maxWidth: "1525px",
          margin: "0 auto",
        }}
      >
        <ContactForm />
      </Box>
    </>
  );
};

export default VideoEditing;
