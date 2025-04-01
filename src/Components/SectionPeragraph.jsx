import { Box, Button, Typography } from '@mui/material'
import React from 'react'
const SectionPeragraph =(
    {
        title="",
        sx="",
    }
) => {
    return(
        <Box>
             <Typography sx={{
            marginTop:'40px',
            fontFamily:'Inter',
            fontSize:'16px',
            lineHeight:'36px',
           color:'#939393',
           fontWeight:400,
           maxWidth:'873px',
           ...sx
         }}>
            { title }
         </Typography>
        </Box>
    )
}
 export default SectionPeragraph