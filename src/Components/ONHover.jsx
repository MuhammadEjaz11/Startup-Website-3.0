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
    minWidth: 300,
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
      display: "flex", // Single column layout
      flexDirection: "column",
      
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

export default function CustomizedMenus({buttonStyle, serviceStyling, dropDownText=false}) {
  const [anchorEl, setAnchorEl] = useState(null);
  const dispatch = useDispatch();
  


  const open = Boolean(anchorEl);
  const navigate = useNavigate(); // Initialize navigate

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  // onClick={() => /)}

  const handleClose = (route) => {
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
          fontWeight: "700 !important",
          fontFamily: "Inter, sans-serif",
          textTransform: "capitalize",
          margin: '0px !important',
          ...buttonStyle
        }}
      >
                {dropDownText ? "See More": "Services"}

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
          onClick={() => handleClose("/services/digitizing")}
          sx={{ fontSize: "14px" }}
          disableRipple
        >
          <img src={icon1} alt="" style={{objectFit:"contain",  width:"20px"}} />
          &nbsp; &nbsp; Digitizing
        </MenuItem>

        <MenuItem
          onClick={() => handleClose("/services/vector-art")}
          sx={{ fontSize: "14px" }}
          disableRipple
        >
          <img src={icon2} alt="" style={{objectFit:"contain",  width:"20px"}} />
          &nbsp; &nbsp; Vector Art
        </MenuItem>
        <MenuItem
          onClick={() => handleClose("/services/customize-patches")}
          sx={{ fontSize: "14px" }}
          disableRipple
        >
          <img src={icon3} alt="" style={{objectFit:"contain",  width:"20px"}} />
          &nbsp; &nbsp; Customize Patches
        </MenuItem>
        <MenuItem
          onClick={() => handleClose("/services/graphic-design")}
          sx={{ fontSize: "14px" }}
          disableRipple
        >
          <img src={icon9} alt="" style={{objectFit:"contain",  width:"20px"}} />
          &nbsp; &nbsp;Graphic Design
        </MenuItem>
        <MenuItem
          onClick={() => handleClose("/services/video-editing")}
          sx={{ fontSize: "14px" }}
          disableRipple
        >
          <img src={icon8} alt="" style={{objectFit:"contain",  width:"20px"}} />
          &nbsp; &nbsp; Video Editing
        </MenuItem>
      </StyledMenu>
    </div>
  );
}
