import React, {useEffect} from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { Typography } from "@mui/material";
import Layout from "../../Layouts/Layout";
// import Box from '@mui/material'
import { Box } from "@mui/material";
import SectionPeragraph from "../../../Components/SectionPeragraph";
import CustomButton from "../../../Components/Button";
import image5 from "../../../image/image5.png";
import image6 from "../../../image/image6.png";
import image7 from "../../../image/image7.png";
import image8 from "../../../image/image8.png";
import GroupImage from "../../../image/GroupImage.png";
import SectionHeading from "../../../Components/SectionHeading";
import StyledHeading from "../../../Components/StyledHeading";
import frames from "../../../image/Frame.png";
import ServicesCard from "../../../Components/ServicesCard";
import { BorderBottom } from "@mui/icons-material";
import DesignDevelop from "../../../Components/DesignDevelop";
import FAQ from "../../../Components/FAQ";
import LeftRightComponent from "../../../Components/LeftRightComponent";
import Drive from "../../../image/Drive.png";
import laptopImage from "../../../assets/font/MobileApp/appDevImage.png";
import BlogSlider from "../../../Components/OurBlog";
import SecondFAQSlider from "../../../Components/SecondFAQ";
import ContactForm from "../../../Components/ContactForm";

import BlogOne from '../../../image/videoB3.webp';
import BlogThree from '../../../image/blog33.webp';
import BlogTwo from '../../../image/appB2.webp';
import starRating from '../../../image/starRating.png';



import {Button, Element, Events, animateScroll as scroll, scrollSpy } from 'react-scroll';



const faqData = [
  {
    id: 1,
    question: "How long does SEO take to show results?",
    answer: "SEO is a long-term strategy, but significant improvements are typically seen within 3–6 months, depending on your business and goals."
  },
  {
    id: 2,
    question: "Can SEO help my local business?",
    answer: "Absolutely! Local SEO strategies, like optimizing for “near me” searches, can help drive local customers to your business."
  },
  {
    id: 3,
    question: "What’s included in your SEO services?",
    answer: "Our services include keyword research, on-page and off-page SEO, technical optimization, and performance tracking."
  },
  {
    id: 4,
    question: "How do you measure SEO success?",
    answer: "We track metrics like keyword rankings, organic traffic, bounce rates, and conversions to evaluate the effectiveness of your campaign."
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
    image: image7,
    title: "On-Page SEO",
    desc: "We optimize your website’s structure, meta tags, keywords, and content to improve search rankings and enhance the user experience.",
  },
  {
    image: image7,
    title: "Off-Page SEO",
    desc: "Our link-building strategies and outreach campaigns help build credibility for your website, improving your domain authority and driving referral traffic.",
  },
  {
    image: image8,
    title: "Technical SEO",
    desc: "Ensure your website is fast, secure, and mobile-friendly with our technical SEO expertise. Websites optimized for speed see a 53% reduction in bounce rates.",
  },
  {
    image: image5,
    title: "Local SEO",
    desc: "Get discovered by customers near you with local SEO strategies, including Google My Business optimization and localized content creation.",
  },
];

const SearchEngine = () => {

  useEffect(()=>{
    const scrollTo = () => {
      scroll.scrollTo(0); // Scrolling to 100px from the top of the page.
    };
    // scrollTo()
  },[])
  const location = useLocation();
  return (
    <>
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
          title1={"Why SEO Matters for"}
          title2={" Your Business"}
          buttonShow={true}
          image={frames }
          SecondPera={false}
          content={`Did you know that 68% of online experiences begin with a search engine? Ranking on the first page of Google can drive 10x more traffic to your website compared to lower-ranking pages. With Mozack, we ensure your business stays ahead with SEO strategies that deliver measurable results.`}
        />
      </Box>
      <Box
        sx={{
          margin: {md:"120px 0", sm:"60px 0", xs:"40px 0"},
          maxWidth: "1526px",
        }}
      >
        <Box sx={{}}>
          <StyledHeading
            title2="marketing services"
            title1="best-in-class SEO"
            sx1={{ order: "0", texttAlign: "center" }}
            sx={{ justifyContent: "center", order: "2", marginBottom: "60px" }}
          />
        </Box>
        <Box
          sx={{
            mt: "40px",
            display: "flex",
            justifyContent: {
              md: "space-between",
              xs: "center",
            },
            gap: "15px",
            flexDirection: {
              md: "row",
              xs: "column",
            },
            alignItems: "center",
          }}
        >
          <ServicesCard
            image={true}
            style={{
              border: "1px solid #E9E9E9",
              maxWidth: "300px !important",
              borderRadius: "10px",
              flexBasis: "25%",
              flexShrink: "1",
              marginTop: {
                md: "-50px",
                xs: "0px",
              },
            }}
            iconURL={serviceApp[0].image}
            title={serviceApp[0].title}
            desc={serviceApp[0].desc}
          />
          <ServicesCard
            image={true}
            style={{
              border: "1px solid #E9E9E9",
              maxWidth: "300px !important",
              borderRadius: "10px",
              flexBasis: "25%",
              flexShrink: "1",
              width: "85%",
            }}
            iconURL={serviceApp[1].image}
            title={serviceApp[1].title}
            desc={serviceApp[1].desc}
          />
          <ServicesCard
            image={true}
            style={{
              border: "1px solid #E9E9E9",
              maxWidth: "300px !important",
              borderRadius: "10px",
              flexBasis: "25%",
              flexShrink: "1",
              width: "85%",
              marginTop: {
                md: "-50px",
                xs: "0px",
              },
            }}
            iconURL={serviceApp[2].image}
            title={serviceApp[2].title}
            desc={serviceApp[2].desc}
          />
          <ServicesCard
            image={true}
            style={{
              border: "1px solid #E9E9E9",
              maxWidth: "300px !important",
              borderRadius: "10px",
              flexBasis: "25%",
              flexShrink: "1",
              width: "85%",
            }}
            iconURL={serviceApp[3].image}
            title={serviceApp[3].title}
            desc={serviceApp[2].desc}
          />
        </Box>
      </Box>
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
          title1={"Get a Digital Marketing Plan that"}
          title2={"Drives Revenue."}
          buttonShow={true}
          image={Drive }
          SecondPera={false}
          sx1={{order:2, flexBasis:"60%"}}
          sx2={{flexBasis:"30%"}}
          content={`Our SEO strategies don’t just focus on rankings—they are designed to increase your ROI. Businesses leveraging our SEO services report an average growth of 70% in organic traffic within the first six months.`}
        />
      </Box>
      <Box
        sx={{
          margin: {md:"120px 0", sm:"60px 0", xs:"40px 0"},
          maxWidth: "1525px",
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
          title1={"Get a Digital Marketing Plan that"}
          title2={"Drives Revenue."}
          buttonShow={true}
          image={GroupImage }
          SecondPera={false}
          sx1={{order:1, flexBasis:"50%"}}
          sx2={{flexBasis:"50%"}}
          sx={{flexDirection:"row-reverse"}}
        />
      </Box>
      <Box
        sx={{
         margin: {md:"120px 0", sm:"60px 0", xs:"40px 0"},
        }}
      >
         <LeftRightComponent
    image={laptopImage}
    sx={{
      display:'flex',
      flexDirection: {md:'row-reverse', sm:'column', xs:'column'},
    }}
    styledSx={{
      flexDirection:'row'
    }}
    title1="Why Choose "
    title2={"Mozack for SEO?"}
    content={` `}
    content2={[
      "*600+ Optimized Websites*: Proven expertise across industries.",
      "*ROI-Driven Strategies*: SEO campaigns designed for business growth.",
      "*55+ SEO Specialists*: A team dedicated to achieving your goals.",
      "*Fast Results*: Clients see improvements in rankings within *90 days*."

    ]}
    buttonShow={false}
    sx1={{order:1}}

    
    

    
    />
      </Box>

      <DesignDevelop
      title={`Get a Digital Marketing Plan That Drives Revenue`}
      content={`Our SEO strategies don’t just focus on rankings—they are designed to increase your ROI. Businesses leveraging our SEO services report an average growth of 70% in organic traffic within the first six months.`}
      />
      <Box
        sx={{
          margin: {md:"130px 0", sm:"60px 0", xs:"40px 0"},
        }}
        id="faqs"
>
        <StyledHeading title1="frequently" title2=" asked questions" />
        <FAQ faqData={faqData} />
      </Box>
      <Box
        sx={{
          padding: "65px 0px",

          margin: "0 auto",
        }}
        id="blogs"

      >
        <StyledHeading
          title1="Our latest news &"
          title2="articles from the blog"
          sx={{
            display: "block",
          }}
        />
        <BlogSlider blogData={blogData} />
      </Box>
      <Box
        sx={{
          padding: "65px 0px",

          margin: "0 auto",
        }}
      >
        <StyledHeading
          title1="frequently"
          title2=" asked questions"
          sx={{
            marginBottom: "69px",
          }}
        />
        <Box
          sx={{
            overflow: { xs: "hidden", xl: "visible" },

            // width:"100%"
          }}
        >
          <SecondFAQSlider data={SecondFaq} />
        </Box>
      </Box>
      <Box
        sx={{
          margin: {md:"130px 0", sm:"60px 0", xs:"40px 0"},
        }}
      >
        <ContactForm />
      </Box>
    </>
  );
};

export default SearchEngine;
