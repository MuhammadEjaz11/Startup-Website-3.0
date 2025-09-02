import { Box } from "@mui/material";
import React, { useEffect } from "react";
import LeftRightComponent from "../../../Components/LeftRightComponent";

import ServicesCard from "../../../Components/ServicesCard";

import StyledHeading from "../../../Components/StyledHeading";

import RoundCircle from "../../../Components/RoundCircle";


import FAQ from "../../../Components/FAQ";


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

import ContactForm from "../../../Components/ContactForm";
import { useNavigate } from "react-router-dom";
import KeenSliderPortfolio from "../../../Components/KeenSliderPortfolio";


const serviceApp = [
  {
    title: "Website Design",
    description:
      "Crafting a unique and memorable visual identity that represents your brand's values and personality. A well-designed logo builds recognition and sets the tone for all your branding.",
    image: "/images/graphic-icon/website.png",
    image2: "/images/our product/embridery2.png",
  },
  {
    title: "Web Apps Design",
    description:
      "Creating visually striking posters for promotions, events, or announcements. Poster designs combine bold visuals and clear messaging to grab attention and leave a lasting impression.",
    image: "/images/graphic-icon/web app design.png",
  },
  {
    title: "Mobile Apps Design",
    description:
      "We create intuitive, visually appealing, and user-friendly mobile app designs that enhance user experience and reflect your brand identity. From wireframes to polished UI/UX, we ensure your app stands out and keeps users engaged.",
    image: "/images/graphic-icon/mob.png",
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



const faqData = [
  {
    id: 1,
    question: "Why should I choose Patch Makers for web development?",
    answer:
      "Patch Makers combines expertise, cutting-edge technologies, and a customer-focused approach to deliver high-quality, scalable solutions.",
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
  const navigate= useNavigate();
  useEffect(()=>{
    const scrollTo = () => {
      scroll.scrollTo(0); // Scrolling to 100px from the top of the page.
    };
    scrollTo()
  },[])
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
          sx={{ flexDirection: {md:"row-reverse" , xs:"column"} }}
          isRow={false}
          title1={"PAffordable solutions for"}
          title2={" creativity need"}
          buttonShow={false}
          image={"/images/banner/code-girl.png"}
          content={`Bring Your Ideas to Life Without Breaking the Bank!We believe great design shouldn’t come with a hefty price tag. Our graphic design services offer the perfect blend of creativity, professionalism, and affordability. Whether you need a bold logo, a striking banner, or sleek product packaging, our talented designers are here to deliver stunning visuals tailored to your brand—all within your budget. Let’s turn your vision into eye-catching designs that speak volumes! `}
        />
      </Box>

      <Box
        sx={{
          mt: "150px",
          display: "grid",
          gridTemplateColumns: {
            md: "repeat(3, 1fr)",
            sm: "repeat(2, 1fr)",
            xs: "1fr",
          },
          gap: "20px",
          maxWidth: "100%",
        }}
      >
        {serviceApp.map((item, index) => {
          return (
            <ServicesCard
              key={index}
              centerImage={"center"}
              style={{
                boxShadow: "0px 31px 62.2px -12px rgba(0, 0, 0, 0.08)",
                maxWidth: "100%",
                borderRadius: "15px",
                marginTop: {
                  md: index < 4 ? "-50px" : "0px",
                  xs: "0px",
                },
                textAlign: "center",
                img: {
                  width: "50%",
                  textAlign: "center",
                },
                p: { xs: "15px", md: "20px" },
              }}
              iconURL={item.image}
              title={item.title}
              desc={item.description}
              image={true}
            />
          );
        })}
      </Box>

      {/* our portfolio section will be there */}

      <Box
        sx={{
          mt: "120px",
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
   
      </Box>

      {/* our Solution */}
     <Box>
        <Box
          sx={{
            mt: "40px",
          }}
        >
          <StyledHeading
            title1="Our Solution Process"
            title2=" for Stunning Results"
            sx={{
              mb:"50px"

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
              <RoundCircle currentStep={0} totalSteps={7} />
            </Box>
            <Box
              sx={{
                borderLeft: "3px solid #F1F1F1",
              }}
            >
              <ServicesCard
                desc="We follow a streamlined graphic design process to ensure each project meets your vision and goals. It all starts with understanding your brand, audience, and message. From there, we move into concept development, where our designers craft creative ideas tailored to your needs. Once a concept is approved, we fine-tune every detail—colors, typography, layout—to ensure it's pixel-perfect. After final revisions and your full satisfaction, we deliver high-quality design files ready for print, web, or marketing use. Simple, collaborative, and effective—that's how we bring your ideas to life."
                iconURL=""
                image={false}
                style={{
                  borderRight: "none",
                  borderTop: "1px solid #F1F1F1",
                  m: { md: "0px 40px", xs: "0px 0px" },
                  p: "10px 0px 30px",
                  // borderBottom:"1px solid #F1F1F1" ,
                }}
              />

              <ServicesCard
                desc="We start by understanding your needs—what you're looking for, the purpose of the design, preferred style, colors, and target audience. This helps us align with your vision from the start."
                iconURL={"/images/work-process/graphic/Client Brief & Requirement Gathering.png"}
                image={true}
                title="Client Brief & Requirement Gathering"
                style={{
                  borderRight: "none",
                  borderTop: "1px solid #F1F1F1",
                  m: { md: "0px 40px", xs: "0px 10px" },
                  p: "30px 0px",

                  // borderBottom:"1px solid #F1F1F1" ,
                }}
              />
              <ServicesCard
                desc="Our designers brainstorm ideas and develop initial concepts based on your requirements. Mood boards, sketches, or reference samples may be shared for early feedback."
                iconURL={"/images/work-process/graphic/Concept Development.png"}
                image={true}
                title="Concept Development"
                style={{
                  borderRight: "none",
                  borderTop: "1px solid #F1F1F1",
                  m: { md: "0px 40px", xs: "0px 10px" },
                  p: "30px 0px",

                  // borderBottom:"1px solid #F1F1F1" ,
                }}
              />
              <ServicesCard
                desc="Once the concept is approved, we move to the actual design phase. Our team creates a polished, high-quality design using professional tools (like Adobe Illustrator, Photoshop, etc.)."
                iconURL={"/images/work-process/graphic/Design Creation.png"}
                image={true}
                title="Design Creation"
                style={{
                  borderRight: "none",
                  borderTop: "1px solid #F1F1F1",
                  m: { md: "0px 40px", xs: "0px 10px" },
                  p: "30px 0px",

                  // borderBottom:"1px solid #F1F1F1" ,
                }}
              />
              <ServicesCard
                desc="We present the draft design to you for review. You can request revisions or tweaks to ensure the design perfectly matches your expectations."
                iconURL={"/images/work-process/graphic/Review & Feedback.png"}
                image={true}
                title="Review & Feedback"
                style={{
                  borderRight: "none",
                  borderTop: "1px solid #F1F1F1",
                  m: { md: "0px 40px", xs: "0px 10px" },
                  p: "30px 0px",

                  // borderBottom:"1px solid #F1F1F1" ,
                }}
              />
              <ServicesCard
                desc="After revisions (if any), we submit the final design for your approval. Once you're satisfied, we prepare all necessary files in required formats."
                iconURL={"/images/work-process/graphic/Final Approval.png"}
                image={true}
                title="Final Approval"
                style={{
                  borderRight: "none",
                  borderTop: "1px solid #F1F1F1",
                  m: { md: "0px 40px", xs: "0px 10px" },
                  p: "30px 0px",

                  // borderBottom:"1px solid #F1F1F1" ,
                }}
              />
              <ServicesCard
                desc="We deliver the final project in multiple formats (e.g., AI, PDF, PNG, JPEG, SVG) based on your usage needs—print, digital, social media, or packaging."
                iconURL={"/images/work-process/graphic/File Delivery.png"}
                image={true}
                title="File Delivery"
                style={{
                  borderRight: "none",
                  borderTop: "1px solid #F1F1F1",
                  m: { md: "0px 40px", xs: "0px 10px" },
                  p: "30px 0px",

                  // borderBottom:"1px solid #F1F1F1" ,
                }}
              />
              <ServicesCard
                desc="Need small changes after delivery or help with file usage? Our team is here to support you even after the project is completed."
                iconURL={"/images/work-process/graphic/Post-Delivery Support.png"}
                image={true}
                title="Post-Delivery Support"
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

     

      <Box
        sx={{
          margin: { md: "120px 0", sm: "60px 0", xs: "40px 0" },
        }}
      >
        <LeftRightComponent
          sx1={{ order: 1, display: "block" }}
          sx={{}}
          styledSx={{}}
          isRow={true}
          title1={"Why Choose Our "}
          title2={"Website Design Services?"}
          buttonShow={false}
          image={"/images/banner/web-port.png"}
          content={`we don’t just design—we create visual stories that spark connection and make your brand unforgettable. From sleek logos to bold banners, stunning product packaging, and scroll-stopping digital content, our graphic design team blends creativity with strategy to deliver visuals that turn heads and drive results.`}
          content2={"Every color, font, and layout is handpicked to reflect your vision—clear, impactful, and full of personality. Whether you're building a brand from scratch or refreshing your visual identity, we make sure your message looks just as powerful as it sounds."}
          content3={"✨ **Designs that don’t just look good—**they work magic."}
        />
      </Box>

  
     {/* Faqs*/}
     <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "0rem",
          mt: "75px",
          mb:"120px"
        }}
        id="faqs"
      >
        <StyledHeading title1="frequently" title2=" asked questions" />

        <FAQ faqData={faqData} />
      </Box>

     <ContactForm/>


    </Box>
  );
};

export default WebDevelopment;
