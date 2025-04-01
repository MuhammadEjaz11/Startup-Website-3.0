import React, { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import StyledHeading from "../../../Components/StyledHeading";
import UpperMainPage from "../../../Components/UpperMainPage";
import PortfolioCard from "../../../Components/PortfolioCard";
import ContactForm from "../../../Components/ContactForm";
// import Carousel from "react-material-ui-carousel";
// import { Carousel } from '@trendyol-js/react-carousel
import { Carousel } from '@trendyol-js/react-carousel';

import SecondFAQSlider from '../../../Components/SecondFAQ'
import FAQ from '../../../Components/FAQ'


import ServicesCard from "../../../Components/ServicesCard";
import image1 from "../../../assets/font/MobileApp/image1.png";
import image2 from "../../../assets/font/MobileApp/image2.png";
import image4 from "../../../assets/font/MobileApp/image4.png";
import image3 from "../../../assets/font/MobileApp/image3.png";
import Technologies from "../../../Components/Technologies";
import TechnologyCarousel from "../../../Components/Carousels/TechnologyCarousel/TechnologyCarousel";


import DigitalGroup1 from "../../../assets/font/DigitalMarketing/DigitalGroup1.png"
import DigitalGroup2 from "../../../assets/font/DigitalMarketing/DigitalGroup2.png"
import DigitalGroup3 from "../../../assets/font/DigitalMarketing/DigitalGroup3.png"
import DigitalGroup4 from "../../../assets/font/DigitalMarketing/DigitalGroup4.png"


import sol1 from "../../../assets/font/MobileApp/sol1.png";
import sol2 from "../../../assets/font/MobileApp/sol2.png";
import sol3 from "../../../assets/font/MobileApp/sol3.png";
import sol4 from "../../../assets/font/MobileApp/sol4.png";

import { MobileAppCard, ServiceIcon1, ServiceIcon2, ServiceIcon3 } from "../../../../utils";
import ServiceIconBox from "../../../Components/ServiceIconsBox";


// ------------
import ImageWeb from "../../../image/ImageWeb.png";
import SectionImage from "../../../image/SectionImage.png";
import laptopImage from "../../../assets/font/MobileApp/appDevImage.png";
import Questions from "../../../Components/Questions";

import {
  PortfoliosList,
  services1,
  services2,
  technologiesCard,
  TestimoialCard,
} from "../../../../utils";
import RoundCircle from "../../../Components/RoundCircle";
import CustomButton from "../../../Components/Button";
import LeftRightComponent from "../../../Components/LeftRightComponent";
import BlogSlider from "../../../Components/OurBlog";
import MobileAppDevelopmentCost from "../../../Components/MobileAppDevelopment";
import KeenSliderPortfolio from "../../../Components/KeenSliderPortfolio";
import TecgnologiesComponent from "../../../Components/TecgnologiesComponent";


import app2 from "../../../assets/font/MobileApp/app2.webp";
import app3 from "../../../assets/font/MobileApp/app3.webp";


import BlogOne from '../../../image/appB1.webp';
import BlogTwo from '../../../image/appB2.webp';
import BlogThree from '../../../image/appB3.webp';
import starRating from '../../../image/starRating.png';

// importing images for solution section

import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy } from 'react-scroll';
import DesignDevelop from "../../../Components/DesignDevelop";

const appDevQuestions = [
  { id: 1, title: 'Q1. Mobile App Market Revenue & Growth', content: 'With global smartphone usage soaring, the mobile app market is on a rapid upward trajectory. Market revenue is expected to surpass $935 billion by 2025. Businesses leveraging mobile apps report improved customer engagement and increased ROI. At Mozack, we create scalable, high-performance mobile applications that align with your business goals.' },
  { id: 2, title: 'Q2. Popular Mobile App Development Frameworks', content: 'React Native, Flutter, and Swift are popular frameworks for building apps. These frameworks offer faster development cycles and cost efficiency. Choosing the right framework depends on project requirements and target audience.' },
  { id: 3, title: 'Q3. Mobile App Development Trends In 2024', content: 'Trends include 5G, AI-powered apps, and mobile cloud computing. With the rise of wearable tech, developers are integrating apps with smartwatches and IoT devices. Augmented Reality (AR) will play a bigger role in app development.' },
  { id: 4, title: 'Q4. Common Mistakes During App Development', content: 'Poor UX, not testing on multiple devices, and lack of app updates. Failing to align development with user needs is a major pitfall. Avoiding these mistakes leads to higher app engagement and retention.' },
];

const blogData = [
  {
    id: 1,
    title: "How Apps Put Your Audience First",
    description: "Learn how modern apps enhance user experience and meet audience expectations with innovative features and seamless functionality.",
    image: BlogOne,
    author: "By Admin",
    date: "April 20, 2024",
  },
  {
    id: 2,
    title: "How Apps Put Your Audience First",
    description: "Discover how investing in mobile applications can drive engagement, boost retention, and accelerate your business growth.",
    image: BlogTwo,
    author: "By  Admin",
    date: "April 20, 2024",
  },
  {
    id: 3,
    title: "How Apps Put Your Audience First",
    description: "Explore the importance of user-focused design and how apps ensure that your customers stay connected and satisfied .",
    image: BlogThree,
    author: "By  Admin",
    date: "April 20, 2024",
  },
  // {
  //   id: 4,
  //   title: "How Agecis Puts Your Audience First",
  //   description: "Lorem ipsum is simply dummy text of the printing and typesetting industry...",
  //   image: BlogTwo,
  //   author: "Admin",
  //   date: "April 20, 2024",
  // },
]

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


const serviceApp = [
  {
    image: image1,
    title: "Native App Development",
    desc: "Boost your business with high-performance native mobile apps for iOS and Android, offering superior speed, scalability, platform-specific design, and offline functionality.",
  },
  {
    image: image2,
    title: "Hybrid App Development",
    desc: "Combine the best of both worlds with hybrid app development for seamless cross-platform performance. Our solutions offer cost-efficiency, faster time-to-market, and consistent user experience using React Native, Flutter, and Ionic.",
  },
  {
    image: image3,
    title: "Cross Platform App",
    desc: "Mozack’s expert developers use the latest technologies to create apps with a single codebase, faster development, and wider reach—ideal for startups, SMEs, and businesses seeking cost-effective solutions.",
  },
  {
    image: image4,
    title: "Progressive Web App",
    desc: "Offer a seamless app-like experience on the web with Progressive Web Apps. PWAs combine the best features of web and mobile apps, delivering fast loading times, offline functionality, and cross-browser compatibility. With the aid of these compatible services complied by our developers you can receive the Key Benefits such as Improved SEO, inactive usability, high-speed performance, and low priced development. Above stated advantages sets perfect conditions for your Businesses, looking forward to increasing the experiences of the user interface and reach.",
  },
  // {
  //   image: image4,
  //   title: "Custom Mobile App",
  //   desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text",
  // },
];





const appDevList = [
  { imageURL: app3, title: "App Development 1", desc: "Mobile App Development", category: "App Development" },
  { imageURL: app2, title: "App Development 2", desc: "Mobile App Development", category: "App Development" },
  { imageURL: app3, title: "App Development 3", desc: "Mobile App Development", category: "App Development" },
  { imageURL: app2, title: "App Development 4", desc: "Mobile App Development", category: "App Development" },
];



const AppDevelopment = () => {
  const [visibleItems, setVisibleItems] = useState(appDevList.slice(0, 4)); // Initial items to show

  useEffect(()=>{
    const scrollTo = () => {
      scroll.scrollTo(0);
    };
    scrollTo()
  },[])

  const loadMoreItems = () => {
    const newItems = [
      { imageURL: app3, title: "App Development 5", desc: "Mobile App Development", category: "App Development" },
      { imageURL: app2, title: "App Development 6", desc: "Mobile App Development", category: "App Development" },
      { imageURL: app3, title: "App Development 7", desc: "Mobile App Development", category: "App Development" },
      { imageURL: app2, title: "App Development 8", desc: "Mobile App Development", category: "App Development" },
    ];



    // Append new items to the existing list
    setVisibleItems((prevItems) => [...prevItems, ...newItems]);
  };

  const faqData = [
    { id: 1, 
      question: " How long does it take to develop a mobile app?", 
      answer: "App development timelines vary, but typically range from 3 to 12 months based on complexity and features." },
    { id: 2, 
      question: "Do you offer post-launch app maintenance?", 
      answer: "Yes! Mozack provides ongoing support, updates, and performance optimization." },
    { id: 3, 
      question: "Can you develop apps for both Android and iOS?", 
      answer: " Absolutely. We build native apps (Android & iOS) and cross-platform solutions for broader reach." },
     
  ];
  const handleClick = () => {
    loadMoreItems();
    console.log("button clicked")
  }


  return (
    <>
      <Box

        sx={{
          margin: { md: '130px 0px !important', xs: "50px 0px !important", sm: "50px 0px !important" },
        }}
      >
        {/* <UpperMainPage /> */}

        <Box>
          <StyledHeading title2="Our" title1="Services" sx1={{ order: "2" }} styledSx={{
            display: "flex",
            justifyContent: { md: "left", sm: "center", xs: "center" },
            alignItems: "center",
          }} />
        </Box>
        <Box
          sx={{
            mt: "40px",
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
            style={{
              boxShadow: "0px 31px 62.2px -12px rgba(0, 0, 0, 0.08)",
              maxWidth: "330px !important",
              borderRadius: "15px",
              flexBasis: "25%",
              flexShrink: "1",
              marginTop: {
                md: "-50px",
                xs: "0px",
              },
              p: { xs: "10px", md: "30px" },

            }}
            iconURL={serviceApp[0].image}
            title={serviceApp[0].title}
            desc={serviceApp[0].desc}
            image={true}
          />
          <ServicesCard
            style={{
              boxShadow: "0px 31px 62.2px -12px rgba(0, 0, 0, 0.08)",
              maxWidth: "330px !important",
              borderRadius: "15px",
              flexBasis: "25%",
              flexShrink: "1",
              width: "85%",

            }}
            iconURL={serviceApp[1].image}
            title={serviceApp[1].title}
            desc={serviceApp[0].desc}
            image={true}
          />
          <ServicesCard
            style={{
              boxShadow: "0px 31px 62.2px -12px rgba(0, 0, 0, 0.08)",
              maxWidth: "330px !important",
              borderRadius: "15px",
              flexBasis: "25%",
              flexShrink: "1",
              width: "85%",
              marginTop: {
                md: "-50px",
                xs: "0px",
              },
            }}
            iconURL={serviceApp[2].image}
            title={serviceApp[2].title}
            desc={serviceApp[0].desc}
            image={true}
          />
          <ServicesCard
            style={{
              boxShadow: "0px 31px 62.2px -12px rgba(0, 0, 0, 0.08)",
              maxWidth: "330px !important",
              borderRadius: "15px",
              flexBasis: "25%",
              flexShrink: "1",
              width: "85%",

            }}
            iconURL={serviceApp[3].image}
            title={serviceApp[3].title}
            desc={serviceApp[0].desc}
            image={true}
          />
        </Box>

        <Box
          sx={{
            mt: "140px"
          }}
        >

          <TecgnologiesComponent content={"At Mozack, we assure ourselves of developing outstanding and unique digital solutions by influencing the latest technologies in the industry. Be it evolution of the intuitive user interfaces, broadening back-end systems, powerful analytics-based applications or Mozack’s expertise extending across the entire development stack. With a commitment to innovation, we ensure your business achieves its digital transformation goals through anticipated  solutions."}
            heading1={"Enabling The Innovation With Innovative "}
            heading2={"Development Technologies "}
          />

        </Box>



        {/* our Solution */}

        <Box>
          <Box
            sx={{
              mt: "90px",
              padding: { xs: "0px 0px !important" },
            }}
          >
            <StyledHeading title1="Our Solution" title2="Process" styledSx={{
              display: "flex",
              justifyContent: { md: "left", sm: "center", xs: "center" },
              alignItems: "center",
              mt: "40px",
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
                  desc="At Mozack, our solution process is meticulously designed to provide our clients with seamless, efficient, and scalable solutions. From idea generation to implementation, every step is tailored to ensure your business objectives are met with precision and innovation. Here’s how we transform your vision into a powerful reality."
                  iconURL=""
                  image={false}
                  style={{
                    borderRight: "none",
                    borderTop: "1px solid #F1F1F1",
                    m: { md: "0px 40px", xs: '0px 10px' },
                    p: "10px 0px 30px",
                    // borderBottom:"1px solid #F1F1F1" ,
                  }}
                />

                <ServicesCard
                  desc="We begin with a comprehensive discovery and consultation phase, where we delve deep into understanding your business goals, challenges, and expectations. By identifying key requirements, market trends, and user needs, we lay the foundation for a well-defined strategy. Our experts work closely with you to craft a roadmap that aligns with your objectives in order to achieve the In-depth analysis of business requirements, Identification of pain points and opportunities and the strategic recommendations for your businesses."
                  iconURL={sol1}
                  image={true}
                  title="Discovery and Consultation"
                  style={{
                    borderRight: "none",
                    borderTop: "1px solid #F1F1F1",
                    m: { md: "0px 40px", xs: '0px 10px' },
                    p: "30px 0px",



                    // borderBottom:"1px solid #F1F1F1" ,
                  }}
                />
                <ServicesCard
                  desc="The design and architecture phase focuses on creating intuitive, visually appealing, and functional solutions. From wireframes to prototypes, our UI/UX experts ensure that your platform offers a seamless user experience. Our architectural design emphasizes scalability, security, and performance by the acquaintance of user-centric designs for an enhanced experience. Our developers make sure to provide the clients with the Scalable and secure architecture planning along with the Wireframes, prototypes, and user flow diagrams"
                  iconURL={sol2}
                  image={true}
                  title="Design and Architecture"
                  style={{
                    borderRight: "none",
                    borderTop: "1px solid #F1F1F1",
                    m: { md: "0px 40px", xs: '0px 10px' },
                    p: "30px 0px",



                    // borderBottom:"1px solid #F1F1F1" ,
                  }}
                />
                <ServicesCard
                  desc="In the development stage, our skilled team of developers brings your vision to life. Leveraging cutting-edge technologies and agile development practices, we ensure that your solution is robust, efficient, and future-ready. Throughout the process, we provide regular updates to keep you informed of progress so that your custom designed developmental needs are tailored accordingly. Feature-driven development (FDD)  is also accompanied by our tech scientists for faster delivery and adaptability."
                  iconURL={sol3}
                  image={true}
                  title="Development"
                  style={{
                    borderRight: "none",
                    borderTop: "1px solid #F1F1F1",
                    m: { md: "0px 40px", xs: '0px 10px' },
                    p: "30px 0px",



                    // borderBottom:"1px solid #F1F1F1" ,
                  }}
                />
                <ServicesCard
                  desc="The final phase is also the documentation and launching of the apps, where we ensure everything is set for a smooth rollout. Our team provides detailed technical documentation and user guides to simplify maintenance and scalability of teh applications. Post-launch, we offer continuous support and optimization to keep your solution performing at its peak."
                  iconURL={sol4}
                  image={true}
                  title="Documentation & Launch"
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

        {/* Our Portfolio section at app development */}

        {/* background image with text */}
        {/* 
      <Box
        sx={{
          display: "flex",
          maxWidth: "100%",
          border:"2px solid red",
          margin: "0 auto",
          paddingTop: {md:"80px", sm:"30px", xs:"30px"},
        }}
      >
     <StyledHeading title1="Our" sx1={{fontFamily:'satoshi !important'}} title2="Portfolio" sx2={{fontFamily:'satoshi-light !important'}} 
     styledSx={{
      display: "flex",
      justifyContent: {md: "left",sm: "center", xs: "center"},
      alignItems: "center",
      mt: "40px",
      padding:{sm: "0px 20px", xs: "0px 20px"},
    }}
     />
      </Box>
       <Box
      sx={{
        paddingTop: {md:'70px', sm:'40px', xs:'40px'},
        paddingBottom: {md:'120px', sm:'60px', xs:'60px'},
        display:"flex",
        position: "relative",
        gap: "20px",
      left: "50%", // Move the box to the left by 50% of the layout
      right: "50%", // Move the box to the right by 50% of the layout
      marginLeft: "-50vw", // Negative margin to offset left movement
      marginRight: "-50vw", // Negative margin to offset right movement
      width: "100vw", // Full viewport width
      maxWidth: "none",
      }}
      >
        <Carousel useArrowKeys={true} show={4} slide={4}  swiping={true}>
          {MobileAppCard.map((x, i) => (
            <PortfolioCard
              key={i}
              imageURL={x?.imageURL}
              title={x?.title}
              desc={x?.desc}
            />
          ))}
        </Carousel>
      </Box> */}

        <Box
          sx={{
            mt: "80px",
            mb: "120px",
            display:"none"
          }}
        >
          <StyledHeading title1="Our" sx1={{ fontFamily: 'satoshi !important' }} title2="Portfolio" sx2={{ fontFamily: 'satoshi-light !important' }}
            styledSx={{
              display: "flex",
              justifyContent: { md: "left", sm: "center", xs: "center"},
              alignItems: "center",
              mb: "40px",
              // padding:{sm: "0px 20px", xs: "0px 20px"},
            }}
          />

          <KeenSliderPortfolio arrayToList={visibleItems} />
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
              onClick={handleClick}

            />
          </Box>
        </Box>


        {/* image with background and text full width
      <Box
        sx={{
          backgroundImage: `url(${SectionImage})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          paddingTop: { xs: "80px", md: "141px" },
          paddingBottom: { xs: "60px", md: "102px" },
          // border:"4px solid yellow",
          
          position:"relative",
          
          left: "50%",                 // Move the box to the left by 50% of the layout
          right: "50%",                // Move the box to the right by 50% of the layout
          marginLeft: "-50vw",         // Negative margin to offset left movement
          marginRight: "-50vw",        // Negative margin to offset right movement
          width: "100vw",              // Full viewport width
          maxWidth: "none",   
          // here this box should take the whole width but it is inside the layout and layout is fixed as 1440px but i want it to takethe full width of view port as layout is still 1440px 
        }}
      >
        <Box
          sx={{
            maxWidth: "1518px",
            margin: "0 auto",
            padding: { xs: "0 20px", md: "0" },
            textAlign: { xs: "center", md: "left" },
          }}
        >
          <Box
            sx={{
              display: { xs: "flex", md: "block" },
              justifyContent: "center",
            }}
          >
            <img
              src={ImageWeb}
              alt="Digital Products"
              style={{ maxWidth: "100%", height: "auto" }}
            />
          </Box>

          <Typography
            sx={{
              
              fontFamily: "DM Sans",
              fontWeight: 700,
              textTransform: "capitalize",
              fontSize: { xs: "30px", md: "60px" },
              color: "white",
              lineHeight: { xs: "40px", md: "78.12px" },
              marginTop: { xs: "20px", md: "0" },
            }}
          >
            We design and develop outstanding Digital Products & digital-first
            Brands.
          </Typography>

          <Typography
            sx={{
              maxWidth: { xs: "100%", md: "1227px" },
              fontFamily: "Lato",
              fontSize: { xs: "14px", md: "16px" },
              lineHeight: { xs: "28px", md: "36px" },
              color: "#FFFFFF",
              fontWeight: 400,
              marginTop: "30px",
              textAlign: { xs: "center", md: "left" },
            }}
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s Lorem Ipsum is simply dummy text Lorem Ipsum is
            simply dummy text of the printing and typesetting industry.
          </Typography>

          <Box
            sx={{
              display: "flex",
              justifyContent: { xs: "center", md: "left" },
            }}
          >
            <CustomButton
              svgColor={"black"}
              buttonStyle={{
                fontWeight: 600,
                textTransform: "capitalize",
                color: "#1C1C1C",
                padding: { xs: "15px", md: "20px" },
                marginTop: "20px",
                fontFamily: "Outfit",
                fontSize: { xs: "14px", md: "16px" },
                lineHeight: "20.16px",
                backgroundColor: "#FFFFFF",
                borderRadius: "10px",
              }}
              title="Get Started Now"
              buttonIconBlack={true}
            />
          </Box>
        </Box>
      </Box> */}

        <DesignDevelop 
        title={`Pioneering Digital Product Design and Development for Modern Brands
`}
content={`At Mozack, we transform visionary ideas into remarkable digital products that inspire and engage. Our holistic approach to design and development ensures that every solution we deliver is not only visually stunning but also highly functional, user-friendly, and tailored to meet your business goals.`}
        />
        <Box sx={{
          mt: { md: "130px", xs: "60px", sm: "60px" },
          mb: { md: "130px", xs: "60px", sm: "60px" },
        }}

        >
          <LeftRightComponent
            styledSx={{
              flexDirection: "row",

            }}
            sx1={{
              gap: "1rem",
              mt: "0px",

              pt: "0px"
            }}
            isRow={true}
            title1={"Our Key"}
            title2={"Services"}
            buttonShow={false}
            image={laptopImage}
            buttonStyle={{ visibility: "hidden" }}
            content={` `}
            content2={[
              "UI/UX Design: Create seamless and intuitive user experiences with Mozack’s bespoke UI/UX design services. We craft interfaces that captivate your audience and enhance usability.",
              "Mobile App Development: Build powerful, scalable, and feature-rich mobile applications that cater to your business needs while delighting your users on every device.",
              "Web Development: Launch responsive, secure, and dynamic websites that offer exceptional performance and align perfectly with your brand identity."
            ]}
            content3={`Start your journey with Mozack today and redefine how your audience interacts with your digital products. Contact us now to discuss your project and unlock unparalleled possibilities.`}
          />
        </Box>

        {/* key aspects of mobile app dev */}

        <Box sx={{
          mt: "90px",
        }}
        >
          <StyledHeading
            styledSx={{
              display: "flex",
            }}
            title1="Key Aspects of"
            title2="Mobile App Development"
            title3="You Should Know"
          />
        </Box>
        <Box

          sx={{
            mt: "30px"
          }}
        >
          <Typography sx={{ color: "#939393", fontSize: { xl: "16px", md: "14px", xs: "16px" }, lineHeight: "36px" }} >
          In today's fast-paced digital world, mobile app development has become a cornerstone for businesses looking to thrive. From creating seamless user experiences to adopting the latest technological trends, mobile apps are transforming industries across the globe. Below are the key aspects of mobile app development you should be aware of:
          </Typography>

        </Box>
        <Box
          sx={{
            mt: "60px"
            ,
            padding: { sm: "0 0px", xs: "0 0px", md: "0" },
          }}
        >
          <Questions questions={appDevQuestions} />
        </Box>


        {/* {Cost Of Mobile App Development} */}

        <MobileAppDevelopmentCost />

        {/* here two sections will be made */}

        <Box sx={{
          paddingTop: { md: '130px', sm: '40px', xs: '40px' },
          padding: { sm: '40px 0px', xs: '40px 0px' },
        }}>
          <StyledHeading title1="Industries" title2="We Serve" styledSx={{
            justifyContent: "start",
            paddingBottom: { md: "60px", sm: "40px", xs: "40px" },
          }}
            sx={{
              justifyContent: "center",
            }}
          />
          <Box
            sx={{
              display: { md: "flex", sm: "block" },

              // m: "0 auto",
              // paddingTop: {md:"60px", sm:"40px"},

            }}
          >
            {ServiceIcon1.map((item, index) => (
              <ServiceIconBox
                btnText={false}
                btnURL={false}
                key={index}
                style={{
                  flexBasis: "20%",
                  borderRight: { md: index < 4 && "1px solid #F1F1F1", xs: "none" },
                  // paddingBottom:{ sm:"40px", xs:"40px"},
                  borderBottom: "1px solid #F1F1F1",
                  flexShrink: "1",
                  flexGrow: "1",

                }}
                index={index}
                iconURL={item?.iconURL}
                title={item?.title}
              />
            ))}

          </Box>
          <Box
            sx={{
              display: { md: "flex", sm: "block" },

              // m: "0 auto",
              // paddingTop: {md:"60px", sm:"40px"},

            }}
          >
            {ServiceIcon2.map((item, index) => (
              <ServiceIconBox

                btnText={false}
                btnURL={false}
                key={index}
                style={{
                  flexBasis: "20%",
                  borderRight: { md: index < 4 && "1px solid #F1F1F1", xs: "none" },
                  paddingBottom: { sm: "40px", xs: "40px" },
                  borderBottom: "1px solid #F1F1F1",
                  flexShrink: "1",
                  flexGrow: "1",

                }}
                index={index}
                iconURL={item?.iconURL}
                title={item?.title}
              />
            ))}

          </Box>
          <Box
            sx={{
              display: { md: "flex", sm: "block" },

              // m: "0 auto",
              // paddingTop: {md:"60px", sm:"40px"},

            }}
          >
            {ServiceIcon3.map((item, index) => (
              <ServiceIconBox
                btnText={false}
                btnURL={false}
                key={index}
                style={{
                  flexBasis: "20%",
                  borderRight: { md: index < 4 && "1px solid #F1F1F1", xs: "none" },
                  // paddingBottom:{ sm:"40px", xs:"40px"},
                  borderBottom: "1px solid #F1F1F1",
                  flexShrink: "1",
                  flexGrow: "1",
                  borderBottom: "none !important"


                }}
                index={index}
                iconURL={item?.iconURL}
                title={item?.title}
                sx1={{

                }}
              />
            ))}

          </Box>
        </Box>


        {/* here i am starting frequestly asked questions  */}

        <Box sx={{
          display: "flex", flexDirection: "column", gap: "0rem", mt: "75px",
          padding: { md: "0px 0px", xs: "0px 0px" },
        }}
          id="faqs"
        >
          < StyledHeading title1='frequently' title2=' asked questions' />
          <FAQ 
          faqData={faqData}
          />
        </Box>


        {/* now our latest articles and blogs */}
        <Box sx={{
          mt: "70px",
          padding: { md: "0px 0px", xs: "0px 0px" },
          // m:"auto"
        }}
          id="blogs"
        >
          < StyledHeading title1='Our latest news &' title2='articles from the blog' sx={{
            display: 'block'
          }} />
          
          <BlogSlider blogData={blogData} />
        </Box>



        <Box sx={{
          mt: "75px",
          mb: "130px",
          padding: { md: "0px 0px", xs: "0px 0px" },
        }} >

          < StyledHeading title1='Frequently ' title2='Asked Questions' sx={{
            display: 'flex',
            marginBottom: '69px',


          }} />
          <Box
            sx={{
              overflow: { xs: "hidden", xl: "visible" },

            }}
          >
            <SecondFAQSlider data={SecondFaq} />

          </Box>

        </Box>
        <Box>
          <ContactForm />
        </Box>




      </Box>
    </>
  );
};

export default AppDevelopment;
