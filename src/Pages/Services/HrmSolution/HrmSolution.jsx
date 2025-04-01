import React from 'react'
import { useState } from "react";
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom'
import { Link } from 'react-router-dom'
import Layout from '../../Layouts/Layout'
// import Box from '@mui/material'
import { Box, Typography, Accordion, AccordionDetails, AccordionSummary } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import SolutionFAQ from '../../../Components/SolutionFAQ';
import SectionPeragraph from '../../../Components/SectionPeragraph'
import DesignDevelop from '../../../Components/DesignDevelop'
import CustomButton from '../../../Components/Button'
import CmsImage from '../../../image/CmsImage.png'
import StyledHeading from '../../../Components/StyledHeading'
import FAQ from '../../../Components/FAQ'
import LeftRightComponent from '../../../Components/LeftRightComponent'
import laptopImage from '../../../assets/font/MobileApp/appDevImage.png'
import BlogSlider from '../../../Components/OurBlog'
import RoundCircle from '../../../Components/RoundCircle'
import SecondFAQSlider from '../../../Components/SecondFAQ'
import ContactForm from '../../../Components/ContactForm'
import Technologies from "../../../Components/Technologies";
import TechnologyCarousel from "../../../Components/Carousels/TechnologyCarousel/TechnologyCarousel";
import CmsSecImage from '../../../assets/font/Cms/image11.png'
import Questions from '../../../Components/Questions';

import BlogOne from '../../../image/videoB3.webp';
import BlogThree from '../../../image/blog33.webp';
import BlogTwo from '../../../image/appB2.webp';
import starRating from '../../../image/starRating.png';

import sol1 from "../../../assets/font/MobileApp/sol1.png";
import sol2 from "../../../assets/font/MobileApp/sol2.png";
import sol3 from "../../../assets/font/MobileApp/sol3.png";
import sol4 from "../../../assets/font/MobileApp/sol4.png";



import { Button, Element, Events, animateScroll as scroll, scrollSpy } from 'react-scroll';



const faqData = [
  {
    id: 1,
    question: "What is an HRM solution, and why is it essential?",
    answer: "An HRM solution automates HR functions like payroll, attendance, and employee management, reducing manual effort and improving efficiency."
  },
  {
    id: 2,
    question: "Can I customize the HRM system for my business?",
    answer: "Yes, we design fully customizable HRM systems tailored to meet your organization’s unique needs."
  },
  {
    id: 3,
    question: "Is the HRM system secure?",
    answer: "Absolutely! We use advanced encryption and cloud-based security protocols to safeguard your sensitive employee data."
  },
  {
    id: 4,
    question: "How long does it take to deploy an HRM system?",
    answer: "Most HRM systems are deployed within 4–6 weeks, depending on the complexity and customizations required."
  },

];
const SecondFaq = [
  {
    id: 1,
    title: 'Experience & Excellence',
    testimonialText:
      "Mozack combines years of experience, cutting-edge technology, and a client-centric approach to deliver exceptional solutions tailored to your needs.",
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
      " Mozack provides a range of services, including Mobile App Development, Custom Software Development, Web Design, and Digital Marketing—all designed to drive innovation and results.",
    starRating: starRating,
    videoId: 'mZ5hnNRBFsc', // Same video ID as example
  },
]


const blogData = [
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

const accordianData = [
  {
    id: 1,
    question: "Employee Management",
    answer: "Centralize employee data and track performance with ease. Improve decision-making with advanced reporting and analytics."
  },
  {
    id: 2,
    question: "Recruitment Solutions",
    answer: "Simplify hiring with tools for job postings, applicant tracking, and interview scheduling. Save up to 40% of recruitment time with automated workflows."
  },
  {
    id: 3,
    question: "Payroll Management",
    answer: "Automate payroll processing, tax calculations, and compliance reporting. Our HRM systems reduce errors by 95% and ensure timely payments."
  },
  {
    id: 4,
    question: "Attendance and Leave Tracking",
    answer: "Monitor employee attendance and manage leave requests with real-time tracking features. Companies using automated attendance systems report a 30% improvement in efficiency."
  },
  {
    id: 5,
    question: "Training and Development",
    answer: "Track employee training progress and schedule learning programs. Empower your team with upskilling opportunities to boost overall productivity."
  },
  {
    id: 6,
    question: "Education",
    answer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
  },
];

import {
  PortfoliosList,
  services1,
  services2,
  technologiesCard,
  TestimoialCard,
  webDevQuestions,
  cmsDevQuestions
} from "../../../../utils";
import SectionHeading from '../../../Components/SectionHeading';
import SectionBox from '../../../Components/SectionBox';
import TecgnologiesComponent from '../../../Components/TecgnologiesComponent';
import ServicesCard from '../../../Components/ServicesCard';




const HrmSolution = () => {

  const str = "Managing payroll is another critical area we address. Our payroll management solutions automate salary processing, tax calculations, and compliance reporting, reducing errors by *95%* and ensuring employees are paid on time, every time. Attendance and leave tracking are also streamlined with real-time monitoring features. Businesses using automated attendance systems report a *30% improvement in efficiency*. Additionally, our HRM systems include tools for training and development, allowing companies to schedule learning programs and track employee progress, ultimately boosting team productivity."

  const renderBoldText = (text) => {
    const parts = text.split(/(\*.*?\*)/g); // Split the text on `*...*`
    return parts.map((part, index) =>
      part.startsWith("*") && part.endsWith("*") ? (
        <strong className="li-tag-rendering" key={index}>{part.slice(1, -1)}</strong>
      ) : (
        part
      )
    );
  };
  useEffect(() => {
    const scrollTo = () => {
      scroll.scrollTo(0); // Scrolling to 100px from the top of the page.
    };
    // scrollTo()
  }, [])
  return (
    <>
      <Box
        sx={{
          margin: { md: "120px 0", sm: "60px 0", xs: "40px 0" },
        }}
      >
        <LeftRightComponent
          image={CmsImage}
          sx={{
            display: 'flex',
            flexDirection: { md: 'row-reverse', sm: 'column', xs: 'column' },
          }}
          styledSx={{
            flexDirection: 'row'
          }}
          title1="Empowering Businesses with"
          title2={"Tailored HRM Systems"}
          buttonShow={false}
          sx1={{ order: 1 }}
          content={`With over *500+ HRM projects successfully deployed*, we deliver feature-rich platforms that automate manual processes and enhance organizational efficiency. Whether you’re a small business or a large enterprise, our solutions scale effortlessly to meet your needs.`}

        />
      </Box>
      <DesignDevelop />

      <Box
        sx={{
          margin: { md: "120px 0", sm: "60px 0", xs: "40px 0" },
        }}
      >

        <LeftRightComponent
          image={laptopImage}
          sx={{
            display: 'flex',
            flexDirection: { md: 'row-reverse', sm: 'column', xs: 'column' },
          }}
          styledSx={{
            flexDirection: 'row'
          }}
          title1="Our Comprehensive"
          title2={"HRM Services"}
          buttonShow={false}
          sx1={{ order: 1 }}
          content={`Our *Employee Management* feature centralizes all employee data in one place, allowing HR teams to track performance, generate reports, and make informed decisions using advanced analytics. For recruitment, Mozack simplifies the hiring process with tools for job postings, applicant tracking, and interview scheduling. This automation saves up to *40% of recruitment time*, helping businesses find top talent faster.`}

        />
      </Box>
     

      <Box>
        <Box
          sx={{
            mt: "140px",
          }}
        >
          <StyledHeading title1="Our HRM Development" title2="Process" />

          <Box
            sx={{
              display: "flex",
              flexDirection: {
                md: "row",
                xs: "column",
              },
              gap: "3rem",
              mt: "20px"
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
                justifyContent: "center"

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
                desc="We follow a structured approach to deliver designs that exceed expectations:"
                iconURL=""
                image={false}
                style={{
                  borderRight: "none",
                  borderTop: "1px solid #F1F1F1",
                  m: { md: "0px 40px", xs: '0px 0px' },
                  p: "10px 0px 30px",
                  // borderBottom:"1px solid #F1F1F1" ,
                }}
              />

              <ServicesCard
                desc="We assess your organization’s needs and challenges to design a customized HRM system that aligns with your goals."
                iconURL={sol1}
                image={true}
                title="Requirement Analysis"
                style={{
                  borderRight: "none",
                  borderTop: "1px solid #F1F1F1",
                  m: { md: "0px 40px", xs: '0px 10px' },
                  p: "30px 0px",



                  // borderBottom:"1px solid #F1F1F1" ,
                }}
              />
              <ServicesCard
                desc="Using cutting-edge technologies, we build scalable and secure HRM platforms tailored to your requirements."
                iconURL={sol2}
                image={true}
                title="System Development"
                style={{
                  borderRight: "none",
                  borderTop: "1px solid #F1F1F1",
                  m: { md: "0px 40px", xs: '0px 10px' },
                  p: "30px 0px",



                  // borderBottom:"1px solid #F1F1F1" ,
                }}
              />
              <ServicesCard
                desc="We integrate third-party tools like payroll software and conduct rigorous testing to ensure a smooth and error-free experience."
                iconURL={sol3}
                image={true}
                title="Integration and Testing"
                style={{
                  borderRight: "none",
                  borderTop: "1px solid #F1F1F1",
                  m: { md: "0px 40px", xs: '0px 10px' },
                  p: "30px 0px",



                  // borderBottom:"1px solid #F1F1F1" ,
                }}
              />
              <ServicesCard
                desc="Our team deploys the system seamlessly and provides training to ensure your HR staff can use it efficiently."
                iconURL={sol4}
                image={true}
                title="Deployment and Training"
                style={{
                  borderRight: "none",
                  borderTop: "1px solid #F1F1F1",
                  m: { md: "0px 40px", xs: '0px 10px' },
                  p: "30px 0px",



                  // borderBottom:"1px solid #F1F1F1" ,
                }}
              />
            </Box>
          </Box>
        </Box>
      </Box>


      <Box
        sx={{
          mt: "140px"
        }}
      >

        <TecgnologiesComponent content={"Mozack’s HRM systems are built using the latest technologies to ensure optimal performance and scalability. We utilize programming languages like Python, PHP, and JavaScript, combined with frameworks such as React.js, Angular, and Laravel. Databases like MySQL, MongoDB, and PostgreSQL provide reliable data storage, while cloud platforms like AWS and Azure deliver secure and scalable infrastructure for our solutions."}
          heading1={"Technologies We Use for "}
          heading2={"HRM Development"}
        />

      </Box>

      {/* qustions component */}
      <Box sx={{
        margin: { md: "120px 0", sm: "60px 0", xs: "40px 0" },
        maxWidth: '1525px',
      }}
      >
        <StyledHeading title1='Our HRM ' title2='Development Process' />
        <br />
        <Typography sx={{
          paddingTop: '40px',
          fontFamily: 'Inter',
          fontSize: '16px',
          fontWeight: 400,
          lineHeight: '36px',
          color: '#939393',
          paddingBottom: '71px',
        }}>
          We begin by conducting a detailed assessment of your organization’s needs and challenges to design a customized HRM system that aligns perfectly with your goals. Using cutting-edge technologies, we then build scalable and secure platforms tailored to your unique requirements.
          <br />
          Once the system is developed, we integrate necessary third-party tools, such as payroll software, and conduct rigorous testing to ensure everything runs smoothly and error-free. After deployment, our team provides comprehensive training for your HR staff, empowering them to use the system efficiently. This approach ensures a seamless transition to advanced HRM tools while minimizing disruption.
        </Typography>
      </Box>

      <Box sx={{
        padding: '65px 0px',
        maxWidth: '1525px',
        margin: '0 auto',
      }}>
        <Box sx={{
          display: { md: 'flex', sm: 'block', xs: 'block', gap: "2rem" },
        }}>
          <Box sx={{
            maxWidth: { md: '39%', sm: '100%', xs: '100%' },
            padding: { md: '0px 0px 0px 0px', sm: '0px 20px 0px 0px', xs: '0px 20px 0px 0px' },
            mb: { md: "0px", xs: "30px" }

          }}>
            <StyledHeading title1='Why HRM Solutions Are Vital' title2=' for Your Business' sx={{
              display: 'block',
            }} />
          </Box>
          <Box>
            <SectionPeragraph title="A robust HRM system helps businesses save time and resources by automating repetitive tasks, ensuring compliance with labor laws and regulations, and enhancing employee engagement through transparent processes. By providing data-driven insights, HRM solutions enable better decision-making and help drive organizational success. Businesses that adopt tailored HRM systems often see an increase in operational efficiency and employee satisfaction."
              sx1={{
                marginTop: '0px !important',
              }}
              sx={{
                marginTop: '0px !important',
                // border:"3px solid red"
              }}
            />
            <CustomButton
              title="Let’s Connect"
              svgColor="white"
              buttonStyle={{
                marginTop: '47px',
                fontWeight: 600,
                textTransform: 'capitalize',
                color: 'white',
                padding: { xs: '12px', md: '20px' },
                fontFamily: 'Outfit',
                fontSize: { xs: '14px', md: '16px' },
                lineHeight: '20.16px',
                backgroundColor: '#1C1C1C',
                borderRadius: '15px',
                width: { xs: '100%', md: 'auto' },

              }}
            />
          </Box>
        </Box>
      </Box>
      <Box sx={{
        background: "#ACACAC42",
        position: "relative",
        left: "50%",
        right: "50%",
        marginLeft: "-50vw",
        marginRight: "-50vw",
        width: "100vw",
        maxWidth: "none",
      }}>
        <Box sx={{

          padding: '65px 30px',
          maxWidth: '1525px',
          margin: '0 auto',
        }}>
          < StyledHeading title1='Our Comprehensive' title2='HRM Services' />
          <SolutionFAQ faqPropData={accordianData} />
        </Box>
      </Box>

      <Box
        sx={{
          margin: { md: "120px 0", sm: "60px 0", xs: "40px 0" },
        }}
      >
        <LeftRightComponent
          image={CmsImage}
          sx={{
            display: 'flex',
            flexDirection: { md: 'row-reverse', sm: 'column', xs: 'column' },
          }}
          styledSx={{
            flexDirection: 'row'
          }}
          title1="Why Choose Mozack for"
          title2={"HRM Solutions?"}
          buttonShow={false}
          sx1={{ order: 1 }}
          content={`Mozack has successfully delivered *500+ HRM projects*, earning a reputation for providing innovative solutions that meet the needs of businesses worldwide. Our advanced automation tools help reduce manual errors by *95%*, while our streamlined development process ensures systems are ready for deployment in as little as *4–6 weeks*. Our HRM solutions are designed to grow with your business, offering scalability and adaptability as your needs evolve.`}
          content2={`Here’s the *HRM Solution* content with enhanced headings, concise keyword-rich paragraphs, and numeric highlights tailored for an HRM (Human Resource Management) solutions page.`}

        />
      </Box>





      <Box>
        <Box sx={{
          padding: '130px 0px',

          margin: '0 auto',
        }}
          id="faqs"
        >
          < StyledHeading title1='frequently' title2=' asked questions' />
          <FAQ
            faqData={faqData}
            sx={{
              padding: '0px 0px 0px 0px',
            }}
          />
        </Box>
      </Box>

      <Box sx={{
        padding: '65px 0px',
        margin: '0 auto',
      }}
        id="blogs"
      >
        < StyledHeading title1='Our latest news &' title2='articles from the blog' sx={{
          display: 'block'
        }} />
        <BlogSlider blogData={blogData} />
      </Box>
      <Box sx={{
        padding: '65px 0px',

        margin: '0 auto',
      }}>
        < StyledHeading title1='frequently' title2=' asked questions' sx={{
          marginBottom: '69px',
        }} />
        <Box
          sx={{
            overflow: { xs: "hidden", xl: "visible" },

            // width:"100%"
          }}
        >
          <SecondFAQSlider
            data={SecondFaq}
          />
        </Box>
      </Box>
      <Box sx={{
        padding: '65px 0px',
        maxWidth: '1525px',
        margin: '0 auto',
      }}>
        <ContactForm />
      </Box>



    </>
  )
}

export default HrmSolution