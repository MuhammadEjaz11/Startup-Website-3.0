import React, { useState } from "react";
import { Box, Button, Card, Drawer, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import layer1 from "../image/pm_logo.svg";

import MenuIcon from '@mui/icons-material/Menu';
import CustomButton from "./Button";

import { useDispatch, useSelector } from "react-redux";
import { toggleMobileMenu } from "../Redux/navigationSlice.js";
import CloseIcon from "@mui/icons-material/Close";
import CustomizedMenus2 from "./OnHover2.jsx";
import { useNavigate } from "react-router-dom";

import ContactFormModal from "./ContactModal.jsx";


function Header() {
  const dispatch = useDispatch();
  const isMobileMenuOpen = useSelector(
    (state) => state.navigation.isMobileMenuOpen
  );
  const navigate = useNavigate();

  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleNavigate = (route) => {
    navigate(route);
  };
  return (
    <Box
      sx={{
        mb: "130px",
        display: "flex",
        justifyContent: "center",
        paddingTop: {md:"30px", xs:"15px"},
        zIndex: "100",
        position: "relative",
        
      }}
    >
      <Box sx={{ display: "flex", width: "100%" }}>
        <Card
          className="MainHeader"
          sx={{
            width: "100%",
            borderRadius: "23px",
            display: {
              md: "flex",
              xs: "none",
            },
            maxWidth: "1524px",
            paddingLeft: "30px !important",
            paddingRight: "11px !important",
            alignItems: "center",
            justifyContent: "space-between",
            margin: "auto",
            height: "82px",
            boxShadow: "0px 31px 62.2px -12px rgba(0, 0, 0, 0.15)",
            // ... other styles
            overflow: "visible", // Add this line
            position: "relative",
          }}
        >
          <div
            className="Logo"
            style={{ color: "#1E1E1E", cursor: "pointer" }}
            onClick={() => handleNavigate("/")}
          >
            <img
              src={layer1}
              alt="Logo"
              style={{ objectFit: "cover", width: "90px", marginTop: "15px" }}
            />
          </div>
          <nav
            style={{
              display: "flex",
              alignItems: "center",
              // gap: "1.8rem"
            }}
          >
            <Typography
              onClick={() => handleNavigate("/")}
              sx={{
                textDecoration: "none",
                color: "#1E1E1E",
                fontSize: { md: "14px", xl: "16px" },
                fontWeight: "400",
                fontFamily: "Inter",
                cursor: "pointer",
                ":hover": {
                  color: "#33757bff",
                },
              }}
            >
              Home
            </Typography>
            <Box sx={{ display: "inline-block", position: "relative" }}>
              <CustomizedMenus2 buttonStyle={{ cursor: "pointer" }} />
            </Box>

            <Typography
              onClick={() => handleNavigate("/our-portfolio")}
              sx={{
                textDecoration: "none",
                color: "#1E1E1E",
                fontSize: { md: "14px", xl: "16px" },
                fontWeight: "400",
                fontFamily: "Inter",
                cursor: "pointer",
                ":hover": {
                  color: "#33757bff",
                },
              }}
            >
              Our Portfolio
            </Typography>

            <Typography
              onClick={() => handleNavigate("/contact-us")}
              sx={{
                textDecoration: "none",
                color: "#1E1E1E",
                fontSize: { md: "14px", xl: "16px" },
                fontWeight: "400",
                fontFamily: "Inter",
                cursor: "pointer",
                ":hover": {
                  color: "#33757bff",
                },
              }}
            >
              Contact Us
            </Typography>
          </nav>
          <CustomButton
            textStyle={{
              color: "white",
              fontSize: "16px",
            }}
            buttonStyle={{
              borderRadius: "15px",
              padding: { xs: "0px 0px", xl: "3px 20px" },

              background: "black",
              textTransform: "capitalize",
            }}
            onClick={handleOpen}
            title="Get Started"
          />
        </Card>

        {/* Mobile Navigation */}
        <Box
          sx={{
            display: { md: "none", xs: "flex" },
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <div className="Logo" style={{ color: "#1E1E1E" }}>
            <img src={layer1} alt="Logo" />
          </div>
          <Button onClick={() => dispatch(toggleMobileMenu())}>
            {" "}
            <MenuIcon sx={{color:"#70D0D9" , width:"30px" }}/>
          </Button>
          <Drawer
            anchor="left"
            open={isMobileMenuOpen}
            onClose={() => dispatch(toggleMobileMenu())}
            sx={{
              "& .MuiDrawer-paper": {
                width: { xs: "90%", md: "300px" },
                backgroundColor: "white",
                color: "black",
                boxShadow: "2px 0px 15px rgba(0,0,0,0.3)",
                padding: "20px 0px 20px 20px",
                transition: "all 0.3s ease-in-out",
              },
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <img src={layer1} alt="Logo" style={{ width: "100px" }} />
              <Button onClick={() => dispatch(toggleMobileMenu())}>
                <CloseIcon style={{ fontSize: "22px", color: "black" }} />
              </Button>
            </Box>
            <nav
              style={{
                display: "flex",
                flexDirection: "column",
                // gap: "1rem",
                marginTop: "50px",
              }}
            >
              <Link
                to="/"
                onClick={() => dispatch(toggleMobileMenu())}
                style={{
                  textDecoration: "none",
                  color: "black",
                  fontSize: "16px",
                }}
              >
                Home
              </Link>
              <Box component={"span"}>
                <CustomizedMenus2
                  buttonStyle={{
                    cursor: "pointer",

                    justifyContent: "flex-start",
                    py: "0px",
                    color: "black",
                    fontSize: "16px",
                    fontFamily: "Inter",
                    // height:"10px",
                    fontWeight: "600",
                    textDecoration: "none",
                  }}
                />
              </Box>
              <Link
                to="/our-portfolio"
                onClick={() => dispatch(toggleMobileMenu())}
                style={{
                  textDecoration: "none",
                  color: "black",
                  fontSize: "16px",
                  margin: "11px 0px",
                }}
              >
                Our Portfolio
              </Link>

              <Link
                to="/contact-us"
                onClick={() => dispatch(toggleMobileMenu())}
                style={{
                  textDecoration: "none",
                  color: "black",
                  fontSize: "16px",
                }}
              >
                Contact Us
              </Link>
            </nav>
          </Drawer>
        </Box>
      </Box>

      <ContactFormModal open={open} handleClose={handleClose} />
    </Box>
  );
}

export default Header;
