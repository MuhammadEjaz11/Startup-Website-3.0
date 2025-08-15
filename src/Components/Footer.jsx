import { useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import CustomButton from "./Button";
import FooterHeading from "./FooterHeading";
import layer1 from "../image/pm_logo.svg";
import FooterMenu from "./FooterMenu";
import FooterBottomMenu from "./FooterBottomMenu";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import iconOne from "../image/facebookIcon.png";
import iconTwo from "../image/InstagramIcon.png";
import iconThree from "../image/LinkedinIcon.png";
import iconFour from "../image/TwitterIcon.png";
// import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";

function Footer() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Box
        sx={{
          paddingBottom: "59px",
          paddingTop: "60px",
          background: "#1E1E1E",
        }}
      >
        <Box
          className="mainFooter"
          sx={{
            flexBasis: {
              xs: "100%", // Full width on extra-small screens
              sm: "212.52px", // Specific width on small screens and up
              md: "212.52px", // Specific width on medium screens and up
              lg: "212.52px", // Specific width on large screens and up
            },
          }}
        >
          <Box
            sx={{
              color: "white",
              textAlign: "center",
              fontFamily: "Satoshi",
              fontWeight: 400,
              fontSize: { md: "60px", sm: "35px" },
              marginBottom: "50px",
            }}
          >
            <Typography
              sx={{
                fontWeight: 400,
                fontSize: { xl: "60px", sm: "35px" },
                lineHeight: "1.2",
                "&:hover": {
                  color: "#1E8CE0", // Hover color
                  transition: "color 0.3s ease",
                },
              }}
            >
              Your Brand. Your Patch.
            </Typography>

            <Typography
              sx={{
                fontWeight: 700,
                fontSize: { xl: "60px", sm: "35px" },
                lineHeight: "1.2",
                "&:hover": {
                  color: "#1E8CE0", // Hover color
                  transition: "color 0.3s ease",
                },
              }}
            >
              Let’s Make it Happen.
            </Typography>
            <Box
              sx={{
                textAlign: "center",
                maxWidth: "90%",
                margin: "0 auto",
                display: "none",
                flexDirection: "column",

                width: "1299px",
              }}
            >
              <Typography
                sx={{
                  fontSize: { xl: "16px", md: "16px", xs: "13px" },
                  paddingTop: "43px",
                  lineHeight: { md: "36px", xs: "27px" },
                  color: "white",
                  fontWeight: 400,
                  marginRight: { sm: "40px", xs: "40px" },
                  textAlign: "center",
                  fontFamily: "Inter",
                }}
              >
                Follow Mozack to discover more innovation in digital business,
                design, and development. Please enter your email in the box
                below to subscribe to our updates list and get information that
                can help you move your business forward.{" "}
              </Typography>
            </Box>
          </Box>
          <Box
            className="emailSubscriber"
            style={{
              position: "relative",
              textAlign: "center",
              maxWidth: "90%",
              margin: "0 auto",
              display: "flex",
              flexDirection: "column",

              width: "1299px",
            }}
          >
            <Box
              sx={{
                flexBasis: {
                  xs: "100%",
                  sm: "80%",
                  md: "60%",
                  lg: "40%",
                },
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <input
                type="email"
                id="inputSubscriber"
                placeholder="Enter Your Email Address"
                className="input-subscriber"
              />
              <CustomButton
                textStyle={{
                  position: "absolute",
                  right: 10,
                  height: "60px",
                  color: "white",
                  fontSize: "16px",
                  minWidth: "40px",
                  width: { sm: "100px", xs: "100px  " },
                  fontWeight: "600",
                  fontFamily: "Outfit",
                }}
                buttonStyle={{
                  borderRadius: "15px",
                  // padding: "10px 20px",
                  background: "white",
                  color: "black",
                  textTransform: "capitalize",
                  marginLeft: "-20px",
                  minWidth: { md: "155px", xs: "100px" },

                  // fontSize
                }}
                title="Subscribe"
                buttonIconBlack={true}
              />
            </Box>
          </Box>
          <Box
            className="footerGroup"
            sx={{
              display: "flex",
              flexDirection: {
                lg: "row",
                md: "row",
                sm: "column",
                xs: "column",
              },
              justifyContent: "space-between",
              maxWidth: "1526px",
              margin: "auto",
              paddingTop: "110px",
              gap: "0.6rem",
            }}
          >
            <Box
              sx={{
                flex: 1,
                flexGrow: 0,
                paddingLeft: { sm: "40px", xs: "40px" },
                flexBasis: { md: "419px", xs: "260px" },
              }}
            >
              <FooterHeading
                title="Short Brief About Us"
                textStyle={{
                  textAlign: { md: "left", xs: "left" },
                  fontFamily: "Outfit",
                  fontWeight: "600",
                  color: "#FFFFFF",
                }}
              />
              <Typography
                sx={{
                  fontSize: { xl: "16px", md: "16px", xs: "13px" },
                  paddingTop: "43px",
                  lineHeight: { md: "36px", xs: "27px" },
                  color: "white",
                  fontWeight: 400,
                  marginRight: { sm: "40px", xs: "40px" },
                  textAlign: "justify",
                  fontFamily: "Inter",
                }}
              >
                We create high-quality custom patches and offer expert
                digitizing and vector art services. From embroidery to PVC and
                more — fast, precise, and made to match your vision.{" "}
              </Typography>
            </Box>
            <FooterMenu
              style={{
                paddingBottom: { sm: "60px", xs: "60px" },
                paddingLeft: { sm: "40px", xs: "40px" },
                flexBasis: "212.52px",
                fontFamily: "Outfit",
              }}
              heading={"Navigate"}
              links={["/", "#about", "#blogs", "#faqs", "/contact-us"]}
              data={["Home", "About Us", "Blogs", "Faq’s", "Contact Us"]}
            />

            <FooterMenu
              style={{
                paddingBottom: { sm: "60px", xs: "60px" },
                paddingLeft: { sm: "40px", xs: "40px" },
                flexBasis: "212.52px",
                gap: "0.2rem",
                fontFamily: "Outfit",
              }}
              links={[
                "services/graphic-design",
                "services/video-animation",
                "services/android-&-ios-app-development",
                "services/web-development",
                "#",
              ]}
              heading={"Our Services"}
              data={[
                "Digitiizng",
                "Vector Art",
                "Customize Patches",
                "Promotional Products",
                "Graphic Designing",
              ]}
              // showSeeMore={true}
              hideSeeMore={true}
            />

            <FooterMenu
              style={{
                paddingBottom: { sm: "10px", xs: "10px" },
                paddingRight: { sm: "40px", xs: "40px" },
                paddingLeft: { sm: "40px", xs: "40px" },

                flexBasis: "304.4px",
                fontFamily: "Outfit",
              }}
              heading={"Contact Infomation"}
              links={[
                "tel:+13074008653",
                "https://wa.me/447928062002",
                "mailto:sales@patchmakers.us",
                "",
              ]}
              data={[
                "Phone:  +1 (307) 400 8653",
                "Phone: +44 (792) 806 2002 (Whatspp)",
                "Email: sales@patchmakers.us",
                "Address:1133 WOLCOTT ST SPC 4, CASPER, WY, 82601",
              ]}
            />
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          background: "#191919",
          padding: "50px 20px",
        }}
      >
        <Box>
          <Box
            className="FooterSecond"
            sx={{
              display: "flex",
              flexDirection: { md: "row", sm: "column", xs: "column" },
              justifyContent: {
                md: "space-between",
                sm: "center",
                xs: "center",
              },
              paddingBottom: "36.03px",
              maxWidth: "1526px",
              margin: "auto",
              borderBottom: "1px solid #696969",
              // border:"2px solid red",
              alignItems: "center",
            }}
          >
            <Box
              className="FooterLogo"
              sx={{
                paddingLeft: { sm: "0px", xs: "0px" },
              }}
              textAlign={{ md: "left", sm: "center", xs: "center" }}
            >
              <img src={layer1} style={{ width: "140px" }}></img>
            </Box>
            <Box
              className="FooterIcon"
              sx={{
                display: "inline-flex",
                marginTop: { md: "0px", sm: "20px", xs: "20px" },
                justifyContent: {
                  md: "space-between",
                  sm: "center",
                  xs: "center",
                },
                gap: { md: "30px", sm: "20px", xs: "20px" },
              }}
            >
              <Box
                sx={{
                  width: "50px",
                  height: "50px",
                  borderRadius: "50%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  transition: "background-color 0.3s ease",
                  "&:hover": {
                    backgroundColor: "rgba(255, 255, 255, 0.15)", // White with opacity 0.15 on hover
                  },
                  cursor: "pointer",
                }}
              >
                <a href="https://www.facebook.com/patchmakersofficial" target="_blank">
                  {" "}
                  <img src={iconOne} width="11.08px" height="21.34px" />
                </a>
              </Box>

              <Box
                sx={{
                  width: "50px",
                  height: "50px",
                  borderRadius: "50%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  transition: "background-color 0.3s ease",
                  "&:hover": {
                    backgroundColor: "rgba(255, 255, 255, 0.15)", // White with opacity 0.15 on hover
                  },
                  cursor: "pointer",
                }}
              >
                <a href="https://www.instagram.com/patchmakersofficial/" target="_blank">
                  <img src={iconTwo} width="22px" height="22px" />
                </a>
              </Box>

              <Box
                sx={{
                  width: "50px",
                  height: "50px",
                  borderRadius: "50%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  transition: "background-color 0.3s ease",
                  "&:hover": {
                    backgroundColor: "rgba(255, 255, 255, 0.15)", // White with opacity 0.15 on hover
                  },
                  cursor: "pointer",
                }}
              >
                <a
                  href="https://www.linkedin.com/company/patchmakersofficial"
                  target="_blank"
                >
                  {" "}
                  <img src={iconThree} width="22px" height="22px" />
                </a>
              </Box>

              <Box
                sx={{
                  width: "50px",
                  height: "50px",
                  borderRadius: "50%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  transition: "background-color 0.3s ease",
                  "&:hover": {
                    backgroundColor: "rgba(255, 255, 255, 0.15)", // White with opacity 0.15 on hover
                  },
                  cursor: "pointer",
                }}
              >
                <a href="https://www.youtube.com/@patchmakersofficial" target="_blank">
                  {" "}
                  <img src={iconFour} width="22px" height="22px" />
                </a>
              </Box>
            </Box>
          </Box>
          <Box
            className="FooterSecond"
            sx={{
              display: { md: "flex", xs: "block", sm: "block" },
              justifyContent: {
                md: "space-between",
                sm: "center",
                xs: "center",
              },
              paddingTop: "28px",
              maxWidth: "1526px",
              margin: "0 auto",
            }}
          >
            <Typography
              sx={{
                color: "white",
                fontSize: "16px",
                fontWeight: "400",
                fontFamily: "Inter",
                textAlign: { md: "left", sm: "center", xs: "center" },
                marginBottom: { md: "10px", sm: "10px", xs: "10px" },
                "&:hover": {
                  color: "#1E8CE0", // Hover effect on copyright text
                  transition: "color 0.3s ease",
                },
              }}
            >
              Copyright © {new Date().getFullYear()} - All Rights Reserved.
            </Typography>
            <FooterBottomMenu
              style={{
                minWidth: { md: "450px", sm: "100%", xs: "100%" },
                display: "flex",
                justifyContent: {
                  sm: "flex-end",
                  xs: "center",
                },
                paddingTop: "none",
                alignItems: "center",
                "&:hover": {
                  color: "#1E8CE0", // Hover effect on copyright text
                  transition: "color 0.3s ease",
                },
                // border:"2px solid red"
              }}
              data={["Terms of Use", "Privacy Policy", "Return Policy"]}
            />
          </Box>
        </Box>
      </Box>
    </>
  );
}
export default Footer;
