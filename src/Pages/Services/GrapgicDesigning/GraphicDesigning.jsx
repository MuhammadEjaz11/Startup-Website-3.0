import React, {useEffect} from "react";

import { Box } from '@mui/material';
import LeftRightComponent from '../../../Components/LeftRightComponent';
import GraphicCard from '../../../Components/GraphicCard';
import Graphic from '../../../assets/font/GraphicDesigning/bannerImage.png';
import FAQ from "../../../Components/FAQ";

// Images for mapping
import image1 from '../../../assets/font/GraphicDesigning/image1.png';
import image2 from '../../../assets/font/GraphicDesigning/image2.png';
import image3 from '../../../assets/font/GraphicDesigning/image3.png';
import image4 from '../../../assets/font/GraphicDesigning/image4.png';
import image5 from '../../../assets/font/GraphicDesigning/image5.png';
import image6 from '../../../assets/font/GraphicDesigning/image6.png';
import heading from '../../../assets/font/GraphicDesigning/headingImage.png';


import { Carousel } from '@trendyol-js/react-carousel';
import PortfolioCard from "../../../Components/PortfolioCard";
import { PortfoliosList } from "../../../../utils";
import StyledHeading from '../../../Components/StyledHeading';
import RoundCircle from '../../../Components/RoundCircle';
import ServicesCard from '../../../Components/ServicesCard';

import laptopImage from "../../../assets/font/MobileApp/appDevImage.png";

import sol1 from "../../../assets/font/MobileApp/sol1.png";
import sol2 from "../../../assets/font/MobileApp/sol2.png";
import sol3 from "../../../assets/font/MobileApp/sol3.png";
import sol4 from "../../../assets/font/MobileApp/sol4.png"; 
import BlogSlider from '../../../Components/OurBlog';
import SecondFAQSlider from '../../../Components/SecondFAQ';
import KeenSliderPortfolio from '../../../Components/KeenSliderPortfolio';
import CustomButton from '../../../Components/Button';

import grap2 from "../../../assets/font/GraphicDesigning/grap2.webp";


import BlogOne from '../../../image/videoB1.webp';
import BlogThree from '../../../image/blog33.webp';
import BlogTwo from '../../../image/appB2.webp';
import starRating from '../../../image/starRating.png';

import logo1 from "../../../assets/font/Logo/l1.jpg";
import logo2 from "../../../assets/font/Logo/l2.jpg";
import logo3 from "../../../assets/font/Logo/l3.jpg";
import logo4 from "../../../assets/font/Logo/l4.jpg";
import logo5 from "../../../assets/font/Logo/l5.jpg";
import logo6 from "../../../assets/font/Logo/l6.jpg";
import logo7 from "../../../assets/font/Logo/l7.jpg";
import logo8 from "../../../assets/font/Logo/l8.jpg";
import logo9 from "../../../assets/font/Logo/l9.jpg";

import {Button, Element, Events, animateScroll as scroll, scrollSpy } from 'react-scroll';




const faqData = [
  {
    id: 1,
    question: "How long does it take to complete a design project?",
    answer: "We typically deliver designs within 3–5 business days, depending on the complexity of the project."
  },
  {
    id: 2,
    question: "Can I request revisions?",
    answer: "Yes, we offer 2–3 free revisions to ensure the final design aligns perfectly with your vision."
  },
  {
    id: 3,
    question: "What file formats do you provide?",
    answer: "We deliver files in formats like PNG, JPEG, PDF, and SVG, suitable for both digital and print use."
  },
  {
    id: 4,
    question: "Do you offer branding packages?",
    answer: "Absolutely! We offer comprehensive branding packages, including logo design, social media kits, and marketing materials, to help establish a cohesive brand identity."
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

const graphicListDetail= [
  
    { imageURL: logo1, title: "Logo Design 1", desc: "Logo Design", category: "logo" },
    { imageURL: logo2, title: "Logo Design 2", desc: "Logo Design", category: "logo" },
    { imageURL: logo3, title: "Logo Design 3", desc: "Logo Design", category: "logo" },
    { imageURL: logo4, title: "Logo Design 4", desc: "Logo Design", category: "logo" },
    { imageURL: logo5, title: "Logo Design 5", desc: "Logo Design", category: "logo" },
    { imageURL: logo6, title: "Logo Design 6", desc: "Logo Design", category: "logo" },
    { imageURL: logo7, title: "Logo Design 7", desc: "Logo Design", category: "logo" },
    { imageURL: logo8, title: "Logo Design 8", desc: "Logo Design", category: "logo" },
    { imageURL: logo9, title: "Logo Design 9", desc: "Logo Design", category: "logo" },
]


const graphicData = [
  {
    iconURL: image1,
    title: "Logo Design",
    desc: "Your logo is the face of your brand. We specialize in designing logos that increase brand recognition by 80% and communicate your business identity effectively.",
  },
  {
    iconURL: image2,
    title: "Social Media Graphics",
    desc: "Stand out on platforms like Instagram, Facebook, and LinkedIn with engaging social media visuals. Our designs are optimized to grab attention, drive engagement, and increase conversions.",
  },
  {
    iconURL: image3,
    title: "Marketing Materials",
    desc: "From eye-catching brochures to impactful flyers, our marketing designs ensure your message is delivered effectively. Professionally designed materials can boost campaign success by up to 65%.",
  },
  {
    iconURL: image4,
    title: "Website Graphics",
    desc: "Enhance your website’s look and feel with responsive, high-quality visuals. We ensure your graphics align with your brand identity and provide an excellent user experience.",
  },
  // {
  //   iconURL: image5,
  //   title: "Creative Solutions",
  //   desc: "Offering innovative solutions for all your creative needs.",
  // },
  // {
  //   iconURL: image6,
  //   title: "Affordable Packages",
  //   desc: "Get affordable packages that suit your business requirements.",
  // },
];

const GraphicDesigning = () => {

  useEffect(()=>{
    const scrollTo = () => {
      scroll.scrollTo(0); // Scrolling to 100px from the top of the page.
    };
    scrollTo()
  },[])

  return (
    <div>
      {/* LeftRightComponent */}
      <Box sx={{ 
        margin: {md:"120px 0", sm:"60px 0", xs:"40px 0"},
         }}>
        <LeftRightComponent 
          styledSx={{
            flexDirection: "column",
            justifyContent: "start",
            textAlign: "start",
          }}
          isRow={false}
          title1={"Affordable solutions for All"}
          title2={"Your creativity needs"}
          buttonShow={true}
          image={Graphic}
          sx1={{ order: 2 }}
          SecondPera={false}
          buttonStyle={{
            maxWidth: "200px",
          }}
          content={`We believe creativity doesn’t have to come at a high cost. With over 600+ successful projects, we deliver innovative and budget-friendly designs that resonate with your target audience. Whether it’s a logo, social media graphics, or marketing materials, we have solutions tailored to your business needs.`}
        />
      </Box>

      <StyledHeading title1="Our Expertise" title2="in Graphic Design" />
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '20px',
          justifyContent: 'space-between',
          margin: {md:"120px 0", sm:"60px 0", xs:"40px 0"},
        }}
      >
        {graphicData.map((data, index) => (
          <Box
          sx={{
            flexBasis:"30%",
            flexGrow:"1"
          
          }}
          >

          <GraphicCard
            key={index}
            iconURL={data.iconURL}
            title={data.title}
            desc={data.desc}
          />
          </Box>
        ))}
      </Box>

    {/* Portfolio Section */}
    <Box
      sx={{
        mt:"80px",
        mb:"120px"
      }}
      >
          <StyledHeading title1="Our" sx1={{fontFamily:'satoshi !important'}} title2="Recent Works"  sx2={{fontFamily:'satoshi-light !important'}} 
     styledSx={{
      display: "flex",
      justifyContent: {md: "left",sm: "center", xs: "center"},
      alignItems: "center",
      mb: "40px",
      // padding:{sm: "0px 20px", xs: "0px 20px"},
    }}
     />

        <KeenSliderPortfolio arrayToList={graphicListDetail} />
        <Box
        sx={{
          mt:"30px",
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


     
      {/* our Solution */}

      <Box>
        <Box
          sx={{
            mt: "40px",
          }}
        >
          <StyledHeading title1="Our Design Process" title2=" for Stunning Results"/>

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
                desc="We begin by understanding your goals, audience, and preferences to develop a strategy for impactful designs."
                iconURL={sol1}
                image={true}
                title="Discovery and Consultation"
                style={{
                  borderRight: "none",
                  borderTop: "1px solid #F1F1F1",
                  m: {md:"0px 40px", xs:'0px 10px'},
                  p: "30px 0px",
                
                  
                  
                  // borderBottom:"1px solid #F1F1F1" ,
                }}
              />
              <ServicesCard
                desc="Using tools like Adobe Illustrator, Photoshop, and Figma, we craft unique concepts tailored to your requirements."
                iconURL={sol2}
                image={true}
                title="Creative Concepting"
                style={{
                  borderRight: "none",
                  borderTop: "1px solid #F1F1F1",
                  m: {md:"0px 40px", xs:'0px 10px'},
                  p: "30px 0px",
                
                  
                  
                  // borderBottom:"1px solid #F1F1F1" ,
                }}
              />
              <ServicesCard
                desc="We refine the chosen concept based on your feedback, ensuring it perfectly aligns with your vision."
                iconURL={sol3}
                image={true}
                title="Development and Refinement"
                style={{
                  borderRight: "none",
                  borderTop: "1px solid #F1F1F1",
                  m: {md:"0px 40px", xs:'0px 10px'},
                  p: "30px 0px",
                
                  
                  
                  // borderBottom:"1px solid #F1F1F1" ,
                }}
              />
              <ServicesCard
                desc="Your designs are delivered in high-quality formats, ready for print, web, or social media use."
                iconURL={sol4}
                image={true}
                title="Final Delivery"
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

          {/* Heading here component */}

          <Box sx={{ 
            margin: {md:"120px 0", sm:"60px 0", xs:"40px 0"},
             }}>
        <LeftRightComponent

          sx1={{ order: 1, display: "block" }}
          sx={
            {
            
            }
          }
            
          
          styledSx={{}}
          isRow={true}
          title1={"Why Choose Our "}
          title2={"Graphic Design Services?"}
          buttonShow={false}
          image={heading  }
          content={`At Mozack, we pride ourselves on delivering exceptional designs backed by:`}
          content2={[
            "*600+ Completed Projects*: Trusted by businesses globally.",
            "*55+ Skilled Designers*:  A creative team dedicated to excellence.",
            "*Timely Delivery*: Most designs completed within *3–5 business days*.",
            "*Affordable Packages*: Solutions tailored to your budget.",

          ]}
        />
      </Box>


        {/* Faqs*/}
        <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "0rem",
          mt: "75px",
        }}
        id="faqs"
      >
        <StyledHeading title1="frequently" title2=" asked questions" />

        <FAQ faqData={faqData} />
      </Box>


{/* now our latest articles and blogs */}
<Box sx={{mt:"70px"}}
        id="blogs"

>
        < StyledHeading title1='Our latest news &' title2='articles from the blog' sx={{
      display:'block'
    }} />
    <BlogSlider blogData={blogData} />
    
        </Box>

        <Box sx={{
         margin: {md:"120px 0", sm:"60px 0", xs:"40px 0"},
          display:"flex",
          flexDirection:"column",
          gap:"1.8rem"
        }} >
          < StyledHeading title1='Frequently ' title2='Asked Questions' sx={{
      display:'flex'
    }} />
             <Box
    sx={{
      overflow:{xs:"hidden", xl:"visible"},
      
      // width:"100%"
    }}
    >
          <SecondFAQSlider data={SecondFaq} />

    </Box>


        </Box>

    </div>
  );
};

export default GraphicDesigning;
