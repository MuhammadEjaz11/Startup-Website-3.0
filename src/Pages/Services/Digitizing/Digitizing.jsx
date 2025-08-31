import React, { useEffect, useState } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import StyledHeading from "../../../Components/StyledHeading";
import UpperMainPage from "../../../Components/UpperMainPage";
import PortfolioCard from "../../../Components/PortfolioCard";
import ContactForm from "../../../Components/ContactForm";
// import Carousel from "react-material-ui-carousel";
// import { Carousel } from '@trendyol-js/react-carousel
import { Carousel } from "@trendyol-js/react-carousel";

import SecondFAQSlider from "../../../Components/SecondFAQ";
import FAQ from "../../../Components/FAQ";

import ServicesCard from "../../../Components/ServicesCard";
import image1 from "../../../assets/font/MobileApp/image1.png";
import image2 from "../../../assets/font/MobileApp/image2.png";
import image4 from "../../../assets/font/MobileApp/image4.png";
import image3 from "../../../assets/font/MobileApp/image3.png";
import Technologies from "../../../Components/Technologies";
import TechnologyCarousel from "../../../Components/Carousels/TechnologyCarousel/TechnologyCarousel";

import DigitalGroup1 from "../../../assets/font/DigitalMarketing/DigitalGroup1.png";
import DigitalGroup2 from "../../../assets/font/DigitalMarketing/DigitalGroup2.png";
import DigitalGroup3 from "../../../assets/font/DigitalMarketing/DigitalGroup3.png";
import DigitalGroup4 from "../../../assets/font/DigitalMarketing/DigitalGroup4.png";

import sol1 from "../../../assets/font/MobileApp/sol1.png";
import sol2 from "../../../assets/font/MobileApp/sol2.png";
import sol3 from "../../../assets/font/MobileApp/sol3.png";
import sol4 from "../../../assets/font/MobileApp/sol4.png";

import {
  CustomPackageDetail,
  CustomPackageDigitizing,
  MobileAppCard,
  ServiceIcon1,
  ServiceIcon2,
  ServiceIcon3,
} from "../../../../utils";
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

import BlogOne from "../../../image/appB1.webp";
import BlogTwo from "../../../image/appB2.webp";
import BlogThree from "../../../image/appB3.webp";
import starRating from "../../../image/starRating.png";

// importing images for solution section

import {
  Link,
  Button,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
} from "react-scroll";
import DesignDevelop from "../../../Components/DesignDevelop";
import zIndex from "@mui/material/styles/zIndex";
import CustomPackage from "../../../Components/CustomPackage";

const appDevQuestions = [
  {
    id: 1,
    title: "Q1. Mobile App Market Revenue & Growth",
    content:
      "With global smartphone usage soaring, the mobile app market is on a rapid upward trajectory. Market revenue is expected to surpass $935 billion by 2025. Businesses leveraging mobile apps report improved customer engagement and increased ROI. At Patch Makers, we create scalable, high-performance mobile applications that align with your business goals.",
  },
  {
    id: 2,
    title: "Q2. Popular Mobile App Development Frameworks",
    content:
      "React Native, Flutter, and Swift are popular frameworks for building apps. These frameworks offer faster development cycles and cost efficiency. Choosing the right framework depends on project requirements and target audience.",
  },
  {
    id: 3,
    title: "Q3. Mobile App Development Trends In 2024",
    content:
      "Trends include 5G, AI-powered apps, and mobile cloud computing. With the rise of wearable tech, developers are integrating apps with smartwatches and IoT devices. Augmented Reality (AR) will play a bigger role in app development.",
  },
  {
    id: 4,
    title: "Q4. Common Mistakes During App Development",
    content:
      "Poor UX, not testing on multiple devices, and lack of app updates. Failing to align development with user needs is a major pitfall. Avoiding these mistakes leads to higher app engagement and retention.",
  },
];

const blogData = [
  {
    id: 1,
    title: "How Apps Put Your Audience First",
    description:
      "Learn how modern apps enhance user experience and meet audience expectations with innovative features and seamless functionality.",
    image: BlogOne,
    author: "By Admin",
    date: "April 20, 2024",
  },
  {
    id: 2,
    title: "How Apps Put Your Audience First",
    description:
      "Discover how investing in mobile applications can drive engagement, boost retention, and accelerate your business growth.",
    image: BlogTwo,
    author: "By  Admin",
    date: "April 20, 2024",
  },
  {
    id: 3,
    title: "How Apps Put Your Audience First",
    description:
      "Explore the importance of user-focused design and how apps ensure that your customers stay connected and satisfied .",
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
];

const SecondFaq = [
  {
    id: 1,
    title: "Experience & Excellence",
    testimonialText:
      "Patch Makers combines years of experience, cutting-edge technology, and a client-centric approach to deliver exceptional solutions tailored to your needs.",
    starRating: starRating,
    videoId: "mZ5hnNRBFsc", // A valid video ID
  },
  {
    id: 2,
    title: "Quality & Dedication",
    testimonialText:
      "Our team follows a rigorous testing process, uses industry-leading standards, and prioritizes client feedback to deliver high-quality, scalable solutions.",
    starRating: starRating,
    videoId: "mZ5hnNRBFsc", // Corrected video ID from the URL
  },
  {
    id: 3,
    title: "Innovation & Creativity",
    testimonialText:
      " Patch Makers provides a range of services, including Mobile App Development, Custom Software Development, Web Design, and Digital Marketing—all designed to drive innovation and results.",
    starRating: starRating,
    videoId: "mZ5hnNRBFsc", // Same video ID as example
  },
];

const serviceApp = [
  {
    image: "/images/our-services/embroidery digitizing.png",
    title: "Embroidery Digitizing",
    desc: "High-detail digitizing that captures the textures, expressions, and features of animals, perfect for custom wildlife logos, mascots, or pet portraits.",
  },
  {
    image: "/images/our-services/chenill.png",
    title: "Chenille Digitizing",
    desc: "A specialized form of digitizing that creates bold, looped textures using chenille stitches—perfect for varsity jackets, fashionwear, and statement patches.",
  },
  {
    image: "/images/our-services/appliqu.png",
    title: "Applique Digitizing",
    desc: "This involves mapping out fabric areas within the embroidery design, allowing different fabrics to be stitched onto the base material—ideal for bold, layered looks and reduced stitch density.",
  },
  {
    image: "/images/our-services/pxf.png",
    title: "PXF Digitizing",
    desc: "PXF is a file format used by Pulse embroidery software. PXF digitizing ensures designs are created or saved in this format for seamless use in compatible machines and advanced editing.",
  },
];

const serviceApp2 = [
  {
    image: "/images/our-services/cap.png",
    title: "Caps/Hats Digitizing",
    desc: "Small-sized logo digitizing optimized for the left chest area of shirts, polos, and uniforms—focused on clarity and precision in limited space.",
  },
  {
    image: "/images/our-services/left.png",
    title: "Left Chest Digitizing",
    desc: "Digitizing made for curved surfaces like caps and hats, using special stitch techniques to maintain design quality and alignment during embroidery",
  },
  {
    image: "/images/our-services/jacketbag.png",
    title: "Jackets Back Digitizing",
    desc: "Large, bold designs specially digitized for the back of jackets, ensuring clean stitching, proper scaling, and eye-catching detail on thicker fabrics.",
  },
  {
    image: "/images/our-services/animal.png",
    title: "Animal Digitizing",
    desc: "High-detail digitizing that captures the textures, expressions, and features of animals, perfect for custom wildlife logos, mascots, or pet portraits.",
  },
];

const serviceApp3 = [
  {
    image: "/images/our-services/portrait.png",
    title: "Portrait Digitizing",
    desc: "Small-sized logo digitizing optimized for the left chest area of shirts, polos, and uniforms—focused on clarity and precision in limited space.",
  },
  {
    image: "/images/our-services/Patch-digitize.png",
    title: "Patch Digitizing",
    desc: "Digitizing made for curved surfaces like caps and hats, using special stitch techniques to maintain design quality and alignment during embroidery",
  },
  {
    image: "/images/our-services/text.png",
    title: "Small Text",
    desc: "Large, bold designs specially digitized for the back of jackets, ensuring clean stitching, proper scaling, and eye-catching detail on thicker fabrics.",
  },
  {
    image: "/images/our-services/puff.png",
    title: "3d Puff Digitizing",
    desc: "High-detail digitizing that captures the textures, expressions, and features of animals, perfect for custom wildlife logos, mascots, or pet portraits.",
  },
];

const appDevList = [
  {
    imageURL: app3,
    title: "App Development 1",
    desc: "Mobile App Development",
    category: "App Development",
  },
  {
    imageURL: app2,
    title: "App Development 2",
    desc: "Mobile App Development",
    category: "App Development",
  },
  {
    imageURL: app3,
    title: "App Development 3",
    desc: "Mobile App Development",
    category: "App Development",
  },
  {
    imageURL: app2,
    title: "App Development 4",
    desc: "Mobile App Development",
    category: "App Development",
  },
];

const Digitizing = () => {
  const [visibleItems, setVisibleItems] = useState(appDevList.slice(0, 4)); // Initial items to show

  useEffect(()=>{
    const scrollTo = () => {
      scroll.scrollTo(0);
    };
    scrollTo()
  },[])

  const loadMoreItems = () => {
    const newItems = [
      {
        imageURL: app3,
        title: "App Development 5",
        desc: "Mobile App Development",
        category: "App Development",
      },
      {
        imageURL: app2,
        title: "App Development 6",
        desc: "Mobile App Development",
        category: "App Development",
      },
      {
        imageURL: app3,
        title: "App Development 7",
        desc: "Mobile App Development",
        category: "App Development",
      },
      {
        imageURL: app2,
        title: "App Development 8",
        desc: "Mobile App Development",
        category: "App Development",
      },
    ];

    // Append new items to the existing list
    setVisibleItems((prevItems) => [...prevItems, ...newItems]);
  };

  const faqData = [
    {
      id: 1,
      question: "What is your turnaround time for digitizing?",
      answer: "We typically deliver digitized files within 2–4 hours.",
    },
    {
      id: 2,
      question: "How do I place an order?",
      answer:
        "You can send us your design via email or through our website. We’ll get back to you with a quote and start the process.",
    },
    {
      id: 3,
      question: "What file formats do you provide for digitized designs?",
      answer:
        " We provide all major machine formats such as DST, EMB, PES, JEF, and more upon request.",
    },
    {
      id: 4,
      question: "Can I request changes after receiving the design?",
      answer:
        "Absolutely! We offer free minor edits to ensure you’re fully satisfied with the final design.",
    },
  ];

  const digitizingList = [
    {
      imageURL: "/images/our-portfolio/digitize/one.jpg",
      title: "Website Project 1",
      desc: "Web Development",
      category: "Website",
    },
    {
      imageURL: "/images/our-portfolio/digitize/two.jpg",

      title: "Website Project 2",
      desc: "Web Development",
      category: "Website",
    },
    {
      imageURL: "/images/our-portfolio/digitize/three.jpg",

      title: "Website Project 3",
      desc: "Web Development",
      category: "Website",
    },
    {
      imageURL: "/images/our-portfolio/digitize/four.jpg",

      title: "Website Project 4",
      desc: "Web Development",
      category: "Website",
    },
    {
      imageURL: "/images/our-portfolio/digitize/five.jpg",

      title: "Website Project 5",
      desc: "Web Development",
      category: "Website",
    },
    {
      imageURL: "/images/our-portfolio/digitize/six.jpg",

      title: "Website Project 6",
      desc: "Web Development",
      category: "Website",
    },
    {
      imageURL: "/images/our-portfolio/digitize/eight.jpg",

      title: "Website Project 7",
      desc: "Web Development",
      category: "Website",
    },
    {
      imageURL: "/images/our-portfolio/digitize/seven.jpg",

      title: "Website Project 8",
      desc: "Web Development",
      category: "Website",
    },
    {
      imageURL: "/images/our-portfolio/digitize/nine.jpg",

      title: "Website Project 9",
      desc: "Web Development",
      category: "Website",
    },
  ];

  const handleClick = () => {
    loadMoreItems();
    console.log("button clicked");
  };
  const navigate = useNavigate();
  return (
    <>
      <Box
        sx={{
          margin: {
            md: "130px 0px !important",
            xs: "50px 0px !important",
            sm: "50px 0px !important",
          },
        }}
      >
        {/* <UpperMainPage /> */}

        <Box>
          <StyledHeading
            title2="Our"
            title1="Services"
            sx1={{ order: "2" }}
            styledSx={{
              display: "flex",
              justifyContent: { md: "left", sm: "center", xs: "center" },
              alignItems: "center",
            }}
          />
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
          {serviceApp.map((item) => {
            return (
              <ServicesCard
                style={{
                  boxShadow: "0px 31px 62.2px -12px rgba(0, 0, 0, 0.08)",
                  maxWidth: "330px !important",
                  borderRadius: "15px",
                  flexBasis: "25%",
                  flexShrink: "1",
                  height:"470px",
                  marginTop: {
                    md: "-50px",
                    xs: "0px",
                  },
                  img: {
                    width: "100%",
                      height: "200px",
                    objectFit:"contain"
                  },
                  p: { xs: "30px", md: "30px" },
                }}
                iconURL={item.image}
                title={item.title}
                desc={item.desc}
                image={true}
              />
            );
          })}
        </Box>

        <Box
          sx={{
            mt: {md:"140px", xs:"70px"},
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
          {serviceApp2.map((item) => {
            return (
              <ServicesCard
                style={{
                  boxShadow: "0px 31px 62.2px -12px rgba(0, 0, 0, 0.08)",
                  maxWidth: "330px !important",
                  borderRadius: "15px",
                  flexBasis: "25%",
                  flexShrink: "1",
                  height:"400px",

                  marginTop: {
                    md: "-50px",
                    xs: "0px",
                  },
                  img: {
                    width: "100%",
                  },
                  p: { xs: "10px", md: "30px" },
                }}
                iconURL={item.image}
                title={item.title}
                desc={item.desc}
                image={true}
              />
            );
          })}
        </Box>

        <Box
          sx={{
            mt: "140px",
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
          {serviceApp3.map((item) => {
            return (
              <ServicesCard
                style={{
                  boxShadow: "0px 31px 62.2px -12px rgba(0, 0, 0, 0.08)",
                  maxWidth: "330px !important",
                  borderRadius: "15px",
                  flexBasis: "25%",
                  flexShrink: "1",
                  height:"450px",

                  marginTop: {
                    md: "-50px",
                    xs: "0px",
                  },
                  img: {
                    width: "100%",
                    height: "200px",
                    objectFit:"contain"
                  },
                  p: { xs: "10px", md: "30px" },
                }}
                iconURL={item.image}
                title={item.title}
                desc={item.desc}
                image={true}
              />
            );
          })}
        </Box>

        {/* <Box
          sx={{
            mt: "140px"
          }}
        >

          <TecgnologiesComponent content={"At Patch Makers, we assure ourselves of developing outstanding and unique digital solutions by influencing the latest technologies in the industry. Be it evolution of the intuitive user interfaces, broadening back-end systems, powerful analytics-based applications or Patch Makers’s expertise extending across the entire development stack. With a commitment to innovation, we ensure your business achieves its digital transformation goals through anticipated  solutions."}
            heading1={"Enabling The Innovation With Innovative "}
            heading2={"Development Technologies "}
          />

        </Box> */}

        {/* our Solution */}

        <Box>
          <Box
            sx={{
              mt: "90px",
              padding: { xs: "0px 0px !important" },
            }}
          >
            <StyledHeading
              title1="Our Solution"
              title2="Process"
              styledSx={{
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
                  desc="We begin by receiving your artwork or logo and reviewing the design details. Our expert digitizers then convert it into a precise embroidery file using professional software. Every stitch, shape, and color is carefully programmed for the best quality. Once completed, the file is tested for accuracy and emailed to you in your desired format—usually within 2 to 4 hours!"
                  iconURL=""
                  image={false}
                  style={{
                    borderRight: "none",
                    borderTop: "1px solid #F1F1F1",
                    m: { md: "0px 40px", xs: "0px 10px" },
                    p: "10px 0px 30px",
                    // borderBottom:"1px solid #F1F1F1" ,
                  }}
                />

                <ServicesCard
                  desc="Send us your artwork or logo in any format—JPG, PNG, PDF, or even a sketch!"
                  iconURL={"/images/work-process/digitizing/design.svg"}
                  image={true}
                  title="Submit Your Design"
                  style={{
                    borderRight: "none",
                    borderTop: "1px solid #F1F1F1",
                    m: { md: "0px 40px", xs: "0px 10px" },
                    p: "30px 0px",

                    // borderBottom:"1px solid #F1F1F1" ,
                  }}
                />
                <ServicesCard
                  desc="We’ll digitize your design and share a preview with you for approval. Revisions? No problem!"
                  iconURL={"/images/work-process/digitizing/approval.svg"}
                  image={true}
                  title="Get Approval"
                  style={{
                    borderRight: "none",
                    borderTop: "1px solid #F1F1F1",
                    m: { md: "0px 40px", xs: "0px 10px" },
                    p: "30px 0px",

                    // borderBottom:"1px solid #F1F1F1" ,
                  }}
                />
                <ServicesCard
                  desc="Once approved, we deliver the final embroidery file in your preferred format—fast, ready, and stitch-perfect"
                  iconURL={"/images/work-process/digitizing/delivery.svg"}
                  image={true}
                  title="Delivery"
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
        <br />

        <Box
          sx={{
            paddingTop: { md: "130px", sm: "40px", xs: "40px" },
            padding: { sm: "40px 0px", xs: "40px 0px" },
          }}
        >
          <StyledHeading
            title1="Service a Multitude of"
            title2=" Industries, Exceptionally"
            styledSx={{
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
            }}
          >
            {ServiceIcon1.map((item, index) => (
              <ServiceIconBox
                btnText={false}
                btnURL={false}
                key={index}
                style={{
                  width: "100%",
                  borderRight: {
                    md: index < 4 && "1px solid #F1F1F1",
                    xs: "none",
                  },
                  borderBottom: "1px solid #F1F1F1",
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
                  width: "100%",
                  borderRight: {
                    md: index < 4 && "1px solid #F1F1F1",
                    xs: "none",
                  },
                  borderBottom: "1px solid #F1F1F1",
                }}
                index={index}
                iconURL={item?.iconURL}
                title={item?.title}
              />
            ))}
          </Box>
        </Box>

        {/* our portfolio section will be there */}

        <Box
          sx={{
            mt: "80px",
            mb: "120px",
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

          <KeenSliderPortfolio arrayToList={digitizingList} />
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
              onClick={() => navigate("/our-portfolio")}
              title="Load More"
            />
          </Box>
        </Box>

        <Box
          sx={{
            marginTop: {md:"120px", xs:"30px"},
            padding: {
              lg: "0px 20px 70px 20px",
              md: "0px 20px 30px 20px",
              sm: "0px",
              xs: "0px",
            },
          }}
        >
          <LeftRightComponent
            sx1={{
              gap: "10px",
            }}
            styledSx={{
              fontSize: { xl: "40px", md: "30px", sm: "20px", xs: "20px" },
              flexDirection: "column",
              justifyContent: "start",
              textAlign: "start",
            }}
            titleSpan2={"Us"}
            isRow={false}
            title1={"About"}
      
            buttonShow={false}
            image={"/images/about-digitzing.png"}
            content={`AAt Patch Makers, we have been providing high-quality digitizing services for 10 years. Our team of skilled professionals is dedicated to transforming your artwork into the perfect design for embroidery machines. We understand the importance of precision and detail, ensuring that every stitch is flawlessly executed to bring your vision to life. `}
            content3={`EWe use the latest software and techniques to ensure the highest quality output, whether you need a simple logo or a complex, intricate design. Our expertise and commitment to excellence have earned us a reputation for being one of the best in the industry. No matter the complexity of your project, you can trust Patch Makers to deliver a finished product that exceeds your expectations.`}
          />
        </Box>

        {/* Custom Package Section */}

        <StyledHeading
          title1="Our Custom"
          title2="Packages"
          sx={{
            mt:{md:"100px", xs:"70px"},
            gap: "20px",
            marginBottom: { md:"100px", xs:"40px" },
          }}
        />
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            background: "white",
            // boxShadow: "0px 31px 101.9px -12px #8080803d",
            boxShadow: "0px 31px 101.9px -12px #00000014",
            justifyContent: "space-around",
            borderRadius: "15px",
            marginBottom: "120px",
            width: "100%",
            backgroundColor: "#fff",
            // border:"1px solid red",
          }}
        >
          {CustomPackageDigitizing.map((item, index) => (
            <CustomPackage
              index={index}
              key={index}
              month={item?.month}
              PriceTag={item?.PriceTag}
              title={item?.title}
              desc={item?.desc}
              btnText={item?.btnText}
              btnURL={item?.btnURL}
              listItem={item?.listItem}
            />
          ))}
        </Box>

        {/* here i am starting frequestly asked questions  */}

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "0rem",
            mt: "75px",
            padding: { md: "0px 0px", xs: "0px 0px" },
          }}
          id="faqs"
        >
          <StyledHeading title1="frequently" title2=" asked questions" />
          <FAQ faqData={faqData} />
        </Box>

        <Box
          sx={{
            mt: "75px",
            mb: "130px",
            padding: { md: "0px 0px", xs: "0px 0px" },
          }}
        ></Box>
        <Box>
          <ContactForm />
        </Box>
      </Box>
    </>
  );
};

export default Digitizing;
