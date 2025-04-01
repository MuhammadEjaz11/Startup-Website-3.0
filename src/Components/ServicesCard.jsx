import { Box, Button, Typography } from "@mui/material";
import React from "react";

const ServicesCard = ({
  iconURL = "",
  btnURL = "",
  desc = "",
  title = "",
  btnText = "",
  btnShow = false, // Default button visibility
  centerImage = false, // New prop to control image alignment
  index = 0,
  style = {},
  titlesx = {},
  sx1 = {},
  imagesx = {},
  image = false,
  imageStyle,
  descsx = {}
}) => {
  return (
    <Box
      key={index}
      sx={{
        flexBasis: { xs: "100%", sm: "48%", md: "31%" },
        borderRight: { md: index < 2 && "1px solid #F1F1F1" },
        borderBottom: { xs: "1px solid #F1F1F1" },
        p: { xs: "10px", md: "20px" },
        marginBottom: { xs: "0px", md: "0" },
        textAlign: { xs: "center", md: "left" },
        ...style,
        ...sx1,
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: centerImage
            ? "center"
            : { xs: "center", md: "flex-start" }, // Conditional alignment
          ...imagesx,
        }}
      >
        {image ? (
          <Box
            component="img"
            src={iconURL}
            alt="Icon"
            sx={{ width: "80px", height: "auto", ...imageStyle }}
          />
        ) : (
          ""
        )}
      </Box>

      <Typography
        sx={{
          marginTop: "33px",
          color: "#1C1C1C",
          fontFamily: "satoshi",
          fontSize: { xs: "22px", xl: "27px" },
          fontWeight: 700,
          lineHeight: { xs: "28px", md: "36.99px" },
          ...titlesx,
        }}
      >
        {title}
      </Typography>

      <Typography
        sx={{
          fontFamily: "Inter",
          fontSize: { xs: "14px", xl: "16px" },
          lineHeight: { xs: "24px", md: "36px" },
          color: "#939393",
          fontWeight: 400,
          marginTop: "10px",
          ...descsx
        }}
      >
        {desc}
      </Typography>

      {btnShow && (
        <Button
          href={btnURL}
          sx={{
            fontFamily: "Golos Text",
            fontSize: "16px",
            fontWeight: "700",
            padding: "20px 33px",
            marginTop: "20px",
            textTransform: "none",
            backgroundColor: "#fff",
            color: "#F7C244",
            borderRadius: "40px",
            boxShadow: "none",
            border: "1.5px solid #F7C244",
            "&:hover": {
              backgroundColor: "#F7C244",
              color: "#fff",
            },
          }}
          variant="contained"
        >
          {btnText}
        </Button>
      )}
    </Box>
  );
};

export default ServicesCard;
