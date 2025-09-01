import React, { useState, useEffect } from "react";
import { styled } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
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
const div = styled("div")(({ theme }) => ({
  position: "relative",
  display: "inline-block",
  zIndex: 1000,
}));

const DropdownContent = styled("div")(({ theme, serviceStyling }) => ({
  position: "absolute",
  backgroundColor: "#f9f9f9",
  minWidth: "250px",
  boxShadow: "0px 8px 16px 0px rgba(0,0,0,0.1)",
  zIndex: 1001,
  borderRadius: "20px",
  overflow: "visible",
  padding: "20px",
  marginTop: "-5px",
  maxHeight: "none",
  height: "auto",
  minHeight: "fit-content",
  ...serviceStyling,
}));

export default function CustomizedMenus2({
  buttonStyle,
  serviceStyling,
  dropDownText = false,
  menuItems = [],
  buttonText = "Services",
}) {
  const [isButtonHovered, setIsButtonHovered] = useState(false);
  const [isMenuHovered, setIsMenuHovered] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (isButtonHovered || isMenuHovered) {
      setIsMenuOpen(true);
    } else {
      setIsMenuOpen(false);
      setIsSubmenuOpen(false);
    }
  }, [isButtonHovered, isMenuHovered]);

  const handleMenuItemClick = (route) => {
    navigate(route);
    setIsMenuOpen(false);
    setIsSubmenuOpen(false);
  };

  const handleSubmenuToggle = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsSubmenuOpen(!isSubmenuOpen);
  };

  // Default menu items if none provided
  const defaultMenuItems = [
    {
      id: "digitizing",
      label: "Digitizing",
      route: "/services/digitizing",
      icon: icon1,
      hasSubmenu: false,
    },
    {
      id: "vector-art",
      label: "Vector Art",
      route: "/services/vector-art",
      icon: icon2,
      hasSubmenu: false,
    },
    {
      id: "customize-patches",
      label: "Customize Patches",
      route: "/services/customize-patches",
      icon: icon3,
      hasSubmenu: true,
      submenuItems: [
        {
          id: "embroidered",
          label: "Embroidered Patches",
          route: "/services/custom-patches/embroidered-patches",
        },
        {
          id: "chenille",
          label: "Chenille Patches",
          route: "/services/custom-patches/chenille-patches",
        },
        {
          id: "wsublimationoven",
          label: "Sublimation Patches",
          route: "/services/custom-patches/sublimation-patches",
        },
        {
          id: "pvc",
          label: "PVC Patches",
          route: "/services/custom-patches/pvc-patches",
        },
        {
          id: "leather",
          label: "Leather Patches",
          route: "/services/custom-patches/leather-patches",
        },
      ],
    },
    {
      id: "graphic-design",
      label: "Graphic Design",
      route: "/services/graphic-design",
      icon: icon9,
      hasSubmenu: false,
    },
    {
      id: "web-design",
      label: "Website Design",
      route: "/services/web-development",
      icon: icon10,
      hasSubmenu: false,
    },
    {
      id: "video-editing",
      label: "Video Editing",
      route: "/services/video-editing",
      icon: icon8,
      hasSubmenu: false,
    },
  ];

  const itemsToRender = menuItems.length > 0 ? menuItems : defaultMenuItems;

  return (
    <>
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
          fontWeight: "500 !important",
          fontFamily: "Inter, sans-serif",
          textTransform: "capitalize",
          margin: "0px !important",
          cursor: "pointer",
          p: "25px 0px",
          ":hover": {
            backgroundColor: "transparent",
          },
          ...buttonStyle,
        }}
      >
        {dropDownText ? "See More" : buttonText}
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
              gridTemplateColumns: "1fr",
              // gap: "10px",
              height: "auto",
              maxHeight: "none",
              overflow: "visible",
              minHeight: "fit-content",
              gridAutoRows: "min-content",
            }}
          >
            {itemsToRender.map((item) => (
              <React.Fragment key={item.id}>
                {item.hasSubmenu ? (
                  <Box sx={{ position: "relative" }}>
                    <MenuItem
                            onMouseEnter={() => setIsSubmenuOpen(true)}

                      onClick={handleSubmenuToggle}
                      // onMouseEnter={() => setIsSubmenuOpen(true)}
                      sx={{
                        fontSize: "14px",
                        fontFamily: "Inter",
                        borderRadius: "8px",
                        display: "flex",
    
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                      disableRipple
                    >
                      <Box sx={{ height:"20px", display: "flex", alignItems: "center" }}>
                        <img
                          src={item.icon}
                          alt=""
                          style={{ objectFit: "contain", width: "20px" }}
                        />
                        &nbsp;{" "}
                        <Box
              
                          sx={{
                            fontSize: "14px",
                            
                            fontFamily: "Inter",
                            borderRadius: "8px",
                          }}
                        >
                          {" "}
                          {item.label}{" "}
                        </Box>
                      </Box>
                      <KeyboardArrowRightIcon sx={{ fontSize: "16px" }} />
                    </MenuItem>

                    {/* Submenu */}
                    {isSubmenuOpen && (
                      <Box
                        sx={{
                          position: "absolute",
                          left: "100%",
                          top: 0,
                          backgroundColor: "#f9f9f9",
                          minWidth: "200px",
                          boxShadow: "0px 8px 16px 0px rgba(0,0,0,0.1)",
                          borderRadius: "8px",
                          padding: "8px",
                          zIndex: 2,
                          marginLeft: "5px",
                        }}
                        onMouseEnter={() => setIsSubmenuOpen(true)}
                        onMouseLeave={() => setIsSubmenuOpen(false)}
                      >
                        {item.submenuItems.map((subItem) => (
                          <MenuItem
                            key={subItem.id}
                            onClick={() => handleMenuItemClick(subItem.route)}
                            sx={{
                              fontSize: "13px",
                              fontFamily: "Inter",
                              borderRadius: "6px",
                              padding: "8px 12px",
                            }}
                            disableRipple
                          >
                            {subItem.label}
                          </MenuItem>
                        ))}
                      </Box>
                    )}
                  </Box>
                ) : (
                  <MenuItem
                        onMouseLeave={() => setIsSubmenuOpen(false)}

                    onClick={() => handleMenuItemClick(item.route)}
                    sx={{
                      fontSize: "14px",
                      fontFamily: "Inter",
                      borderRadius: "8px",
                      // py:"0px",
                    }}
                    disableRipple
                  >
                    <img
                      src={item.icon}
                      alt=""
                      style={{ objectFit: "contain", width: "20px" }}
                    />
                    &nbsp; {item.label}
                  </MenuItem>
                )}
              </React.Fragment>
            ))}
          </Box>
        </DropdownContent>
      )}
    </>
  );
}
