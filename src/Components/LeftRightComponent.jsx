import React from "react";
import StyledHeading from "./StyledHeading";
import { Box, Typography } from "@mui/material";
import AppDevImage from "../assets/font/MobileApp/appDevImage.png";
// import HeadingImage from '../assets/font/WebDevelopment/HeadingImage.p'
import CustomButton from "./Button";
import CustomButtonMe from "./CustomButtomMe";
const LeftRightComponent = ({
  image,
  sx,
  sx1,
  sx2,
  title1,
  title2,
  styledSx,
  titleStyle,
  isRow,
  SecondPera = true,
  buttonShow = false,
  buttonStyle,
  content,
  content2,
  content3

}) => {
  const renderBoldText = (text) => {
    const parts = text.split(/(\*.*?\*)/g); // Split the text on `*...*`
    return parts.map((part, index) =>
      part.startsWith("*") && part.endsWith("*") ? (
        <strong className="li-tag-rendering" key={index}>{part.slice(1, -1)}</strong>
      ) : (
        part
      )
    );
  };

  return (
    <Box
      sx={{
        display: "flex",
        gap: "2rem",
        width: "100%",
        flexDirection: { md: "row", xs: "column" },
        ...sx,
        

      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: { xl: "1rem", md: ".5rem", xs: ".5rem" },
          flexBasis: "50%",
          maxWidth: "100%",
          // margin: "auto",
          ...sx1,
          alignItems: "start",
          mt: "14px",
          // border:"2px solid red" 



        }}
      >
        <StyledHeading
          sx={{
            // paddingBottom: "40px",
            display: "flex",
            flexDirection: isRow ? "row" : "column",
            ...styledSx,
            // mb:"20px",
            ...titleStyle,
            alignItems: "start",
          }}
          sx1={{
            flexDirection: isRow ? "row" : "column",
          }}
          title1={title1}
          title2={title2}
        />
        <Typography
          sx={{
            color: "#939393",
            fontSize: {
              md: "13px",
              xl: "16px",

              sm: "14px",
              xs: "14px",
            },
            lineHeight: { xl: "36px", md: "30px", xs: "22px" },
          }}
        >

{content ? renderBoldText(content) : ""}
        </Typography>

        <Typography
          sx={{
            color: "#939393",
            fontSize: {
              md: "13px",
              xl: "16px",

              sm: "14px",
              xs: "14px",
            },
            lineHeight: { xl: "36px", md: "30px", xs: "22px" },
          }}
        >

          {Array.isArray(content2) ? (
            <ul className="unordered-list" >
              {content2.map((item, index) => (
                <li className="li-tag-rendering" key={index}>
                {renderBoldText(item)}
              </li>
              ))}
            </ul>
          ) : (
            <Typography
            sx={{
              color: "#939393",
              fontSize: {
                md: "13px",
                xl: "16px",
  
                sm: "14px",
                xs: "14px",
              },
              lineHeight: { xl: "36px", md: "30px", xs: "22px" },
            }}
          >{ content2 && renderBoldText(content2)} </Typography>
          )}
        </Typography>
        <Typography
          sx={{
            color: "#939393",
            fontSize: {
              md: "13px",
              xl: "16px",

              sm: "14px",
              xs: "14px",
            },
            lineHeight: { xl: "36px", md: "30px", xs: "22px" },
          }}
        >
        {
          content3 ? content3 : ""
        }
</Typography>



        {
          buttonShow ? (
            <CustomButton
              title="Order Now"
              svgColor={"black"}
              buttonStyle={{
                maxWidth: "235px",
                fontWeight: 600,
                textTransform: "capitalize",
                color: "white",
                padding: { xs: "15px", md: "20px" },
                marginTop: "20px",
                fontFamily: "Outfit",
                fontSize: { xs: "14px", md: "16px" },
                lineHeight: "20.16px",
                backgroundColor: "black",
                borderRadius: "15px",
                display: "none",

                ...buttonStyle,
              }}
            />

          ) : ""
        }

      </Box>
      <Box
        sx={{
          flexBasis: { md: "45%", sm: "100%", xs: "100%" },
          maxWidth: "100%",
          margin: "auto",
          overflow: "hidden",
          ...sx2,
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "start",
            alignItems: "start",

            height: "100%"

          }}
        >
          <img
            src={image}
            style={{
              width: "100%",
              height: "auto"
            }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default LeftRightComponent;
