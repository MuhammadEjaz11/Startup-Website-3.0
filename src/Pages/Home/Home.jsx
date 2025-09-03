import React, { useEffect } from "react";
import { Box, Button, Typography, Card, colors } from "@mui/material";

import SectionHeading from "../../Components/SectionHeading";
import DesignDevelop from "../../Components/DesignDevelop";
import SectionBox from "../../Components/SectionBox";
import ideaImage from "../../image/idea-01.svg";

import groupOne from "../../assets/about/cotton.svg";
import OurTeam from "../../Components/OurTeam";

import NewPortfolioCard from "../../Components/NewPortfolioCard";
import PortfolioSlider from "../../Components/NewPortfolio";
import {

  services1,

  TestimoialCard,
} from "../../../utils";
import ServiceCard from "../../Components/ServiceCard";
import PortfolioCard from "../../Components/PortfolioCard";
import homeSection from "../../image/homeSection.png";
import gridView from "../../image/grid-view.png";
import userGroup from "../../image/user-group.png";
import starSquare from "../../image/star-square.png";
import arrange from "../../image/arrange.png";

import workingArrow from "../../image/workingArrow.png";
import bestChoice from "../../image/best-choice.svg";
import { Tabs } from "@mui/material";
import { Tab } from "@mui/material";
import "keen-slider/keen-slider.min.css";

import { useState } from "react";

import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

import Testimonial from "../../Components/Testimonial";
import FAQ from "../../Components/FAQ";

import ContactForm from "../../Components/ContactForm";
import StyledHeading from "../../Components/StyledHeading";


import TecgnologiesComponent from "../../Components/TecgnologiesComponent";


import { Element, Events, animateScroll as scroll, scrollSpy } from 'react-scroll';


const services = [1, 2, 3];
const Home = () => {


  const [dynamicWidth, setDynamicWidth] = useState("100%");
  const [dynamicHeight, setDynamicHeight] = useState(400); // Default height


  useEffect(()=>{
    const scrollTo = () => {
      scroll.scrollTo(0);
      // scroll.getAnimationType({smooth:true})
    };
    scrollTo()
  },[])


  const faqData = [
    { 
      id: 1,
      question: "What do you guys do?",
      answer: "We bring your designs to life with professional digitizing, vector art, and custom patch services. Whether you're a brand, business, or individual, we deliver top-quality results tailored to your needs. Digitizing Services: We convert your artwork into precise, embroidery-ready files. Vector Art Services: We turn low-res images into clean, scalable vector files. Custom Patches: Choose from embroidered, PVC, sublimation, leather, or chenille patches—fully customizable in style, size, and color. With years of experience and a passion for detail, Patch Makers is your trusted partner for creative, high-quality work."
    },
    {
      id: 2,
      question: "Where are you guys based of?",
      answer: "We have multiple locations to serve our customers efficiently: Office: Wyoming, USA 🇺🇸 Production Houses: Pakistan 🇵🇰 & China 🇨🇳 This allows us to provide high-quality custom patches at competitive prices while ensuring fast production and delivery. Let us know how we can assist you!"
    },
    {
      id: 3,
      question: "How do you accept payments?",
      answer: "We accept payments through PayPal and all major credit/debit cards, making it easy and secure for our customers worldwide."
    },
    {
      id: 4,
      question: "How do I contact you for support or questions?",
      answer: "You can reach out to us through email, social media, or our website's contact form—we're always here to help!"
    },
  ];

  const [sliderRef] = useKeenSlider({
    loop: true,
    mode: "free",
    slides: {
      perView: 3,
      spacing: 15,
    },
  });

  // const handleChange = (e,newval) =>{
  //   console.log(newval)
  //   setTab(newval)
  // }
  return (
    <>
      <Box
        sx={{
          justifyContent: "space-between",
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          margin: "0 auto",
          paddingTop: { md: "130px", xs: "50px" },
          paddingBottom: { md: "130px", sm: "70px", xs: "70px" },
        }}
        id="about"
      >
        {/* Left Content */}
        <Box
          sx={{
            maxWidth: { xs: "100%", md: "50%" },
            textAlign: { xs: "left  ", md: "left" },
            paddingRight: { xs: "0", md: "20px" },
          }}
        >
          <StyledHeading title1="About" title2="Us" />
          <Typography
            sx={{
              color: "#939393",
              fontFamily: "Inter",
              lineHeight: { xl: "36px", md: "25px", xs: "22px" },

              fontSize: {
                md: "13px",
                xl: "16px",

                sm: "14px",
                xs: "14px",
              },
              textAlign: { sm: "left", xs: "left" },
              marginTop: "40px !Important",
            }}
          >
            For years, Patch Makers has been the trusted name in custom patches, digitizing, and vector art services. Our legacy of quality craftsmanship and personalized designs has set us apart as industry leaders. With a dedicated team and a commitment to exceeding expectations, we bring your ideas to life with precision and passion. Join our long-standing tradition of excellence and discover the art of customization with Us
          </Typography>
          <Box
            className="ourMission"
            sx={{
              display: "flex",
              justifyContent: "start",
              marginTop: "40px",
              flexDirection: { xs: "column", sm: "row" }, gap: '1rem'
            }}
          >
            <Box className="missionImage">
              <img src={ideaImage} alt="Mission" />
            </Box>
            <Box
              className="missionText"
              sx={{
                maxWidth: { xs: "100%", sm: "85%" },
                marginTop: { xs: "20px", sm: "0" },
              }}
            >
              <Typography
                sx={{
                  fontSize: "20px",
                  fontFamily: "satoshi",
                }}
              >
                Why Choose us?
              </Typography>
              <Box
                sx={{
                  fontFamily: "Inter",
                  color: "#939393",
                  fontWeight: 400,
                  lineHeight: { xl: "36px", md: "25px", xs: "22px" },
                  fontSize: {
                    md: "13px",
                    xl: "16px",

                    sm: "14px",
                    xs: "14px",
                  },
                  display: "flex",
                  gap: "42px"
                }}
              >
                <Box>
                  <ul  >
                    <li style={{
                      fontWeight: "400 !important", fontSize: '16px', fontFamily: "Inter",

                    }} >Free Quote & Mockups</li>
                    <li style={{
                      fontWeight: "400 !important", fontSize: '16px', fontFamily: "Inter",

                    }}>Customizable Options</li>
                    <li style={{
                      fontWeight: "400 !important", fontSize: '16px', fontFamily: "Inter",

                    }} >Fast and Reliable Shipping</li>
                    <li style={{
                      fontWeight: "400 !important", fontSize: '16px', fontFamily: "Inter",

                    }}>Durable backing options</li>
                  </ul>
                </Box>
                <Box>
                  <ul  >
                    <li style={{
                      fontWeight: "400 !important", fontSize: '16px', fontFamily: "Inter",

                    }} >Satisfaction Guaranteed</li>
                    <li style={{
                      fontWeight: "400 !important", fontSize: '16px', fontFamily: "Inter",

                    }}>Quick Turnaround</li>
                    <li style={{
                      fontWeight: "400 !important", fontSize: '16px', fontFamily: "Inter",

                    }} >24/7 Customer Service</li>
                    <li style={{
                      fontWeight: "400 !important", fontSize: '16px', fontFamily: "Inter",

                    }}>Variety of thread colors</li>
                  </ul>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>

        {/* Right Content */}
        <Box
          sx={{
            maxWidth: { xs: "100%", md: "50%" },
            marginTop: { xs: "40px", md: "0" },
            padding: { sm: "0px 30px !important", xs: "0px 0px !important" },
          }}
        >
          <Box>
            <img src={groupOne} alt="About Us" style={{ width: "100%" }} />
          </Box>

        </Box>
      </Box>

      {/* <Box
        sx={{
          
          margin: "0 auto",
          padding: { xs: "0px", md: "0" },
        }}
      >
        <StyledHeading
          sx={{ justifyContent: "left",  }}
          title1="Awards &"
          sx1={{ fontFamily: "satoshi !important" }}
          title2="Recognitions"
          sx2={{ fontFamily: "satoshi-light !important" }}
        />

        <Typography
          sx={{
            maxWidth: { xs: "100%", md: "788px" },
            fontFamily: "Inter",
            fontSize: { xs: "14px", md: "16px" },
            lineHeight: { xs: "24px", md: "36px" },
            color: "#939393",
            fontWeight: 400,
            marginBottom: "60px",
            textAlign: { xs: "left", md: "left" },
          }}
        >
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s.
        </Typography>

        <Card
          sx={{
            marginBottom: { md: "150px !important", xs: "60px !important" },
            boxShadow: "none",
            display: "flex",
            flexWrap: "wrap",
            flexDirection: { md: "row !Important", xs: "column" },
            width: { md: "100%", xs: "60%", sm: "60%" },
            margin: { xs: "0 auto" },
            justifyContent: { xs: "center", md: "space-between" },
            gap: { xs: "20px", md: "0" },
          }}
        >
          <img
            src={awardOne}
            style={{ maxWidth: "100%", height: "auto" }}
            alt="Award One"
          />
          <img
            src={awardTwo}
            style={{ maxWidth: "100%", height: "auto" }}
            alt="Award Two"
          />
          <img
            src={awardThree}
            style={{ maxWidth: "100%", height: "auto" }}
            alt="Award Three"
          />
          <img
            src={awardFour}
            style={{ maxWidth: "100%", height: "auto" }}
            alt="Award Four"
          />
          <img
            src={awardFive}
            style={{ maxWidth: "100%", height: "auto" }}
            alt="Award Five"
          />
        </Card>
      </Box> */}

      {/* <AwardsSlider /> */}

      <DesignDevelop
        content={`Patch Makers specializes in creating custom patches with expert digitizing and vector art services. Whether for style or branding, our personalized designs and skilled craftsmanship bring your ideas to life. Discover the power of customization with us today!`}
        title={`We design and manufacture premium custom patches — from Embroidered to PVC, Sublimation, Leather & Chenille`}
      />

      {/* our services */}
      <Box
        className="ourService"
        sx={{
          marginTop: { xs: "60px", md: "130px" },
          maxWidth: "1526px",
          margin: "0 auto",
          marginBottom: { xs: "40px", md: "73px" },
          padding: { xs: "0 20px", md: "0" },
          textAlign: { xs: "center", md: "left" },
        }}
      >
        <StyledHeading title1="Our" title2="Services" />
      </Box>

      <Box
        sx={{
          display: { md: "flex" },
          width: { md: "100%", sm: "100%" },
          m: "0 auto",
          marginBottom: { md: "120px", xs: "60px" },
          justifyContent: "center",
          flexWrap: "wrap",
          // border:"2px solid red"
        }}
      >
        {services1.map((item, index) => (
          <ServiceCard
            key={index}
            style={{
              flexBasis: "25%",
              borderRight: {
                md:
                  index < 2 || (index > 2 && index < 5)
                    ? "2.5px solid #F1F1F1"
                    : "",
                xs: "none",
              },
              borderBottom: index < 3 ? "2.5px solid #F1F1F1" : "",
              // border:"2px solid red"
              flexShrink: "1",
              flexGrow: "1",
            }}
            index={index} png
            title={item?.title}
            desc={item?.desc}
            btnText={item?.btnText}
            btnURL={item?.btnURL}
            iconURL={item?.iconURL}
            link={item?.link}
          />
        ))}
      </Box>

      {/* our team member */}

      <Box
        sx={{
          display: { md: "flex" },

          justifyContent: "space-around",
          borderRadius: { xs: "20px" },
          backgroundPosition: {
            md: "center",
            sm: "center !Important",
            xs: "center !Important",
          },
          maxWidth: { md: "100%", sm: "80%" },
          backgroundRepeat: "no-repeat",
          margin: "0 auto",
          backgroundSize: "cover",
          padding: "97px 0px",
          backgroundImage: `url(${homeSection})`,
          color: "white",
          marginBottom: { md: "130px", xs: "50px" },
          textAlign: { md: "left", sm: "center" },
          // border:"12px solid red",
          mt: "60px",
          img: {
            objectFit: "contain",
          }
        }}
      >
        <Box>
          <Box
            sx={{
              display: { md: "flex", sm: "flex" },
              margin: { sm: "0 auto" },
              justifyContent: {
                sm: "center !important",
                xs: "center !important",
              },

              paddingBottom: { md: "20px", xs: "50px" },
              flexWrap: { sm: "wrap" },
              flexBasis: "244.07px",
              textAlign: { md: "left", xs: "center" },
            }}
          >
            <img src={gridView}  />
            <Typography
              sx={{
                paddingLeft: { md: "23px", sm: "0px" },
                fontWeight: 700,
                fontFamily: "satoshi",
                fontSize: "50px",
              }}
            >
              2015
              <br />
              <Typography
                style={{
                  fontFamily: "Inter",
                  fontWeight: 700,
                  fontSize: "20px",
                }}
              >
                Founded Year
              </Typography>
            </Typography>
          </Box>
        </Box>
        <Box>
          <Box
            sx={{
              display: { md: "flex", sm: "flex" },
              margin: { sm: "0 auto" },
              justifyContent: {
                sm: "center !important",
                xs: "center !important",
              },
              paddingBottom: { md: "20px", xs: "50px" },
              flexWrap: { sm: "wrap" },
              flexBasis: "244.07px",
              textAlign: { md: "left", xs: "center" },
            }}
          >
            <img src={userGroup} />
            <Typography
              sx={{
                paddingLeft: { md: "23px", sm: "0px" },
                fontWeight: 700,
                fontFamily: "satoshi",
                fontSize: "50px",
              }}
            >
              55+
              <br />
              <Typography
                style={{
                  fontWeight: 700,
                  fontFamily: "Inter",
                  fontSize: "20px",
                }}
              >
                Team Member
              </Typography>
            </Typography>
          </Box>
        </Box>
        <Box>
          <Box
            sx={{
              display: { md: "flex", sm: "flex" },
              margin: { sm: "0 auto" },
              justifyContent: {
                sm: "center !important",
                xs: "center !important",
              },
              // textAlign: { sm: "center !Important" },
              paddingBottom: { md: "20px", xs: "50px" },
              flexWrap: { sm: "wrap" },
              flexBasis: "244.07px",
              textAlign: { md: "left", xs: "center" },
            }}
          >
            <img src={starSquare} style={{}} />
            <Typography
              sx={{
                paddingLeft: { md: "23px", sm: "0px" },
                fontWeight: 700,
                fontFamily: "satoshi",
                fontSize: "50px",
              }}
            >
              550+
              <br />
              <Typography
                style={{
                  fontWeight: 700,
                  fontFamily: "Inter",
                  fontSize: "20px",
                }}
              >
                Happy Customers
              </Typography>
            </Typography>
          </Box>
        </Box>
        <Box>
          <Box
            sx={{
              display: { md: "flex", sm: "flex" },
              margin: { sm: "0 auto" },
              justifyContent: {
                sm: "center !important",
                xs: "center !important",
              },
              // textAlign: { sm: "center !Important" },
              paddingBottom: { md: "20px", xs: "50px" },
              flexWrap: { sm: "wrap" },
              flexBasis: "244.07px",
              textAlign: { md: "left", xs: "center" },
            }}
          >
            <img src={arrange} />
            <Typography
              sx={{
                paddingLeft: { md: "23px", sm: "0px" },
                fontWeight: 700,
                fontFamily: "satoshi",
                fontSize: "50px",
              }}
            >
              1000+
              <br />
              <Typography
                style={{
                  fontWeight: 700,
                  fontFamily: "Inter",
                  fontSize: "20px",
                }}
              >
                Successful Projects
              </Typography>
            </Typography>
          </Box>
        </Box>
      </Box>

      {/*  our working process*/}

      <Box
        sx={{
          maxWidth: "1526px",
          margin: "0 auto",
          paddingLeft: { md: "0px", xs: "0px" },
        }}
      >
        <StyledHeading
          sx={{ justifyContent: "left" }}
          title1="Our Working"
          sx1={{ fontFamily: "satoshi !important" }}
          title2="Process"
          sx2={{ fontFamily: "satoshi-light !important" }}
        />

        <Box
          sx={{
            marginTop: "73px",
            marginBottom: { md: "130px", xs: "40px" },
            display: { md: "flex", xs: "flex" },
            justifyContent: "center",
            flexDirection: {
              md: "row",
              xs: "column",
            },
          }}
        >
          <Box
            sx={{
              marginBottom: { md: "0px", xs: "40px" },
              borderRight: { md: "1px solid #F1F1F1", xs: "none" },
              flexBasis: { md: "24%", xs: "100%" },
              marginRight: "36px",
              paddingRight: "36px",
            
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
        
              }}
            >
              <img width={"100px"} src={"/images/home_working_process/concept.png"} />
              <Box
                component="img"
                src={workingArrow}
                sx={{
                  width: "42.29px",
                  height: "26.43px",
                  display: "flex",
                  alignItems: "center",
                  transform: { md: 'rotate(0deg)', xs: 'rotate(90deg)' },
                }}
              />
            </Box>
            <SectionHeading ourworkTitle="Concept"></SectionHeading>
            <Typography
              sx={{
                fontFamily: "Inter",
                fontSize: "16px",
                lineHeight: "36px",
                color: "#939393",
                fontWeight: 400,
              }}
            >
              We start by understanding your vision and ideas to create a unique patch that perfectly fits your brand or style.
            </Typography>
          </Box>

          <Box
            sx={{
              marginBottom: { md: "0px", xs: "40px" },
              borderRight: { md: "1px solid #F1F1F1", xs: "none" },
              flexBasis: { md: "24%", xs: "100%" },

              marginRight: "36px",
              paddingRight: "36px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <img width={"100px"} src={"/images/home_working_process/Design.png"} />
              <Box
                component="img"
                src={workingArrow}
                sx={{
                  width: "42.29px",
                  height: "26.43px",
                  display: "flex",
                  alignItems: "center",
                  transform: { md: 'rotate(0deg)', xs: 'rotate(90deg)' },
                }}
              />
            </Box>
            <SectionHeading ourworkTitle="Design"></SectionHeading>
            <Typography
              sx={{
                fontFamily: "Inter",
                fontSize: "16px",
                lineHeight: "36px",
                color: "#939393",
                fontWeight: 400,
              }}
            >
              Our expert designers turn your concept into a detailed digital mockup using professional digitizing and vector art techniques.
            </Typography>
          </Box>
          <Box
            sx={{
              marginBottom: { md: "0px", xs: "40px" },
              borderRight: { md: "1px solid #F1F1F1", xs: "none" },
              flexBasis: { md: "24%", xs: "100%" },

              marginRight: "36px",
              paddingRight: "36px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <img width={"100px"} src={"/images/home_working_process/manufacture.png"} />
              <Box
                component="img"
                src={workingArrow}
                sx={{
                  width: "42.29px",
                  height: "26.43px",
                  display: "flex",
                  alignItems: "center",
                  transform: { md: 'rotate(0deg)', xs: 'rotate(90deg)' },
                }}
              />
            </Box>
            <SectionHeading ourworkTitle="Manufacture"></SectionHeading>
            <Typography
              sx={{
                fontFamily: "Inter",
                fontSize: "16px",
                lineHeight: "36px",
                color: "#939393",
                fontWeight: 400,
              }}
            >
              With precision and care, we craft your custom patches using high-quality materials — embroidered, PVC, sublimation, chenille, or leather.
            </Typography>
          </Box>
          <Box
            sx={{
              marginBottom: { md: "0px", xs: "40px" },

              flexBasis: { md: "24%", xs: "100%" },

              marginRight: "36px",
              paddingRight: "36px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <img width={"100px"} src={"/images/home_working_process/delivery.png"} />
              <Box
                component="img"
                src={workingArrow}
                sx={{
                  width: "42.29px",
                  height: "26.43px",
                  display: "flex",
                  alignItems: "center",
                  transform: { md: 'rotate(0deg)', xs: 'rotate(90deg)' },
                }}
              />
            </Box>
            <SectionHeading ourworkTitle="Delivery"></SectionHeading>
            <Typography
              sx={{
                fontFamily: "Inter",
                fontSize: "16px",
                lineHeight: "36px",
                color: "#939393",
                fontWeight: 400,
              }}
            >
              Once ready, your patches are carefully packed and shipped quickly to your doorstep — quality guaranteed, always on time.
            </Typography>
          </Box>
        </Box>
      </Box>
      {/* why we are the best choice */}

      <Box
        sx={{
          // maxWidth: "1532px",
          justifyContent: "space-between",
          alignContent: { md: "center", xs: "left" },
          flexDirection: { md: "row", xs: "column" },
          display: "flex",
          margin: "0 auto",
          gap: "1.2rem"
        }}
      >
        <Box
          sx={{
            flexBasis: { md: "614px", xs: "400px" },
            maxWidth: { md: "100%", xs: "100%" },


          }}
        >
          <img src={bestChoice} width={"100%"} height={"auto"} />
        </Box>
        <Box
          sx={{
            paddingTop: { md: "65px", xs: "0px", xl: "80px" },
          }}
        >
          <SectionBox></SectionBox>
        </Box>
      </Box>

      {/* social media tabs */}
      <Box
        sx={{
          display: "none",
          maxWidth: "1530px",
          margin: "0 auto",
          paddingTop: "80px",
        }}
      >
        <StyledHeading
          title1="Our"
          sx1={{ fontFamily: "satoshi !important" }}
          title2="Portfolio"
          sx2={{ fontFamily: "satoshi-light !important" }}
        />
      </Box>

  
      {/* our portfolio section  */}

      <NewPortfolioCard />
      <PortfolioSlider />


      <TecgnologiesComponent
        content={`At Patch Makers, we use industry leading software like Wilcom, Adobe Illustrator, and CorelDRAW to ensure flawless digitizing, vector art, and design accuracy. These powerful tools help us deliver clean, detailed, and high quality results every time.`}
      />

      {/* testimonial section */}
      <Box
        sx={{
          maxWidth: "1526px",
          margin: "0 auto",
          paddingTop: { md: "130px", xs: "40px" },
          paddingBottom: { md: "130px", xs: "50px" },
          textAlign: { md: "left", sm: "center", xs: "center" },


        }}
      >
        <StyledHeading
          title1="Our Expert Team Would Like"
          sx1={{
            fontFamily: "satoshi !important",
            textAlign: { md: "left", sm: "center", xs: "center", },

          }}
          sx2={{
            fontFamily: "satoshi !important",
            textAlign: { md: "left", sm: "center", xs: "center", },

          }}
          styledSx={{
            textAlign: { md: "left", sm: "center", xs: "center", },

          }}
        />
        <StyledHeading
          title1="To Hear From You!"
          sx1={{
            fontFamily: "satoshi-light !important",
            textAlign: { md: "left", sm: "center", xs: "center" },
          }}
        />

        <OurTeam />
      </Box>

      <Box
        id="testimonial"
        sx={{
          overflow: { xs: "hidden", xl: "visible", m: { md: "0px", xs: "auto" } },
        }}
      >
        <Testimonial
          data={TestimoialCard}
          // sx={{
          //   overflow: "visible !Important",
          // }}
        />
      </Box>

      <Box
        sx={{
          maxWidth: "1526px",
          margin: "0 auto",
          paddingTop: { md: "130px", xs: "40px" },
          paddingBottom: { md: "80px", sm: "60px", xs: "40px" },

        }}
        id="faqs"
      >
        <StyledHeading
          title1="frequently"
          sx1={{ fontFamily: "satoshi-light !important" }}
          title2="asked questions"
          sx2={{ fontFamily: "satoshi !important" }}
        />

        <FAQ
          faqData={faqData}
        />
      </Box>
 

   
      <Box
   
      >
        <ContactForm></ContactForm>
      </Box>
    </>
  );
};

export default Home;
