import React, { useState } from "react";
import {
  Modal,
  Box,
  Typography,
  TextField,
  Button,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { CgClose } from "react-icons/cg";
import CustomButton from "./Button";
import StyledHeading from "./StyledHeading";
import Contactpage from "./ContactPage";
const ContactFormModal = ({ open, handleClose }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = () => {
    console.log(formData);
    // Handle form submission logic
    handleClose(); // Close modal after submit
  };

  return (
    <Modal
    vertical="center"
      aria-labelledby="parent-modal-title"
  aria-describedby="parent-modal-description"
      open={open}
      onClose={handleClose}
      
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        // mt: "20px",
        // border:'1px solid red',
        height: "100vh",
        my:"70px"
      }}
    >
      <Box sx={{
        // backgroundColor: "white",
        width:{"xs":"100%", md:"auto"},

      }}>
  
      <Contactpage hideblueBox={true}/>
      </Box>
      {/* <Box
        sx={{
          position: "relative",
          //   width: 400,
          backgroundColor: "#fff",
          padding: "30px",
          borderRadius: "20px",
          boxShadow: 24,
          textAlign: "center",
          maxWidth: "599px",
          width: "100%",
          maxHeight: "699px",
          height: "100%",
          width:"80%"
        }}
      >
        <IconButton
          onClick={handleClose}
          sx={{
            position: "absolute",
            top: "-55px",
            right: "-5px",
            backgroundColor: "white",
          }}
        >
          <CgClose
            style={{
              fontSize: "20px",
              color: "black",
            }}
          />
        </IconButton>

        <StyledHeading
          title1="Get"
          title2="In Touch"
          sx={{
            mt: "10px",
          }}
          sx1={{
            fontSize: { xs: "25px", md: "27px", xl: "40px" },
          }}
          sx2={{
            fontSize: { xs: "25px", md: "27px", xl: "40px" },
          }}
        />

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            p: "0px 5px",
            gap: "0.8rem",
            mt: "50px",
            // border:"2px solid red"
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
              ".MuiInput-underline:before": { borderBottomColor: "#C6C6C6" }, // Default border color
              ".MuiInput-underline:after": { borderBottomColor: "black" }, // Focused border color
              ".MuiInputLabel-root.Mui-focused": {
                color: "black", // Label color when focused
              },
              width: "100%",
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
              ".MuiInput-underline:before": { borderBottomColor: "#C6C6C6" }, // Default border color
              ".MuiInput-underline:after": { borderBottomColor: "black" }, // Focused border color
              ".MuiInputLabel-root.Mui-focused": {
                color: "black", // Label color when focused
              },
              width: "100%",
            }}
          />
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
              ".MuiInput-underline:before": { borderBottomColor: "#C6C6C6" }, // Default border color
              ".MuiInput-underline:after": { borderBottomColor: "black" }, // Focused border color
              ".MuiInputLabel-root.Mui-focused": {
                color: "black", // Label color when focused
              },
              width: "100%",
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
              ".MuiInput-underline:before": { borderBottomColor: "#C6C6C6" }, // Default border color
              ".MuiInput-underline:after": { borderBottomColor: "black" }, // Focused border color
              ".MuiInputLabel-root.Mui-focused": {
                color: "black", // Label color when focused
              },
              width: "100%",
            }}
          />
          <TextField
            name="message"
            label="Message"
            variant="standard"
            value={formData.message}
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
              ".MuiInput-underline:before": { borderBottomColor: "#C6C6C6" }, // Default border color
              ".MuiInput-underline:after": { borderBottomColor: "black" }, // Focused border color
              ".MuiInputLabel-root.Mui-focused": {
                color: "black", // Label color when focused
              },
              width: "100%",
            }}
          />
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
            mt: "50px",
          }}
        >
          <CustomButton
            textStyle={{
              color: "white",
              fontSize: "16px",
            }}
            buttonStyle={{
              borderRadius: "15px",
              padding: { xs: "2px 0px", xl: "2px 0px" },

              background: "black",
              textTransform: "capitalize",
              width: "180px",
            }}
            onClick={handleSubmit}
            title="Send Message"
          />
        </Box>
      </Box> */}
    </Modal>
  );
};

export default ContactFormModal;
