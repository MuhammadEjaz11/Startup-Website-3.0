import React, { useState } from "react";
import { Box, TextField, Typography } from "@mui/material";
import CustomButton from "./Button";
import PhoneIcon from "../assets/font/contact1.png";
import EmailIcon from "../assets/font/contact2.png";
import LocationIcon from "../assets/font/contact3.png";
import checkIcon from "../assets/font/tickIcon.png";
import unCheckedIcon from "../assets/font/untickIcon.png";

const Contactpage = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    message: "",
    subject: "",
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubjectChange = (subject) => {
    setFormData({ ...formData, subject });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); // Log form data to the console
  };

  return (
    <>
      <Box
        sx={{
          maxWidth: { xs: "100%", md: "1200px", lg: "1526px" },
          margin: "0 auto",
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          backgroundColor: "#FFFFFF",
          boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.1)",
          borderRadius: "15px",
          overflow: "hidden",
          p: "13px",
        }}
      >
        {/* Left Yellow Sidebar Section */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            padding: { xs: "40px", md: "40px" },
            backgroundColor: "#70D0D9",
            flexBasis: { xs: "100%", md: "28%" },
            position: "relative",
            borderRadius: "15px !important",
            overflow: "none    ",
          }}
        >
          <Box sx={{ display: "flex", flexDirection: "column", gap: "0.4rem" }}>
            <Typography
              variant="h6"
              sx={{
                fontWeight: 600,
                color: "white",
                fontSize: "28px",
                fontFamily: "Poppins",
              }}
            >
              Contact Information
            </Typography>
            <Typography
              sx={{
                color: "white",
                fontFamily: "Inter",
                fontWeight: 400,
                fontSize: "14px",
              }}
            >
              Say something to start a live chat!
            </Typography>
          </Box>

          {/* Contact Information Section */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              mt: "80px",
              gap: "2rem",
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Box
                component="img"
                src={PhoneIcon}
                sx={{ width: "24px", height: "24px", marginRight: "25px" }}
              />
              <Typography
                sx={{ color: "white", fontSize: "16px", fontWeight: 400 }}
              >
                +1 (307) 400 8653
              </Typography>
            </Box>

            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Box
                component="img"
                src={EmailIcon}
                sx={{ width: "24px", height: "24px", marginRight: "25px" }}
              />
              <Typography
                sx={{ color: "white", fontSize: "16px", fontWeight: 400 }}
              >
                sales@patchmakers.us
              </Typography>
            </Box>

            <Box sx={{ display: "flex", alignItems: "start" }}>
              <Box
                component="img"
                src={LocationIcon}
                sx={{ width: "24px", height: "24px", marginRight: "25px" }}
              />
              <Typography
                sx={{ color: "white", fontSize: "16px", fontWeight: 400 }}
              >
                133 WOLCOTT ST SPC 4, CASPER, WY, 82601
              </Typography>
            </Box>
          </Box>

          <Typography
            sx={{
              width: "138px",
              height: "138px",
              backgroundColor: "white",
              opacity: "0.1",
              borderRadius: "50%",
              position: "absolute",
              bottom: "80px",
              right: "80px",
            }}
          ></Typography>
          <Typography
            sx={{
              width: "269px",
              height: "269px",
              backgroundColor: "white",
              opacity: "0.1",
              borderRadius: "50%",
              position: "absolute",
              bottom: "-100px",
              right: "-100px",
            }}
          ></Typography>
        </Box>

        {/* Right Form Section */}
        <Box
          sx={{
            padding: { xs: "20px", sm: "40px", md: "50px 50px" },
            flexBasis: { xs: "100%", md: "60%" },
            backgroundColor: "white",
          }}
        >
          <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              gap: { md: "1.1rem", xs: "0.4rem" },
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                flexDirection: { xs: "column", md: "row" },
              }}
            >
              <TextField
                name="firstName"
                label="First Name"
                variant="standard"
                value={formData.firstName}
                onChange={handleInputChange}
                InputLabelProps={{ shrink: true }}
                sx={{
                  marginBottom: { xs: "20px", md: "20px" },
                  width: { xs: "100%", md: "48%" },
                  ".MuiInputLabel-root": {
                    fontSize: "16px",
                    fontFamily: "Inter",
                    letterSpacing: "0.4px",
                    color: "#939393",
                  },
                  ".MuiInputBase-input": {
                    paddingBottom: "10px",
                    fontSize: "16px",
                    fontFamily: "Inter",
                    letterSpacing: "0.4px",
                    color: "#939393",
                  },
                  ".MuiInput-underline:before": { borderBottomColor: "black" }, // Default border color
                  ".MuiInput-underline:after": { borderBottomColor: "black" }, // Focused border color
                }}
              />

              <TextField
                name="lastName"
                label="Last Name"
                variant="standard"
                value={formData.lastName}
                onChange={handleInputChange}
                InputLabelProps={{ shrink: true }}
                sx={{
                  marginBottom: { xs: "20px", md: "20px" },
                  width: { xs: "100%", md: "48%" },
                  ".MuiInputLabel-root": {
                    fontSize: "16px",
                    fontFamily: "Inter",
                    letterSpacing: "0.4px",
                    color: "#939393",
                  },
                  ".MuiInputBase-input": {
                    paddingBottom: "10px",
                    fontSize: "16px",
                    fontFamily: "Inter",
                    letterSpacing: "0.4px",
                    color: "#939393",
                  },
                  ".MuiInput-underline:before": { borderBottomColor: "black" }, // Default border color
                  ".MuiInput-underline:after": { borderBottomColor: "black" }, // Focused border color
                  ".MuiInputLabel-root.Mui-focused": {
                    color: "black", // Label color when focused
                  },
                }}
              />
            </Box>

            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                flexDirection: { xs: "column", md: "row" },
              }}
            >
              <TextField
                name="email"
                label="Email"
                variant="standard"
                value={formData.email}
                onChange={handleInputChange}
                InputLabelProps={{ shrink: true }}
                sx={{
                  marginBottom: { xs: "20px", md: "20px" },
                  width: { xs: "100%", md: "48%" },
                  ".MuiInputLabel-root": {
                    fontSize: "16px",
                    fontFamily: "Inter",
                    letterSpacing: "0.4px",
                    color: "#939393",
                  },
                  ".MuiInputBase-input": {
                    paddingBottom: "10px",
                    fontSize: "16px",
                    fontFamily: "Inter",
                    letterSpacing: "0.4px",
                    color: "#939393",
                  },
                  ".MuiInput-underline:before": { borderBottomColor: "black" }, // Default border color
                  ".MuiInput-underline:after": { borderBottomColor: "black" }, // Focused border color
                  ".MuiInputLabel-root.Mui-focused": {
                    color: "black", // Label color when focused
                  },
                }}
              />
              <TextField
                name="phoneNumber"
                label="Phone Number"
                variant="standard"
                value={formData.phoneNumber}
                onChange={handleInputChange}
                InputLabelProps={{ shrink: true }}
                sx={{
                  marginBottom: { xs: "20px", md: "20px" },
                  width: { xs: "100%", md: "48%" },
                  ".MuiInputLabel-root": {
                    fontSize: "16px",
                    fontFamily: "Inter",
                    letterSpacing: "0.4px",
                    color: "#939393",
                  },
                  ".MuiInputBase-input": {
                    paddingBottom: "10px",
                    fontSize: "16px",
                    fontFamily: "Inter",
                    letterSpacing: "0.4px",
                    color: "#939393",
                  },
                  ".MuiInput-underline:before": { borderBottomColor: "black" }, // Default border color
                  ".MuiInput-underline:after": { borderBottomColor: "black" }, // Focused border color
                  ".MuiInputLabel-root.Mui-focused": {
                    color: "black", // Label color when focused
                  },
                }}
              />
            </Box>

            {/* Custom Subject Selection */}
            <Box sx={{ marginBottom: "20px" }}>
              <Typography
                sx={{
                  marginBottom: "20px",
                  fontSize: "16px",
                  fontFamily: "satoshi-light",
                }}
              >
                Select Subject:
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  gap: { md: "1.5rem", xs: "1rem" },
                  flexDirection: { md: "row", xs: "column" },
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    cursor: "pointer",
                    fontSize: "14px",
                  }}
                  onClick={() => handleSubjectChange("Digitizing")}
                >
                  <Box
                    component="img"
                    src={
                      formData.subject === "Digitizing"
                        ? checkIcon
                        : unCheckedIcon
                    }
                    sx={{ width: "19px", height: "19px", marginRight: "10px" }}
                  />
                  <Typography
                    sx={{
                      fontSize: "16px",
                      fontWeight: "400",
                      fontFamily: "Inter",
                      color: "#939393",
                    }}
                  >
                    Digitizing
                  </Typography>
                </Box>

                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    cursor: "pointer",
                  }}
                  onClick={() => handleSubjectChange(" Vector Art")}
                >
                  <Box
                    component="img"
                    src={
                      formData.subject === " Vector Art" ? checkIcon : unCheckedIcon
                    }
                    sx={{ width: "19px", height: "19px", marginRight: "10px" }}
                  />
                  <Typography
                    sx={{
                      fontSize: "16px",
                      fontWeight: "400",
                      fontFamily: "Inter",
                      color: "#939393",
                    }}
                  >
                    Vector Art
                  </Typography>
                </Box>

                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    cursor: "pointer",
                  }}
                  onClick={() => handleSubjectChange("Patches")}
                >
                  <Box
                    component="img"
                    src={
                      formData.subject === "Patches" ? checkIcon : unCheckedIcon
                    }
                    sx={{ width: "19px", height: "19px", marginRight: "10px" }}
                  />
                  <Typography
                    sx={{
                      fontSize: "16px",
                      fontWeight: "400",
                      fontFamily: "Inter",
                      color: "#939393",
                    }}
                  >
                    Patches
                  </Typography>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    cursor: "pointer",
                  }}
                  onClick={() => handleSubjectChange("Web Design")}
                >
                  <Box
                    component="img"
                    src={
                      formData.subject === "Web Design"
                        ? checkIcon
                        : unCheckedIcon
                    }
                    sx={{ width: "19px", height: "19px", marginRight: "10px" }}
                  />
                  <Typography
                    sx={{
                      fontSize: "16px",
                      fontWeight: "400",
                      fontFamily: "Inter",
                      color: "#939393",
                    }}
                  >
                    Web Design
                  </Typography>
                </Box>
              </Box>
            </Box>

            <TextField
              name="message"
              label="Message"
              variant="standard"
              multiline
              // rows={1}
              value={formData.message}
              onChange={handleInputChange}
              placeholder="Write Your Message"
              InputLabelProps={{ shrink: true }}
              sx={{
                marginBottom: "20px",
                width: "100%",
                ".MuiInputLabel-root": {
                  fontSize: "16px",
                  fontFamily: "satoshi-light",
                },
                ".MuiInputBase-input": { fontSize: "16px" },
                textTransform: "capitalize",
              }}
            />

            <Box
              sx={{
                display: "flex",
                justifyContent: { xs: "center", md: "flex-end" },
              }}
            >
              <CustomButton
                onClick={handleSubmit}
                svgColor="black"
                buttonStyle={{
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
                }}
                title="Send Message"
              />
            </Box>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          mt: "130px",
        }}
      ></Box>
    </>
  );
};

export default Contactpage;
