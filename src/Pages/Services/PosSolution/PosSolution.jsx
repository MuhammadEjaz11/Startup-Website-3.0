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
    question: "What is a POS solution, and why is it important?",
    answer: "A POS solution streamlines the sales process by managing transactions, inventory, and customer data from a single platform, improving efficiency and customer service."
  },
  {
    id: 2,
    question: "Can I customize the POS system for my business?",
    answer: "Yes, Patch Makers’s POS systems are fully customizable to meet the unique needs of your business, whether in retail, hospitality, or services."
  },
  {
    id: 3,
    question: "Are Patch Makers’s POS systems secure?",
    answer: "Absolutely! Our POS solutions include secure payment processing and data encryption to safeguard sensitive customer and business information."
  },
  {
    id: 4,
    question: "How long does it take to deploy a POS system?",
    answer: "Most POS systems are deployed within 4–6 weeks, depending on the complexity and customizations required."
  },

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




const PosSolution = () => {

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
          title1="Optimize Business Processes"
          title2={"with Custom POS Systems"}
          buttonShow={false}
          sx1={{ order: 1 }}
          content={`Patch Makers has implemented over 500 POS solutions across various industries, helping businesses simplify their operations and achieve measurable growth. Our systems enable you to manage sales, inventory, and customer data from a single platform. Businesses using Patch Makers’s POS solutions have reported faster transaction times, better inventory control, and improved customer satisfaction, making them a cornerstone for success in retail and service industries.`}





        />
      </Box>
      <DesignDevelop
        title={`Take Your Business to the Next Level with Patch Makers’s POS Solutions`}
        content={`Ready to modernize your retail operations? Patch Makers’s POS solutions provide the tools you need to streamline transactions, manage inventory, and improve customer satisfaction. Contact us today to learn how our POS systems can help your business thrive.`}
      />


      <Box>
        <Box
          sx={{
            mt: "140px",
          }}
        >
          <StyledHeading title1="Our Process Building POS" title2="Systems That Drive Results" />

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
                desc="Patch Makers follows a detailed process to ensure each POS solution meets your business needs and delivers optimal results:"
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
                desc="We work closely with you to understand your operational challenges and goals."
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
                desc="Our team designs and develops a POS system tailored to your unique requirements."
                iconURL={sol2}
                image={true}
                title="Custom Development"
                style={{
                  borderRight: "none",
                  borderTop: "1px solid #F1F1F1",
                  m: { md: "0px 40px", xs: '0px 10px' },
                  p: "30px 0px",



                  // borderBottom:"1px solid #F1F1F1" ,
                }}
              />
              <ServicesCard
                desc=": The POS system is integrated with your existing tools, including inventory, CRM, and accounting platforms."
                iconURL={sol3}
                image={true}
                title="Seamless Integration"
                style={{
                  borderRight: "none",
                  borderTop: "1px solid #F1F1F1",
                  m: { md: "0px 40px", xs: '0px 10px' },
                  p: "30px 0px",



                  // borderBottom:"1px solid #F1F1F1" ,
                }}
              />

              <ServicesCard
                desc="Rigorous testing ensures reliability, speed, and security before deployment."
                iconURL={sol4}
                image={true}
                title="Testing and Deployment"
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

        <TecgnologiesComponent content={"Patch Makers utilizes cutting-edge technologies to deliver high-performance POS systems:"}
          title={[
            "*Languages*: Python, PHP, JavaScript",
            "*Frameworks*: Laravel, React.js, Angular",
            "8Databases*: MySQL, MongoDB, PostgreSQL",
            "*Cloud Platforms*: AWS, Azure"
          ]}
          heading1={"Technologies We Use for"}
          heading2={"LMS Development"}
        />

      </Box>

      {/* qustions component */}
      <Box sx={{
        margin: { md: "120px 0", sm: "60px 0", xs: "40px 0" },
        maxWidth: '1525px',
      }}
      >
        <StyledHeading title1='Optimize Business Processes' title2=' with Custom POS Systems' />
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
          Patch Makers has implemented over 500 POS solutions across various industries, helping businesses simplify their operations and achieve measurable growth. Our systems enable you to manage sales, inventory, and customer data from a single platform. Businesses using Patch Makers’s POS solutions have reported faster transaction times, better inventory control, and improved customer satisfaction, making them a cornerstone for success in retail and service industries.
        </Typography>
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
          title1="Why Choose Patch Makers’s"
          title2={"POS  Solutions?"}
          buttonShow={false}
          sx1={{ order: 1 }}
          content={`POS systems are essential for businesses seeking to enhance efficiency, streamline operations, and provide superior customer service. Patch Makers’s customizable POS platforms are designed to handle high transaction volumes, simplify inventory management, and provide real-time insights into business performance. With advanced features and a user-friendly interface, Patch Makers’s POS systems are the ideal choice for businesses looking to modernize their operations and stay competitive.`}

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

export default PosSolution