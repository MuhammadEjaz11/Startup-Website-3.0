import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

// import Box from '@mui/material'
import { Box } from "@mui/material";

import CustomButton from "../../../Components/Button";

import StyledHeading from "../../../Components/StyledHeading";

import ServicesCard from "../../../Components/ServicesCard";

import FAQ from "../../../Components/FAQ";

import ContactForm from "../../../Components/ContactForm";

// Vector service images
import logoVectorization from "../../../../public/images/vector-service/Logo Vectorization.png";
import lineArt from "../../../../public/images/vector-service/Line Art.png";
import colorSeparation from "../../../../public/images/vector-service/Color Separation.png";
import silhouetteVectorArt from "../../../../public/images/vector-service/Silhouette Vector Art.png";
import illustrationsCartoons from "../../../../public/images/vector-service/Illustrations & Cartoons.png";
import typographyTextArt from "../../../../public/images/vector-service/Typography & Text Art.png";
import productMockups from "../../../../public/images/vector-service/Product Mockups.png";
import architecturalTechnicalDrawings from "../../../../public/images/vector-service/Architectural & Technical Drawings.png";

import {
  Button,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
} from "react-scroll";
import RoundCircle from "../../../Components/RoundCircle";
import {
  CustomPackageDetail,
  CustomPackageDigitizing,
  ServiceIcon1,
  ServiceIcon2,
} from "../../../../utils";
import ServiceIconBox from "../../../Components/ServiceIconsBox";
import KeenSliderPortfolio from "../../../Components/KeenSliderPortfolio";
import CustomPackage from "../../../Components/CustomPackage";

const faqData = [
  {
    id: 1,
    question: "What is your turnaround time for Vector?",
    answer:
      "We typically deliver digitized files within 4-6 hours.",
  },
  {
    id: 2,
    question: "How do I place an order?",
    answer:
      "You can send us your design via email or through our website. We'll get back to you with a quote and start the process.",
  },
  {
    id: 3,
    question: "What file formats do you provide for vector designs?",
    answer:
      "We provide all major formats such as AI, EPS, PDF, CDR, JPG, PNG and more upon request.",
  },
  {
    id: 4,
    question: "Can I request changes after receiving the design?",
    answer:
      "Yes, we offer revision services to ensure your complete satisfaction with the final vector design.",
  },
];


const serviceApp = [
  {
    image: logoVectorization,
    title: "Logo Vectorization",
    desc: "Transforming raster logos into clean, scalable vector files for branding, printing, or embroidery.",
  },
  {
    image: lineArt,
    title: "Line Art",
    desc: "Simple black-and-white or single-color artwork using clean lines—often used for engraving or minimal designs.",
  },
  {
    image: colorSeparation,
    title: "Color Separation",
    desc: "Used for screen printing, this involves breaking down a design into separate colors for individual screen layers.",
  },
  {
    image: silhouetteVectorArt,
    title: "Silhouette Vector Art",
    desc: "Creating solid, filled-in outlines of objects, people, or animals for bold visual impact.",
  },
  {
    image: illustrationsCartoons,
    title: "Illustrations & Cartoons",
    desc: "Custom vector drawings or stylized art pieces, often used for marketing, books, or merchandise.",
  },
  {
    image: typographyTextArt,
    title: "Typography & Text Art",
    desc: "Custom-designed text, fonts, or word art as scalable vector files for promotional use.",
  },
  {
    image: productMockups,
    title: "Product Mockups",
    desc: "Vector layouts of apparel, packaging, or merchandise for realistic and editable product previews.",
  },
  {
    image: architecturalTechnicalDrawings,
    title: "Architectural & Technical Drawings",
    desc: "Clean, scalable floor plans or engineering-style blueprints in vector format.",
  },
];

const vectorList = [

  {
    imageURL: "/images/our-portfolio/vector/two.png",

    title: "Website Project 2",
    desc: "Web Development",
    category: "Website",
  },
  {
    imageURL: "/images/our-portfolio/vector/three.png",

    title: "Website Project 3",
    desc: "Web Development",
    category: "Website",
  },
  {
    imageURL: "/images/our-portfolio/vector/four.png",

    title: "Website Project 4",
    desc: "Web Development",
    category: "Website",
  },
  {
    imageURL: "/images/our-portfolio/vector/five.png",

    title: "Website Project 5",
    desc: "Web Development",
    category: "Website",
  },
  {
    imageURL: "/images/our-portfolio/vector/six.png",

    title: "Website Project 6",
    desc: "Web Development",
    category: "Website",
  },
  {
    imageURL: "/images/our-portfolio/vector/eight.png",

    title: "Website Project 7",
    desc: "Web Development",
    category: "Website",
  },
  {
    imageURL: "/images/our-portfolio/vector/seven.png",

    title: "Website Project 8",
    desc: "Web Development",
    category: "Website",
  },
  {
    imageURL: "/images/our-portfolio/vector/nine.png",

    title: "Website Project 9",
    desc: "Web Development",
    category: "Website",
  },
];
const Vector = () => {
  useEffect(() => {
    const scrollTo = () => {
      scroll.scrollTo(0); // Scrolling to 100px from the top of the page.
    };
    scrollTo()
  }, []);
  const location = useLocation();
  return (
    <>
      <Box>
        <StyledHeading
          title2="Vector"
          title1="Services"
          sx1={{ order: "2" }}
          styledSx={{
            display: "flex",
            justifyContent: { md: "left", sm: "center", xs: "center" },
            alignItems: "center",
          }}
        />
      </Box>
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
                  width: "120px",
                },
                p: { xs: "15px", md: "20px" },
              }}
              iconURL={item.image}
              title={item.title}
              desc={item.desc}
              image={true}
            />
          );
        })}
      </Box>
      <Box>
        <Box
          sx={{
            mt: "90px",
            padding: { xs: "0px 0px !important" },
          }}
        >
          <StyledHeading
            title1="Our Vectorizing"
            title2="Process"
            styledSx={{
              display: "flex",
              justifyContent: { md: "left", sm: "center", xs: "center" },
              alignItems: "center",
              mt: "40px",
            }}
          />

          <Box
            sx={{
              display: "flex",
              flexDirection: {
                md: "row",
                xs: "column",
              },
              gap: "3rem",
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
              }}
            >
              <ServicesCard
                desc="We start by receiving your image or artwork, whether it's a rough sketch or a low-resolution file. Our skilled graphic artists then recreate it as a clean, scalable vector using advanced design software. Every line, curve, and color is carefully refined to ensure print-ready quality. Once finalized, the vector file is delivered in your preferred format—usually within 2 to 4 hours!"
                iconURL=""
                image={false}
                style={{
                  borderRight: "none",
                  borderTop: "1px solid #F1F1F1",
                  m: { md: "0px 40px", xs: "0px 10px" },
                  p: "10px 0px 30px",
                  // borderBottom:"1px solid #F1F1F1" ,
                }}
              />

              <ServicesCard
                desc="Send us your artwork or logo in any format—JPG, PNG, PDF, or even a sketch!"
                iconURL={"/images/work-process/digitizing/design.svg"}
                image={true}
                title="Submit Your Design"
                style={{
                  borderRight: "none",
                  borderTop: "1px solid #F1F1F1",
                  m: { md: "0px 40px", xs: "0px 10px" },
                  p: "30px 0px",

                  // borderBottom:"1px solid #F1F1F1" ,
                }}
              />
              <ServicesCard
                desc="We'll create a vector art of your design and share a preview with you for approval. Revisions? No problem!"
                iconURL={"/images/work-process/digitizing/approval.svg"}
                image={true}
                title="Get Approval"
                style={{
                  borderRight: "none",
                  borderTop: "1px solid #F1F1F1",
                  m: { md: "0px 40px", xs: "0px 10px" },
                  p: "30px 0px",

                  // borderBottom:"1px solid #F1F1F1" ,
                }}
              />
              <ServicesCard
                desc="Once approved, we deliver the final vector file in your preferred format—fast, ready, and print-perfect!"
                iconURL={"/images/work-process/digitizing/delivery.svg"}
                image={true}
                title="Delivery"
                style={{
                  borderRight: "none",
                  borderTop: "1px solid #F1F1F1",
                  m: { md: "0px 40px", xs: "0px 10px" },
                  p: "30px 0px",

                  // borderBottom:"1px solid #F1F1F1" ,
                }}
              />
            </Box>
          </Box>
        </Box>
      </Box>
      <br />

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
          {ServiceIcon1.map((item, index) => (
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
          {ServiceIcon2.map((item, index) => (
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

      {/* our portfolio section will be there */}

      <Box
        sx={{
          mt: "80px",
          mb: "120px",
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

        <KeenSliderPortfolio arrayToList={vectorList} />
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
          justifyContent: "space-between",
          borderRadius: "15px",
          marginBottom: "120px",
          width: "100%",
          backgroundColor: "#fff",
          // border:"1px solid red",
        }}
      >
        {CustomPackageDetail.map((item, index) => (
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
        {/* here i am starting frequestly asked questions  */}

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "0rem",
            mt: "75px",
            padding: { md: "0px 0px", xs: "0px 0px" },
          }}
          id="faqs"
        >
          <StyledHeading title1="frequently" title2=" asked questions" />
          <FAQ faqData={faqData} />
        </Box>
      <Box
        sx={{
          margin: { md: "130px 0", sm: "60px 0", xs: "40px 0" },
        }}
      >
        <ContactForm />
      </Box>
    </>
  );
};

export default Vector;
