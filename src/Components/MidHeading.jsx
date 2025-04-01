import { Box } from '@mui/material'
import React from 'react'

const MidHeading = (Heading) => {
  return (
    <Box sx={{fontSize:"21px", color:"#161616"}} >
            {Heading}
    </Box>
  )
}

export default MidHeading