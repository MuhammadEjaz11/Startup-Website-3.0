import React, { useEffect } from "react";
import { Box, Button, Typography, Card, colors } from "@mui/material";
import { Carousel } from "@trendyol-js/react-carousel";
import SectionHeading from "../../Components/SectionHeading";
import DesignDevelop from "../../Components/DesignDevelop";
import SectionBox from "../../Components/SectionBox";
import ideaImage from "../../image/idea-01.png";
import aboutImage from "../../image/aboutImage.webp";
import groupOne from "../../image/groupOne.png";
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
import bestChoice from "../../image/bestChoice.png";
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


const blogData= [
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
    { id: 1, 
      question: "Why does Mozack occupy one of the leading ranks among the American companies that offer app development?", 
      answer: "About Mozack Being the best USA app development company, Mozack is distinguished by vast experience, creativity, and the ability to design and implement applications that help businesses evolve." },
    { id: 2, 
      question: "What strategies did Mozack use to guarantee the success of its app development projects?", 
      answer: " Regarded as the best IT solutions provider since we adopt a client approach, at Mozack, we harness and apply the updated technologies and flowing momentum in project handling in delivering successful projects on time with positive returns that are inline with your business principles." },
    { id: 3, 
      question: " Mozack is a startup app development company, so it specialises in certain industries only?", 
      answer: "Healthcare Mozack has developed healthcare customs applications cutting across the health sector, finance Mozack has offered customised financial applications for the finance sector, retail Mozack has offered apps for the retail sector, and e-commerce Mozack has also given e-commerce apps in line with the sector." },
      { id: 4, 
        question: "After an app has been successfully launched, does Mozack help with application support and development?", 
        answer: "Yes, Mozack gives detailed after-launch support and upkeep to ensure that your app remains functional, safe, and optimised with the new advances in technology and user requirement." },
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
              lineHeight: {xl:"36px", md:"25px", xs:"22px"},

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
          That one-stop solution for the unlimited experiences of excellence within the digital services. Since the very beginning this software hub came to life in 2013, and from about that time, it has grown to a tremendous team of over 55 experts committed to their respective fields and providing their contribution in weaving the enhancement within business Our agency offers a full range of solutions, from innovative web design to advanced mobile app development. It is all made sure that the digital presence is second to none. 
          </Typography>
          <Box
            className="ourMission"
            sx={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: "40px",
              flexDirection: { xs: "column", sm: "row" },
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
                Our Mission
              </Typography>
              <Typography
                sx={{
                  fontFamily: "Inter",
                  color: "#939393",
                  fontWeight: 400,
                  lineHeight: {xl:"36px", md:"25px", xs:"22px"},
                  fontSize: {
                    md: "13px",
                    xl: "16px",
                   
                    sm: "14px",
                    xs: "14px",
                  },
                  textAlign: { sm: "left", xs: "left" },
                }}
              >
               A comprehensible mission is to carry through the top-notch marketing and design services digitally which is adjusted to fulfil the needs of the business accordingly. The focus lies within the boosted online presence, the increased user engagement, and driven up revenue. 
              </Typography>
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
            <img src={aboutImage} alt="About Us" style={{ width: "100%" }} />
          </Box>
          <Box
            sx={{
              boxShadow: "0px 1px 62px 0px #00000014",
              borderRadius: "20px",
              padding: "21px 37px 22px 26px",
              backgroundColor: "#FFFFFF",
              position: "relative",
              display: "flex",
              justifyContent: "space-between",
              textAlign: "center",
              maxWidth: "60%",
              minWidth:{xs:"70%", sm:"380px"},
              margin: "0 auto",
              zIndex: "2",
              marginTop: "-60px",
              flexDirection: { xs: "column", sm: "row" },
              border: "none",
              // border:"2px solid red"
            }}
          >
            <Box
              sx={{ display: "flex", marginBottom: { xs: "20px", sm: "0" },  }}
            >
              <img src={groupOne} alt="Group One" />
              <Typography
                sx={{
                  paddingRight: {xl:"50px", md:"14px", xs:"0px"},
                  borderRight: { lg: "1px solid #DBDBDB", sm: "none" },
                  fontSize: "16px",
                  fontFamily: "satoshi",
                  width: {sm:"99px", xs:"100%"},
                  textAlign:"start",
                  
                  marginLeft: "15px !Important",
                  display:"flex",
                  alignItems:"center"
                  
                }}
              >
                Web Clean Design
              </Typography>
            </Box>
            <Box sx={{ display: "flex", margin: { md: "0 auto" } }}>
              <img src={groupTwo} alt="Group Two" />
              <Typography
                sx={{
                  fontSize: "16px",
                  fontFamily: "satoshi",
                  width: {sm:"99px", xs:"100%"},

                  marginLeft: "15px",
                   display:"flex",
                  alignItems:"center"
                }}
              >
                App Development
              </Typography>
            </Box>
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

      <AwardsSlider />

      <DesignDevelop
      content={`At Mozack, we design and develop superior digital products and digital-first brands that stand out in the marketplace. Our commitment to innovation and quality drives us to create solutions that not only meet but exceed the expectations of our clients. Whether you're looking to launch a new brand or revolutionise your existing digital assets, we have the expertise to make it happen`}
      title={`Our Services`}
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
            index={index}png
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
            <img src={gridView} />
            <Typography
              sx={{
                paddingLeft: { md: "23px", sm: "0px" },
                fontWeight: 700,
                fontFamily: "satoshi",
                fontSize: "50px",
              }}
            >
              2013
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
              600+
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
              <img src={work2} />
              <Box
      component="img"
      src={workingArrow}  
      sx={{
        width: "42.29px",
        height: "26.43px",
        display: "flex",
        alignItems: "center",
        transform: {md: 'rotate(0deg)', xs:'rotate(90deg)'},
      }}
    />
            </Box>
            <SectionHeading ourworkTitle="Research"></SectionHeading>
            <Typography
              sx={{
                fontFamily: "Inter",
                fontSize: "16px",
                lineHeight: "36px",
                color: "#939393",
                fontWeight: 400,
              }}
            >
             We start by getting to know your business and market, gathering insights that will drive the strategic direction.
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
              <img src={work1} />
              <Box
      component="img"
      src={workingArrow}  
      sx={{
        width: "42.29px",
        height: "26.43px",
        display: "flex",
        alignItems: "center",
        transform: {md: 'rotate(0deg)', xs:'rotate(90deg)'},
      }}
    />
            </Box>
            <SectionHeading ourworkTitle="Making Strategy"></SectionHeading>
            <Typography
              sx={{
                fontFamily: "Inter",
                fontSize: "16px",
                lineHeight: "36px",
                color: "#939393",
                fontWeight: 400,
              }}
            >
              With thorough research in hand, we craft a tailored strategy that aligns with your business goals and sets the stage for effective implementation.
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
              <img src={work3} />
              <Box
      component="img"
      src={workingArrow}  
      sx={{
        width: "42.29px",
        height: "26.43px",
        display: "flex",
        alignItems: "center",
        transform: {md: 'rotate(0deg)', xs:'rotate(90deg)'},
      }}
    />
            </Box>
            <SectionHeading ourworkTitle="Watch Business Grow"></SectionHeading>
            <Typography
              sx={{
                fontFamily: "Inter",
                fontSize: "16px",
                lineHeight: "36px",
                color: "#939393",
                fontWeight: 400,
              }}
            >
              As we implement our plans, you can watch your business grow. We track progress and adjust tactics to ensure maximum impact.
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
              <img src={work4} />
              <Box
      component="img"
      src={workingArrow}  
      sx={{
        width: "42.29px",
        height: "26.43px",
        display: "flex",
        alignItems: "center",
        transform: {md: 'rotate(0deg)', xs:'rotate(90deg)'},
      }}
    />
            </Box>
            <SectionHeading ourworkTitle="Make Successful"></SectionHeading>
            <Typography
              sx={{
                fontFamily: "Inter",
                fontSize: "16px",
                lineHeight: "36px",
                color: "#939393",
                fontWeight: 400,
              }}
            >
              Our goal is to make every project a success. We continue to refine and optimise our approaches to keep your business at the forefront of its industry.
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
          gap:"1.2rem"
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
            paddingTop: { md: "65px", xs: "0px", xl:"80px" },
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
            value="Website"
            label="Website"
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

      {/* <KeenSliderPortfolio showTabs={true} />  */}
      {/* 
      <Box
        sx={{
          display: "flex",
          gap: "1rem",
          position: "relative",
          left: "50%", // Move the box to the left by 50% of the layout
          right: "50%", // Move the box to the right by 50% of the layout
          marginLeft: "-50vw", // Negative margin to offset left movement
          marginRight: "-50vw", // Negative margin to offset right movement
          width: "100vw", // Full viewport width
          maxWidth: "none",
        }}
      >
        <Carousel useArrowKeys={true} show={4} slide={4} swiping={true}>
          {filteredPortfolioList.map((x, i) => (
            <PortfolioCard
              key={i}
              imageURL={x?.imageURL}
              title={x?.title}
              desc={x?.desc}
            />
          ))}
        </Carousel>
      </Box> */}

      {/* slider for skills */}
      {/* <Box
        sx={{
          backgroundColor: "#1E1E1E",
          paddingTop: "74px",
          paddingBottom: "74px",
          padding:{md:'74px 20px !important', xs:'74px 0px'},
          // border:"2px solid yellow",
          position: "relative",
          left: "50%",                 // Move the box to the left by 50% of the layout
          right: "50%",                // Move the box to the right by 50% of the layout
          marginLeft: "-50vw",         // Negative margin to offset left movement
          marginRight: "-50vw",        // Negative margin to offset right movement
          width: "100vw",              // Full viewport width
          maxWidth: "none",             

        }}
      >
        <Box
          sx={{
            padding:{md:'0px 20px', xs:'0px 20px'},
            maxWidth: "1526px",
            margin: "0 auto",
          }}
        >
<StyledHeading 
  title1="Technologies" 
  sx1={{
    fontFamily: 'satoshi !important', 
    color: 'white', 
    gap: '20px', 
    textAlign: { xs: 'left', md: 'center' } // Align left on small screens, center on medium and larger screens
  }} 
  title2="We Use" 
  sx2={{
    fontFamily: 'satoshi-light !important', 
    color: 'white', 
    textAlign: { xs: 'left', md: 'center' } // Align left on small screens, center on medium and larger screens
  }} 
/>

          <Typography
            sx={{
              maxWidth: "865px",
              lineHeight: "36px",
              color: "#939393",
              fontFamily: "Inter",
              fontSize: { xs: "14px", md: "16px" },
              marginTop: "20px",
              
            }}
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s dummy text ever since the 1500s dummy text ever
          </Typography>
        </Box>
        <Technologies />
        <Box
        
        >

        <TechnologyCarousel
        
        data={technologiesCard}
        />
        </Box>

      </Box> */}

      <TecgnologiesComponent
      content={`At Mozack, we leverage cutting-edge front-end, back-end, and database technologies to build efficient, scalable, and engaging web applications. Our expert team combines industry-standard tools and frameworks to deliver exceptional user experiences and powerful functionalities across all devices.`}
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
          sx1={{ fontFamily: "satoshi !important",
            textAlign: { md: "left", sm: "center", xs: "center",  },
          
           }}
           sx2={{ fontFamily: "satoshi !important",
            textAlign: { md: "left", sm: "center", xs: "center",  },
          
           }}
           styledSx={{
            textAlign: { md: "left", sm: "center", xs: "center", },

           }}
        />
        <StyledHeading
          title1="To Hear From You!"
          sx1={{ fontFamily: "satoshi-light !important",
            textAlign: { md: "left", sm: "center", xs: "center" },
           }}
        />

        <OurTeam />
      </Box>

      <Box
      id="testimonial"
        sx={{
          overflow: { xs: "hidden", xl: "visible", m:{md:"0px", xs:"auto"} },
        }}
      >
        <Testimonial
          data={TestimoialCard}
          sx={{
            overflow: "visible !Important",
          }}
        />
      </Box>

      <Box
        sx={{
          maxWidth: "1526px",
          margin: "0 auto",
          paddingTop: { md: "130px", xs: "40px" },
          paddingBottom: { md: "130px", sm: "60px", xs: "40px" },
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
        sx={{
          paddingLeft: { md: "0px", xs: "0px" },
          paddingRight: { md: "0px", xs: "0px" },

          margin: "0 auto",
          paddingBottom: "73px",
        }}
        id="blogs"
      >
        <StyledHeading
          title1="Our New Posts &"
          sx1={{ fontFamily: "satoshi-light !important" }}
        />
        <StyledHeading
          title1="Articles From The Blog"
          sx1={{ fontFamily: "satoshi !important" }}
        />

        <BlogSlider blogData={blogData} ></BlogSlider>
      </Box>

      <Box
        sx={{
          margin: "0 auto",
          paddingTop: { md: "70px", xs: "80px" },
          paddingBottom: { md: "0px", xs: "0px" },
        }}
      >
        <StyledHeading
          title1="frequently"
          sx1={{ fontFamily: "satoshi-light !important" }}
          title2="asked questions"
          sx2={{ fontFamily: "satoshi !important" }}
          styledSx={{
            display: { md: "block", sm: "flex", xs: "flex" },
          }}
        />
      </Box>
      <Box
        sx={{
          marginTop: "69px",
          overflow: { xs: "hidden", xl: "visible" },
        }}
      >
        <SecondFAQSlider
        data={SecondFaq}
        ></SecondFAQSlider>
      </Box>
      <Box
        sx={{
          marginTop: {
            md: "160px !important",
            sm: "80px !important",
            xs: "50px !important",
          },
        }}
      >
        <ContactForm></ContactForm>
      </Box>
    </>
  );
};

export default Home;
