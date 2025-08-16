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
    question: "What are PVC patches made of?",
    answer:
      "PVC patches are made from soft, durable plastic (Polyvinyl Chloride) that is waterproof, flexible, and perfect for detailed designs.",
  },
  {
    id: 2,
    question: "Can I create a custom shape and color for my PVC patch?",
    answer:
      "Absolutely! PVC patches can be molded into any shape, with vibrant custom colors, 2D or 3D designs, and raised surfaces for a bold look.",
  },
  {
    id: 3,
    question: "Are PVC patches suitable for outdoor use?",
    answer:
      "Yes, they are ideal for outdoor gear as they are weather-resistant, waterproof, and won't fade or fray like embroidered patches.",
  },
  {
    id: 4,
    question: "How are PVC patches attached?",
    answer:
      "They can be sewn on, attached with Velcro backing (popular for tactical gear), or made with adhesive or iron-on backing upon request.",
  },
  {
    id: 5,
    question: "What products are PVC patches commonly used on?",
    answer:
      "PVC patches are often used on military uniforms, backpacks, jackets, hats, and branded promotional items due to their durability and style.",
  },
];




const pvcPortfolio = [
  {
    imageURL: "/images/our-portfolio/pvc-patches/one.jpg",
    title: "Custom PVC Patch",
    desc: "Bold PVC design with vibrant colors",
    category: "PVC Patches",
  },
  {
    imageURL: "/images/our-portfolio/pvc-patches/two.jpg",
    title: "3D PVC Patch",
    desc: "Raised surface PVC with texture",
    category: "PVC Patches",
  },
  {
    imageURL: "/images/our-portfolio/pvc-patches/three.jpg",
    title: "Military PVC Patch",
    desc: "Durable PVC for tactical gear",
    category: "PVC Patches",
  },
  {
    imageURL: "/images/our-portfolio/pvc-patches/four.jpg",
    title: "Promotional PVC Patch",
    desc: "Custom PVC for branding",
    category: "PVC Patches",
  },
];
const PVCPatches = () => {
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
            title1="PVC"
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
        <KeenSliderPortfolio arrayToList={pvcPortfolio} />
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

export default PVCPatches;
