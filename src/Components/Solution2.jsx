import React, { useState } from "react";
import { styled, alpha } from "@mui/material/styles";
import { useNavigate } from "react-router-dom"; // Import useNavigate hook
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Divider from "@mui/material/Divider";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useDispatch } from "react-redux";
import { toggleMobileMenu } from "../Redux/navigationSlice";

// importing icons
import solution1 from "../assets/font/servicesIcons/solution1.webp";
import solution2 from "../assets/font/servicesIcons/solution2.webp";
import solution3 from "../assets/font/servicesIcons/solution3.webp";
import solution4 from "../assets/font/servicesIcons/solution4.webp";
import solution5 from "../assets/font/servicesIcons/solution15.webp";
import solution6 from "../assets/font/servicesIcons/solution16.webp";

// Add Inter font globally in your project
const StyledMenu = styled((props ) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "left",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "left",
    }}
    {...props}
  />
))(({ theme , serviceStyling}) => ({
  "& .MuiPaper-root": {
    borderRadius: "20px", // border radius of 20px as requested
    marginTop: theme.spacing(1-0),
    minWidth: 250,
    
    // maxWidth: ,
    color:
      theme.palette.mode === "light"
        ? "rgb(55, 65, 81)"
        : theme.palette.grey[300],
    boxShadow:
      "rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
    fontFamily: "Inter, sans-serif", // Set font to Inter
    "& .MuiMenu-list": {
      padding: "8px 0",
      display: "grid", // Make grid layout for two columns
      gridTemplateColumns: "1fr 1fr",
      
      ...serviceStyling
     
    },
    "& .MuiMenuItem-root": {
      "& .MuiSvgIcon-root": {
        fontSize: 20,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      "&:active": {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity
        ),
      },
    },
  },
}));

export default function Solution2({buttonStyle, serviceStyling, dropDownText=false}) {
  const [anchorEl, setAnchorEl] = useState(null);
  const dispatch = useDispatch();
  


  const open = Boolean(anchorEl);
  const navigate = useNavigate(); // Initialize navigate

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  // onClick={() => /)}

  const handleMenuItemClick = (route) => {
    setAnchorEl(null);
  
    navigate(route); // Use navigate to go to the specified route
    dispatch(toggleMobileMenu())
  };

  return (
    <div>
     
      <Button
        aria-controls={open ? "demo-customized-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        variant="text"
        disableElevation
        onClick={handleClick}
        endIcon={<KeyboardArrowDownIcon />}
        sx={{
          textDecoration: "none",
          color: "#1E1E1E",
          fontSize: "16px", // Smaller font size for mobile
          fontWeight: "600",
          fontFamily: "Inter, sans-serif",
          textTransform: "capitalize",
          margin: '0px !important',
          ...buttonStyle,
          
        }}
      >
                {dropDownText ? "See More": "Solutions"}

      </Button>

      <StyledMenu
        MenuListProps={{
          "aria-labelledby": "demo-customized-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={() => setAnchorEl(null)}
        serviceStyling={serviceStyling} 
        
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
      </StyledMenu>
    </div>
  );
}
