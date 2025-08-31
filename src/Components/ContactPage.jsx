import React, { useState } from "react";
import { Alert, Box, Snackbar, TextField, Typography } from "@mui/material";
import CustomButton from "./Button";
import PhoneIcon from "../assets/font/contact1.png";
import EmailIcon from "../assets/font/contact2.png";
import LocationIcon from "../assets/font/contact3.png";
import checkIcon from "../assets/font/tickIcon.png";
import unCheckedIcon from "../assets/font/untickIcon.png";
import { IoCloseCircleOutline } from "react-icons/io5";
import { CgCross } from "react-icons/cg";
import StyledHeading from "./StyledHeading";

const Contactpage = ({ hideblueBox }) => {
  const initialFormState = {
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    message: "",
    subject: "",
  };
  const [formData, setFormData] = useState(initialFormState);
  const [loading, setIsLoading] = useState(false);
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success",
  });
  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const showToast = (message, severity = "error") => {
    setSnackbar({ open: true, message, severity });
  };
  const handleSubjectChange = (subject) => {
    setFormData({ ...formData, subject });
  };
  const clearState = (subject) => {
    setFormData(initialFormState);
  };

  const handleSubmit = async (e) => {
    // e.preventDefault();
    if (e) {
      e.preventDefault();
    }

    if (!formData.firstName.trim()) {
      showToast("First Name is required");
      return;
    }
    if (!formData.lastName.trim()) {
      showToast("Last Name is required");
      return;
    }
    if (!formData.email.trim()) {
      showToast("Email is required");
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email.trim())) {
      showToast("Please enter a valid email address");
      return;
    }
    if (!formData.phoneNumber.trim()) {
      showToast("Phone is required");
      return;
    }
    if (!formData.subject.trim()) {
      showToast("Subject is required");
      return;
    }
    if (!formData.message.trim()) {
      showToast("Message is required");
      return;
    }

    setIsLoading(true);
    const data = {
      name: formData.firstName + " " + formData.lastName,
      email: formData.email,
      number: formData.phoneNumber,
      subject: formData.subject,
      message: formData.message,
    };
    try {
      const response = await fetch(
        "https://mail-sender-blush.vercel.app/send",
        {
          // const response = await fetch("http://localhost:5000/send", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      console.log("response", response);
      if (response.ok) {
        showToast("Thank you for reaching out! Your query has been submitted successfully. Our team will contact you within 24 hours.", "success");

        clearState();
      } else {
        showToast("Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error("Error sending message:", error);
      showToast("Error sending message. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleCloseSnackbar = () => {
    setSnackbar({ ...snackbar, open: false });
  };
  return (
    <>
      <Snackbar
        open={snackbar.open}
        autoHideDuration={3000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        sx={{
          "& .MuiButtonBase-root": {
            svg: {
              fontSize: "20px",
              color: "#161616",
            },
          },
        }}
      >
        <Alert onClose={handleCloseSnackbar} severity={snackbar.severity}>
          <Typography
            sx={{ width: "100%", fontFamily: "satoshi", fontSize: "18px" , maxWidth:"350px"}}
          >
            {snackbar.message}
          </Typography>
        </Alert>
      </Snackbar>

      <Box
        sx={{
          maxWidth: { xs: "100%", md: "1200px", lg: "1526px" },
          margin: "0 auto",
          marginBottom:"50px",
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
            ...(hideblueBox && { display: "none" }),
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
            padding: hideblueBox
              ? "20px"
              : { xs: "20px", sm: "40px", md: "50px 50px" },
            flexBasis: { xs: "100%", md: hideblueBox ? "100%" : "60%" },
            backgroundColor: "white",
            // maxHeight: hideblueBox ? "500px" : "auto",
            // overflowY: hideblueBox ? "auto" : "visible",
          }}
        >
          {true ? (
            <StyledHeading
              title1="Get"
              title2="In Touch"
              sx={{
                mb: "70px",
              }}
              sx1={{
                fontSize: { xs: "25px", md: "27px", xl: "40px" },
              }}
              sx2={{
                fontSize: { xs: "25px", md: "27px", xl: "40px" },
              }}
            />
          ) : null}
          <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              gap: { md: "1.1rem", xs: "1.4rem" },
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                flexDirection:  hideblueBox?"row": { xs: "column", md: "row" },
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
                flexDirection: hideblueBox?"row": { xs: "column", md: "row" },
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
                  flexWrap: hideblueBox?"nowrap": "wrap",
                  // border:"1px solid red",
                  width: hideblueBox?{ md:"auto", xs:"100%"}:"auto",
                  overflow: hideblueBox?{md:"hidden", xs:"scroll"}:"hidden",
                  p:{whiteSpace:"nowrap"}
                  // flexDirection: { md: "row", xs: "column" },
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
                      formData.subject === " Vector Art"
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
                    Vector Art
                  </Typography>
                </Box>

                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    cursor: "pointer",
                  }}
                  onClick={() => handleSubjectChange("Custom Patches")}
                >
                  <Box
                    component="img"
                    src={
                      formData.subject === "Custom Patches"
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
                    Custom Patches
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
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    cursor: "pointer",
                  }}
                  onClick={() => handleSubjectChange("Video Editing")}
                >
                  <Box
                    component="img"
                    src={
                      formData.subject === "Video Editing"
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
                    Video Editing
                  </Typography>
                </Box>
                      <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    cursor: "pointer",
                  }}
                  onClick={() => handleSubjectChange("Graphic Design")}
                >
                  <Box
                    component="img"
                    src={
                      formData.subject === "Graphic Design"
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
                    Graphic Design
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
                loading={loading}
                isDisabled={loading}
                type="submit"
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

    </>
  );
};

export default Contactpage;
