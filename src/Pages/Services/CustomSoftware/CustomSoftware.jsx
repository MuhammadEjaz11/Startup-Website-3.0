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
import { Carousel } from "@trendyol-js/react-carousel";
import PortfolioCard from "../../../Components/PortfolioCard";
import DesignDevelop from "../../../Components/DesignDevelop";
import SoftwareImage from "../../../image/SoftwareImage.png";
import CustomSoftwareImage from "../../../image/CustomSoftware.png";
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
import RoundCircle from "../../../Components/RoundCircle";
import SecondFAQSlider from "../../../Components/SecondFAQ";
import ContactForm from "../../../Components/ContactForm";
import Technologies from "../../../Components/Technologies";
import image9 from "../../../image/image9.png";
import image10 from "../../../image/image10.png";
import image11 from "../../../image/image11.png";
import image12 from "../../../image/image12.png";
import TechnologyCarousel from "../../../Components/Carousels/TechnologyCarousel/TechnologyCarousel";

import personsImage from "../../../assets/font/WebDevelopment/img1.png";


import sol1 from "../../../assets/font/MobileApp/sol1.png";
import sol2 from "../../../assets/font/MobileApp/sol2.png";
import sol3 from "../../../assets/font/MobileApp/sol3.png";
import sol4 from "../../../assets/font/MobileApp/sol4.png";

import {
  PortfoliosList,
  services1,
  services2,
  technologiesCard,
  TestimoialCard,
} from "../../../../utils";
import KeenSliderPortfolio from "../../../Components/KeenSliderPortfolio";
import TecgnologiesComponent from "../../../Components/TecgnologiesComponent";
// import LeftRightComponent from "../../../Components/LeftRightComponent";
import BlogOne from '../../../image/blog12.webp';
import BlogTwo from '../../../image/blog22.webp';
import BlogThree from '../../../image/blog33.webp';

import csd1 from '../../../assets/font/Cms/csd.webp'
import csd2 from '../../../assets/font/Cms/csd1.webp'
import starRating from '../../../image/starRating.png';



const faqData = [
  { id: 1, 
    question: "What is custom software development?", 
    answer: "Custom software development involves creating software tailored to your business needs rather than relying on generic, off-the-shelf solutions." },
  { id: 2, 
    question: "How long does it take to develop custom software?", 
    answer: "Timelines vary depending on project complexity, but our agile approach ensures faster, high-quality delivery" },
  { id: 3, 
    question: "Will my software be scalable for future growth?", 
    answer: "Yes, our software is designed to scale with your growing business." },
    { id: 4, 
      question: " Do you offer post-launch support?", 
      answer: "Absolutely. We provide ongoing support, updates, and maintenance." },
   
];
const SecondFaq = [
  {
    id: 1,
    title: 'Experience & Excellence',
    testimonialText:
      "Patch Makers combines years of experience, cutting-edge technology, and a client-centric approach to deliver exceptional solutions tailored to your needs.",
    starRating: starRating,
    videoId: 'mZ5hnNRBFsc', // A valid video ID
  },
  {
    id: 2,
    title: 'Quality & Dedication',
    testimonialText:
      "Our team follows a rigorous testing process, uses industry-leading standards, and prioritizes client feedback to deliver high-quality, scalable solutions.",
    starRating: starRating,
    videoId: 'mZ5hnNRBFsc', // Corrected video ID from the URL
  },
  {
    id: 3,
    title: 'Innovation & Creativity',
    testimonialText:
      " Patch Makers provides a range of services, including Mobile App Development, Custom Software Development, Web Design, and Digital Marketing—all designed to drive innovation and results.",
    starRating: starRating,
    videoId: 'mZ5hnNRBFsc', // Same video ID as example
  },
]

const serviceApp = [
  {
    image: image9,
    title: "Advanced Technologies",
    desc: "We utilize the latest tools to build efficient, cutting-edge software.",
  },
  {
    image: image10,
    title: "Flexible Solutions",
    desc: "Our software adapts to your business requirements and future needs.",
  },
  {
    image: image11,
    title: "Transparent Process",
    desc: "We keep you involved at every step for complete clarity and trust.",
  },
  {
    image: image12,
    title: "Cost-Effective Models",
    desc: "Get premium software solutions at budget-friendly pricing without compromising on quality.",
  },
];

const CSD = [
  { imageURL: csd1, title: "Custom Software 1", desc: "Custom Development", category: "Custom Development" },
  { imageURL: csd2, title: "Custom Software 4", desc: "Custom Development", category: "Custom Development" },
  { imageURL: csd1, title: "Custom Software 2", desc: "Custom Development", category: "Custom Development" },
  { imageURL: csd2, title: "Custom Software 3", desc: "Custom Development", category: "Custom Development" }, 
]

const CustomSoftware = () => {
  
    // useEffect(()=>{
    //   const scrollTo = () => {
    //     scroll.scrollTo(0);
    //   };
    //   scrollTo()
    // },[])
  const [tab, setTab] = useState("All");
  const [filteredPortfolioList, setFilteredPortfolioList] = useState(PortfoliosList)

  useEffect(()=>{
    setFilteredPortfolioList(PortfoliosList.filter(e=>e==tab))

  },[tab])
 


  const blogData= [
    {
      id: 1,
      title: "How Agecis Puts Your Audience First",
      description: "Lorem ipsum is simply dummy text of the printing and typesetting industry...",
      image: BlogOne,
      author: "Admin",
      date: "April 20, 2024",
    },
    {
      id: 2,
      title: "How Agecis Puts Your Audience First",
      description: "Lorem ipsum is simply dummy text of the printing and typesetting industry...",
      image: BlogTwo,
      author: "Admin",
      date: "April 20, 2024",
    },
    {
      id: 3,
      title: "How Agecis Puts Your Audience First",
      description: "Lorem ipsum is simply dummy text of the printing and typesetting industry...",
      image: BlogThree,
      author: "Admin",
      date: "April 20, 2024",
    },
    {
      id: 4,
      title: "How Agecis Puts Your Audience First",
      description: "Lorem ipsum is simply dummy text of the printing and typesetting industry...",
      image: BlogTwo,
      author: "Admin",
      date: "April 20, 2024",
    },
  ]
  

  return (
    <>
      <Box sx={{ marginTop: "120px",
        padding: {lg:"0px 20px 0px 20px", md:"0px 20px 0px 20px", sm:"0px", xs:"0px"},
       }}>
        <LeftRightComponent
          styledSx={{
            fontSize: {xl:"40px",md:"30px", sm:"20px", xs:"20px"},
            flexDirection: "column",
            justifyContent: "start",
            textAlign: "start",
          }}
          isRow={false}
          title1={"Your Trusted Custom"}
          title2={"Software Development Partner"}
          buttonShow={false}
          image={SoftwareImage}
          content={"With years of expertise, a skilled team, and a passion for innovation, we deliver software that meets your unique business needs. Partner with us to build scalable, high-performance solutions."}
        />
      </Box>

      <Box
        sx={{
          display: { md: "flex", sm: "block" },
          width: { md: "1509px", sm: "100%" },
          justifyContent: "space-between",
          borderRadius: { xs: "20px", },
          backgroundPosition: {
            md: "center",
            sm: "center !Important",
            xs: "center !Important",
          },
          maxWidth: { md: "80%", sm: "80%" },
          backgroundRepeat: "no-repeat",
          margin: "0 auto",
          backgroundSize: "cover",
          padding: "97px",
          backgroundImage: `url(${homeSection})`,
          color: "white",
          marginBottom: { md: "130px", xs: "50px" },
          textAlign: { md: "left", sm: "center" },
          marginTop: { md: "65px", xs: "50px", sm: "40px" },
          
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
                Skilled Team Members
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
                Satisfied Clients
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
      <Box
        sx={{
          mt: "140px",
        }}
      >
        <TecgnologiesComponent 
        heading1={`Technologies That`}
        heading2={`Power Your Software`}
        content={`We leverage modern tools and technologies to deliver outstanding software solutions:`}
        title={[
          "*Languages*: Python, JavaScript, C#, PHP",
          "*Frameworks*: React, Angular, Node.js, Django",
          "*Databases*: MongoDB, MySQL, PostgreSQL",
          "*Cloud Platforms*: AWS, Azure, Google Cloud"
        ]}
        />
      </Box>
      <Box
        sx={{
          mt: { md: "130px", sm: "65px", xs: "40px" },
          display:"none"
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

        <KeenSliderPortfolio arrayToList={CSD} />
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
          padding: { md: "0px 0px", sm: "0px 20px", xs: "0px 0px" },

          margin: "0 auto",
        }}
      >
        <Box
          sx={{
            marginTop: { xs: "40px" },
          }}
        >
          <Box
            sx={{
              mt: { md: "90px", xs: "0px", sm: "0px" },
              mb: { md: "90px", xs: "0px", sm: "0px" },
              padding: { md: "60px 0px", xs: "0px 0px" },
            }}
          >
            <StyledHeading
              title1="Our Proven Software"
              title2="Development Process"
              styledSx={{
                display: "flex",
                justifyContent: { sm: "center", xs: "center", md: "left" },
                color: "#1E1E1E",
                fontSize: { xs: "30px", md: "40px" },
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
                mt:"5px"
              }}
            >
              <Box
                sx={{
                  flexBasis: {
                    md: "40%",
                    xs: "100%",
                  },
                  flexShrink:"1",
                  mt: { md: "100px", xs: "40px", sm: "40px" },
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
                  desc="At [Your Company Name], we specialize in delivering high-quality, tailored software solutions that meet your business needs. Our team of experienced developers and engineers work closely with clients to design, develop, and deploy custom software that drives innovation, enhances productivity, and fosters growth. Let us help you transform your ideas into powerful software solutions."
                  iconURL=""
                  image={false}
                  style={{
                    borderRight: "none",
                    borderTop: "1px solid #F1F1F1",
                    m: { md: "0px 40px", xs: "0px 10px" },
                    p: { md: "10px 0px 30px", xs: "0px" },
                    // borderBottom:"1px solid #F1F1F1" ,
                  }}
                />

                <ServicesCard
                  desc="We analyze your goals, challenges, and business requirements to create a clear project roadmap."
                  iconURL={sol1}
                  image={true}
                  title="Discovery and Consultation"
                  style={{
                    borderRight: "none",
                    borderTop: "1px solid #F1F1F1",
                    m: { md: "0px 40px", xs: "0px 10px" },
                    p: "30px 0px",

                    // borderBottom:"1px solid #F1F1F1" ,
                  }}
                />
                <ServicesCard
                  desc="Our design team crafts intuitive user experiences and robust system architecture to ensure functionality and scalability."
                  iconURL={sol2}
                  image={true}
                  title="Design and Architecture"
                  style={{
                    borderRight: "none",
                    borderTop: "1px solid #F1F1F1",
                    m: { md: "0px 40px", xs: "0px 10px" },
                    p: "30px 0px",

                    // borderBottom:"1px solid #F1F1F1" ,
                  }}
                />
                <ServicesCard
                  desc="We build custom software solutions using agile methodologies, ensuring quick iterations and seamless integrations."
                  iconURL={sol3}
                  image={true}
                  title="Development and Integration"
                  style={{
                    borderRight: "none",
                    borderTop: "1px solid #F1F1F1",
                    m: { md: "0px 40px", xs: "0px 10px" },
                    p: "30px 0px",

                    // borderBottom:"1px solid #F1F1F1" ,
                  }}
                />
                <ServicesCard
                  desc="Thorough testing, documentation, and smooth deployment guarantee a successful launch. Post-launch support ensures ongoing performance."
                  iconURL={sol4}
                  image={true}
                  title="Documentation & Launch"
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
      </Box>


            <Box
            sx={{
          mt:{xs:"60px",md:"60px" ,xl:"60px"},
              
            }}
            >
      <DesignDevelop
      title={`Ready to Transform Your Business?`}
      content={`Partner with Patch Makers for innovative, scalable, and custom software development solutions. Let's bring your ideas to life. Contact us today!`}
      />

            </Box>
      {/* <Box sx={{ mt: "80px",
        padding: {lg:"0px 20px 0px 20px", md:"0px 20px 0px 20px", sm:"0px 0px 0px 0px", xs:"0px 0px 0px 0px"},
       }}
      
      >
         <LeftRightComponent
          styledSx={{
            fontSize: {xl:"40px",md:"30px", sm:"20px", xs:"20px"},
            // flexDirection: "column",
            // justifyContent: "start",
            display:"flex",
            textAlign: "start",
          }}
          isRow={true}
          title1={"Heading"}
          title2={"Here"}
          buttonShow={false}
          image={SoftwareImage}
          sx1={{order:2}}
        />
      </Box> */}
      <Box
        sx={{
          marginBottom: "65px !Important",
          // maxWidth: "1526px",
          margin: "0 auto",
        }}
      >
        <Box sx={{
          mt:{xs:"60px",md:"80px" ,xl:"120px"}
        }}>
          <StyledHeading
            title1="Why Choose Patch Makers for"
            title2="Custom Software Development?"
            sx1={{ order: "0", texttAlign: "center" }}
            sx={{ justifyContent: "center", order: "2", marginBottom: "60px" }}
            styledSx={{
              justifyContent: { md: "center", xs: "center" },
              color: "#1E1E1E",
              textAlign: "center",
              m:"auto",
              textAlign:"center"
            }}
          />
        </Box>
        <Box
          sx={{
            mt:{xs:"40px",md:"60px" ,xl:"100px"},

            display: "flex",
            justifyContent: {
              md: "space-between",
              xs: "center",
            },
            gap: "15px",
            flexDirection: {
              md: "row",
              xs: "column",
            },
            alignItems: "center",
          }}
        >
          <ServicesCard
            image={true}
            style={{
              border: "1px solid #E9E9E9",
              maxWidth: "300px !important",
              borderRadius: "10px",
              flexBasis: "25%",
              flexShrink: "1",
             
            }}
            iconURL={serviceApp[0].image}
            title={serviceApp[0].title}
            desc={serviceApp[0].desc}
          />
          <ServicesCard
            image={true}
            style={{
              border: "1px solid #E9E9E9",
              maxWidth: "300px !important",
              borderRadius: "10px",
              flexBasis: "25%",
              flexShrink: "1",
              width: "85%",
            }}
            iconURL={serviceApp[1].image}
            title={serviceApp[1].title}
            desc={serviceApp[1].desc}
          />
          <ServicesCard
            image={true}
            style={{
              border: "1px solid #E9E9E9",
              maxWidth: "300px !important",
              borderRadius: "10px",
              flexBasis: "25%",
              flexShrink: "1",
              width: "85%",
             
            }}
            iconURL={serviceApp[2].image}
            title={serviceApp[2].title}
            desc={serviceApp[2].desc}
          />
          <ServicesCard
            image={true}
            style={{
              border: "1px solid #E9E9E9",
              maxWidth: "300px !important",
              borderRadius: "10px",
              flexBasis: "25%",
              flexShrink: "1",
              width: "85%",
            }}
            iconURL={serviceApp[3].image}
            title={serviceApp[3].title}
            desc={serviceApp[3].desc}
          />
        </Box>
      </Box>

      <Box
        sx={{
          padding: {xl:"65px 0px", md: "35px 0px"},
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
          maxWidth: "1525px",
          margin: "0 auto",
        }}
        id="blogs"
      >
        <StyledHeading
          title1="Our latest news &"
          title2="articles from the blog"
          sx={{
            display: "block",
          }}
          styledSx={{
            justifyContent: { md: "left", xs: "center" },
            color: "#1E1E1E",
          }}
          id="blogs"
        />
        <BlogSlider blogData={blogData} />
      </Box>
      <Box
        sx={{
          padding: "65px 0px",
          maxWidth: "1525px",
          margin: "0 auto",
        }}
       
      >
        <StyledHeading
          title1="frequently"
          title2=" asked questions"
          sx={{
            marginBottom: "69px",
          }}
          styledSx={{
            justifyContent: { md: "left", xs: "center" },
            color: "#1E1E1E",
            textAlign: "center",
          }}
        />
        <Box
          sx={{
            overflow: { xs: "hidden", xl: "visible" },

            // width:"100%"
          }}
        >
          <SecondFAQSlider data={SecondFaq} />  
        </Box>
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

export default CustomSoftware;
