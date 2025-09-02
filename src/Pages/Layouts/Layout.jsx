import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";

import BannerSlider from "../../Components/BannerSlider";


function Layout() {
  const [location, setLocation] = useState(null);
  const value = useLocation();
  const locationPage = value.pathname === "/services/our-blogs/details";
  console.log(locationPage);
  useEffect(() => {
    setLocation(value);
  }, []);

  return (
    <>
      <Box
        sx={{
          // padding: {lg:"0px 20px 0px 20px", md:"0px 20px 0px 20px", sm:"0px 20px 0px 20px", xs:"0px 20px 0px 20px"},
          margin: { md: " 14px auto", xs: "0px auto" },
          // backgroundImage: `url(${bannerWebP})`,
          // backgroundRepeat: "no-repeat",
          // backgroundSize: "cover",
          backgroundColor: "#F7F7F7",
          width: { md: "99%", xs: "100%" },
          fontFamily: "Inter",
          borderRadius: "14px",
          overflow: "hidden",
          position: "relative",
          height: locationPage ? "700px" : "",
        }}
      >
        <Box
          component="img"
          src="/images/web-vectors/left-circle.png"
          alt="Left Circle"
          sx={{
            position: "absolute",
            left: 0,
            top: 0,
            width: { xs: 60, md: 220 },
            height: "auto",
            zIndex: 1,
          }}
        />
        <Box
          component="img"
          src="/images/web-vectors/right-circle.png"
          alt="Left Circle"
          sx={{
            position: "absolute",
            right: 0,
            bottom: 0,
            width: { xs: 60, md: 320 },
            height: "auto",
            zIndex: 1,
          }}
        />

        <Box></Box>

        <Box
          sx={{
            p: { md: "0px 50px", xs: "10px 30px" },
          }}
        >
          <Header />
        </Box>
        <Box
          sx={{
            maxWidth: "1540px",
            margin: "auto",
            p: { md: "0px 50px", xs: "10px 30px" },

            mt: { xs: "-0px", md: "-30px", xl: "-40px" },
          }}
        >
          {value.pathname === "/services/our-blogs/details" ? (
            ""
          ) : (
            <BannerSlider />
          )}
        </Box>
      </Box>
      <Box
        sx={{
          maxWidth: "1540px",
          margin: "auto",
          
          p: { md: "0px 50px", xs: "10px 30px" },
        }}
      >
        <Outlet />
      </Box>
      <Footer />
    </>
  );
}

export default Layout;
