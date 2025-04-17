import { useState } from 'react'
import { Box, Button, Typography } from '@mui/material'
import CustomButton from './Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ImageWeb from "../image/ImageWeb.png"
import SectionImage from "../image/design_develop.png"
import ContactFormModal from './ContactModal'

function DesignDevelop({title, content}) {
  const [count, setCount] = useState(0);

  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <Box
      sx={{
        backgroundImage: `url(${SectionImage})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        paddingTop: { xs: "20px", xl: "141px" },
        paddingBottom: { xs: "60px", md: "102px" },
        // border:"4px solid yellow",



        position: "relative",
        left: "50%",                 // Move the box to the left by 50% of the layout
        right: "50%",                // Move the box to the right by 50% of the layout
        marginLeft: "-50vw",         // Negative margin to offset left movement
        marginRight: "-50vw",        // Negative margin to offset right movement
        width: "100vw",              // Full viewport width
        maxWidth: "none",
        pl: {
          xs:"0px",
          md:"30px"
        },
        pr: {
          xs:"0px",
          md:"30px"
        },
        // here this box should take the whole width but it is inside the layout and layout is fixed as 1440px but i want it to takethe full width of view port as layout is still 1440px 
      }}
    >
      <Box
        sx={{
          maxWidth: "1518px",
          margin: "0 auto",
          padding: { xs: "0 20px", md: "0px 40px", xl: "0px" },
          textAlign: { xs: "center", md: "left" },

        }}
      >
        <Box
          sx={{
            display: { xs: "flex", md: "block" },
            justifyContent: "center",
          }}
        >
          <img
            src={ImageWeb}
            alt="Digital Products"
            style={{ maxWidth: "100%", height: "auto" }}
          />
        </Box>

        <Typography
          sx={{

            fontFamily: "DM Sans",
            fontWeight: 700,
            textTransform: "capitalize",
            fontSize: { xs: "30px", xl: "60px", md: "40px" },
            color: "white",
            lineHeight: { xs: "40px", xl: "78.12px", md: "55px" },
            marginTop: { xs: "20px", md: "0" },
            width:{
              xl:'80%',
              lg:'100%',
              xs:'100%'
            }
          }}
        >
         {title || `We design and develop outstanding Digital Products & digital-first
          Brands.`} 
        </Typography>

        <Typography
          sx={{
            maxWidth: { xs: "100%", md: "1227px" },
            fontFamily: "Lato",
            fontSize: { xs: "14px", xl: "16px" },
            lineHeight: { xs: "28px", xl: "36px" },
            color: "#FFFFFF",
            fontWeight: 400,
            marginTop: "30px",
            textAlign: { xs: "center", md: "left" },
          }}
        >
          {
            content ||  `Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text
          ever since the 1500s Lorem Ipsum is simply dummy text Lorem Ipsum is
          simply dummy text of the printing and typesetting industry.`
          }
          
        </Typography>

        <Box
          sx={{
            display: "flex",
            justifyContent: { xs: "center", md: "left" },
          }}
        >
          <CustomButton
            svgColor={"black"}
            buttonStyle={{
              fontWeight: 600,
              textTransform: "capitalize",
              color: "#1C1C1C",
              padding: { xs: "15px", xl: "20px", md: "" },
              marginTop: "20px",
              fontFamily: "Outfit",
              fontSize: { xs: "14px", md: "16px" },
              lineHeight: "20.16px",
              backgroundColor: "#FFFFFF",
              borderRadius: "10px",
              mt: "10px"

            }}
            onClick={() => handleOpen()}
            buttonIconBlack={true}
            title="Get Quote Now"
          />
        </Box>
      </Box>
      <ContactFormModal open={open} handleClose={handleClose} />

    </Box>
  )
}
export default DesignDevelop