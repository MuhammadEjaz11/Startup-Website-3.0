import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { Typography } from "@mui/material";
import Layout from "../../Layouts/Layout";
// import Box from '@mui/material'
import { Box } from "@mui/material";
import SectionPeragraph from "../../../Components/SectionPeragraph";
import CustomButton from "../../../Components/Button";
import homeSection from "../../../image/homeSection.png";
import gridView from "../../../image/grid-view.png";
import userGroup from "../../../image/user-group.png";
import starSquare from "../../../image/star-square.png";
import arrange from "../../../image/arrange.png";
import supportImage from "../../../image/supportImage.png";
import StyledHeading from "../../../Components/StyledHeading";
import groupFrame from "../../../image/groupFrame.png";
import ServicesCard from "../../../Components/ServicesCard";
import FAQ from "../../../Components/FAQ";
import LeftRightComponent from "../../../Components/LeftRightComponent";
import laptopImage from "../../../assets/font/MobileApp/appDevImage.png";
import BlogSlider from "../../../Components/OurBlog";
import SecondFAQSlider from "../../../Components/SecondFAQ";
import ContactForm from "../../../Components/ContactForm";
import Technologies from "../../../Components/Technologies";
import image9 from "../../../image/image9.png";
import image10 from "../../../image/image10.png";
import image11 from "../../../image/image11.png";
import image12 from "../../../image/image12.png";
import TechnologyCarousel from "../../../Components/Carousels/TechnologyCarousel/TechnologyCarousel";
import {
  Button,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
} from "react-scroll";

import {
  borderOptions,
  PortfoliosList,
  serviceApp,
  services1,
  services2,
  technologiesCard,
  TestimoialCard,
} from "../../../../utils";
import TecgnologiesComponent from "../../../Components/TecgnologiesComponent";

import BlogOne from "../../../image/videoB3.webp";
import BlogThree from "../../../image/blog33.webp";
import BlogTwo from "../../../image/appB2.webp";
import starRating from "../../../image/starRating.png";
import KeenSliderPortfolio from "../../../Components/KeenSliderPortfolio";

const faqData = [
  {
    id: 1,
    question: "What are sublimation patches?",
    answer:
      "Sublimation patches are created by printing full-color designs directly into the fabric using heat and special inks, resulting in vibrant, detailed, and long-lasting graphics.",
  },
  {
    id: 2,
    question: "Are sublimation patches durable?",
    answer:
      "Yes, sublimation patches are very durable. Since the ink becomes part of the fabric, the design won't crack, peel, or fade even after multiple washes.",
  },
  {
    id: 3,
    question: "What type of designs are best for sublimation patches?",
    answer:
      "Sublimation is perfect for highly detailed, colorful, or photographic designs that would be hard to replicate with embroidery or other techniques.",
  },
  {
    id: 4,
    question: "Can sublimation patches be customized in different shapes and sizes?",
    answer:
      "Absolutely! We can create sublimation patches in any shape and size to suit your design and branding needs.",
  },
  {
    id: 5,
    question: "What backing options do you offer for sublimation patches?",
    answer:
      "We provide several options including iron-on, sew-on, Velcro, and adhesive backings depending on how you plan to apply the patch.",
  },
];


const sublimationPortfolio = [
  {
    imageURL: "/images/our-portfolio/sublimation/one.jpg",
    title: "Vibrant Logo Sublimation",
    desc: "High-resolution logo with photo-quality detail",
    category: "Sublimation Patches",
  },
  {
    imageURL: "/images/our-portfolio/sublimation/two.jpg",
    title: "Custom Artwork Sublimation",
    desc: "Complex designs with gradient colors",
    category: "Sublimation Patches",
  },
  {
    imageURL: "/images/our-portfolio/sublimation/three.jpg",
    title: "Photographic Sublimation",
    desc: "Photo-realistic patches with fine detail",
    category: "Sublimation Patches",
  },
  {
    imageURL: "/images/our-portfolio/sublimation/four.jpg",
    title: "Fashion Sublimation Patch",
    desc: "Trendy designs with vibrant colors",
    category: "Sublimation Patches",
  },
  {
    imageURL: "/images/our-portfolio/sublimation/five.jpg",
    title: "Corporate Branding Sublimation",
    desc: "Professional logos with crisp detail",
    category: "Sublimation Patches",
  },
  {
    imageURL: "/images/our-portfolio/sublimation/six.jpg",
    title: "Sports Team Sublimation",
    desc: "Team logos with dynamic colors",
    category: "Sublimation Patches",
  },
  {
    imageURL: "/images/our-portfolio/sublimation/seven.jpg",
    title: "Creative Design Sublimation",
    desc: "Artistic patches with unlimited colors",
    category: "Sublimation Patches",
  },
  {
    imageURL: "/images/our-portfolio/sublimation/eight.jpg",
    title: "Event Sublimation Patch",
    desc: "Special occasion patches with custom artwork",
    category: "Sublimation Patches",
  },
  {
    imageURL: "/images/our-portfolio/sublimation/nine.jpg",
    title: "Premium Quality Sublimation",
    desc: "High-end patches with superior finish",
    category: "Sublimation Patches",
  },
];
const SublimationPatches = () => {
  useEffect(() => {
    const scrollTo = () => {
      scroll.scrollTo(0); // Scrolling to 100px from the top of the page.
    };
    scrollTo();
  }, []);
  const location = useLocation();
  return (
    <>
      <Box>
        <Box
          sx={{
            mt: "30px",
          }}
        >
          <StyledHeading
            title1="Backing"
            title2="Options"
            // titleSpan2={"Options"}
            sx1={{
              order: "0",
              texttAlign: "center",
              fontFamily: "'Bakbak One', sans-serif",

              fontWeight: 700,
            }}
            sx2={{
              fontWeight: 500,

              fontFamily: "satoshi-light",
            }}
            sx={{ justifyContent: "center", order: "2", marginBottom: "60px" }}
            styledSx={{
              justifyContent: { md: "left", xs: "center" },
              color: "#1E1E1E",
              textAlign: "center",
            }}
          />
        </Box>
        <Box
          sx={{
            mt: "60px",
            display: "flex",
            justifyContent: {
              md: "center",
              xs: "center",
            },
            gap: { md: "30px", xs: "15px" },
            flexDirection: {
              md: "row",
              xs: "column",
            },
            alignItems: "start",
          }}
        >
          {serviceApp.map((service, index) => (
            <ServicesCard
              key={index}
              image={true}
              style={{
                border: "1px solid #E9E9E9",
                maxWidth: { md: "300px !important", sm: "100%" },
                borderRadius: "10px",
                flexBasis: "25%",
                flexShrink: "1",
                img: {
                  width: "100%",
                },
              }}
              iconURL={service.image}
              title={service.title}
              desc={service.desc}
              descsx={{
                fontSize: { xs: "13px", xl: "15px" },
              }}
            />
          ))}
        </Box>
      </Box>

      <Box>
        <Box
          sx={{
            mt: "30px",
          }}
        >
          <StyledHeading
            title1="Border"
            title2="Options"
            // titleSpan2={"Options"}
            sx1={{
              order: "0",
              texttAlign: "center",
              fontFamily: "'Bakbak One', sans-serif",

              fontWeight: 700,
            }}
            sx2={{
              fontWeight: 500,

              fontFamily: "satoshi-light",
            }}
            sx={{ justifyContent: "center", order: "2", marginBottom: "60px" }}
            styledSx={{
              justifyContent: { md: "left", xs: "center" },
              color: "#1E1E1E",
              textAlign: "center",
            }}
          />
        </Box>
        <Box
          sx={{
            mt: "60px",
            display: "flex",
            justifyContent: {
              md: "center",
              xs: "center",
            },
            gap: { md: "30px", xs: "15px" },
            flexDirection: {
              md: "row",
              xs: "column",
            },
            alignItems: "start",
          }}
        >
          {borderOptions.map((service, index) => (
            <ServicesCard
              key={index}
              image={true}
              style={{
                border: "1px solid #E9E9E9",
                maxWidth: { md: "300px !important", sm: "100%" },
                borderRadius: "10px",
                flexBasis: "25%",
                flexShrink: "1",
                img: {
                  width: "100%",
                },
              }}
              iconURL={service.image}
              title={service.title}
              desc={service.desc}
              descsx={{
                fontSize: { xs: "13px", xl: "15px" },
              }}
            />
          ))}
        </Box>
      </Box>

      <Box
        sx={{
          mt: "80px",
          mb: "120px",
        }}
      >
                  <StyledHeading
            title1="Sublimation"
            title2="Patches Gallery"
          // titleSpan2={"Options"}
          sx1={{
            order: "0",
            texttAlign: "center",
            fontFamily: "'Bakbak One', sans-serif",

            fontWeight: 700,
          }}
          sx2={{
            fontWeight: 500,

            fontFamily: "satoshi-light",
          }}
          sx={{ justifyContent: "center", order: "2", marginBottom: "60px" }}
          styledSx={{
            justifyContent: { md: "left", xs: "center" },
            color: "#1E1E1E",
            textAlign: "center",
          }}
        />
        <KeenSliderPortfolio arrayToList={sublimationPortfolio} />
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
            onClick={() => navigate("/our-portfolio")}
            title="Load More"
          />
        </Box>
      </Box>

      <Box
        sx={{
          padding: "65px 0px",
          maxWidth: "1525px",
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

          margin: "0 auto",
        }}
      >
        <ContactForm />
      </Box>
    </>
  );
};

export default SublimationPatches;
