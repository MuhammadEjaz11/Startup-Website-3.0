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

import {
  cutomePatchServiceIcon,
  cutomePatchServiceIcon2,
  ServiceIcon1,
  ServiceIcon2,
} from "../../../../utils";
import ServiceIconBox from "../../../Components/ServiceIconsBox";
import Portfolio from "../../Portfolio/Portfolio";
import PortfolioTab from "../../../Components/PortfolioTab";
import BackingOptionsSection from "../../../Components/BackingOptionsSection";


const faqData = [
  {
    id: 1,
    question: "What is your turnaround time for digitizing?",
    answer: "We typically deliver digitized files within 2–4 hours.",
  },
  {
    id: 2,
    question: "How do I place an order?",
    answer:
      "You can send us your design via email or through our website. We'll get back to you with a quote and start the process.",
  },
  {
    id: 3,
    question: "What file formats do you provide for digitized designs?",
    answer:
      "We provide all major machine formats such as DST, EMB, PES, JEF, and more upon request.",
  },
  {
    id: 4,
    question: "Can I request changes after receiving the design?",
    answer:
      "Absolutely! We offer free minor edits to ensure you're fully satisfied with the final design.",
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
          marginTop: "100px",
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


             <BackingOptionsSection />

      <Box
        sx={{
          marginBottom: "65px !Important",
          maxWidth: "1526px",
          margin: "0 auto",
        }}
      >

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
          paddingTop: { md: "130px", sm: "40px", xs: "40px" },
          padding: { sm: "40px 0px", xs: "40px 0px" },
        }}
      >
        <StyledHeading
          title1="Service a Multitude of"
          title2=" Industries, Exceptionally"
          styledSx={{
            justifyContent: "start",
            paddingBottom: { md: "60px", sm: "40px", xs: "40px" },
          }}
          sx={{
            justifyContent: "center",
          }}
        />
        <Box
          sx={{
            display: { md: "flex", sm: "block" },
          }}
        >
          {cutomePatchServiceIcon.map((item, index) => (
            <ServiceIconBox
              btnText={false}
              btnURL={false}
              key={index}
              style={{
                width: "100%",
                borderRight: {
                  md: index < 4 && "1px solid #F1F1F1",
                  xs: "none",
                },
                borderBottom: "1px solid #F1F1F1",
              }}
              index={index}
              iconURL={item?.iconURL}
              title={item?.title}
            />
          ))}
        </Box>
        <Box
          sx={{
            display: { md: "flex", sm: "block" },

            // m: "0 auto",
            // paddingTop: {md:"60px", sm:"40px"},
          }}
        >
          {cutomePatchServiceIcon2.map((item, index) => (
            <ServiceIconBox
              btnText={false}
              btnURL={false}
              key={index}
              style={{
                width: "100%",
                borderRight: {
                  md: index < 4 && "1px solid #F1F1F1",
                  xs: "none",
                },
                borderBottom: "1px solid #F1F1F1",
              }}
              index={index}
              iconURL={item?.iconURL}
              title={item?.title}
            />
          ))}
        </Box>
      </Box>
      <Box>
        <PortfolioTab />
      </Box>
      <Box
        sx={{
          marginTop: { md: "50px", xs: "20px", sm: "20px" },
          marginBottom: { md: "100px", xs: "60px", sm: "60px" },
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
          paddingTop: "65px",

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
