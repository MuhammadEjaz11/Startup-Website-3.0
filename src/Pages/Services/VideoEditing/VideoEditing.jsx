import React from "react";

import { useEffect } from "react";

// import Box from '@mui/material'
import {
  Box,

} from "@mui/material";

import AnimationTabs from "../../../Components/AnimatioonTabs";

import StyledHeading from "../../../Components/StyledHeading";

import CustomPackage from "../../../Components/CustomPackage";
import FAQ from "../../../Components/FAQ";
import LeftRightComponent from "../../../Components/LeftRightComponent";

import ContactForm from "../../../Components/ContactForm";

import {

  CustomPackageVideo,

} from "../../../../utils";


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

const videoAni = [
  {
    imageURL: "/images/our-portfolio/video/one.mp4",
    type:"video"  ,
    title: "Video Editing 1",
    desc: "Video Editing",
    category: "Video Editing",
  },
  {
    imageURL: "/images/our-portfolio/video/two.mp4",
    type:"video"  ,

    title: "Video Editing 2",
    desc: "Video Editing",
    category: "Video Editing",
  },
  {
    imageURL: "/images/our-portfolio/video/three.mp4",
    type:"video"  ,

    title: "Video Editing 3",
    desc: "Video Editing",
    category: "Video Editing",
  },
  {
    imageURL: "/images/our-portfolio/video/four.mp4",
    title: "Video Editing 4",
    type:"video"  ,

    desc: "Video Editing",
    category: "Video Editing",
  },
    {
    imageURL: "/images/our-portfolio/video/five.mp4",
    title: "Video Editing 4",
    type:"video"  ,

    desc: "Video Editing",
    category: "Video Editing",
  },
];



const tabs = [
  {
    label: "Cartoon",
    content:
      "Cartoon animation is the most fun, attractive yet creative video type. It engages the visitors to have a look even if they are in a rush and that minute attention from the visitor is all what you need for your business.",
    imageSrc: "/images/our-portfolio/video/one.mp4",
  },
  {
    label: " Whiteboard",
    content:
      "Grab attention with fast-paced, visually appealing videos optimized for platforms like Instagram, Facebook, and TikTok.",
    imageSrc:  "/images/our-portfolio/video/five.mp4",
  },
  {
    label: "3D",
    content:
      "From presentations to training content, our clean and professional edits ensure your business stays ahead with powerful visuals.",
    imageSrc:  "/images/our-portfolio/video/two.mp4",
  },

  {
    label: "Motion Graphics",
    content:
      "Relive your best moments with seamless event highlight videos tailored to showcase important memories and details.",
    imageSrc: "/images/our-portfolio/video/four.mp4",
  },
  {
    label: "Corporate",
    content:
      "Relive your best moments with seamless event highlight videos tailored to showcase important memories and details.",
    imageSrc:"/images/our-portfolio/video/three.mp4",
  },
];

const VideoEditing = () => {
  useEffect(() => {
    const scrollTo = () => {
      scroll.scrollTo(0); // Scrolling to 100px from the top of the page.
    };
    scrollTo()
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
          content={`we don’t just edit videos—we craft visual stories that move people. From brand promos and social reels to YouTube content and cinematic edits, our expert team transforms raw footage into polished, professional, and scroll-stopping masterpieces. `}
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
 
      >
        <ContactForm />
      </Box>
    </>
  );
};

export default VideoEditing;
