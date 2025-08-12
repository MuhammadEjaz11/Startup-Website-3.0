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
    question: "What are embroidered patches?",
    answer:
      "Embroidered patches are custom-designed pieces made by stitching thread onto a fabric backing to create logos, designs, or text. They're commonly used on uniforms, jackets, hats, bags, and more for branding or personalization.",
  },
  {
    id: 2,
    question: "What's the minimum order quantity?",
    answer:
      "Our minimum order quantity is usually 10 patches, but it may vary depending on the size and complexity of the design. Contact us for specific requirements.",
  },
  {
    id: 3,
    question: "Can I provide my own design for the patch?",
    answer:
      "Yes! You can send us your artwork, logo, or even a rough sketch. Our team will convert it into a digital embroidery format and provide you with a preview before production.",
  },
  {
    id: 4,
    question: "How long does it take to produce embroidered patches?",
    answer:
      "Standard production time is 5–7 business days after design approval. Rush orders are also available upon request.",
  },
  {
    id: 5,
    question: "What types of backing options do you offer?",
    answer:
      "We offer various backing options including iron-on, Velcro, adhesive, and sew-on—depending on how you plan to attach the patch.",
  },
];



const serviceApp = [
  {
    image: "/images/backing-option/iron on.png",
    title: "Iron-on/Adhesive",
    desc: "Designed for easy application with a popular choice for casual wear and DIY projects, offering a clean, no-sew finish.",
  },
  {
    image: "/images/backing-option/sew on.png",
    title: "Sew-on",
    desc: "The most durable option, sew-on backing is ideal for items that will be washed frequently or exposed to heavy use. It ensures the patch stays securely in place for the long haul.",
  },
  {
    image: "/images/backing-option/hook n loop.png",
    title: "Hook & Loop",
    desc: "Also known as Velcro®, this backing allows patches to be removed and reattached quickly. It's perfect for uniforms, tactical gear, and items where interchangeability is needed.",
  },
  {
    image: "/images/backing-option/peel n stick.png",
    title: "Peel & Stick",
    desc: "A temporary solution that's ideal for events, displays, or quick fixes. Simply peel off the protective layer and stick the patch onto a surface—no heat or sewing required.",
  },
];
const borderOptions = [
  {
    image: "/images/borde- option/satin border.png",
    title: "Satin/Stitch Border",
    desc: "A clean, machine-stitched edge that gives your patch a sleek, polished look. Ideal for detailed or custom-shaped patches.",
  },
  {
    image: "/images/borde- option/lazer cut.png",
    title: "Laser Cut",
    desc: "A sharp, heat-sealed edge created by laser cutting, great for achieving intricate or complex patch shapes with precision.",
  },
  {
    image: "/images/borde- option/merrow border.png",
    title: "Merrowed Border",
    desc: "A thick, rounded edge that wraps around the patch, providing a classic, bold finish—perfect for traditional shapes like circles or rectangles.",
  },
  {
    image: "/images/borde- option/hot cut satin border.png",
    title: "Hot Cut Border",
    desc: "A smooth, flat edge sealed with heat to prevent fraying—commonly used for patches with complex or irregular outlines.",
  },
];
const embroideryPortfolio = [
  {
    imageURL: "/images/our-portfolio/embroidery/one.jpg",
    title: "Classic Embroidered Patch",
    desc: "Traditional embroidery with satin border",
    category: "Embroidered Patches",
  },
  {
    imageURL: "/images/our-portfolio/embroidery/two.jpg",
    title: "Custom Logo Patch",
    desc: "Professional logo embroidery on premium fabric",
    category: "Embroidered Patches",
  },
  {
    imageURL: "/images/our-portfolio/embroidery/three.jpg",
    title: "Military Style Patch",
    desc: "Durable embroidery with merrow border",
    category: "Embroidered Patches",
  },
  {
    imageURL: "/images/our-portfolio/embroidery/four.jpg",
    title: "Fashion Embroidered Patch",
    desc: "Trendy design with laser cut edge",
    category: "Embroidered Patches",
  },
  {
    imageURL: "/images/our-portfolio/embroidery/five.jpg",
    title: "Corporate Identity Patch",
    desc: "Business embroidery with clean finish",
    category: "Embroidered Patches",
  },
  {
    imageURL: "/images/our-portfolio/embroidery/six.jpg",
    title: "Sports Team Patch",
    desc: "Athletic embroidery with durable backing",
    category: "Embroidered Patches",
  },
  {
    imageURL: "/images/our-portfolio/embroidery/seven.jpg",
    title: "Vintage Style Patch",
    desc: "Retro embroidery with classic appeal",
    category: "Embroidered Patches",
  },
  {
    imageURL: "/images/our-portfolio/embroidery/eight.jpg",
    title: "Modern Design Patch",
    desc: "Contemporary embroidery with precision",
    category: "Embroidered Patches",
  },
  {
    imageURL: "/images/our-portfolio/embroidery/nine.jpg",
    title: "Artistic Embroidered Patch",
    desc: "Creative design with artistic flair",
    category: "Embroidered Patches",
  },
  {
    imageURL: "/images/our-portfolio/embroidery/ten.jpg",
    title: "Professional Badge Patch",
    desc: "Official embroidery for uniforms",
    category: "Embroidered Patches",
  },
  {
    imageURL: "/images/our-portfolio/embroidery/eleven.jpg",
    title: "Decorative Embroidered Patch",
    desc: "Ornamental embroidery for fashion",
    category: "Embroidered Patches",
  },
  {
    imageURL: "/images/our-portfolio/embroidery/twelve.jpg",
    title: "Premium Quality Patch",
    desc: "High-end embroidery with superior finish",
    category: "Embroidered Patches",
  },
];
const EmbroideredPatches = () => {
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
          title1="Embroidered"
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
        <KeenSliderPortfolio arrayToList={embroideryPortfolio} />
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

export default EmbroideredPatches;
