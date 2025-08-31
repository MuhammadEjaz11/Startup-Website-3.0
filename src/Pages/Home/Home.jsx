import React, { useEffect } from "react";
import { Box, Button, Typography, Card, colors } from "@mui/material";
import { Carousel } from "@trendyol-js/react-carousel";
import SectionHeading from "../../Components/SectionHeading";
import DesignDevelop from "../../Components/DesignDevelop";
import SectionBox from "../../Components/SectionBox";
import ideaImage from "../../image/idea-01.svg";
import aboutImage from "../../image/aboutImage.webp";
import groupOne from "../../assets/about/cotton.svg";
import groupTwo from "../../image/groupTwo.png";
import awardOne from "../../image/award_one.png";
import awardTwo from "../../image/award_two.png";
import awardThree from "../../image/award_three.png";
import awardFour from "../../image/award_four.png";
import awardFive from "../../image/award_five.png";
import SectionImage from "../../image/SectionImage.png";
import ImageWeb from "../../image/ImageWeb.png";
import Frame1 from "../../image/Frame1.png";
import Vector from "../../image/Vector.png";
import CustomButton from "../../Components/Button";
import OurTeam from "../../Components/OurTeam";
import BlogSlider from "../../Components/OurBlog";
import NewPortfolioCard from "../../Components/NewPortfolioCard";
import PortfolioSlider from "../../Components/NewPortfolio";
import Technologies from "../../Components/Technologies";
import {
  PortfoliosList,
  services1,
  services2,
  TestimoialCard,
} from "../../../utils";
import ServiceCard from "../../Components/ServiceCard";
import PortfolioCard from "../../Components/PortfolioCard";
import homeSection from "../../image/homeSection.png";
import gridView from "../../image/grid-view.png";
import userGroup from "../../image/user-group.png";
import starSquare from "../../image/star-square.png";
import arrange from "../../image/arrange.png";
import workingOne from "../../image/workingOne.png";
import workingTwo from "../../image/workingTwo.png";
import workingThree from "../../image/workingThree.png";
import workingFour from "../../image/workingFour.png";
import workingArrow from "../../image/workingArrow.png";
import bestChoice from "../../image/best-choice.svg";
import { Tabs } from "@mui/material";
import { Tab } from "@mui/material";
import "keen-slider/keen-slider.min.css";
import KeenSlider from "keen-slider";
import { Js } from "../../Components/svg";
import myReact from "./../../image/react.svg.png";

import { useState } from "react";
import TechnologiesCard from "../../Components/TechnologiesCard";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import TechnologyCarousel from "../../Components/Carousels/TechnologyCarousel/TechnologyCarousel";
import Testimonial from "../../Components/Testimonial";
import FAQ from "../../Components/FAQ";
import SecondFAQSlider from "../../Components/SecondFAQ";
import ContactForm from "../../Components/ContactForm";
import StyledHeading from "../../Components/StyledHeading";
import KeenSliderPortfolio from "../../Components/KeenSliderPortfolio";
import AwardsSlider from "../../Components/AwardSlider";

import work1 from "../../image/work1.webp";
import work2 from "../../image/work2.webp";
import work3 from "../../image/work3.webp";
import work4 from "../../image/work4.webp";

import TecgnologiesComponent from "../../Components/TecgnologiesComponent";

import starRating from '../../image/starRating.png';





import BlogOne from '../../image/blog1.webp';
import BlogTwo from '../../image/blog2.webp';
import BlogThree from '../../image/blog3.webp';
import { Element, Events, animateScroll as scroll, scrollSpy } from 'react-scroll';


const blogData = [
  {
    id: 1,
    title: "How Agencies Puts Your Audience First",
    description: "Continue to read more information and updates from the Mozack blog and gain new knowledge about Mozack and its industry. This way, our team ensures you are updated with relevant information on app development, digital innovation and customer-centric strategies that will keep you on top in today’s competitive technological marketplace. As a result, let us scrutinise how Mozack is approaching AI to redefine customer experiences.",
    image: BlogOne,
    author: "By Admin",
    date: "November 11, 2024",
  },
  {
    id: 2,
    title: "How Agecis Puts Your Audience First",
    description: "Mozack is positioning itself as a cutting-edge organisation in the digital domain, which is currently experiencing radical changes due to the integration of Artificial Intelligence (AI). In this article, we explore how Mozack is harnessing AI to design new applications that are much more attuned to users’ requirements on the fly. Find out how particular AI integrated tools work and improve the overall customer experience and application usage. Sustainable App Development: Mozack's Green Approach",
    image: BlogTwo,
    author: "Admin",
    date: "November 11, 2024",
  },
  {
    id: 3,
    title: "How Agecis Puts Your Audience First",
    description: "At Mozack, it is our mission to embrace the new world of sustainable practices and provide green digital solutions. In this article, you will learn about our best practices in creating an energy-efficient app and choosing a cloud provider with clean energy. Find out how Mozack ensures that it contributes to environmental causes while offering clients the best digital services. Cybersecurity in App Development: Safety of The Users of Mozack’s App 👥",
    image: BlogThree,
    author: "Admin",
    date: "November 11, 2024",
  },
]
const services = [1, 2, 3];
const Home = () => {
  const [tab, setTab] = useState("All");
  const [filteredPortfolioList, setFilteredPortfolioList] =
    useState(PortfoliosList);

  useEffect(() => {
    setFilteredPortfolioList(PortfoliosList.filter((e) => e == tab));
  }, [tab]);

  const [dynamicWidth, setDynamicWidth] = useState("100%");
  const [dynamicHeight, setDynamicHeight] = useState(400); // Default height


  // useEffect(()=>{
  //   const scrollTo = () => {
  //     scroll.scrollTo(0);
  //     scroll.getAnimationType({smooth:true})
  //   };
  //   scrollTo()
  // },[])

  const SecondFaq = [
    {
      id: 1,
      title: 'Experience & Excellence',
      testimonialText:
        "Mozack’s team ought to have a rich understanding of the subject matter and that comes through loud and clear in the materials they deliver. The delay, which was the issue of major concern, only ended as we waited a little longer, though the final output was even better than what we expected.",
      starRating: starRating,
      videoId: 'mZ5hnNRBFsc', // A valid video ID
    },
    {
      id: 2,
      title: 'Quality & Dedication',
      testimonialText:
        "The Mozack has been motivated our team throughout the project. They were engaged with us throughout the process to make sure that what we wanted was done. Our communication problems which arose from misunderstanding of our initial needs were promptly addressed with a solution that met our needs.",
      starRating: starRating,
      videoId: 'mZ5hnNRBFsc', // Corrected video ID from the URL
    },
    {
      id: 3,
      title: 'Innovation & Creativity',
      testimonialText:
        "We were impressed with their offer and the way they came up with some of the solutions. They came up with distinct strategies that made our project stand PAGE  out in the market. There were some times that made me question the process a little but Mozack certainly rose to the occasion in terms of creativity and added a lot of value to our project.",
      starRating: starRating,
      videoId: 'mZ5hnNRBFsc', // Same video ID as example
    },
  ]

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

      <Box
        sx={{
          marginTop: { md: "-75px", sm: "40px", xs: "40px" },
          display: "none",
          justifyContent: "flex-end",
          maxWidth: "1532.68px",
          paddingBottom: "70px",
          textTransform: "capitalize",
        }}
      >
        <Tabs
          value={tab}
          onChange={(e, v) => setTab(v)}
          aria-label="basic tabs example"
          indicatorColor="rgba(0,0,0,0)"
          sx={{
            textTransform: "capitalize",
            backgroundColor: "#F7F7F7",
            padding: "12px 11px",
            fontFamily: "Inter",
            fontSize: { xs: "14px", md: "16px" },
            lineHeight: "1.5",
            borderRadius: "20px",
          }}
        >
          <Tab
            value="All"
            label="All"
            sx={{
              color: "#939393",
              fontSize: { xs: "14px", md: "16px" },
              textTransform: "capitalize",
              lineHeight: "1.5",
              "&::selection": {
                backgroundColor: "#ffcc00", // Change to your preferred color
                color: "#ffffff", // Change to your preferred color
              },
              "&.Mui-selected": {
                borderRadius: "15px",
                backgroundColor: "black",
                borderBottom: "none",
                color: "white", // Change text color when selected
                fontWeight: "bold", // Apply bold font weight when selected
              },
            }}
          />
          <Tab
            value="Vector"
            label="Vector"
            sx={{
              textTransform: "capitalize",
              color: "#939393",
              fontSize: { xs: "14px", md: "16px" },
              lineHeight: "1.5",
              "&::selection": {
                backgroundColor: "#ffcc00", // Change to your preferred color
                color: "#ffffff", // Change to your preferred color
              },
              "&.Mui-selected": {
                borderRadius: "15px",
                backgroundColor: "black",
                borderBottom: "none",
                color: "white", // Change text color when selected
                fontWeight: "bold", // Apply bold font weight when selected
              },
            }}
          />
          <Tab
            value="Logo"
            label="Logo"
            sx={{
              textTransform: "capitalize",
              color: "#939393",
              fontSize: { xs: "14px", md: "16px" },
              lineHeight: "1.5",
              "&::selection": {
                backgroundColor: "#ffcc00", // Change to your preferred color
                color: "#ffffff", // Change to your preferred color
              },
              "&.Mui-selected": {
                borderRadius: "15px",
                backgroundColor: "black",
                borderBottom: "none",
                color: "white", // Change text color when selected
                fontWeight: "bold", // Apply bold font weight when selected
              },
            }}
          />
          <Tab
            value="Video"
            label="Video"
            sx={{
              textTransform: "capitalize",
              color: "#939393",
              fontSize: { xs: "14px", md: "16px" },
              lineHeight: "1.5",
              "&::selection": {
                backgroundColor: "#ffcc00", // Change to your preferred color
                color: "#ffffff", // Change to your preferred color
              },
              "&.Mui-selected": {
                borderRadius: "15px",
                backgroundColor: "black",
                borderBottom: "none",
                color: "white", // Change text color when selected
                fontWeight: "bold", // Apply bold font weight when selected
              },
            }}
          />
          <Tab
            value="Stationery"
            label="Stationery"
            sx={{
              textTransform: "capitalize",
              color: "#939393",
              fontSize: { xs: "14px", md: "16px" },
              lineHeight: "1.5",
              "&::selection": {
                backgroundColor: "#ffcc00", // Change to your preferred color
                color: "#ffffff", // Change to your preferred color
              },
              "&.Mui-selected": {
                borderRadius: "15px",
                backgroundColor: "black",
                borderBottom: "none",
                color: "white", // Change text color when selected
                fontWeight: "bold", // Apply bold font weight when selected
              },
            }}
          />
          <Tab
            value="Social Media"
            label="Social Media"
            sx={{
              textTransform: "capitalize",
              color: "#939393",
              fontSize: { xs: "14px", md: "16px" },
              lineHeight: "1.5",
              "&::selection": {
                backgroundColor: "#ffcc00", // Change to your preferred color
                color: "#ffffff", // Change to your preferred color
              },
              "&.Mui-selected": {
                borderRadius: "15px",
                backgroundColor: "black",
                borderBottom: "none",
                color: "white", // Change text color when selected
                fontWeight: "bold", // Apply bold font weight when selected
              },
            }}
          />
        </Tabs>
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
