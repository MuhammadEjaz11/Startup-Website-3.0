import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { Typography } from "@mui/material";
import Layout from "../../Layouts/Layout";
// import Box from '@mui/material'
import { Box } from "@mui/material";
import SectionPeragraph from "../../../Components/SectionPeragraph";
// import Carousel from 'react-material-ui-carousel'
import StyledHeading from "../../../Components/StyledHeading";
import groupFrame from "../../../image/groupFrame.png";
import ServicesCard from "../../../Components/ServicesCard";
import FAQ from "../../../Components/FAQ";
import LeftRightComponent from "../../../Components/LeftRightComponent";
import BlogSlider from "../../../Components/OurBlog";
import RoundCircle from "../../../Components/RoundCircle";
import SecondFAQSlider from "../../../Components/SecondFAQ";
import ContactForm from "../../../Components/ContactForm";
import Technologies from "../../../Components/Technologies";
import { OurDigital } from "../../../Components/OurDigital";
import CustomButton from "../../../Components/Button";
import DigitalGroup1 from "../../../assets/font/DigitalMarketing/DigitalGroup1.png";
import DigitalGroup2 from "../../../assets/font/DigitalMarketing/DigitalGroup2.png";
import DigitalGroup3 from "../../../assets/font/DigitalMarketing/DigitalGroup3.png";
import DigitalGroup4 from "../../../assets/font/DigitalMarketing/DigitalGroup4.png";
import sol1 from "../../../assets/font/MobileApp/sol1.png";
import sol2 from "../../../assets/font/MobileApp/sol2.png";
import sol3 from "../../../assets/font/MobileApp/sol3.png";
import sol4 from "../../../assets/font/MobileApp/sol4.png";

import image17 from "../../../assets/font/DigitalMarketing/image17.png";
import image18 from "../../../assets/font/DigitalMarketing/Rectangle187.png";
import { WidthFull } from "@mui/icons-material";

import BlogOne from "../../../image/blog1.webp";
import BlogTwo from "../../../image/blog2.webp";
import BlogThree from "../../../image/blog3.webp";
import {
  Button,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
} from "react-scroll";
import starRating from "../../../image/starRating.png";

import digital1 from "../../../assets/font/DigitalMarketing/d1.jpg";
import digital2 from "../../../assets/font/DigitalMarketing/d2.jpg";
import digital3 from "../../../assets/font/DigitalMarketing/d3.jpg";
import digital4 from "../../../assets/font/DigitalMarketing/d4.jpg";
import digital5 from "../../../assets/font/DigitalMarketing/d5.jpg";
import digital6 from "../../../assets/font/DigitalMarketing/d6.jpg";
import digital7 from "../../../assets/font/DigitalMarketing/d7.jpg";
import digital8 from "../../../assets/font/DigitalMarketing/d8.jpg";
import digital9 from "../../../assets/font/DigitalMarketing/d9.jpg";
import KeenSliderPortfolio from "../../../Components/KeenSliderPortfolio";

const Stationary = [
  {
    imageURL: digital1,
    title: "Stationery Design 1",
    desc: "Stationery Design",
    category: "Graphic Design",
  },
  {
    imageURL: digital2,
    title: "Stationery Design 2",
    desc: "Stationery Design",
    category: "Graphic Design",
  },
  {
    imageURL: digital3,
    title: "Stationery Design 3",
    desc: "Stationery Design",
    category: "Graphic Design",
  },
  {
    imageURL: digital4,
    title: "Stationery Design 4",
    desc: "Stationery Design",
    category: "Graphic Design",
  },
  {
    imageURL: digital5,
    title: "Stationery Design 5",
    desc: "Stationery Design",
    category: "Graphic Design",
  },
  {
    imageURL: digital6,
    title: "Stationery Design 6",
    desc: "Stationery Design",
    category: "Graphic Design",
  },
  {
    imageURL: digital7,
    title: "Stationery Design 7",
    desc: "Stationery Design",
    category: "Graphic Design",
  },
  {
    imageURL: digital8,
    title: "Stationery Design 8",
    desc: "Stationery Design",
    category: "Graphic Design",
  },
  {
    imageURL: digital9,
    title: "Stationery Design 9",
    desc: "Stationery Design",
    category: "Graphic Design",
  },
];

const faqData = [
  {
    id: 1,
    question: "What is digital marketing, and how does it help?",
    answer:
      "Digital marketing uses strategies like SEO, PPC, and social media to boost your online presence, attract high-quality leads, and enhance brand visibility.",
  },
  {
    id: 2,
    question: "How can PPC benefit my business?",
    answer:
      "PPC campaigns deliver immediate traffic to your website, increasing visibility and conversions with measurable ROI. Our clients see up to a 40% improvement in conversion rates.",
  },
  {
    id: 3,
    question: "Which social media platforms do you focus on?",
    answer:
      "We focus on platforms like Facebook, Instagram, LinkedIn, Twitter, and others, depending on where your audience spends the most time.",
  },
  {
    id: 4,
    question: "How do you track campaign performance?",
    answer:
      "We use advanced analytics tools to monitor KPIs such as leads, clicks, impressions, and conversions, ensuring campaigns are optimized for success.",
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

const serviceApp = [
  {
    title: "Embroidered Patches",
    description:
      "Classic and textured, embroidered patches use thread to create bold, raised designs—perfect for uniforms, jackets, and hats.",
    image: "/images/our product/embridery.png",
    image2: "/images/our product/embridery2.png",
  },
  {
    title: "Chenille Patches",
    description:
      "Fluffy and bold, chenille patches have a varsity-style look—great for letterman jackets, team wear, and retro fashion.",
    image: "/images/our product/chenill.png",
  },
  {
    title: "Sublimation Patches",
    description:
      "These patches offer vibrant, full-color prints with photographic quality—ideal for detailed artwork and gradient designs.",
    image: "/images/our product/sublimation.png",
  },
  {
    title: "PVC Patches",
    description:
      "Made from durable, flexible rubber, PVC patches are waterproof, long-lasting, and perfect for showcasing fun, colorful branding.",
    image: "/images/our product/pvc.png",
  },
  {
    title: "Leather Patches",
    description:
      "Sleek and durable, leather patches add a premium, rustic touch to apparel and accessories—perfect for jeans, jackets, hats, and bags. Ideal for brands that want a bold, timeless look.",
    image: "/images/our product/leather.png",
  },
  {
    title: "PVC Keychains",
    description:
      "Made from durable, flexible rubber, PVC keychains are waterproof, long-lasting, and perfect for showcasing fun, colorful branding.",
    image: "/images/our product/keychain.png",
  },
  {
    title: "Woven Patches",
    description:
      "Woven patches are great for fine details and small text, offering a flat and clean finish—perfect for intricate designs.",
    image: "/images/our product/woven.png",
  },
  {
    title: "DTF Transfer",
    description:
      "Direct-to-Film (DTF) transfers are heat-applied prints that work on various fabrics, offering vibrant, flexible, and long-lasting designs.",
    image: "/images/our product/dtf.png",
    image2: "/images/our product/dtf2.png",
  },
];

const CustomPatches = () => {
  useEffect(() => {
    const scrollTo = () => {
      scroll.scrollTo(0); // Scrolling to 100px from the top of the page.
    };
    scrollTo();
  }, []);

  return (
    <>
      <StyledHeading
        title2="Our"
        title1="Products"
        sx1={{ order: "2" }}
        styledSx={{
          display: "flex",
          marginTop:"100px",
          justifyContent: { md: "left", sm: "center", xs: "center" },
          alignItems: "center",
        }}
      />
      <Box
        sx={{
          mt: "40px",
          display: "grid",
          gridTemplateColumns: {
            md: "repeat(4, 1fr)",
            sm: "repeat(2, 1fr)",
            xs: "1fr",
          },
          gap: "20px",
          maxWidth: "100%",
        }}
      >
        {serviceApp.map((item, index) => {
          return (
            <ServicesCard
              key={index}
              style={{
                boxShadow: "0px 31px 62.2px -12px rgba(0, 0, 0, 0.08)",
                maxWidth: "100%",
                borderRadius: "15px",
                marginTop: {
                  md: index < 4 ? "-50px" : "0px",
                  xs: "0px",
                },
                img: {
                  width: "100%",
                },
                p: { xs: "15px", md: "20px" },
              }}
              iconURL={item.image}
              title={item.title}
              desc={item.description}
              image={true}
            />
          );
        })}
      </Box>



      <Box
        sx={{
          marginBottom: "65px !Important",
          maxWidth: "1526px",
          margin: "0 auto",
        }}
      >
        <Box sx={{}}></Box>

        <Box>
          <Box
            sx={{
              paddingX: {
                lg: "20px",
                md: "20px !important",
                sm: "0px !important",
                xs: "0px !important",
              },
              mt: "90px",
              padding: { md: "0px 0px", xs: "0px 20px" },
            }}
          >
            <StyledHeading title1="Our Manufacturing" title2="Process" />

            <Box
              sx={{
                display: "flex",
                flexDirection: {
                  md: "row",
                  xs: "column",
                },
                gap: "3rem",
                mt: "10px",
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
                  pl: { sm: "40px", xs: "0px" },
                }}
              >
                <ServicesCard
                  desc="From Concept to Creation, At Patch Makers, every patch starts with your vision and ends with a high-quality, custom-made product. Here's how we bring your idea to life:"
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
                  iconURL={"/images/work-process/vector/design.svg"}
                  image={true}
                  title="Concept & Design"
                  style={{
                    borderRight: "none",
                    borderTop: "1px solid #F1F1F1",
                    m: "0px 10px",
                    p: "30px 0px",

                    // borderBottom:"1px solid #F1F1F1" ,
                  }}
                />
                <ServicesCard
                  desc="Once the design is ready, we send you a digital mockup for approval. We make any necessary changes until you're fully satisfied before moving forward."
                  iconURL={"/images/work-process/vector/approval.svg"}
                  image={true}
                  title="Digital Proof & Approval"
                  style={{
                    borderRight: "none",
                    borderTop: "1px solid #F1F1F1",
                    m: "0px 10px",
                    p: "30px 0px",

                    // borderBottom:"1px solid #F1F1F1" ,
                  }}
                />
                <ServicesCard
                  desc="Based on the patch type (embroidered, PVC, sublimation, leather, chenille), we carefully select the best materials to ensure durability, texture, and vibrant color."
                  iconURL={"/images/work-process/vector/delivery.svg"}
                  image={true}
                  title="Material Selection"
                  style={{
                    borderRight: "none",
                    borderTop: "1px solid #F1F1F1",
                    m: "0px 10px",
                    p: "30px 0px",

                    // borderBottom:"1px solid #F1F1F1" ,
                  }}
                />
                <ServicesCard
                  desc="Our advanced machines and expert technicians begin the production process, stitching or molding your design with high attention to detail and quality control."
                  iconURL={"/images/work-process/vector/delivery.svg"}
                  image={true}
                  title="Precision Production"
                  style={{
                    borderRight: "none",
                    borderTop: "1px solid #F1F1F1",
                    m: "0px 10px",
                    p: "30px 0px",

                    // borderBottom:"1px solid #F1F1F1" ,
                  }}
                />

                <ServicesCard
                  desc="Each patch undergoes a thorough inspection to ensure color accuracy, stitching quality, and correct dimensions before being packaged."
                  iconURL={"/images/work-process/vector/delivery.svg"}
                  image={true}
                  title="Quality Check"
                  style={{
                    borderRight: "none",
                    borderTop: "1px solid #F1F1F1",
                    m: "0px 10px",
                    p: "30px 0px",
                  }}
                />

                <ServicesCard
                  desc="We pack your patches securely and ship them promptly to your doorstep—worldwide—ensuring you get them on time and in perfect condition."
                  iconURL={"/images/work-process/vector/delivery.svg"}
                  image={true}
                  title="Fast & Safe Delivery"
                  style={{
                    borderRight: "none",
                    borderTop: "1px solid #F1F1F1",
                    m: "0px 10px",
                    p: "30px 0px",
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
      <Box
        sx={{
          marginTop: { md: "120px", xs: "40px", sm: "40px" },
        }}
      >
        <LeftRightComponent
          sx1={{
            gap: "10px",
          }}
          styledSx={{
            fontSize: { xl: "40px", md: "30px", sm: "20px", xs: "20px" },
            flexDirection: "column",
            justifyContent: "start",
            textAlign: "start",
          }}
          titleSpan2={"Patch Makers"}
          isRow={false}
          title1={"About"}
          title2={""}
          buttonShow={false}
          image={"/images/about-digitzing.png"}
          content={`AAt Patch Makers, we have been providing high-quality digitizing services for 10 years. Our team of skilled professionals is dedicated to transforming your artwork into the perfect design for embroidery machines. We understand the importance of precision and detail, ensuring that every stitch is flawlessly executed to bring your vision to life. `}
          content3={`EWe use the latest software and techniques to ensure the highest quality output, whether you need a simple logo or a complex, intricate design. Our expertise and commitment to excellence have earned us a reputation for being one of the best in the industry. No matter the complexity of your project, you can trust Patch Makers to deliver a finished product that exceeds your expectations.`}
        />
      </Box>
      <Box
        sx={{
          padding: "65px 0px",

          margin: "0 auto",
        }}
        id="faqs"
      >
        <StyledHeading
          title1="frequently"
          title2=" asked questions"
          styledSx={{
            justifyContent: { md: "left", xs: "center" },
            color: "#1E1E1E",
            textAlign: "center",
          }}
        />
        <FAQ faqData={faqData} />
      </Box>

      
      <Box
        sx={{
          padding: "65px 0px",
          maxWidth: "1525px",
          margin: "0 auto",
        }}
      >
        <ContactForm />
      </Box>
    </>
  );
};

export default CustomPatches;
