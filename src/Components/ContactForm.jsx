
import React, { useState } from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';

import Contactpage from './ContactPage';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };

  return (
    <Box id="contact"  >
    <Contactpage/>
    </Box>
    // <Box sx={{
    //   marginBottom: {md:'130px !important', xs:"55px !important"},
    //   maxWidth: { xs: '100%', sm: '100%', md: '1200px', lg: '1526px' },
    //   margin: '0 auto',
    //   display: 'flex',
    //   flexDirection: { xs: 'column', md: 'row' }, // Adjust flex direction for small screens
    //   padding: { xs: '0px', md: '0' }
    // }}>
    //   <Box sx={{
    //     padding: { xs: '20px', sm: '40px', md: '93px 0px 0px 64px' },
    //     backgroundColor: 'white',
    //     flexBasis: { xs: '100%', md: '998px' },
    //     border: 'none',
    //     boxShadow: '0px 10px 30px rgba(0, 0, 0, 0.1)',
    //     borderRadius: { xs: '20px', md: '20px 0px 0px 20px' },
    //     marginBottom: { xs: '20px', md: '0' } // Space for mobile screens
    //   }}>
    //     <StyledHeading sx={{justifyContent:'flex-start', marginBottom:'50px'}} title1="get" sx1={{fontFamily:'satoshi-light !important'}} title2="in touch" sx2={{fontFamily:'satoshi !important'}}
    //      styledSx={
    //       {
    //         display: 'flex',
    //         flexDirection: 'row',
    //         justifyContent: {md:"left", xs:"center"},
    //         color: "#1E1E1E",
    //         textAlign: "center",
    //       }
    //     }
    //     />


    //     <Box component="form" onSubmit={handleSubmit} sx={{ 
    //       paddingBottom: '52px',
    //       width: { xs: '100%', md:"80%" }, // Responsive width
    //       display: 'flex',
    //       flexDirection: 'column' 
    //     }}>
    //       <TextField
    //         name="firstName"
    //         label="First Name"
    //         variant="standard"
    //         value={formData.firstName}
    //         onChange={handleChange}
    //         InputLabelProps={{
    //           shrink: true,
    //         }}
    //         sx={{
    //           marginBottom: '20px',
    //           width: '100%', // Make it responsive
    //           '.MuiInputLabel-root': {
    //             fontSize: '16px',
    //             fontFamily: 'satoshi-light',
    //           },
    //           '.MuiInputBase-input': {
    //             paddingBottom: '10px',
    //             fontSize: '16px',
    //           }
    //         }}
    //       />
    //       <TextField
    //         name="lastName"
    //         label="Last Name"
    //         variant="standard"
    //         value={formData.lastName}
    //         onChange={handleChange}
    //         InputLabelProps={{
    //           shrink: true,
    //         }}
    //         sx={{
    //           marginBottom: '20px',
    //           width: '100%', // Make it responsive
    //           '.MuiInputLabel-root': {
    //             fontSize: '16px',
    //             fontFamily: 'satoshi-light',
    //           },
    //           '.MuiInputBase-input': {
    //             paddingBottom: '10px',
    //             fontSize: '16px',
    //           }
    //         }}
    //       />
    //       <TextField
    //         name="email"
    //         label="Email"
    //         variant="standard"
    //         value={formData.email}
    //         onChange={handleChange}
    //         InputLabelProps={{
    //           shrink: true,
    //         }}
    //         sx={{
    //           marginBottom: '20px',
    //           width: '100%', // Make it responsive
    //           '.MuiInputLabel-root': {
    //             fontSize: '16px',
    //             fontFamily: 'satoshi-light',
    //           },
    //           '.MuiInputBase-input': {
    //             paddingBottom: '10px',
    //             fontSize: '16px',
    //           }
    //         }}
    //       />
    //       <TextField
    //         name="phoneNumber"
    //         label="Phone Number"
    //         variant="standard"
    //         value={formData.phoneNumber}
    //         onChange={handleChange}
    //         InputLabelProps={{
    //           shrink: true,
    //         }}
    //         sx={{
    //           marginBottom: '20px',
    //           width: '100%', // Make it responsive
    //           '.MuiInputLabel-root': {
    //             fontSize: '16px',
    //             fontFamily: 'satoshi-light',
    //           },
    //           '.MuiInputBase-input': {
    //             paddingBottom: '10px',
    //             fontSize: '16px',
    //           }
    //         }}
    //       />
    //       <TextField
    //         name="message"
    //         label="Message"
    //         variant="standard"
    //         multiline
    //         rows={4}
    //         value={formData.message}
    //         onChange={handleChange}
    //         InputLabelProps={{
    //           shrink: true,
    //         }}
    //         sx={{
    //           marginBottom: '20px',
    //           width: '100%', // Make it responsive
    //           '.MuiInputLabel-root': {
    //             fontSize: '16px',
    //             fontFamily: 'satoshi-light',
    //           },
    //           '.MuiInputBase-input': {
    //             fontSize: '16px',
    //           }
    //         }}
    //       />
    //       <Box sx={{
    //         display: 'flex',
    //         justifyContent: { xs: 'center', md: 'flex-end' }, // Center for small screens
    //       }}>
    //        <CustomButton
    //       svgColor={"black"}
    //       buttonStyle={{
    //         fontWeight: 600,
    //         textTransform: "capitalize",
    //         color: "white",
    //         padding: { xs: "15px", md: "20px" },
    //         marginTop: "20px",
    //         fontFamily: "Outfit",
    //         fontSize: { xs: "14px", md: "16px" },
    //         lineHeight: "20.16px",
    //         backgroundColor: "black",
    //         borderRadius: "10px",
    //       }}
    //       title="Submit "
    //     />
    //       </Box>
    //     </Box>
    //   </Box>
    //   <Box sx={{
    //     display:{md:'block', sm:'none', xs:'none'},
    //     boxShadow: '0px 10px 30px rgba(0, 0, 0, 0.1)',
    //     padding: { xs: '20px', sm: '40px', md: '93px 0px 91px 0px !important' },
    //     borderRadius: { xs: '20px', md: '0px 20px 20px 0px' },
    //     flexBasis: { xs: '100%', md: '528px' }, // Adjust width for small screens
    //     backgroundColor: '#70D0D9',
    //     position: 'relative',
    //     marginBottom: { xs: '20px', md: '0' } // Space for mobile screens
    //   }}>
    //     <img 
    //       src={mapImage} 
    //       className='mapImage' 
    //       style={{  
    //         position: 'absolute', 
    //         right: '90px', 
    //         width: '100%', // Responsive image width
    //         height: '77%' // Keep aspect ratio
    //       }} 
    //     />
    //   </Box>
    // </Box>
  );
}

export default ContactForm;
