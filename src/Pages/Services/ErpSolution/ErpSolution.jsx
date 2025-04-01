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
    question: "What is an ERP solution, and why is it essential?",
    answer: "An ERP solution integrates core business processes such as finance, supply chain, and HR into a single system, improving efficiency and decision-making."
  },
  {
    id: 2,
    question: "Can I customize the ERP system for my business?",
    answer: "Absolutely! Mozack specializes in designing fully customizable ERP systems that align with your unique operational needs."
  },
  {
    id: 3,
    question: "How secure is the ERP system?",
    answer: "Our ERP solutions are built with advanced encryption and cloud-based security measures to safeguard sensitive data."
  },
  {
    id: 4,
    question: "How long does it take to implement an ERP system?",
    answer: "Most ERP systems are deployed within 4–6 weeks, depending on the complexity and level of customization required."
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
  { id: 1, 
    question: "Employee Management", 
    answer: "Centralize employee data and track performance with ease. Improve decision-making with advanced reporting and analytics." },
  { id: 2, 
    question: "Recruitment Solutions", 
    answer: "Simplify hiring with tools for job postings, applicant tracking, and interview scheduling. Save up to 40% of recruitment time with automated workflows." },
  { id: 3, 
    question: "Payroll Management", 
    answer: "Automate payroll processing, tax calculations, and compliance reporting. Our HRM systems reduce errors by 95% and ensure timely payments." },
  { id: 4, 
    question: "Attendance and Leave Tracking", 
    answer: "Monitor employee attendance and manage leave requests with real-time tracking features. Companies using automated attendance systems report a 30% improvement in efficiency." },
    {
      id: 5,
      question: "Training and Development",
      answer:"Track employee training progress and schedule learning programs. Empower your team with upskilling opportunities to boost overall productivity."
    },
    { id: 6, 
        question: "Education", 
        answer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry." },
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




const ErpSolution = () => {

  const str = "One of the standout features of our CRM systems is real-time data tracking, which allows businesses to monitor key metrics such as sales pipelines, conversion rates, and customer feedback. Additionally, with seamless integration capabilities, our CRM solutions connect with third-party tools like email marketing platforms and ERP systems, creating a unified ecosystem for better operational efficiency."

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
          title1="Streamline Operations with"
          title2={"Custom ERP Systems"}
          buttonShow={false}
          sx1={{ order: 1 }}
          content={`With over 500 successful ERP deployments, Mozack has helped businesses across industries automate workflows and improve decision-making. Our ERP systems centralize operations, reduce redundancies, and enhance collaboration between departments. Companies using Mozack’s ERP solutions have seen measurable improvements, including better resource management, reduced operational costs, and increased productivity.`}





        />
      </Box>
      <DesignDevelop 
      title={`Achieve Success with Mozack’s ERP Solutions`}
      content={`Ready to revolutionize your business operations? Mozack’s ERP solutions deliver efficiency, scalability, and growth opportunities tailored to your needs. Contact us today to learn how we can help you streamline processes and achieve your business goals..`}
      />


<Box>
        <Box
          sx={{
            mt: "140px",
          }}
        >
          <StyledHeading title1="Our Process From Design" title2="to Implementation"/>

          <Box
            sx={{
              display: "flex",
              flexDirection: {
                md: "row",
                xs: "column",
              },
              gap: "3rem",
              mt:"20px"
            }}
          >
            <Box
              sx={{
                flexBasis: {
                  md: "40%",
                  xs: "100%",
                },
                mt: "100px",
                display:"flex",
                // alignItems:"center",
                justifyContent:"center"
                
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
                desc="Mozack follows a structured approach to ERP development, ensuring every solution meets the unique demands of your business:"
                iconURL=""
                image={false}
                style={{
                  borderRight: "none",
                  borderTop: "1px solid #F1F1F1",
                  m: {md:"0px 40px", xs:'0px 0px'},
                  p: "10px 0px 30px",
                  // borderBottom:"1px solid #F1F1F1" ,
                }}
              />

              <ServicesCard
                desc=" We begin by understanding your goals, challenges, and operational needs."
                iconURL={sol1}
                image={true}
                title="Requirement Analysis:"
                style={{
                  borderRight: "none",
                  borderTop: "1px solid #F1F1F1",
                  m: {md:"0px 40px", xs:'0px 10px'},
                  p: "30px 0px",
                
                  
                  
                  // borderBottom:"1px solid #F1F1F1" ,
                }}
              />
              <ServicesCard
                desc=" Our team designs scalable ERP platforms tailored to your specifications."
                iconURL={sol2}
                image={true}
                title="Custom Development"
                style={{
                  borderRight: "none",
                  borderTop: "1px solid #F1F1F1",
                  m: {md:"0px 40px", xs:'0px 10px'},
                  p: "30px 0px",
                
                  
                  
                  // borderBottom:"1px solid #F1F1F1" ,
                }}
              />
              <ServicesCard
                desc="Seamless Integration: The system is integrated with your existing tools and software for a cohesive workflow."
                iconURL={sol3}
                image={true}
                title="Seamless Integration"
                style={{
                  borderRight: "none",
                  borderTop: "1px solid #F1F1F1",
                  m: {md:"0px 40px", xs:'0px 10px'},
                  p: "30px 0px",
                
                  
                  
                  // borderBottom:"1px solid #F1F1F1" ,
                }}
              />
              
              <ServicesCard
                desc=" Rigorous testing guarantees performance, reliability, and security."
                iconURL={sol4}
                image={true}
                title="Thorough Testing"
                style={{
                  borderRight: "none",
                  borderTop: "1px solid #F1F1F1",
                  m: {md:"0px 40px", xs:'0px 10px'},
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
          title1="Comprehensive CRM Features"
          title2={"for Every Business Need"}
          buttonShow={false}
          sx1={{ order: 1 }}
          content={`With Mozack’s CRM systems, businesses can manage leads and track their customer journey from start to finish. The platform helps automate repetitive sales tasks such as follow-ups, reminders, and email outreach, saving valuable time and resources. Our CRM solutions also offer robust analytics tools that provide actionable insights into customer behavior, helping businesses make informed decisions to improve satisfaction and retention.`}





        />
      </Box>
      <Box sx={{
        display: { md: 'flex', sm: 'block', xs: 'block' },
      }}>
        <Box sx={{
          marginTop: { xl: '-150px', lg: '-50px', sm: '0px', xs: '0px' },
          padding: { sm: '0px 40px !important' },
          maxWidth: { md: '70%', sm: '40%', xs: '80%' },
          margin: { sm: '0 auto', xs: '0 auto' },
          flexShrink: "1",
          width: "100%",
          display: { lg: "none", xl: "block", xs: "none" }
          // display:"none"
        }}>
          <img src={CmsSecImage} style={{ width: "100%" }} alt="" />
        </Box>
        <Box sx={{ maxWidth: { lg: '506px', xs: "100%" } }}> <Typography
          sx={{
            fontFamily: 'Inter',
            fontSize: '16px',
            fontWeight: 500,
            lineHeight: '36px',
            color: '#939393',
            paddingTop: '35px',
            paddingLeft: { lg: '48px', xs: "0px" },
          }}
        >
          {renderBoldText(str)}
        </Typography> </Box>
      </Box>



      <Box
        sx={{
          mt: "140px"
        }}
      >

        <TecgnologiesComponent content={"Our ERP systems are built using cutting-edge technologies to ensure performance, reliability, and scalability:"}
        title={[
          "*Languages*: Python, PHP, JavaScript",
          "*Frameworks*: Laravel, React.js, Angular",
          "8Databases*: MySQL, MongoDB, PostgreSQL",
          "*Cloud Platforms*: AWS, Azure"
        ]}
          heading1={"Technologies We Use for"}
          heading2={"ERP Development"}
        />

      </Box>

      {/* qustions component */}
      <Box sx={{
        margin: { md: "120px 0", sm: "60px 0", xs: "40px 0" },
        maxWidth: '1525px',
      }}
      >
        <StyledHeading title1='Our CRM Development Process' title2=' for Tailored Results' />
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
         At Mozack, we start by conducting a detailed analysis of your business requirements to design a CRM system that aligns with your specific goals. Our team of experts develops scalable and secure CRM platforms that streamline processes such as customer data management, sales tracking, and marketing automation.
          <br />
          During the integration phase, our CRM systems are connected with existing tools such as email marketing platforms and analytics software, ensuring seamless workflows. Rigorous testing ensures the system performs efficiently, even under high loads. Once deployed, our team provides in-depth training to help your staff make the most of the CRM platform, ensuring you can maximize its potential from day one.
        </Typography>
      </Box>

      <Box sx={{
        padding: '65px 0px',
        maxWidth: '1525px',
        margin: '0 auto',
      }}>
        <Box sx={{
          display: { md: 'flex', sm: 'block', xs: 'block' },
        }}>
          <Box sx={{
            maxWidth: { md: '39%', sm: '100%', xs: '100%' },
            padding: { md: '0px 0px 0px 0px', sm: '0px 20px 0px 0px', xs: '0px 20px 0px 0px' },
            mb: { md: "0px", xs: "30px" }

          }}>
            <StyledHeading title1='Why CRM Solutions Are Essential' title2=' for Your Business' sx={{
              display: 'block',
            }} />
          </Box>
          <Box>
            <SectionPeragraph title="CRM solutions have become a vital component of modern businesses. By automating and streamlining customer relationship processes, a CRM system allows businesses to save time, reduce manual errors, and improve overall efficiency. Organizations using tailored CRM systems often experience higher customer satisfaction levels and improved team collaboration, leading to better revenue growth. Additionally, CRM tools enable businesses to focus on building meaningful relationships by providing data-driven insights for targeted marketing and customer engagement strategies."
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
          title1="Why Choose Mozack’s"
          title2={"ERP Solutions?"}
          buttonShow={false}
          sx1={{ order: 1 }}
          content={`ERP systems are critical for businesses looking to stay competitive in a rapidly changing landscape. Mozack’s ERP platforms simplify complex workflows, reduce manual errors, and improve operational efficiency. Organizations using our solutions report enhanced collaboration, greater scalability, and higher overall profitability. By choosing Mozack, you gain access to customizable systems that adapt to your specific business goals, ensuring long-term success.`}

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

export default ErpSolution