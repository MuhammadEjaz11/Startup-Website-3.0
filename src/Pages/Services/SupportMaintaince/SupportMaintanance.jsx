import React, {useEffect} from 'react'
import { useLocation } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { Typography } from '@mui/material'
import Layout from '../../Layouts/Layout'
// import Box from '@mui/material'
import {Box} from '@mui/material'
import SectionPeragraph from '../../../Components/SectionPeragraph'
import CustomButton from '../../../Components/Button'
import homeSection from "../../../image/homeSection.png";
import gridView from "../../../image/grid-view.png";
import userGroup from "../../../image/user-group.png";
import starSquare from "../../../image/star-square.png";
import arrange from "../../../image/arrange.png";
import supportImage from '../../../image/supportImage.png'
import StyledHeading from '../../../Components/StyledHeading'
import groupFrame from '../../../image/groupFrame.png'
import ServicesCard from '../../../Components/ServicesCard'
import FAQ from '../../../Components/FAQ'
import LeftRightComponent from '../../../Components/LeftRightComponent'
import laptopImage from '../../../assets/font/MobileApp/appDevImage.png'
import BlogSlider from '../../../Components/OurBlog'
import SecondFAQSlider from '../../../Components/SecondFAQ'
import ContactForm from '../../../Components/ContactForm'
import Technologies from "../../../Components/Technologies";
import image9 from '../../../image/image9.png'
import image10 from '../../../image/image10.png'
import image11 from '../../../image/image11.png'
import image12 from '../../../image/image12.png'
import TechnologyCarousel from "../../../Components/Carousels/TechnologyCarousel/TechnologyCarousel";
import {Button, Element, Events, animateScroll as scroll, scrollSpy } from 'react-scroll';

import {
  PortfoliosList,
  services1,
  services2,
  technologiesCard,
  TestimoialCard,
} from "../../../../utils";
import TecgnologiesComponent from '../../../Components/TecgnologiesComponent'

import BlogOne from '../../../image/videoB3.webp';
import BlogThree from '../../../image/blog33.webp';
import BlogTwo from '../../../image/appB2.webp';
import starRating from '../../../image/starRating.png';




const faqData = [
  { id: 1, 
    question: "Why is regular maintenance important?", 
    answer: "Regular maintenance ensures your systems remain updated, secure, and optimized, reducing risks of downtime and performance issues." },
  { id: 2, 
    question: "Do you offer 24/7 support?", 
    answer: "Yes, we provide 24/7 technical support and monitoring to resolve issues promptly." },
  { id: 3, 
    question: "How often do you implement updates?", 
    answer: "We conduct regular updates, security patches, and performance checks based on your system’s needs and business requirements." },
    { id: 4, 
      question: "What is included in your backup solutions?", 
      answer: "Our backup services include automated data backups, 100% recovery assurance, and secure storage to protect your valuable information." },
   
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
const serviceApp = [
  {
    image: image9,
    title: "Regular Updates & Security Patches",
    desc: "We implement timely updates and advanced security patches to protect your systems from vulnerabilities and ensure they meet industry standards.",
  },
  {
    image: image10,
    title: "24/7 Monitoring & Technical Support",
    desc: "With 24/7 monitoring, our team identifies and resolves issues before they impact your business, ensuring your operations remain uninterrupted.",
  },
  {
    image: image11,
    title: "Performance Optimization",
    desc: "We optimize your software and systems for maximum efficiency, reducing load times and improving overall performance by up to 50%.",
  },
  {
    image: image12,
    title: "Backup & Disaster Recovery",
    desc: "Stay protected with reliable data backups and a robust disaster recovery plan. We ensure 100% data integrity and quick restoration in case of any failures.",
  },
];

const SupportMaintanance = () => {

  useEffect(()=>{
    const scrollTo = () => {
      scroll.scrollTo(0); // Scrolling to 100px from the top of the page.
    };
    scrollTo()
  },[])
  const location = useLocation();
  return (
    
    <>
   <Box sx={{ mt:{md:"80px",xs:"40px"} ,
        padding: {lg:"0px 20px 0px 20px", md:"0px 20px 0px 20px", sm:"0px 0px 0px 0px", xs:"0px 0px 0px 0px"},
       }}
      
      >
         <LeftRightComponent
          styledSx={{
            fontSize: {xl:"40px",md:"30px", sm:"20px", xs:"20px"},
            flexDirection: "column",
            justifyContent: "start",
            textAlign: "start",
          }}
          isRow={false}
          title1={"Cost-Effective Solutions"}
          title2={"For Your Business"}
          buttonShow={true}
          image={groupFrame }
          SecondPera={false}
          content={`We offer affordable and proactive support services to keep your systems running smoothly, ensuring 99.9% uptime and improved performance for your digital infrastructure.`}
          sx1={{order:2, flexBasis:"60%"}}
          sx2={{flexBasis:"30%"}}
        />
      </Box>

  <Box
  sx={{
    mt:"140px"
  }}
  >
    <TecgnologiesComponent
    content={`We leverage the latest tools and technologies for seamless support and maintenance, ensuring your systems remain modern, secure, and efficient.`}
    />
  </Box>
      <Box sx={{
      padding:'65px 0px',
      maxWidth:'1525px',
      margin:'0 auto',
    }}>
    <LeftRightComponent
    image={supportImage}
    sx={{
      display:'flex',
      flexDirection: {md:'row-reverse', sm:'column', xs:'column'},
    }}
    styledSx={{
      flexDirection:'row'
    }}
    title1="Why Choose Our Support"
    title2={"& Maintenance Services?"}
    content={` `}
    content2={[
      "*600+ Successful Projects*: Trusted by businesses for long-term support.",
      "*24/7 Support*: Immediate response to critical issues.",
      "*Proactive Solutions*: Prevent problems before they occur.",
      "*Scalable Services*: Flexible options that grow with your business."
    ]}
    buttonShow={false}
    

    
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
    <Box sx={{
      marginBottom:'65px !Important',
      maxWidth:'1526px',
      margin:'0 auto',
    }}>
    <Box sx={{
      mt:"30px"
    }}>
        <StyledHeading title2="& Maintenance Offerings" title1="Our Key Support" sx1={{ order: "0", texttAlign:'center' }} sx={{justifyContent:'center', order:'2', marginBottom:'60px',}}
         styledSx={
          {
            justifyContent: {md:"left", xs:"center"},
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
            md: "space-between",
            xs: "center",
          },
          gap: "15px",
          flexDirection: {
            md: "row",
            xs: "column",
          },
          alignItems: "start",
        }}
      >
        <ServicesCard
        image={true}
          style={{
            border:'1px solid #E9E9E9',
            maxWidth: "300px !important",
            borderRadius: "10px",
            flexBasis: "25%",
            flexShrink: "1",
           
          
          }}
          iconURL={serviceApp[0].image}
          title={serviceApp[0].title}
          desc={serviceApp[0].desc}
          descsx={{
            fontSize: { xs: "13px", xl: "15px" },
          }}
        />
        <ServicesCard
        image={true}
          style={{
            border:'1px solid #E9E9E9',
            maxWidth: "300px !important",
            borderRadius: "10px",
            flexBasis: "25%",
            flexShrink: "1",
            
          }}
          iconURL={serviceApp[1].image}
          title={serviceApp[1].title}
          desc={serviceApp[1].desc}
          descsx={{
            fontSize: { xs: "13px", xl: "15px" },
          }}
        />
        <ServicesCard
        image={true}
          style={{
            border:'1px solid #E9E9E9',
            maxWidth: "300px !important",
            borderRadius: "10px",
            flexBasis: "25%",
            flexShrink: "1",
            
          
          }}
          iconURL={serviceApp[2].image}
          title={serviceApp[2].title}
          desc={serviceApp[2].desc}
          descsx={{
            fontSize: { xs: "13px", xl: "15px" },
          }}
        />
        <ServicesCard
        image={true}
          style={{
            border:'1px solid #E9E9E9',
            maxWidth: "300px !important",
            borderRadius: "10px",
            flexBasis: "25%",
            flexShrink: "1",
            
          }}
          iconURL={serviceApp[3].image}
          title={serviceApp[3].title}
          desc={serviceApp[3].desc}
          descsx={{
            fontSize: { xs: "13px", xl: "15px" },
          }}
        />
      </Box>
    </Box>
    <Box sx={{
      padding:'65px 0px',
      maxWidth:'1525px',
      margin:'0 auto',
    }}>
   <Box sx={{ mt:{md:"80px",xs:"40px"} ,
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
          title1={"Why Choose Our Support &"}
          title2={"Maintenance Services?"}
          buttonShow={false}
          image={laptopImage}
          sx1={{order:2}}
          content2={[
            "*600+ Successful Projects*: Trusted by businesses for long-term support.",
            "*24/7 Support*: Immediate response to critical issues.",
            "*Proactive Solutions*: Prevent problems before they occur.",
            "*Scalable Services*: Flexible options that grow with your business."
          ]}
        />
      </Box>
    </Box>
    
    <Box sx={{
       padding:'65px 0px',
       maxWidth:'1525px',
       margin:'0 auto',
    }}
    id="faqs"
    >
    < StyledHeading title1='frequently' title2=' asked questions'
     styledSx={
      {
        justifyContent: {md:"left", xs:"center"},
        color: "#1E1E1E",
        textAlign: "center",
      }}
    />
    <FAQ faqData={faqData} />
    </Box>
    <Box sx={{
       padding:'65px 0px',
       
       margin:'0 auto',
    }}
    id="blogs"
    
    >
    < StyledHeading title1='Our latest news &' title2='articles from the blog' sx={{
      display:'block'
    }}
    styledSx={
      {
        justifyContent: {md:"left", xs:"center"},
        color: "#1E1E1E",
        textAlign: "center",
      }}
    />
    <BlogSlider blogData={blogData} />
    </Box>
    <Box sx={{
       padding:'65px 0px',
       
       margin:'0 auto',
    }}>
    < StyledHeading title1='frequently' title2=' asked questions' sx={{
      marginBottom:'69px',
    }}
    styledSx={
      {
        justifyContent: {md:"left", xs:"center"},
        color: "#1E1E1E",
        textAlign: "center",
      }}
    />
       <Box
    sx={{
      overflow:{xs:"hidden", xl:"visible"},
      
      // width:"100%"
    }}
    >
          <SecondFAQSlider data={SecondFaq} />

    </Box>
    </Box>
    <Box sx={{
       padding:'65px 0px',
       
       margin:'0 auto',
    }}>
    <ContactForm/>
    </Box>
    
   
    
    </>
  )
}

export default SupportMaintanance