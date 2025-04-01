import React from 'react'
import { useState } from "react";
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { Typography } from '@mui/material'
import Layout from '../../Layouts/Layout'
// import Box from '@mui/material'
import {Box} from '@mui/material'
import SectionPeragraph from '../../../Components/SectionPeragraph'
// import Carousel from 'react-material-ui-carousel'
import StyledHeading from '../../../Components/StyledHeading'
import groupFrame from '../../../image/groupFrame.png'
import ServicesCard from '../../../Components/ServicesCard'
import FAQ from '../../../Components/FAQ'
import LeftRightComponent from '../../../Components/LeftRightComponent'
import BlogSlider from '../../../Components/OurBlog'
import RoundCircle from '../../../Components/RoundCircle'
import SecondFAQSlider from '../../../Components/SecondFAQ'
import ContactForm from '../../../Components/ContactForm'
import Technologies from "../../../Components/Technologies";
import { OurDigital } from '../../../Components/OurDigital';
import CustomButton from '../../../Components/Button';
import DigitalGroup1 from "../../../assets/font/DigitalMarketing/DigitalGroup1.png"
import DigitalGroup2 from "../../../assets/font/DigitalMarketing/DigitalGroup2.png"
import DigitalGroup3 from "../../../assets/font/DigitalMarketing/DigitalGroup3.png"
import DigitalGroup4 from "../../../assets/font/DigitalMarketing/DigitalGroup4.png"
import sol1 from "../../../assets/font/MobileApp/sol1.png";
import sol2 from "../../../assets/font/MobileApp/sol2.png";
import sol3 from "../../../assets/font/MobileApp/sol3.png";
import sol4 from "../../../assets/font/MobileApp/sol4.png";

import image17 from "../../../assets/font/DigitalMarketing/image17.png"
import image18 from "../../../assets/font/DigitalMarketing/Rectangle187.png"
import { WidthFull } from '@mui/icons-material';



import BlogOne from '../../../image/blog1.webp';
import BlogTwo from '../../../image/blog2.webp';
import BlogThree from '../../../image/blog3.webp';
import {Button, Element, Events, animateScroll as scroll, scrollSpy } from 'react-scroll';
import starRating from '../../../image/starRating.png';



import digital1 from '../../../assets/font/DigitalMarketing/d1.jpg'
import digital2 from '../../../assets/font/DigitalMarketing/d2.jpg'
import digital3 from '../../../assets/font/DigitalMarketing/d3.jpg'
import digital4 from '../../../assets/font/DigitalMarketing/d4.jpg'
import digital5 from '../../../assets/font/DigitalMarketing/d5.jpg'
import digital6 from '../../../assets/font/DigitalMarketing/d6.jpg'
import digital7 from '../../../assets/font/DigitalMarketing/d7.jpg'
import digital8 from '../../../assets/font/DigitalMarketing/d8.jpg'
import digital9 from '../../../assets/font/DigitalMarketing/d9.jpg'
import KeenSliderPortfolio from '../../../Components/KeenSliderPortfolio';


const Stationary = [
        { imageURL: digital1, title: "Stationery Design 1", desc: "Stationery Design", category: "Graphic Design" },
        { imageURL: digital2, title: "Stationery Design 2", desc: "Stationery Design", category: "Graphic Design" },
        { imageURL: digital3, title: "Stationery Design 3", desc: "Stationery Design", category: "Graphic Design" },
        { imageURL: digital4, title: "Stationery Design 4", desc: "Stationery Design", category: "Graphic Design" },
        { imageURL: digital5, title: "Stationery Design 5", desc: "Stationery Design", category: "Graphic Design" },
        { imageURL: digital6, title: "Stationery Design 6", desc: "Stationery Design", category: "Graphic Design" },
        { imageURL: digital7, title: "Stationery Design 7", desc: "Stationery Design", category: "Graphic Design" },
        { imageURL: digital8, title: "Stationery Design 8", desc: "Stationery Design", category: "Graphic Design" },
        { imageURL: digital9, title: "Stationery Design 9", desc: "Stationery Design", category: "Graphic Design" },


]


const faqData = [
  { id: 1, 
    question: "What is digital marketing, and how does it help?", 
    answer: "Digital marketing uses strategies like SEO, PPC, and social media to boost your online presence, attract high-quality leads, and enhance brand visibility." },
  { id: 2, 
    question: "How can PPC benefit my business?", 
    answer: "PPC campaigns deliver immediate traffic to your website, increasing visibility and conversions with measurable ROI. Our clients see up to a 40% improvement in conversion rates." },
  { id: 3, 
    question: "Which social media platforms do you focus on?", 
    answer: "We focus on platforms like Facebook, Instagram, LinkedIn, Twitter, and others, depending on where your audience spends the most time." },
    { id: 4, 
      question: "How do you track campaign performance?", 
      answer: "We use advanced analytics tools to monitor KPIs such as leads, clicks, impressions, and conversions, ensuring campaigns are optimized for success." },
   
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



const serviceApp = [
  {
    image: DigitalGroup1,
    title: "Research",
    desc:"Migrating your rank Google Analytics to another solution.",
  },
  {
    image: DigitalGroup2,
    title: "Customize",
    desc:"Migrating your rank Google Analytics to another solution.",

  },
  {
    image: DigitalGroup3,
    title: "Targeting",
    desc:"Migrating your rank Google Analytics to another solution.",

  },
  {
    image: DigitalGroup4,
    title: "Result",
    desc:"Migrating your rank Google Analytics to another solution.",

  },
];

const DigitalMarketing = () => {
  useEffect(()=>{
    const scrollTo = () => {
      scroll.scrollTo(0); // Scrolling to 100px from the top of the page.
    };
    scrollTo()
  },[])

   return (
    <>
   <Box sx={{
    marginTop: {md:'120px', xs:"40px", sm:'40px'},
   }}>
   <LeftRightComponent
    SecondPera={false}
    title1={'Affordable Solutions for'}
    title2={'Your Creative Needs'}
    sx1={{
      order:2,
    }}
    content={`We provide innovative and cost-effective digital marketing solutions that deliver measurable results. With 70%+ client retention, our strategies focus on maximizing your brand’s visibility while boosting conversions.`}
    
    
    image={image17}
    />
   </Box>
      <Box sx={{
      padding:'65px 0px',
      
      margin:'0 auto',
      
    }}>
      <OurDigital/>
    <LeftRightComponent
    image={image18}
    sx={{
      display:'flex',
      flexDirection: {md:'row-reverse !important', xs: 'column', sm:'column'},
    }}
    styledSx={{
      display:'flex',
      flexDirection:'row !important'
    }}
    title1="Why Choose Our Digital"
    title2="Marketing Services?"
    content={` `}
    content2={[
      "*500+ Successful Projects*: Proven expertise with a track record of success.",
      "*Tailored Strategies*: Custom solutions aligned with your business goals.",
      "*Measurable Outcomes*: Data-driven insights for measurable ROI growth.",
      "*Affordable Packages*: Flexible pricing models without compromising on results."
    ]}
    
    buttonShow={false}
    buttonStyle={{visibility:"hidden",  }}
    />
    </Box>
    <Box sx={{
      marginBottom:'65px !Important',
      maxWidth:'1526px',
      margin:'0 auto',
    }}>
    <Box sx={{
    }}>
      </Box>
        {/* <Box
    sx={{
      mt: "40px",
      display: "flex",
      justifyContent: {
        md: "center",
        xs: "center",
      },
      gap: "15px",
      flexDirection: {
        md: "row",
        xs: "column",
      },
      alignItems: "center",
      textAlign: 'center',
      position:"relative",
      border:"1px solid red"

     
    }}
  >
        <Box sx={{
      position: 'absolute',
      height: '2px', // Line thickness
      borderTop:"2px dashed #FFC800",// Line color
      width: '72%', // Line width
      top: '16%', // Aligns the line to the middle of the container
      left: 0,
      zIndex: -1, // Ensures the line is behind the cards
      backgoundColor:"red",
      // m:"auto",
      transform: 'translateX(20%)', 
      display:{md:"block", xs:"none"}

    }} />
    <ServicesCard
      styledSx={{
        flexBasis: {md:'25%', xs:'50%', sm:'50%'},
        flexShrink: "1",
        display:'flex',
        justifyContent: 'center !important',
        
      }}
      imagesx={{
        justifyContent: { xs: 'center', md: 'center !Important', },
      }}
      image={true}
      style={{
        textAlign: 'center',
        maxWidth: "300px !important",
        borderRadius: "10px",
        flexBasis: "25%",
        flexShrink: "1",
        border: 'none !Important',
      }}
      iconURL={serviceApp[0].image}
      title={serviceApp[0].title}
      desc={serviceApp[0].desc}
      btnShow={true} // Add button here as well
      btnText={"1st Step"} 
      imageStyle={{Width:"243px !important",}}
    />

    <ServicesCard
      image={true}
      styledSx={{
        flexBasis: {md:'25%', xs:'50%', sm:'50%'},
        flexShrink: "1",
        display:'flex',
        justifyContent: 'center !important',
      }}
      imagesx={{
        justifyContent: { xs: 'center', md: 'center !Important' },
      }}
      style={{
        textAlign: 'center',
        maxWidth: "300px !important",
        borderRadius: "10px",
        flexBasis: "25%",
        flexShrink: "1",
        border: 'none !Important',
      }}
      iconURL={serviceApp[1].image}
      title={serviceApp[1].title}
      desc={serviceApp[1].desc}
      btnShow={true} // Add button here as well
      btnText={"2nd Step"} // Custom button text
    />

    <ServicesCard
      styledSx={{
        flexBasis: {md:'25%', xs:'50%', sm:'50%'},
        flexShrink: "1",
        display:'flex',
        justifyContent: 'center !important',
      }}
      imagesx={{
        justifyContent: { xs: 'center', md: 'center !Important' },
      }}
      image={true}
      style={{
        textAlign: 'center',
        maxWidth: "300px !important",
        borderRadius: "10px",
        flexBasis: "25%",
        flexShrink: "1",
        border: 'none !Important',
      }}
      iconURL={serviceApp[2].image}
      title={serviceApp[2].title}
      desc={serviceApp[2].desc}
      btnShow={true} // Button for this card
      btnText={"3rd Step"} // Custom button text
    />

    <ServicesCard
      styledSx={{
        flexBasis: {md:'25%', xs:'50%', sm:'50%'},
        flexShrink: "1",
        display:'flex',
        justifyContent: 'center !important',
      }}
      imagesx={{
        justifyContent: { xs: 'center', md: 'center !Important' },
      }}
      image={true}
      style={{
        textAlign: 'center',
        maxWidth: "300px !important",
        borderRadius: "10px",
        flexBasis: "25%",
        flexShrink: "1",
        border: 'none !Important',
      }}
      iconURL={serviceApp[3].image}
      title={serviceApp[3].title}
      desc={serviceApp[3].desc}
      btnShow={true} // Final button addition
      btnText={"4th Step"} // Custom text
    />
  </Box> */}

<Box>
        <Box
          sx={{
            paddingX: {lg: "20px", md: "20px !important",sm:'0px !important', xs: "0px !important" },
            mt: "90px",
            padding: { md: "0px 0px", xs: "0px 20px" },
          }}
        >
          <StyledHeading title1="Our Proven Digital" title2="Marketing Process" />

          <Box
            sx={{
              display: "flex",
              flexDirection: {
                md: "row",
                xs: "column",
              },
              gap: "3rem",
              mt:"10px"
            }}
          >
            <Box
              sx={{
                flexBasis: {
                  md: "40%",
                  xs: "100%",
                },
                mt: "100px",
                display: "flex",
                // alignItems:"center",
                justifyContent: "center",
              }}
            >
              <RoundCircle />
            </Box>
            <Box
              sx={{
                borderLeft: "3px solid #F1F1F1",
                pl:{sm:"40px", xs:"0px"}
              }}
            >
              <ServicesCard
                desc="Our digital marketing approach is designed to deliver measurable results. We combine data-driven strategies with creative solutions to enhance your brand's visibility, engagement, and conversion."
                iconURL=""
                image={false}
                style={{
                  borderRight: "none",
                  borderTop: "1px solid #F1F1F1",
                  m: "0px 10px",
                  p: "10px 0px 30px",
                  // borderBottom:"1px solid #F1F1F1" ,
                }}
              />

              <ServicesCard
                desc="We analyze your business goals, target audience, and competitors to build a strong foundation. 75% of digital success depends on understanding your audience, and that’s where we begin."
                iconURL={sol1}
                image={true}
                title="Research & Analysis"
                style={{
                  borderRight: "none",
                  borderTop: "1px solid #F1F1F1",
                  m: "0px 10px",
                  p: "30px 0px",

                  // borderBottom:"1px solid #F1F1F1" ,
                }}
              />
              <ServicesCard
                desc="Every campaign is tailored to your objectives, ensuring relevance and alignment to maximize results while reducing cost per acquisition."
                iconURL={sol2}
                image={true}
                title="Customization"
                style={{
                  borderRight: "none",
                  borderTop: "1px solid #F1F1F1",
                  m: "0px 10px",
                  p: "30px 0px",

                  // borderBottom:"1px solid #F1F1F1" ,
                }}
              />
              <ServicesCard
                desc="Precise targeting ensures that your message reaches the right audience at the right time, improving engagement rates by up to 60%."
                iconURL={sol3}
                image={true}
                title="Targeted Strategies"
                style={{
                  borderRight: "none",
                  borderTop: "1px solid #F1F1F1",
                  m: "0px 10px",
                  p: "30px 0px",

                  // borderBottom:"1px solid #F1F1F1" ,
                }}
              />
              <ServicesCard
                desc="Clear analytics and reports help you track performance metrics like clicks, leads, and conversions. Our optimized processes have improved client ROI by up to 150%."
                iconURL={sol4}
                image={true}
                title="Measurable Results"
                style={{
                  borderRight: "none",
                  borderTop: "1px solid #F1F1F1",
                  m: "0px 10px",
                  p: "30px 0px",

                  // borderBottom:"1px solid #F1F1F1" ,
                }}
              />
            </Box>
          </Box>
        </Box>
      </Box>

    </Box>
    <Box
        sx={{
          mt: { md: "130px", sm: "65px", xs: "40px" },
          
        }}
      >
        <StyledHeading
          title1="Our"
          sx1={{ fontFamily: "satoshi !important" }}
          title2="Portfolio"
          sx2={{ fontFamily: "satoshi-light !important" }}
          styledSx={{
            display: "flex",
            justifyContent: { md: "left", sm: "center", xs: "center" },
            alignItems: "center",
            mb: "40px",
            // padding:{sm: "0px 20px", xs: "0px 20px"},
          }}
        />

        <KeenSliderPortfolio arrayToList={Stationary} />
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
    
    <Box sx={{
       padding:'65px 0px',
       
       margin:'0 auto',
    }}
    id="faqs"
    >
    < StyledHeading title1='frequently' title2=' asked questions'
    styledSx={
      {
        justifyContent: {md:"left", xs:"center"},
        color: "#1E1E1E",
        textAlign: "center",
      }} />
    <FAQ faqData={faqData} />
    </Box>
    <Box sx={{
       padding:'65px 0px',
      
       margin:'0 auto',
    }}
    id="blogs"
    >
    < StyledHeading title1='Our latest news &' title2='articles from the blog' sx={{
      display:'block'
    }} 
    styledSx={
      {
        justifyContent: {md:"left", xs:"center"},
        color: "#1E1E1E",
        textAlign:  {xs:"center", sm:"center", md:"left"},
      }}
    />
    <BlogSlider blogData={blogData} />
    </Box>
    <Box sx={{
       padding:'65px 0px',
       
       margin:'0 auto',
    }}>
    < StyledHeading title1='frequently' title2=' asked questions' sx={{
      marginBottom:'69px',
    }}
    styledSx={
      {
        justifyContent: {md:"left", xs:"center"},
        color: "#1E1E1E",
        textAlign: "center",

      }}
    />
    <Box
    sx={{
      overflow:{xs:"hidden", xl:"visible"},
      
      // width:"100%"
    }}
    >
          <SecondFAQSlider data={SecondFaq} />

    </Box>
    </Box>
    <Box sx={{
       padding:'65px 0px',
       maxWidth:'1525px',
       margin:'0 auto',
    }}>
    <ContactForm/>
    </Box>
    
   
    
    </>
  )
}

export default DigitalMarketing