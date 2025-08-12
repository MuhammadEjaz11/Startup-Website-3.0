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
  PortfoliosList,
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
    question: "What materials are used for leather patches?",
    answer:
      "We use high-quality genuine leather and synthetic leather (faux) depending on your preference and budget. Both options are durable and stylish.",
  },
  {
    id: 2,
    question: "Can leather patches be customized with logos or text?",
    answer:
      "Yes, leather patches can be fully customized with your logo, name, or text through embossing, debossing, laser engraving, or printing.",
  },
  {
    id: 3,
    question: "What are leather patches commonly used for?",
    answer:
      "Leather patches are often used on hats, denim jackets, jeans, bags, and other apparel to give a premium and rugged look.",
  },
  {
    id: 4,
    question: "Are there color options available for leather patches?",
    answer:
      "Yes, we offer a variety of leather colors such as brown, tan, black, grey, and more. Custom dyeing may also be available upon request.",
  },
  {
    id: 5,
    question: "How are leather patches applied to products?",
    answer:
      "Leather patches can be sewn on, ironed on (if backed), or attached using adhesive depending on the type and usage.",
  },
];



const serviceApp = [
  {
    image: "/images/chenille-backing-options/one.svg",
    title: "Iron-on/Adhesive",
    desc: "Designed for easy application with a popular choice for casual wear and DIY projects, offering a clean, no-sew finish.",
  },
  {
    image: "/images/chenille-backing-options/two.svg",
    title: "Sew-on",
    desc: "The most durable option, sew-on backing is ideal for items that will be washed frequently or exposed to heavy use. It ensures the patch stays securely in place for the long haul.",
  },
  {
    image: "/images/chenille-backing-options/three.svg",
    title: "Hook & Loop",
    desc: "Also known as Velcro®, this backing allows patches to be removed and reattached quickly. It's perfect for uniforms, tactical gear, and items where interchangeability is needed.",
  },
  {
    image: "/images/chenille-backing-options/four.svg",
    title: "Peel & Stick",
    desc: "A temporary solution that's ideal for events, displays, or quick fixes. Simply peel off the protective layer and stick the patch onto a surface—no heat or sewing required.",
  },
];
const borderOptions = [
  {
    image: "/images/chenille-backing-options/one.svg",
    title: "Satin/Stitch Border",
    desc: "A clean, machine-stitched edge that gives your patch a sleek, polished look. Ideal for detailed or custom-shaped patches.",
  },
  {
    image: "/images/chenille-backing-options/two.svg",
    title: "Laser Cut",
    desc: "A sharp, heat-sealed edge created by laser cutting, great for achieving intricate or complex patch shapes with precision.",
  },
  {
    image: "/images/chenille-backing-options/three.svg",
    title: "Merrowed Border",
    desc: "A thick, rounded edge that wraps around the patch, providing a classic, bold finish—perfect for traditional shapes like circles or rectangles.",
  },
  {
    image: "/images/chenille-backing-options/four.svg",
    title: "Hot Cut Border",
    desc: "A smooth, flat edge sealed with heat to prevent fraying—commonly used for patches with complex or irregular outlines.",
  },
];
const leatherPortfolio = [
  {
    imageURL: "/images/our-portfolio/leather/one.jpg",
    title: "Classic Leather Patch",
    desc: "Timeless leather with embossed design",
    category: "Leather Patches",
  },
  {
    imageURL: "/images/our-portfolio/leather/two.jpg",
    title: "Custom Logo Leather",
    desc: "Professional logo in premium leather",
    category: "Leather Patches",
  },
  {
    imageURL: "/images/our-portfolio/leather/three.jpg",
    title: "Laser Engraved Leather",
    desc: "Precise laser engraving on leather",
    category: "Leather Patches",
  },
  {
    imageURL: "/images/our-portfolio/leather/four.jpg",
    title: "Fashion Leather Patch",
    desc: "Trendy leather with modern finish",
    category: "Leather Patches",
  },
];
const LeatherPatches = () => {
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
            title1="Leather"
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
        <KeenSliderPortfolio arrayToList={leatherPortfolio} />
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

export default LeatherPatches;
