import React, { useEffect } from "react";

import { Box } from "@mui/material";
import LeftRightComponent from "../../../Components/LeftRightComponent";
import GraphicCard from "../../../Components/GraphicCard";
import Graphic from "../../../assets/font/GraphicDesigning/bannerImage.png";
import FAQ from "../../../Components/FAQ";

// Images for mapping
import image1 from "../../../assets/font/GraphicDesigning/image1.png";
import image2 from "../../../assets/font/GraphicDesigning/image2.png";
import image3 from "../../../assets/font/GraphicDesigning/image3.png";
import image4 from "../../../assets/font/GraphicDesigning/image4.png";
import image5 from "../../../assets/font/GraphicDesigning/image5.png";
import image6 from "../../../assets/font/GraphicDesigning/image6.png";
import heading from "../../../assets/font/GraphicDesigning/headingImage.png";

import { Carousel } from "@trendyol-js/react-carousel";
import PortfolioCard from "../../../Components/PortfolioCard";
import { PortfoliosList } from "../../../../utils";
import StyledHeading from "../../../Components/StyledHeading";
import RoundCircle from "../../../Components/RoundCircle";
import ServicesCard from "../../../Components/ServicesCard";

import laptopImage from "../../../assets/font/MobileApp/appDevImage.png";

import sol1 from "../../../assets/font/MobileApp/sol1.png";
import sol2 from "../../../assets/font/MobileApp/sol2.png";
import sol3 from "../../../assets/font/MobileApp/sol3.png";
import sol4 from "../../../assets/font/MobileApp/sol4.png";
import BlogSlider from "../../../Components/OurBlog";
import SecondFAQSlider from "../../../Components/SecondFAQ";
import KeenSliderPortfolio from "../../../Components/KeenSliderPortfolio";
import CustomButton from "../../../Components/Button";

import grap2 from "../../../assets/font/GraphicDesigning/grap2.webp";

import BlogOne from "../../../image/videoB1.webp";
import BlogThree from "../../../image/blog33.webp";
import BlogTwo from "../../../image/appB2.webp";
import starRating from "../../../image/starRating.png";

import logo1 from "../../../assets/font/Logo/l1.jpg";
import logo2 from "../../../assets/font/Logo/l2.jpg";
import logo3 from "../../../assets/font/Logo/l3.jpg";
import logo4 from "../../../assets/font/Logo/l4.jpg";
import logo5 from "../../../assets/font/Logo/l5.jpg";
import logo6 from "../../../assets/font/Logo/l6.jpg";
import logo7 from "../../../assets/font/Logo/l7.jpg";
import logo8 from "../../../assets/font/Logo/l8.jpg";
import logo9 from "../../../assets/font/Logo/l9.jpg";

import {
  Button,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
} from "react-scroll";
import ContactForm from "../../../Components/ContactForm";

const faqData = [
  {
    id: 1,
    question: "What is graphic design?",
    answer:
      "Graphic design is the art of visually communicating ideas through images, typography, colors, and layout. It includes designs like logos, posters, packaging, social media creatives, and much more.",
  },
  {
    id: 2,
    question: "What types of graphic design services do you offer?",
    answer:
      "We offer a wide range of graphic design services including: Logo Design, Banner Design, Poster Design, Product Packaging, Social Media Posts, Vehicle Wraps, Flyers & Brochures, and Custom Illustrations.",
  },
  {
    id: 3,
    question: "How long does it take to complete a graphic design project?",
    answer:
      "Turnaround time depends on the complexity of the project. A basic design can take 1–3 days, while more detailed projects may take up to a week. We always aim to deliver on time.",
  },
  {
    id: 4,
    question: "Can I request changes after receiving the design?",
    answer:
      "Yes, we offer revisions based on your feedback. We want to make sure you're completely satisfied with the final design.",
  },
  {
    id: 5,
    question: "What file formats will I receive?",
    answer:
      "We usually provide designs in multiple formats including AI, PDF, PNG, JPG, and SVG. Let us know your preferred format, and we'll deliver accordingly.",
  },
  {
    id: 6,
    question: "What if I don't have a clear idea of what I want?",
    answer:
      "No worries! Our team will help guide you through the process. We can suggest ideas, styles, and color palettes based on your brand or industry.",
  },
  {
    id: 7,
    question: "Do you create designs from scratch?",
    answer:
      "Yes! Every design we create is 100% original, tailored to your brand, message, and audience.",
  },
  {
    id: 8,
    question: "How much do you charge for graphic design?",
    answer:
      "Our pricing varies based on the project type and complexity. Contact us for a free quote tailored to your needs.",
  },
  {
    id: 9,
    question: "How can I get started?",
    answer:
      "Simply reach out to us with your project details, and we'll guide you through the next steps. You can contact us via email, social media, or through our website.",
  },
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

const blogData = [
  {
    id: 1,
    title: "How Agecis Puts Your Audience First",
    description:
      "Lorem ipsum is simply dummy text of the printing and typesetting industry...",
    image: BlogOne,
    author: "Admin",
    date: "April 20, 2024",
  },
  {
    id: 2,
    title: "How Agecis Puts Your Audience First",
    description:
      "Lorem ipsum is simply dummy text of the printing and typesetting industry...",
    image: BlogTwo,
    author: "Admin",
    date: "April 20, 2024",
  },
  {
    id: 3,
    title: "How Agecis Puts Your Audience First",
    description:
      "Lorem ipsum is simply dummy text of the printing and typesetting industry...",
    image: BlogThree,
    author: "Admin",
    date: "April 20, 2024",
  },
  {
    id: 4,
    title: "How Agecis Puts Your Audience First",
    description:
      "Lorem ipsum is simply dummy text of the printing and typesetting industry...",
    image: BlogTwo,
    author: "Admin",
    date: "April 20, 2024",
  },
];

const graphicListDetail = [
  {
    imageURL: logo1,
    title: "Logo Design 1",
    desc: "Logo Design",
    category: "logo",
  },
  {
    imageURL: logo2,
    title: "Logo Design 2",
    desc: "Logo Design",
    category: "logo",
  },
  {
    imageURL: logo3,
    title: "Logo Design 3",
    desc: "Logo Design",
    category: "logo",
  },
  {
    imageURL: logo4,
    title: "Logo Design 4",
    desc: "Logo Design",
    category: "logo",
  },
  {
    imageURL: logo5,
    title: "Logo Design 5",
    desc: "Logo Design",
    category: "logo",
  },
  {
    imageURL: logo6,
    title: "Logo Design 6",
    desc: "Logo Design",
    category: "logo",
  },
  {
    imageURL: logo7,
    title: "Logo Design 7",
    desc: "Logo Design",
    category: "logo",
  },
  {
    imageURL: logo8,
    title: "Logo Design 8",
    desc: "Logo Design",
    category: "logo",
  },
  {
    imageURL: logo9,
    title: "Logo Design 9",
    desc: "Logo Design",
    category: "logo",
  },
];

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

const serviceApp = [
  {
    title: "Logo Design",
    description:
      "Crafting a unique and memorable visual identity that represents your brand's values and personality. A well-designed logo builds recognition and sets the tone for all your branding.",
    image: "/images/graphic-icon/logo design.png",
    image2: "/images/our product/embridery2.png",
  },
  {
    title: "Poster Design",
    description:
      "Creating visually striking posters for promotions, events, or announcements. Poster designs combine bold visuals and clear messaging to grab attention and leave a lasting impression.",
    image: "/images/graphic-icon/Creative team-cuate.png",
  },
  {
    title: "Icon Design",
    description:
      "These patches offer vibrant, full-color prints with photographic quality—ideal for detailed artwork and gradient designs.",
    image: "/images/graphic-icon/ui ux.png",
  },
  {
    title: "Vehicle Wrap Design",
    description:
      "Designing custom graphics that transform vehicles into mobile advertisements. A professionally wrapped vehicle promotes your brand everywhere it goes with eye-catching visuals.",
    image: "/images/graphic-icon/ako-signs-car-wraps-hero 1.png",
  },
  {
    title: "Banner Design",
    description:
      "Designing impactful banners for online or print use, ideal for marketing, trade shows, or social media. Banners are created to stand out and communicate your message quickly.",
    image: "/images/graphic-icon/banner design.png",
  },
  {
    title: "Product Design",
    description:
      "Developing creative packaging and label designs that enhance the appeal of your product. This service ensures your product looks professional and stands out on shelves or online.",
    image: "/images/graphic-icon/product design.png",
  },
];

const GraphicDesigning = () => {
  useEffect(() => {
    const scrollTo = () => {
      scroll.scrollTo(0); // Scrolling to 100px from the top of the page.
    };
    scrollTo();
  }, []);

  return (
    <div>
      {/* LeftRightComponent */}
      <Box
        sx={{
          margin: { md: "120px 0", sm: "60px 0", xs: "40px 0" },
        }}
      >
        <LeftRightComponent
          styledSx={{
            flexDirection: "column",
            justifyContent: "start",
            textAlign: "start",
          }}
          isRow={false}
          title1={"Affordable solutions for"}
          title2={"creativity needs"}
          buttonShow={true}
          image={"/images/banner/graphic.png"}
          sx1={{ order: 2 }}
          SecondPera={false}
          buttonStyle={{
            maxWidth: "200px",
          }}
          content={`Bring Your Ideas to Life Without Breaking the Bank!We believe great design shouldn’t come with a hefty price tag. Our graphic design services offer the perfect blend of creativity, professionalism, and affordability. Whether you need a bold logo, a striking banner, or sleek product packaging, our talented designers are here to deliver stunning visuals tailored to your brand—all within your budget. Let’s turn your vision into eye-catching designs that speak volumes!`}
        />
      </Box>

      <Box
        sx={{
          mt: "40px",
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
                // marginTop: {
                //   md: index < 4 ? "-50px" : "0px",
                //   xs: "0px",
                // },
                textAlign: "center",
                img: {
                  width: "50%",
                  height:"200px",
                  objectFit: "contain",
                  
                  textAlign: "center",
                },
                p: { xs: "15px", md: "40px 20px" },
              }}
              iconURL={item.image}
              title={item.title}
              desc={item.description}
              image={true}
            />
          );
        })}
      </Box>

      {/* Portfolio Section */}
      <Box
        sx={{
          mt: "80px",
          mb: "120px",
        }}
      >
        <StyledHeading
          title1="Our"
          sx1={{ fontFamily: "satoshi !important" }}
          title2="Recent Works"
          sx2={{ fontFamily: "satoshi-light !important" }}
          styledSx={{
            display: "flex",
            justifyContent: { md: "left", sm: "center", xs: "center" },
            alignItems: "center",
            mb: "40px",
            // padding:{sm: "0px 20px", xs: "0px 20px"},
          }}
        />

        <KeenSliderPortfolio arrayToList={graphicListDetail} />
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

      {/* Heading here component */}

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
          title2={"Graphic Designing Services?"}
          buttonShow={false}
          image={"/images/banner/graphic-banner-2.png"}
          content={`At Patch Makers, we don’t just design—we create visual stories that spark connection and make your brand unforgettable. From sleek logos to bold banners, stunning product packaging, and scroll-stopping digital content, our graphic design team blends creativity with strategy to deliver visuals that turn heads and drive results.`}
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

     
    </div>
  );
};

export default GraphicDesigning;
