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
    question: "What are chenille patches?",
    answer:
      "Chenille patches are made using a looped yarn technique that creates a soft, fuzzy texture—commonly used on varsity jackets, sweaters, and fashion apparel for a bold, vintage look.",
  },
  {
    id: 2,
    question: "What designs work best with chenille patches?",
    answer:
      "Chenille works best with bold, simple designs like letters, numbers, or minimal graphics. It's ideal for statement pieces where texture and volume matter.",
  },
  {
    id: 3,
    question: "Can chenille patches include embroidery or felt details?",
    answer:
      "Yes! We often combine chenille with embroidery or felt layers for added definition, outlines, or text for a more detailed and durable design.",
  },
  {
    id: 4,
    question: "What backing options are available for chenille patches?",
    answer:
      "We offer several backing types such as iron-on, sew-on, and Velcro, depending on how you plan to apply the patch.",
  },
  {
    id: 5,
    question: "How durable are chenille patches?",
    answer:
      "Chenille patches are highly durable and long-lasting when properly cared for. They're designed to withstand regular wear and washing, especially when sewn on.",
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
const chenillePortfolio = [
  {
    imageURL: "/images/our-portfolio/chenille/one.jpg",
    title: "Classic Chenille Patch",
    desc: "Traditional chenille with satin border",
    category: "Chenille Patches",
  },
  {
    imageURL: "/images/our-portfolio/chenille/two.jpg",
    title: "Custom Logo Chenille",
    desc: "Professional logo in chenille style",
    category: "Chenille Patches",
  },
  {
    imageURL: "/images/our-portfolio/chenille/three.jpg",
    title: "Military Style Chenille",
    desc: "Durable chenille with merrow border",
    category: "Chenille Patches",
  },
  {
    imageURL: "/images/our-portfolio/chenille/four.jpg",
    title: "Fashion Chenille Patch",
    desc: "Trendy chenille design with laser cut edge",
    category: "Chenille Patches",
  },
  {
    imageURL: "/images/our-portfolio/chenille/five.jpg",
    title: "Corporate Identity Chenille",
    desc: "Business chenille with clean finish",
    category: "Chenille Patches",
  },
  {
    imageURL: "/images/our-portfolio/chenille/six.jpg",
    title: "Sports Team Chenille",
    desc: "Athletic chenille with durable backing",
    category: "Chenille Patches",
  },
  {
    imageURL: "/images/our-portfolio/chenille/seven.jpg",
    title: "Vintage Style Chenille",
    desc: "Retro chenille with classic appeal",
    category: "Chenille Patches",
  },
];
const ChenillePatches = () => {
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
          title1="Chenille"
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
        <KeenSliderPortfolio arrayToList={chenillePortfolio} />
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

export default ChenillePatches;
