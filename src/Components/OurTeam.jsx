import { Box, Typography } from "@mui/material";
import React from "react";
import memberOne from "../image/adam.png";
import memberTwo from "../image/chloe.png";
import memberThree from "../image/memberThree-min.webp";
import memberFour from "../image/david.png";

const teamArra = [
  {
    image: memberOne,
    name: "Adam Zaid",
    designation: "CEO - Founder",
    facebook: "https://www.facebook.com/adamzaid123/",
  },
  {
    image: memberTwo,
    name: "Chloe Andreson",
    designation: "Sales Manager",
    facebook: "https://www.facebook.com/chloe.anderson.989861/",
  },
  {
    image: memberThree,
    name: "Kinsey Tyler",
    designation: "Designer",
    facebook: "https://www.facebook.com/share/19R6yTL9H4/",
  },
  {
    image: memberFour,
    name: "David Jason",
    designation: "Production Manager",
  },
];

const OurTeam = () => {
  return (
    <Box
      sx={{
        marginTop: { md: "73px", xs: "40px" },
        display: "flex",
        flexDirection: { md: "row", xs: "column" },
        justifyContent: "space-between",
        gap: "1rem",
      }}
    >
      {teamArra.map((member, index) => (
        <Box
          key={index}
          sx={{
            position: "relative",
            padding: "0px 20px",
            borderRadius: "15px",
            maxWidth: "320px",
            marginBottom: { md: "0px", xs: "30px" },
            backgroundColor: "#F7f7f7",
            overflow: "hidden",
            transition: "all 0.3s ease-in-out",
            "&:hover": {
              // Other hover effects can be added here if needed
            },
            "&:hover .socialIcons": {
              opacity: 1,
              transform: "translateY(10px)", // Makes the icons visible
            },
            "&:hover .nameBox": {
              transform: "translate(-50%, -45%)", // Moves the name box upward on hover
            },
            "&:hover img": {
              transform: "scale(1.05)", // Slight image zoom on hover
            },
          }}
        >
          <Box
            component="img"
            src={member?.image}
            sx={{
              width: "100%",
              height: "100%",
              objectFit: "contain",
              transition: "transform 0.3s ease-in-out",
            }}
          />

          {/* Name Box */}
          <Box
            className="nameBox"
            sx={{
              borderRadius: "15px",
              padding: "13px 32px",
              position: "absolute",
              bottom: "5%", // Positioned above the social media icons
              left: "50%",
              transform: "translate(-50%, 0)",
              backdropFilter: "blur(6px)",
              backgroundColor: "#FFFFFF59",
              textAlign: "center",
              width: "40%",
              transition: "all 0.3s ease-in-out",
            }}
          >
            <Typography
              sx={{
                color: "white",
                fontFamily: "Outfit",
                fontSize: { xl: "17px", xs: "12px" },
                fontWeight: 700,
              }}
            >
              {member?.name}
            </Typography>

            <Typography
              sx={{
                color: "#FFFFFFAD",
                fontFamily: "inter",
                fontWeight: 400,
                fontSize: "10px",
              }}
            >
              {member?.designation}
            </Typography>
          </Box>

   
        </Box>
      ))}
    </Box>
  );
};

export default OurTeam;
