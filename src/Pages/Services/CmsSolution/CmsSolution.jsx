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



import {Button, Element, Events, animateScroll as scroll, scrollSpy } from 'react-scroll';



const faqData = [
  {
    id: 1,
    question: "What is CMS, and why do I need it?",
    answer: "A CMS (Content Management System) allows you to manage, edit, and publish website content without coding knowledge. It ensures faster updates and improved user experience."
  },
  {
    id: 2,
    question: "Do you provide CMS customization?",
    answer: "Yes, we offer custom CMS solutions tailored to your business requirements, including integrations with third-party tools."
  },
  {
    id: 3,
    question: "What’s the difference between open-source and custom CMS?",
    answer: "Open-source platforms like WordPress are pre-built and flexible, while custom CMS solutions are fully tailored to meet specific needs and offer more scalability."
  },
  {
    id: 4,
    question: "Can you help migrate my existing website to a new CMS?",
    answer: "Absolutely! We provide seamless migration services, ensuring no data loss or downtime during the transition."
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




const CmsSolution = () => {


  useEffect(()=>{
    const scrollTo = () => {
      scroll.scrollTo(0); // Scrolling to 100px from the top of the page.
    };
    // scrollTo()
  },[])
  return (
    <>
   <Box
        sx={{
         margin: {md:"120px 0", sm:"60px 0", xs:"40px 0"},
        }}
      >
         <LeftRightComponent
    image={CmsImage}
    sx={{
      display:'flex',
      flexDirection: {md:'row-reverse', sm:'column', xs:'column'},
    }}
    styledSx={{
      flexDirection:'row'
    }}
    title1="Empowering Businesses with"
    title2={"Custom CMS Development"}
    buttonShow={false}
    sx1={{order:1}}
    content={`With over 600+ CMS projects successfully delivered, we help businesses manage content efficiently and scale effortlessly. Our tailored CMS platforms provide enhanced user experience, flexible design options, and robust functionality.`}

    
    

    
    />
      </Box>
    <DesignDevelop/>
 
   
       

    <Box
        sx={{
         margin: {md:"120px 0", sm:"60px 0", xs:"40px 0"},
        }}
      >
      
    <LeftRightComponent
    image={laptopImage}
    sx={{
      display:'flex',
      flexDirection: {md:'row-reverse', sm:'column', xs:'column'},
    }}
    styledSx={{
      flexDirection:'row'
    }}
    title1="CMS Development"
    title2={" Company"}
    buttonShow={false}
    sx1={{order:1}}

    
    

    
    />
    </Box>
      <Box sx={{
        display: {md:'flex', sm:'block', xs:'block'},
      }}>
        <Box sx={{
          marginTop: {xl:'-150px', lg:'-50px', sm:'0px', xs:'0px'},
          padding:{sm:'0px 40px !important'},
          maxWidth: { md:'70%', sm:'40%', xs:'80%'},
          margin: { sm:'0 auto', xs:'0 auto'},
          flexShrink:"1",
          width:"100%",
          display:{lg:"none", xl:"block", xs:"none"}
          // display:"none"
        }}>
          <img src={CmsSecImage} style={{width:"100%"}}  alt="" />
        </Box>
        <Box sx={{ maxWidth: {lg:'506px', xs:"100%"} }}> <Typography
        sx={{
          fontFamily:'Inter',
          fontSize:'16px',
          fontWeight:500,
          lineHeight:'36px',
          color:'#939393',
          paddingTop:'35px',
          paddingLeft:{lg:'48px', xs:"0px"},
        }}
        >
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s Lorem Ipsum is simply dummy text Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s Lorem Ipsum is  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s Lorem Ipsum is  Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </Typography> </Box>
      </Box>
    
    {/* qustions component */}
   <Box  sx={{
      margin: {md:"120px 0", sm:"60px 0", xs:"40px 0"},
      maxWidth:'1525px',
    }}
    >
   <StyledHeading title1='Our Core' title2=' CMS Services'/>
   <br />
    {/* <Typography sx={{
      paddingTop:'40px',
      fontFamily:'Inter',
      fontSize:'16px',
      fontWeight:400,
      lineHeight:'36px',
      color:'#939393',
      paddingBottom:'71px',
    }}>
    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s Lorem Ipsum is simply dummy text Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s Lorem Ipsum is 
    </Typography> */}
    <Questions questions={cmsDevQuestions}  />

   </Box>
   <Box>
        <Box
          sx={{
            mt: "40px",
          }}
        >
          <StyledHeading title1="Our CMS Development" title2=" Process"/>

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
                desc="We follow a structured approach to deliver designs that exceed expectations:"
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
                desc="We evaluate your business needs, audience, and content strategy to design a customized CMS solution."
                iconURL={sol1}
                image={true}
                title="Discovery and Planning"
                style={{
                  borderRight: "none",
                  borderTop: "1px solid #F1F1F1",
                  m: {md:"0px 40px", xs:'0px 10px'},
                  p: "30px 0px",
                
                  
                  
                  // borderBottom:"1px solid #F1F1F1" ,
                }}
              />
              <ServicesCard
                desc="Using cutting-edge technologies, we build an intuitive CMS that supports easy content updates, responsive designs, and SEO optimization."
                iconURL={sol2}
                image={true}
                title="Design and Development"
                style={{
                  borderRight: "none",
                  borderTop: "1px solid #F1F1F1",
                  m: {md:"0px 40px", xs:'0px 10px'},
                  p: "30px 0px",
                
                  
                  
                  // borderBottom:"1px solid #F1F1F1" ,
                }}
              />
              <ServicesCard
                desc="We integrate third-party tools and perform rigorous testing to ensure smooth performance and compatibility."
                iconURL={sol3}
                image={true}
                title="Integration and Testing"
                style={{
                  borderRight: "none",
                  borderTop: "1px solid #F1F1F1",
                  m: {md:"0px 40px", xs:'0px 10px'},
                  p: "30px 0px",
                
                  
                  
                  // borderBottom:"1px solid #F1F1F1" ,
                }}
              />
              <ServicesCard
                desc="After deployment, our team provides training and ongoing support to help you maximize your CMS’s potential."
                iconURL={sol4}
                image={true}
                title="Deployment and Support"
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
    <Box sx={{
      padding:'65px 0px',
      maxWidth:'1525px',
      margin:'0 auto',
    }}>
      <Box sx={{
        display: {md:'flex', sm:'block', xs:'block'},
      }}>
       <Box sx={{
        maxWidth: {md:'39%', sm:'100%', xs:'100%'},
        padding:{md:'0px 0px 0px 0px', sm:'0px 20px 0px 0px', xs:'0px 20px 0px 0px'},
        mb:{md:"0px", xs:"30px"}
       }}>
       <StyledHeading title1='Excellence And Robustness' title2='Through CMS Solutions' sx={{
          display:'block',
        }}  />
       </Box>
        <Box>
          <SectionPeragraph title="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s Lorem Ipsum is simply dummy text Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s Lorem Ipsum is  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
          sx1={{ 
            marginTop :'0px !important',
          }}
          sx={{
            marginTop :'0px !important',
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
    {/* <Box sx={{
      background:"#ACACAC42",
      position: "relative",
      left: "50%", 
      right: "50%", 
      marginLeft: "-50vw", 
      marginRight: "-50vw", 
      width: "100vw", 
      maxWidth: "none",
    }}>
    <Box sx={{
      
      padding:'65px 30px',
      maxWidth:'1525px',
      margin:'0 auto',
   }}>
   < StyledHeading title1='Our' title2=' Solution' />
   <SolutionFAQ />
   </Box>
    </Box> */}
    
    <Box
        sx={{
         margin: {md:"120px 0", sm:"60px 0", xs:"40px 0"},
        }}
      >
         <LeftRightComponent
    image={CmsImage}
    sx={{
      display:'flex',
      flexDirection: {md:'row-reverse', sm:'column', xs:'column'},
    }}
    styledSx={{
      flexDirection:'row'
    }}
    title1="CMS Development"
    title2={" Company"}
    buttonShow={false}
    sx1={{order:1}}
  
    />
      </Box>
  
  <Box
  sx={{
    mt:"140px"
  }}
  >
    <TecgnologiesComponent
    content={`We leverage the latest tools to deliver exceptional CMS platforms:`}
    content2={`These technologies ensure your CMS is fast, secure, and scalable.`}
    title={["CMS Platforms: WordPress, Drupal, Joomla",
      "Frontend Frameworks: Next.js, Nuxt.js, Angular",
      "Backend Systems: PHP, Node.js, Python"]}
      

    />
  </Box>


      <Box>
      <Box sx={{
       padding:'130px 0px',
       
       margin:'0 auto',
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
       margin:'0 auto',
    }}
    id="blogs"
    >
    < StyledHeading title1='Our latest news &' title2='articles from the blog' sx={{
      display:'block'
    }} />
    <BlogSlider blogData={blogData} />
    </Box>
    <Box sx={{
       padding:'65px 0px',
       
       margin:'0 auto',
    }}>
    < StyledHeading title1='frequently' title2=' asked questions' sx={{
      marginBottom:'69px',
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
       padding:'65px 0px',
       maxWidth:'1525px',
       margin:'0 auto',
    }}>
    <ContactForm/>
    </Box>
    
   
    
    </>
  )
}

export default CmsSolution