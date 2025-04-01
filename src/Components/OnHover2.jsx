import React, { useState, useEffect } from "react";
import { styled } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Box } from "@mui/material";

// Importing icons
import icon1 from "../assets/font/servicesIcons/service1-min.webp";
import icon2 from "../assets/font/servicesIcons/service2-min.webp";
import icon3 from "../assets/font/servicesIcons/service3-min.webp";
import icon4 from "../assets/font/servicesIcons/service4-min.webp";
import icon5 from "../assets/font/servicesIcons/service5-min.webp";
import icon6 from "../assets/font/servicesIcons/service6-min.webp";
import icon7 from "../assets/font/servicesIcons/service7-min.webp";
import icon8 from "../assets/font/servicesIcons/service8-min.webp";
import icon9 from "../assets/font/servicesIcons/service9-min.webp";
import icon10 from "../assets/font/servicesIcons/service10-min.webp";

// Styled components
const DropdownContainer = styled("div")(({ theme }) => ({
  position: "relative",
  display: "inline-block",
}));

const DropdownContent = styled("div")(({ theme, serviceStyling }) => ({
  position: "absolute",
  backgroundColor: "#f9f9f9",
  minWidth: "250px",
  boxShadow: "0px 8px 16px 0px rgba(0,0,0,0.1)",
  zIndex: 1,
  borderRadius: "20px",
  overflow: "hidden",
  padding: "20px",
  marginTop: "-5px",
  ...serviceStyling,
}));

export default function CustomizedMenus2({
  buttonStyle,
  serviceStyling,
  dropDownText = false,
}) {
  const [isButtonHovered, setIsButtonHovered] = useState(false);
  const [isMenuHovered, setIsMenuHovered] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (isButtonHovered || isMenuHovered) {
      setIsMenuOpen(true);
    } else {
      setIsMenuOpen(false);
    }
  }, [isButtonHovered, isMenuHovered]);

  const handleMenuItemClick = (route) => {
    navigate(route);
    setIsMenuOpen(false); // Close the menu when a menu item is clicked
  };

  return (
    <DropdownContainer>
      <Button
        variant="text"
        disableElevation
        onMouseEnter={() => setIsButtonHovered(true)}
        onMouseLeave={() => setIsButtonHovered(false)}
        endIcon={<KeyboardArrowDownIcon />}
        sx={{
          textDecoration: "none",
          color: "#1E1E1E",
          fontSize: { md: "14px", xl: "16px" },
          fontWeight: "700 !important",

          fontFamily: "Inter, sans-serif",
          textTransform: "capitalize",
          margin: "0px !important",
          ...buttonStyle,
          cursor: "pointer",
          // border:"2px solid red",
          p: "25px 0px",
          ":hover" : {
            backgroundColor:"transparent",

          }
        }}
      >
        {dropDownText ? "See More" : "Services"}
      </Button>

      {isMenuOpen && (
        <DropdownContent
          onMouseEnter={() => setIsMenuHovered(true)}
          onMouseLeave={() => setIsMenuHovered(false)}
          serviceStyling={serviceStyling}
        >
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "10px",
              
            }}
          >
            <MenuItem
              onClick={() =>
                handleMenuItemClick("/services/android-&-ios-app-development")
              }
              disableRipple
              sx={{
                fontSize: "14px",
                fontFamily: "Inter",
                borderRadius: "8px",
              }}
            >
              <img
                src={icon1}
                alt=""
                style={{ objectFit: "contain", width: "20px" }}
              />
              &nbsp; Android & IOS App Development
            </MenuItem>
            <MenuItem
              onClick={() => handleMenuItemClick("/services/video-animation")}
              sx={{
                fontSize: "14px",
                fontFamily: "Inter",
                borderRadius: "8px",
              }}
              disableRipple
            >
              <img
                src={icon7}
                alt=""
                style={{ objectFit: "contain", width: "20px" }}
              />
              &nbsp; Video Animation
            </MenuItem>
            <MenuItem
              onClick={() => handleMenuItemClick("/services/web-development")}
              sx={{
                fontSize: "14px",
                fontFamily: "Inter",
                borderRadius: "8px",
              }}
              disableRipple
            >
              <img
                src={icon2}
                alt=""
                style={{ objectFit: "contain", width: "20px" }}
              />
              &nbsp; Web Development
            </MenuItem>
            <MenuItem
              onClick={() => handleMenuItemClick("/services/video-editing")}
              sx={{
                fontSize: "14px",
                fontFamily: "Inter",
                borderRadius: "8px",
              }}
              disableRipple
            >
              <img
                src={icon8}
                alt=""
                style={{ objectFit: "contain", width: "20px" }}
              />
              &nbsp; Video Editing
            </MenuItem>
            <MenuItem
              onClick={() =>
                handleMenuItemClick("/services/custom-software-development")
              }
              sx={{
                fontSize: "14px",
                fontFamily: "Inter",
                borderRadius: "8px",
              }}
              disableRipple
            >
              <img
                src={icon3}
                alt=""
                style={{ objectFit: "contain", width: "20px" }}
              />
              &nbsp; Custom Software Development
            </MenuItem>
            <MenuItem
              onClick={() => handleMenuItemClick("/services/graphic-design")}
              sx={{
                fontSize: "14px",
                fontFamily: "Inter",
                borderRadius: "8px",
              }}
              disableRipple
            >
              <img
                src={icon9}
                alt=""
                style={{ objectFit: "contain", width: "20px" }}
              />
              &nbsp; Graphic Design
            </MenuItem>
            <MenuItem
              onClick={() => handleMenuItemClick("/services/digital-marketing")}
              sx={{
                fontSize: "14px",
                fontFamily: "Inter",
                borderRadius: "8px",
              }}
              disableRipple
            >
              <img
                src={icon4}
                alt=""
                style={{ objectFit: "contain", width: "20px" }}
              />
              &nbsp; Digital Marketing
            </MenuItem>
            <MenuItem
              onClick={() =>
                handleMenuItemClick(
                  "/services/search-engine-optimization-(SEO)"
                )
              }
              sx={{
                fontSize: "14px",
                fontFamily: "Inter",
                borderRadius: "8px",
              }}
              disableRipple
            >
              <img
                src={icon6}
                alt=""
                style={{ objectFit: "contain", width: "20px" }}
              />
              &nbsp; Search Engine Optimization
            </MenuItem>
            <MenuItem
              onClick={() =>
                handleMenuItemClick("/services/support-&-maintenance")
              }
              sx={{
                fontSize: "14px",
                fontFamily: "Inter",
                borderRadius: "8px",
              }}
              disableRipple
            >
              <img
                src={icon10}
                alt=""
                style={{ objectFit: "contain", width: "20px" }}
              />
              &nbsp; Support & Maintenance
            </MenuItem>
            
          </Box>
        </DropdownContent>
      )}
    </DropdownContainer>
  );
}
