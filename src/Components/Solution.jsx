import React, { useState, useEffect } from "react";
import { styled } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Box } from "@mui/material";

// Importing solution icons
import solution1 from "../assets/font/servicesIcons/solution1.webp";
import solution2 from "../assets/font/servicesIcons/solution2.webp";
import solution3 from "../assets/font/servicesIcons/solution3.webp";
import solution4 from "../assets/font/servicesIcons/solution4.webp";
import solution5 from "../assets/font/servicesIcons/solution15.webp";
import solution6 from "../assets/font/servicesIcons/solution16.webp";

// Styled components
const DropdownContainer = styled("div")(({ theme }) => ({
  position: "relative",
  display: "inline-block",
}));

const DropdownContent = styled("div")(({ theme, serviceStyling }) => ({
  position: "absolute",
  backgroundColor: "#f9f9f9",
  minWidth: "350px",
  boxShadow: "0px 8px 16px 0px rgba(0,0,0,0.1)",
  zIndex: 1,
  borderRadius: "20px",
  overflow: "hidden",
  padding: "20px",
  marginTop: "-5px",
  ...serviceStyling,
}));

export default function SolutionMenu({
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
          fontWeight: "400",
          fontFamily: "Inter, sans-serif",
          textTransform: "capitalize",
          margin: "0px !important",
          ...buttonStyle,
          cursor: "pointer",
          p: "25px 0px",
          ":hover" : {
            backgroundColor:"white",

          }
        }}
      >
        {dropDownText ? "See More" : "Solution"}
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
              onClick={() => handleMenuItemClick("/services/cms-solution")}
              disableRipple
              sx={{
                fontSize: "14px",
                fontFamily: "Inter",
                borderRadius: "8px",
              }}
            >
              <img src={solution1} alt="" style={{ width: "22px" }} />
              &nbsp; CMS Solution
            </MenuItem>
            <MenuItem
              onClick={() => handleMenuItemClick("/services/erp-solution")}
              sx={{
                fontSize: "14px",
                fontFamily: "Inter",
                borderRadius: "8px",
              }}
              disableRipple
            >
              <img src={solution4} alt="" style={{ width: "22px" }} />
              &nbsp; ERP Solution
            </MenuItem>
            <MenuItem
              onClick={() => handleMenuItemClick("/services/hrm-solution")}
              sx={{
                fontSize: "14px",
                fontFamily: "Inter",
                borderRadius: "8px",
              }}
              disableRipple
            >
              <img src={solution3} alt="" style={{ width: "22px" }} />
              &nbsp; HRM Solution
            </MenuItem>
            <MenuItem
              onClick={() => handleMenuItemClick("/services/lms-solution")}
              sx={{
                fontSize: "14px",
                fontFamily: "Inter",
                borderRadius: "8px",
              }}
              disableRipple
            >
              <img src={solution2} alt="" style={{ width: "22px" }} />
              &nbsp; LMS Solution
            </MenuItem>
            <MenuItem
              onClick={() => handleMenuItemClick("/services/crm-solution")}
              sx={{
                fontSize: "14px",
                fontFamily: "Inter",
                borderRadius: "8px",
              }}
              disableRipple
            >
              <img src={solution5} alt="" style={{ width: "22px" }} />
              &nbsp; CRM Solution
            </MenuItem>
            <MenuItem
              onClick={() => handleMenuItemClick("/services/pos-solution")}
              sx={{
                fontSize: "14px",
                fontFamily: "Inter",
                borderRadius: "8px",
              }}
              disableRipple
            >
              <img src={solution6} alt="" style={{ width: "22px" }} />
              &nbsp; POS Solution
            </MenuItem>
          </Box>
        </DropdownContent>
      )}
    </DropdownContainer>
  );
}
