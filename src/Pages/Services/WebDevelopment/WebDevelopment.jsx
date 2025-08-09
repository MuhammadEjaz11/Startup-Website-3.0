import { Box, Typography } from "@mui/material";
import React, { useEffect } from "react";
import LeftRightComponent from "../../../Components/LeftRightComponent";
import personsImage from "../../../assets/font/WebDevelopment/personImage.webp";
import personsImage1 from "../../../assets/font/WebDevelopment/headingImage.webp";

import ServicesCard from "../../../Components/ServicesCard";
import service1 from "../../../assets/font/WebDevelopment/service1.png";
import service2 from "../../../assets/font/WebDevelopment/service2.png";
import service3 from "../../../assets/font/WebDevelopment/service3.png";
import service4 from "../../../assets/font/WebDevelopment/service4.png";
import { Carousel } from "@trendyol-js/react-carousel";
import PortfolioCard from "../../../Components/PortfolioCard";
import { technologiesCard } from "../../../../utils";
import StyledHeading from "../../../Components/StyledHeading";
import Technologies from "../../../Components/Technologies";
import TechnologyCarousel from "../../../Components/Carousels/TechnologyCarousel/TechnologyCarousel";
import RoundCircle from "../../../Components/RoundCircle";
import SectionImage from "../../../image/SectionImage.png";
import laptopImage from "../../../assets/font/MobileApp/appDevImage.png";
import ImageWeb from "../../../image/ImageWeb.png";
import FAQ from "../../../Components/FAQ";

import sol1 from "../../../assets/font/MobileApp/sol1.png";
import sol2 from "../../../assets/font/MobileApp/sol2.png";
import sol3 from "../../../assets/font/MobileApp/sol3.png";
import sol4 from "../../../assets/font/MobileApp/sol4.png";
import CustomButton from "../../../Components/Button";
import Questions from "../../../Components/Questions";
import SecondFAQSlider from "../../../Components/SecondFAQ";
import BlogSlider from "../../../Components/OurBlog";
import { PortfoliosList } from "../../../../utils";
import {
  ServiceIcon1,
  ServiceIcon2,
  ServiceIcon3,
  ServiceIcon,
} from "../../../../utils";
import ServiceCard from "../../../Components/ServiceCard";
import ServiceIconBox from "../../../Components/ServiceIconsBox";
import KeenSliderPortfolio from "../../../Components/KeenSliderPortfolio";
import TecgnologiesComponent from "../../../Components/TecgnologiesComponent";

import BlogOne from "../../../image/blog12.webp";
import BlogTwo from "../../../image/blog22.webp";
import BlogThree from "../../../image/blog33.webp";
import starRating from "../../../image/starRating.png";

import web1 from "../../../assets/font/WebDevelopment/1.jpg";
import web2 from "../../../assets/font/WebDevelopment/2.jpg";
import web3 from "../../../assets/font/WebDevelopment/3.jpg";
import web4 from "../../../assets/font/WebDevelopment/4.jpg";
import web5 from "../../../assets/font/WebDevelopment/5.jpg";
import web6 from "../../../assets/font/WebDevelopment/6.jpg";
import web7 from "../../../assets/font/WebDevelopment/7.jpg";
import web8 from "../../../assets/font/WebDevelopment/8.jpg";
import web9 from "../../../assets/font/WebDevelopment/9.jpg";

import {
  Button,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
} from "react-scroll";

import DesignDevelop from "../../../Components/DesignDevelop";

const webDevQuestions = [
  {
    id: 1,
    title: "Q1. Frontend Web Development",
    content:
      "We craft visually stunning, responsive designs that engage users and offer seamless navigation experiences.",
  },
  {
    id: 2,
    title: "Q2. Backend Development",
    content:
      "Our backend solutions ensure robust, secure, and scalable systems to support high-performing websites.",
  },
  {
    id: 3,
    title: "Q3. Full-Stack Development",
    content:
      "From design to deployment, our full-stack development services cover both frontend and backend, ensuring a cohesive solution.",
  },
  {
    id: 4,
    title: "Q4. CMS Solutions",
    content:
      "Simplify your content management with our custom CMS platforms that allow for easy updates, modifications, and scaling without technical expertise.",
  },
];

const serviceApp = [
  {
    image: service1,
    title: "Frontend Web Development",
    desc: "Create visually stunning, fast, and responsive interfaces that captivate users and provide seamless navigation. Our frontend developers bring designs to life using the latest tools and frameworks.",
  },
  {
    image: service2,
    title: "Backend Development",
    desc: "We build powerful, scalable, and secure backend systems that ensure your website functions seamlessly. Our backend development services focus on stability and performance to support your business goals.",
  },
  {
    image: service3,
    title: "Full Stack Development",
    desc: "From design to deployment, our full stack development solutions cover every layer of your web application. We combine frontend and backend expertise to deliver a fully integrated solution.",
  },
  {
    image: service4,
    title: "CMS Solutions",
    desc: "Simplify website management with our custom CMS solutions. Easily update, modify, and manage your website’s content without requiring technical expertise.",
  },
];

const webDevList = [
  {
    imageURL: web1,
    title: "Website Project 1",
    desc: "Web Development",
    category: "Website",
  },
  {
    imageURL: web2,
    title: "Website Project 2",
    desc: "Web Development",
    category: "Website",
  },
  {
    imageURL: web3,
    title: "Website Project 3",
    desc: "Web Development",
    category: "Website",
  },
  {
    imageURL: web4,
    title: "Website Project 4",
    desc: "Web Development",
    category: "Website",
  },
  {
    imageURL: web5,
    title: "Website Project 5",
    desc: "Web Development",
    category: "Website",
  },
  {
    imageURL: web6,
    title: "Website Project 6",
    desc: "Web Development",
    category: "Website",
  },
  {
    imageURL: web7,
    title: "Website Project 7",
    desc: "Web Development",
    category: "Website",
  },
  {
    imageURL: web8,
    title: "Website Project 8",
    desc: "Web Development",
    category: "Website",
  },
  {
    imageURL: web9,
    title: "Website Project 9",
    desc: "Web Development",
    category: "Website",
  },
];

// const blogData = [
//   {
//     id: 1,
//     title: "How Agecis Puts Your Audience First",
//     description: "Lorem ipsum is simply dummy text of the printing and typesetting industry...",
//     image: BlogOne,
//     author: "Admin",
//     date: "April 20, 2024",
//   },
//   {
//     id: 2,
//     title: "How Agecis Puts Your Audience First",
//     description: "Lorem ipsum is simply dummy text of the printing and typesetting industry...",
//     image: BlogTwo,
//     author: "Admin",
//     date: "April 20, 2024",
//   },
//   {
//     id: 3,
//     title: "How Agecis Puts Your Audience First",
//     description: "Lorem ipsum is simply dummy text of the printing and typesetting industry...",
//     image: BlogOne,
//     author: "Admin",
//     date: "April 20, 2024",
//   },
//   {
//     id: 4,
//     title: "How Agecis Puts Your Audience First",
//     description: "Lorem ipsum is simply dummy text of the printing and typesetting industry...",
//     image: BlogTwo,
//     author: "Admin",
//     date: "April 20, 2024",
//   },
// ]

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
      "Mozack combines years of experience, cutting-edge technology, and a client-centric approach to deliver exceptional solutions tailored to your needs.",
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
      " Mozack provides a range of services, including Mobile App Development, Custom Software Development, Web Design, and Digital Marketing—all designed to drive innovation and results.",
    starRating: starRating,
    videoId: "mZ5hnNRBFsc", // Same video ID as example
  },
];

const faqData = [
  {
    id: 1,
    question: "Why should I choose Mozack for web development?",
    answer:
      "Mozack combines expertise, cutting-edge technologies, and a customer-focused approach to deliver high-quality, scalable solutions.",
  },
  {
    id: 2,
    question: "Will my website be mobile-friendly?",
    answer:
      "Yes, we specialize in building responsive websites that perform seamlessly across all devices.",
  },
  {
    id: 3,
    question: "What technologies do you use for web development?",
    answer:
      "We use modern frameworks like React.js, Angular, Next.js, and backend tools like Node.js to ensure performance and scalability.",
  },
  {
    id: 4,
    question: "Do you offer post-launch support?",
    answer:
      "Absolutely. We provide ongoing maintenance and performance optimizations to keep your website running smoothly",
  },
];

const WebDevelopment = () => {
  // useEffect(()=>{
  //   const scrollTo = () => {
  //     scroll.scrollTo(0); // Scrolling to 100px from the top of the page.
  //   };
  //   scrollTo()
  // },[])
  return (
    <Box>
      {/* LEft Right Component working */}
      <Box
        sx={{
          marginTop: "120px",
          padding: {
            lg: "0px 20px 0px 20px",
            md: "0px 20px 0px 20px",
            sm: "0px",
            xs: "0px",
          },
        }}
      >
        <LeftRightComponent
          styledSx={{
            fontSize: { xl: "40px", md: "30px", sm: "20px", xs: "20px" },
            flexDirection: "column",
            justifyContent: "start",
            textAlign: "start",
          }}
          isRow={false}
          title1={"Partner with Us for Your Next"}
          title2={" Web Development Projects"}
          buttonShow={false}
          image={personsImage}
          content={`At Mozack, we specialize in delivering robust, innovative, and scalable web development solutions for businesses of all sizes. Every project is unique, and we create personalized websites tailored to your needs. Utilizing the latest frameworks, tools, and coding practices to ensure your website is secure, responsive, and fast. Our web solutions are optimized for search engines to improve visibility and traffic. From strategy and design to development and maintenance, we’ve got you covered.  `}
          content3={`Empower your business with a website that drives traffic, enhances user experience, and converts visitors into loyal customers.`}
        />
      </Box>

      {/*  Services Section of Web Development*/}
      <Box
        sx={{
          marginTop: "120px",
        }}
      >
        <StyledHeading
          title1="Services "
          title2="We Offer"
          styledSx={{
            display: "flex",
            justifyContent: { md: "left", sm: "center", xs: "center" },
          }}
        />
      </Box>
      <Box
        sx={{
          mt: "110px",
          display: "flex",
          justifyContent: {
            md: "space-between",
            xs: "center",
          },
          gap: "15px",
          paddingX: { md: "20px", sm: "0px", xs: "0px" },
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
            maxWidth: "300px !important",
            borderRadius: "10px",
            flexBasis: "25%",
            flexShrink: "1",
            marginTop: {
              md: "-80px",
              xs: "0px",
            },
          }}
          titlesx={{
            fontSize: { xs: "18px", xl: "22px" },
          }}
          descsx={{
            fontSize: { xs: "13px", xl: "14px" },
          }}
          image={true}
          iconURL={serviceApp[0].image}
          title={serviceApp[0].title}
          desc={serviceApp[0].desc}
        />
        <ServicesCard
          style={{
            boxShadow: "0px 31px 62.2px -12px rgba(0, 0, 0, 0.08)",
            maxWidth: "300px !important",
            borderRadius: "10px",
            flexBasis: "25%",
            flexShrink: "1",
            width: "85%",
          }}
          titlesx={{
            fontSize: { xs: "18px", xl: "22px" },
          }}
          descsx={{
            fontSize: { xs: "13px", xl: "14px" },
          }}
          image={true}
          iconURL={serviceApp[1].image}
          title={serviceApp[1].title}
          desc={serviceApp[1].desc}
        />
        <ServicesCard
          style={{
            boxShadow: "0px 31px 62.2px -12px rgba(0, 0, 0, 0.08)",
            maxWidth: "300px !important",
            borderRadius: "10px",
            flexBasis: "25%",
            flexShrink: "1",
            width: "85%",
            marginTop: {
              md: "-80px",
              xs: "0px",
            },
          }}
          titlesx={{
            fontSize: { xs: "18px", xl: "22px" },
          }}
          descsx={{
            fontSize: { xs: "13px", xl: "14px" },
          }}
          image={true}
          iconURL={serviceApp[2].image}
          title={serviceApp[2].title}
          desc={serviceApp[2].desc}
        />
        <ServicesCard
          style={{
            boxShadow: "0px 31px 62.2px -12px rgba(0, 0, 0, 0.08)",
            maxWidth: "300px !important",
            borderRadius: "10px",
            flexBasis: "25%",
            flexShrink: "1",
            width: "85%",
            p: { xs: "10px", md: "20px 20px 90px 20px" },
          }}
          titlesx={{
            fontSize: { xs: "18px", xl: "22px" },
          }}
          descsx={{
            fontSize: { xs: "13px", xl: "14px" },
          }}
          image={true}
          iconURL={serviceApp[3].image}
          title={serviceApp[3].title}
          desc={serviceApp[3].desc}
        />
      </Box>

      {/* technologies we use */}

      <Box
        sx={{
          mt: "140px",
        }}
      >
        <TecgnologiesComponent
          heading1={`Technologies That Drive`}
          heading2={`Exceptional Web Development`}
          content={`Mozack uses state-of-the-art technologies and frameworks to ensure your website performs seamlessly:`}
          title={[
            "*Frontend Frameworks*: React.js, Angular, Vue.js, Svelte",
            "*Backend Frameworks*: Node.js, PHP (Laravel), Python (Django/Flask)",
            "*CMS Platforms*: WordPress, Drupal, Joomla",
            "*Full-Stack Tools*: Next.js, Nuxt.js, MERN, MEAN",
            "*Databases*: MySQL, MongoDB, Firebase, PostgreSQL",
          ]}
          content2={`Our expertise ensures that your website is fast, secure, and built to perform.`}
        />
      </Box>

      <Box>
        <Box
          sx={{
            paddingX: {
              lg: "20px",
              md: "20px !important",
              sm: "0px !important",
              xs: "0px !important",
            },
            mt: "90px",
            padding: { md: "0px 0px", xs: "0px 20px" },
          }}
        >
          <StyledHeading
            title1="A Step-by-Step "
            title2="Process for Building Success"
          />

          <Box
            sx={{
              display: "flex",
              flexDirection: {
                md: "row",
                xs: "column",
              },
              gap: "3rem",
              mt: "10px",
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
                pl: { sm: "40px", xs: "0px" },
              }}
            >
              <ServicesCard
                desc="Every great website begins with a clear plan. Here's how we work with you to bring your vision to life"
                iconURL=""
                image={false}
                style={{
                  borderRight: "none",
                  borderTop: "1px solid #F1F1F1",
                  m: "0px 10px",
                  p: "10px 0px 30px",
                  // borderBottom:"1px solid #F1F1F1" ,
                }}
              />

              <ServicesCard
                desc="We analyze your business needs, audience, and goals to build a customized web development strategy."
                iconURL={sol1}
                image={true}
                title="Discovery and Strategic Consultation"
                style={{
                  borderRight: "none",
                  borderTop: "1px solid #F1F1F1",
                  m: "0px 10px",
                  p: "30px 0px",

                  // borderBottom:"1px solid #F1F1F1" ,
                }}
              />
              <ServicesCard
                desc="Our design team creates engaging layouts and user-friendly architectures to ensure intuitive navigation and seamless experiences."
                iconURL={sol2}
                image={true}
                title="Design and User-Centric Architecture"
                style={{
                  borderRight: "none",
                  borderTop: "1px solid #F1F1F1",
                  m: "0px 10px",
                  p: "30px 0px",

                  // borderBottom:"1px solid #F1F1F1" ,
                }}
              />
              <ServicesCard
                desc="We develop your website using the latest tools and frameworks, prioritizing speed, performance, and scalability."
                iconURL={sol3}
                image={true}
                title="Seamless Development and Integration"
                style={{
                  borderRight: "none",
                  borderTop: "1px solid #F1F1F1",
                  m: "0px 10px",
                  p: "30px 0px",

                  // borderBottom:"1px solid #F1F1F1" ,
                }}
              />
              <ServicesCard
                desc="Before launch, every website undergoes rigorous testing for performance, functionality, and SEO. Once ready, we assist in deployment and provide ongoing support."
                iconURL={sol4}
                image={true}
                title="Quality Assurance and Launch Excellence"
                style={{
                  borderRight: "none",
                  borderTop: "1px solid #F1F1F1",
                  m: "0px 10px",
                  p: "30px 0px",

                  // borderBottom:"1px solid #F1F1F1" ,
                }}
              />
            </Box>
          </Box>
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

        <KeenSliderPortfolio arrayToList={webDevList} />
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

      {/* image with background and text full width */}
      <DesignDevelop
        title={"Let’s Build Your Next Project Together"}
        content={
          "Ready to transform your online presence? Partner with Mozack and create a website that delivers results."
        }
      />

      {/* Heading here component */}

      <Box
        sx={{
          mt: "90px",
          padding: {
            lg: "0px 20px 0px 20px",
            md: "0px 20px 0px 20px",
            sm: "0px 0px 0px 0px",
            xs: "0px 0px 0px 0px",
          },
        }}
      >
        <LeftRightComponent
          styledSx={{
            fontSize: { xl: "40px", md: "30px", sm: "20px", xs: "20px" },
            // flexDirection: "column",
            // justifyContent: "start",
            display: "flex",
            textAlign: "start",
          }}
          isRow={true}
          title1={"Leading the Way with Modern"}
          title2={"Web Development Frameworks"}
          content={`We leverage the latest frameworks to ensure your website stands out:`}
          content2={[
            "*Next.js and Nuxt.js*: Improve SEO with server-side rendering and faster page loading.",
            "*Angular*: Build robust and dynamic enterprise-grade applications.",
            "*React.js*: For interactive, fast, and scalable web applications.",
          ]}
          content3={`The right framework guarantees optimized performance, responsiveness, and scalability.`}
          buttonShow={false}
          image={personsImage1}
          sx1={{ order: 2 }}
        />
      </Box>

      {/* Faqs*/}
      <Box
        sx={{
          padding: {
            lg: "0px 20px 0px 20px",
            md: "0px 20px 0px 20px",
            sm: "0px 0px 0px 0px",
            xs: "0px 0px 0px 0px",
          },
          display: "flex",
          flexDirection: "column",
          gap: "0rem",
          mt: "90px",
        }}
        id="faqs"
      >
        <StyledHeading title1="frequently" title2=" asked questions" />

        <FAQ faqData={faqData} />
      </Box>

      <Box
        sx={{
          padding: {
            lg: "0px 20px 0px 20px",
            md: "0px 20px 0px 20px",
            sm: "0px 0px 0px 0px",
            xs: "0px 0px 0px 0px",
          },
          display: "flex",
          flexDirection: "column",
          gap: "0rem",
          mt: "75px",
        }}
      >
        <StyledHeading
          title1="Web Development Services"
          title2="Tailored to Your Needs"
        />
        <Box sx={{ mt: "30px" }}>
          <Typography
            sx={{ color: "#939393", fontSize: "16px", lineHeight: "36px" }}
          >
            From frontend design to backend programming, Mozack covers every
            aspect of web development. Our offerings include:
          </Typography>
        </Box>

        <Box
          sx={{
            mt: "60px",
          }}
        >
          <Questions questions={webDevQuestions} />
        </Box>

        {/* slider faq 1 about blog */}
      </Box>

      <Box
        sx={{
          padding: {
            lg: "60px 20px 60px 20px",
            md: "60px 20px 60px 20px",
            sm: "0px 0px 0px 0px",
            xs: "0px 0px 0px 0px",
          },
          mt: "70px",
        }}
      >
        <StyledHeading
          title1="Service a Multitude of"
          title2="Industries, Exceptionally"
        />

        <Box
          sx={{
            display: { md: "flex", sm: "block" },
            width: { md: "100%", sm: "100%" },
            m: "0 auto",
            flexWrap: "wrap",
            mt: "60px",
          }}
        >
          {ServiceIcon.map((item, index) => (
            <ServiceIconBox
              btnText={false}
              btnURL={false}
              key={index}
              style={{
                flexBasis: "15%",
                flexGrow: "1",
                flexShrink: "1",
                paddingBottom: { sm: "40px", xs: "40px" },

                // Border conditions for screens greater than 1200px (custom rule)
                borderRight: {
                  xs: "none", // default no border right for small screens
                  md:
                    index % 5 !== 4 && index <= 14
                      ? "1px solid #F1F1F1"
                      : "none", // applies when width > 1200px
                },
                borderBottom: {
                  xs: "none", // default no border bottom for small screens
                  md: index < 10 ? "1px solid #F1F1F1" : "none", // applies when width > 1200px
                },

                // Border conditions for screens greater than 900px (md size)
                [`@media (min-width: 900px)`]: {
                  borderRight:
                    index % 4 !== 3 && index <= 14
                      ? "1px solid #F1F1F1"
                      : "none", // exclude boxes 4, 8, 12, 15
                  borderBottom: index < 12 ? "1px solid #F1F1F1" : "none", // exclude boxes 13, 14, 15 from border bottom
                },
              }}
              index={index}
              iconURL={item?.iconURL}
              title={item?.title}
            />
          ))}
        </Box>

        <Box
          sx={{
            display: { md: "none", sm: "block" },
            width: { md: "1509px", sm: "100%" },
            m: "0 auto",
            paddingTop: { md: "60px", sm: "40px !important", xs: "60px" },
          }}
        >
          {ServiceIcon1.map((item, index) => (
            <ServiceIconBox
              btnText={false}
              btnURL={false}
              key={index}
              style={{
                flexBasis: "503px",
                borderRight: {
                  md: index < 4 && "1px solid #F1F1F1",
                  xs: "none",
                },
                paddingBottom: { sm: "40px", xs: "40px" },
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
            display: { md: "none", sm: "block" },
            width: { md: "1509px", sm: "100%" },
            m: "0 auto",
          }}
        >
          {ServiceIcon2.map((item, index) => (
            <ServiceIconBox
              btnText={false}
              btnURL={false}
              key={index}
              style={{
                flexBasis: "503px",
                paddingBottom: { sm: "40px", xs: "40px" },
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
            display: { md: "none", sm: "block" },
            width: { md: "1509px", sm: "100%" },
            m: "0 auto",
          }}
        >
          {ServiceIcon3.map((item, index) => (
            <ServiceIconBox
              btnText={false}
              btnURL={false}
              key={index}
              style={{
                flexBasis: "503px",
                paddingBottom: { sm: "40px", xs: "40px" },
                borderRight: {
                  md: index < 4 && "1px solid #F1F1F1",
                  xs: "none",
                },

                borderBottom: "none !important",
              }}
              index={index}
              iconURL={item?.iconURL}
              title={item?.title}
            />
          ))}
        </Box>
      </Box>

      {/* now our latest articles and blogs */}
      <Box sx={{ mt: "70px" }} id="blogs">
        <StyledHeading
          title1="Our latest news &"
          title2="articles from the blog"
          sx={{
            display: "block",
          }}
        />
        <BlogSlider blogData={blogData} />
      </Box>

      <Box
        sx={{
          padding: { md: "60px 0px", xs: "10px 0px" },
          display: "flex",
          flexDirection: "column",

          width: "100%",
        }}
      >
        <StyledHeading
          title1="Frequently "
          title2="Asked Questions"
          sx={{
            display: "flex",
            padding: { md: "60px 0px", xs: "60px 0px" },
          }}
        />
        <Box
          sx={{
            overflow: { xs: "hidden", xl: "visible" },
            paddingBottom: { xs: "50px" },

            // width:"100%"
          }}
        >
          <SecondFAQSlider data={SecondFaq} />
        </Box>
      </Box>
    </Box>
  );
};

export default WebDevelopment;
