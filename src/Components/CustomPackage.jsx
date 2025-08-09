import React from "react";
import { Box } from "@mui/material";
import {
  List,
  ListItem,
  ListItemIcon,
  Typography,
  Button,
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { CheckCircleOutline } from "@mui/icons-material";
import CheckIcon from "@mui/icons-material/Check";
const CustomPackage = ({
  month = "",
  PriceTag = "",
  title = "",
  desc = "",
  index = 0,
  style = {},
  sx1 = {},
  btnText = "",
  btnURL = "",
  listItem = [],
  i = 0,
}) => {
  return (
    <>
      <Box></Box>

      <Box
        sx={{
          cursor: "pointer",
          position: "relative",
          padding: {
            xs: "20px 16px 30px 16px", // Small devices (extra-small or phones)
            sm: "33px 26px 48px 31px", // Medium devices (tablets)
            md: "33px 26px 48px 31px", // Larger devices (desktops)
          },
          backgroundColor: index === 3 ? "#70D0D9" : "inherit",
          color: index === 3 ? "white" : "inherit",
          borderRadius: "8px",
          transition: "all 0.3s ease", // Smooth transition effect on hover
          "&:hover": {
            backgroundColor: "#70D0D9", // Change background color on hover
            color: "white ! important", // Change text color on hover
            transform: "translateY(-10px)", // Slightly lift the card on hover
            boxShadow: "0px 42px 34px 0px #70D0D933", // Add shadow on hover
          },
          "&:hover p": {
            color: "white ! important", // Change text color on hover
          },
          "&:hover icon": {
            color: "white ! important",
          },
          "&:hover button ": {
            backgroundColor: "white ! important",
          },
          "&:hover Icon": {
            color: "white ! important",
          },
          "&:hover i": {
            color: "white ! important",
          },
          "&:hover ListItemIcon": {
            color: "white ! important",
          },
          "&:hover .check-icon": {
            color: "white ! important",
            backgroundColor: "#FFFFFF33 !important",
          },
          "&:hover .pop-tag": {
            
            backgroundColor: "#FFFFFF69 !important",
          },
        }}
      >
        {/* Price Section */}
        <Typography sx={{ display: "flex", alignItems: "flex-end" }}>
          <Typography
            sx={{
              fontFamily: '"Bakbak One", sans-serif !important',
              fontSize: {
                xs: "36px", // Smaller font on mobile devices
                sm: "48px", // Adjust font size for tablets
                md: "54px", // Normal font size for desktops
              },
              fontWeight: 700,
              lineHeight: {
                xs: "46px",
                sm: "56px",
                md: "66px",
              },
              color: index === 3 ? "white" : "#1E1E1E",
            }}
          >
            {PriceTag}
          </Typography>
          <Typography
            sx={{
              fontFamily: "Inter",
              fontSize: {
                xs: "14px", // Smaller font for mobile devices
                sm: "16px", // Normal size for larger screens
              },
              fontWeight: 400,
              lineHeight: {
                xs: "24px",
                sm: "36.99px",
              },
              marginLeft: "10px",
              color: index === 3 ? "white" : "#1E1E1E",
            }}
          >
            {month}
          </Typography>
{index==1&&          <Typography
          className="pop-tag"
            sx={{
              // backgroundColor: "#FFFFFF69",
              backgroundColor:"#70D0D9",
              color: "white",
              borderRadius: "4px",
              padding: "4px 8px",
              marginLeft: "10px",
              fontFamily: "Inter",
              fontSize: "12px",
              fontWeight: 500,
              position: "absolute",
              top: "10px",
              right: "10px",
            }}
          >
            Popular
          </Typography>}
        </Typography>

        {/* Title Section */}
        <Typography
          sx={{
            marginTop: "12px",
            fontFamily: "Inter",
            fontSize: {
              xs: "24px", // Smaller font for mobile devices
              sm: "30px", // Normal font for tablets
              md: "35px", // Larger font for desktops
            },
            fontWeight: 700,
            lineHeight: {
              xs: "28px",
              sm: "32px",
              md: "36px",
            },
            color: index === 3 ? "white" : "#1E1E1E",
          }}
        >
          {title}
        </Typography>

        {/* Description Section */}
        <Typography
          sx={{
            maxWidth: "259px",
            fontFamily: "Inter",
            fontSize: "16px",
            fontWeight: 400,
            lineHeight: "28px",
            marginTop: "16px",
            color: "#939393",
            marginBottom: "23px",
          }}
        >
          {desc}dads
        </Typography>

        {/* List Items Section */}
        {listItem.map((x, i) => (
          <ListItem
            key={i}
            sx={{
              display: "flex",
              alignItems: "center",
              marginBottom: "10px",
              fontFamily: "Inter",
              fontSize: "16px",
              fontWeight: 400,
              lineHeight: "28px",
              color: "#939393" || index === 3 ? "white" : "#fff",
              listStyleType: "none",
              padding: "0px !important",
              gap: "10px",
            }}
          >
            <Box
              className="check-icon"
              sx={{
                backgroundColor: "#70D0D91A",
                width: "20px",
                height: "20px",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#70D0D9",
              }}
            >
              <CheckIcon fontSize="10px" sx={{ width: "13px" }} />
            </Box>
            {/* <ListItemIcon
              sx={{
                minWidth: "auto",
                marginRight: "10px",
                color: index === 3 ? "white" : "#7b0000ff",
              }}
            >
              <CheckCircleIcon
                sx={{
                  color: index === 3 ? "white" : "#70D0D91A",
                  backgroundColor:"#70D0D91A",
                  width: "20px",
                  height: "20px",
                  "&:hover": {
                    color: index === 3 ? "#FFC800" : "#fff", // Change text color on hover
                  },
                }}
              />
            </ListItemIcon> */}
            <Typography
              sx={{
                color: index === 3 ? "white" : "#1E1E1E",
                fontSize: "16px",
                fontWeight: 400,
                lineHeight: "28px",
                fontFamily: "Inter",
              }}
            >
              {x}
            </Typography>
          </ListItem>
        ))}

        {/* Button Section */}
        <Box>
          <Button
            sx={{
              backgroundColor: "#70D0D933",
              padding: "14px 26px",
              borderRadius: "8px",
              color: "#70D0D9",
              display: "flex",
              justifyContent: "left",
              fontFamily: '"Bakbak One", sans-serif',
              fontSize: {
                xs: "14px", // Smaller size for mobile
                sm: "16px", // Regular size for tablet and desktop
              },
              lineHeight: "21.6px",
              textTransform: "capitalize",
              marginTop: "30px",
              transition: "all 0.3s ease", // Smooth transition effect on hover
              "&:hover": {
                backgroundColor:
                  index === 3 ? "#fff !important" : "#fff !important", // Change button color on hover
                color: index === 3 ? "#70D0D9" : "#70D0D9", // Change text color on hover
              },
            }}
          >
            Choose Plan
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default CustomPackage;
