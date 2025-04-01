import React from "react";
// import {Box, Carousel} from "react-material-ui-carousel";
import { Box, fontSize } from "@mui/system";
import StyledHeading from "./StyledHeading";
import { Typography } from "@mui/material";
import DigitalServices1 from "../assets/font/DigitalMarketing/DigitalServices1.png";
import DigitalServices2 from "../assets/font/DigitalMarketing/DigitalServices2.png";

export const OurDigital = () => {
  return (
    <Box
      sx={{
        padding: "65px 0px",
        display: "flex",
        flexDirection: {
          md: "row",
          sm: "column-reverse",
          xs: "column-reverse",
        },
        justifyContent: "space-between",
        maxWidth: "1526px",
        margin: "0 auto",
        gap: { xs: "1rem", md: "0rem" },
      }}
    >
      <Box>
        <Box
          sx={{
            borderRadius: "15px",
            padding: "32px 31px 36px 35px",
            border: "1px solid #E9E9E9",
            maxWidth: { md: "786px", xs: "100%", sm: "100%" },
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <StyledHeading
              title2="PPC (Pay-Per-Click Advertising)"
              sx2={{
                fontSize: "27px",
              }}
              sx={{
                gap: "0px",
              }}
            />
            <img
              style={{
                marginTop: "-73px",
              }}
              src={DigitalServices1}
            />
          </Box>
          <Typography
            sx={{
              marginTop: "22px",
              fontSize: "16px",
              fontFamily: "Inter",
              color: "#939393",
              lineHeight: "36px",
            }}
          >
           Instantly reach your audience with highly-targeted PPC campaigns. Our optimized ads ensure 40% faster lead generation and up to 200% ROI growth, driving high-quality traffic that converts.
          </Typography>
        </Box>
      </Box>
      <Box>
        <Box
          sx={{
            maxWidth: { md: "499px", xs: "100%", sm: "100%" },
            padding: {
              sm: "0px 20px 0px 20px !Important",
              xs: "0px 20px 0px 20px !important",
            },
            margin: "0 auto !important",
            paddingBottom: "50px !important",
            marginBottom: { sm: "50px !important", xs: "50px !important" },
            display: { md: "block", xs: "flex", sm: "flex" },
            gap: { sm: "20px !important", xs: "0px !important" },
            flexWrap:"wrap"
          }}
        >
          <Typography
            variant="h3"
            sx={{
              fontSize: { md: "50px", sm: "30px", xs: "30px" },
              fontFamily: "satoshi",
              lineHeight: "67.5px",
            }}
          >
            Our Core Digital
          </Typography>
          <Typography
            variant="h3"
            sx={{
              fontSize: { md: "50px", sm: "30px", xs: "30px" },
              fontFamily: "satoshi-light",
              lineHeight: "67.5px",
            }}
          >
            Marketing Services
          </Typography>
        </Box>

        <Box
          sx={{
            borderRadius: "15px",
            padding: "32px 31px 36px 35px",
            border: "1px solid #E9E9E9",
            maxWidth: { md: "786px", xs: "100%", sm: "100%" },
            marginLeft: { md: "-60px", sm: "0px", xs: "0px" },
            marginBottom: { sm: "30px", xs: "30px" },
            backgroundColor: "#fff",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <StyledHeading
              title2="SMM (Social Media Marketing)"
              sx2={{
                fontSize: "27px",
              }}
              sx={{
                gap: "0px",
              }}
            />
            <img
              style={{
                marginTop: "-73px",
              }}
              src={DigitalServices2}
            />
          </Box>
          <Typography
            sx={{
              marginTop: "22px",
              fontSize: "16px",
              fontFamily: "Inter",
              color: "#939393",
              lineHeight: "36px",
            }}
          >
           Amplify your brand presence across social platforms. With data-backed strategies, we increase engagement, follower growth, and conversions, helping businesses reach millions of users monthly across Facebook, Instagram, LinkedIn, and more.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};
