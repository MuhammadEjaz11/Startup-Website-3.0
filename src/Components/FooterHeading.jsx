import { Box , Typography} from '@mui/material'
import React from 'react'

function FooterHeading({
    title="",
    spantitle="",
    textStyle={},
  }) {
    return(
        <Box>
            <Typography sx={{
                color:'white',
                fontSize:{lg:'25px', xs:"28px"},
                
                lineHeight:'34.25px',
                ...textStyle,
                
            }}>
                {title}
            </Typography>
        </Box>
    )
  }

export default FooterHeading
