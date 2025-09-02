import React from "react";

import { useEffect } from "react";

// import Box from '@mui/material'
import { Box } from "@mui/material";

import StyledHeading from "../../../Components/StyledHeading";

import ServicesCard from "../../../Components/ServicesCard";
import FAQ from "../../../Components/FAQ";
import LeftRightComponent from "../../../Components/LeftRightComponent";

import RoundCircle from "../../../Components/RoundCircle";

import ContactForm from "../../../Components/ContactForm";

import {
  Button,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
} from "react-scroll";
import starRating from "../../../image/starRating.png";

import {
  cutomePatchServiceIcon,
  cutomePatchServiceIcon2,

} from "../../../../utils";
import ServiceIconBox from "../../../Components/ServiceIconsBox";
import Portfolio from "../../Portfolio/Portfolio";
import PortfolioTab from "../../../Components/PortfolioTab";
import BackingOptionsSection from "../../../Components/BackingOptionsSection";


// ...existing code...
const faqData = [
  {
    id: 1,
    question: "What types of patches do you offer?",
    answer:
      "We offer a wide variety of patches including Embroidered, Chenille, Sublimation, Woven, Leather, PVC, and DTF Transfers.",
  },
  {
    id: 2,
    question: "What is the minimum order quantity (MOQ)?",
    answer:
      "Our minimum order quantity typically starts from 25 pieces, but it may vary depending on the patch type. Contact us for more details.",
  },
  {
    id: 3,
    question: "Can I get a sample before placing a bulk order?",
    answer:
      "Yes! We can provide a sample patch so you can approve the quality and design before bulk production.",
  },
  {
    id: 4,
    question: "How long does it take to receive my patches?",
    answer:
      "Turnaround time depends on the patch type and quantity, but generally, orders are completed within 7–10 business days after design approval.",
  },
  {
    id: 5,
    question: "Can I customize the shape and size of my patch?",
    answer:
      "Absolutely! We create patches in any shape, size, and color combination you need to match your vision.",
  },
  {
    id: 6,
    question: "Do you help with the design process?",
    answer:
      "Yes! We offer free design assistance and can work with any artwork or concept you have – even a rough sketch.",
  },
  {
    id: 7,
    question: "What backing options are available?",
    answer:
      "We provide several backing options such as iron-on, sew-on, Velcro, and adhesive backing.",
  },
  {
    id: 8,
    question: "What file formats do you accept for designs?",
    answer:
      "We accept most formats including JPG, PNG, PDF, AI, EPS, and PSD files.",
  },
  {
    id: 9,
    question: "Do you ship internationally?",
    answer:
      "Yes, we ship worldwide with trusted courier partners to ensure safe and timely delivery.",
  },
  {
    id: 10,
    question: "What if I need a rush order?",
    answer:
      "We do offer express services for urgent orders. Please contact us to discuss your timeline.",
  },
];
// ...existing
const serviceApp = [
  {
    title: "Embroidered Patches",
    description:
      "Classic and textured, embroidered patches use thread to create bold, raised designs—perfect for uniforms, jackets, and hats.",
    image: "/images/our product/embridery.png",
    image2: "/images/our product/embridery2.png",
  },
  {
    title: "Chenille Patches",
    description:
      "Fluffy and bold, chenille patches have a varsity-style look—great for letterman jackets, team wear, and retro fashion.",
    image: "/images/our product/chenill.png",
  },
  {
    title: "Sublimation Patches",
    description:
      "These patches offer vibrant, full-color prints with photographic quality—ideal for detailed artwork and gradient designs.",
    image: "/images/our product/sublimation.png",
  },
  {
    title: "PVC Patches",
    description:
      "Made from durable, flexible rubber, PVC patches are waterproof, long-lasting, and perfect for showcasing fun, colorful branding.",
    image: "/images/our product/pvc.png",
  },
  {
    title: "Leather Patches",
    description:
      "Sleek and durable, leather patches add a premium, rustic touch to apparel and accessories—perfect for jeans, jackets, hats, and bags. Ideal for brands that want a bold, timeless look.",
    image: "/images/our product/leather.png",
  },
  {
    title: "PVC Keychains",
    description:
      "Made from durable, flexible rubber, PVC keychains are waterproof, long-lasting, and perfect for showcasing fun, colorful branding.",
    image: "/images/our product/keychain.png",
  },
  {
    title: "Woven Patches",
    description:
      "Woven patches are great for fine details and small text, offering a flat and clean finish—perfect for intricate designs.",
    image: "/images/our product/woven.png",
  },
  {
    title: "DTF Transfer",
    description:
      "Direct-to-Film (DTF) transfers are heat-applied prints that work on various fabrics, offering vibrant, flexible, and long-lasting designs.",
    image: "/images/our product/dtf.png",
    image2: "/images/our product/dtf2.png",
  },
];

const CustomPatches = () => {
  useEffect(() => {
    const scrollTo = () => {
      scroll.scrollTo(0); // Scrolling to 100px from the top of the page.
    };
    scrollTo();
  }, []);

  return (
    <>
      <StyledHeading
        title2="Our"
        title1="Products"
        sx1={{ order: "2" }}
        styledSx={{
          display: "flex",
          marginTop: "100px",
          justifyContent: { md: "left", sm: "center", xs: "center" },
          alignItems: "center",
        }}
      />
      <Box
        sx={{
          mt: "40px",
          display: "grid",
          gridTemplateColumns: {
            md: "repeat(4, 1fr)",
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
              style={{
                boxShadow: "0px 31px 62.2px -12px rgba(0, 0, 0, 0.08)",
                maxWidth: "100%",
                borderRadius: "15px",
                marginTop: {
                  md: index < 4 ? "-50px" : "0px",
                  xs: "0px",
                },
                img: {
                  width: "100%",
                  height:"150px",
                  objectFit:"contain"
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


             <BackingOptionsSection />

      <Box
        sx={{
          marginBottom: "65px !Important",
          maxWidth: "1526px",
          margin: "0 auto",
        }}
      >
      {/* our Solution */}

      <Box>
        <Box
          sx={{
            mt: "40px",
            
          }}
        >
          <StyledHeading
         title1="Our Manufacturing" title2="Process"
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
                desc="We deliver the final product as high-quality physical patches. your order will be shipped as the finished patch, ready for use."
                iconURL={"/images/work-process/graphic/File Delivery.png"}
                image={true}
                title="Product Delivery"
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

      </Box>

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
          {cutomePatchServiceIcon.map((item, index) => (
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
          {cutomePatchServiceIcon2.map((item, index) => (
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
      <Box>
        <PortfolioTab />
      </Box>
      <Box
        sx={{
          marginTop: { md: "50px", xs: "20px", sm: "20px" },
          marginBottom: { md: "100px", xs: "60px", sm: "60px" },
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
          titleSpan2={"Patch Makers"}
          isRow={false}
          title1={"About"}
          title2={""}
          buttonShow={false}
          image={"/images/about-digitzing.png"}
          content={`AAt Patch Makers, we have been providing high-quality digitizing services for 10 years. Our team of skilled professionals is dedicated to transforming your artwork into the perfect design for embroidery machines. We understand the importance of precision and detail, ensuring that every stitch is flawlessly executed to bring your vision to life. `}
          content3={`EWe use the latest software and techniques to ensure the highest quality output, whether you need a simple logo or a complex, intricate design. Our expertise and commitment to excellence have earned us a reputation for being one of the best in the industry. No matter the complexity of your project, you can trust Patch Makers to deliver a finished product that exceeds your expectations.`}
        />
      </Box>
      <Box
        sx={{
          paddingTop: "65px",

          margin: "0 auto",
        }}
        id="faqs"
      >
        <StyledHeading
          title1="frequently"
          title2=" asked questions"
          styledSx={{
            justifyContent: { md: "left", xs: "center" },
            color: "#1E1E1E",
            textAlign: "center",
          }}
        />
        <FAQ faqData={faqData} />
      </Box>
      <Box
        sx={{
          padding: "65px 0px",
          maxWidth: "1525px",
          margin: "0 auto",
        }}
      >
        <ContactForm />
      </Box>
    </>
  );
};

export default CustomPatches;
