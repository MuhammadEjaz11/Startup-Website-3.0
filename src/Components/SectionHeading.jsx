import { Box } from '@mui/material'
import React from 'react'

function SectionHeading({
    title="",
    spantitle="",
    ourworkTitle="",
    sx,
    textStyle={},
  }) {
    return(
        <Box sx={sx}>
  <h2
    style={{
      color: '#1E1E1E',
      fontSize: { xs: '30px', md: '50px' }, 
      fontFamily: 'satoshi',
      lineHeight: { xs: '40px', md: '34.25px' }, 
    }}
  >
    {title}
    <span
      style={{
        color: '#1E1E1E',
        fontSize: { xs: '30px', md: '50px' }, 
        fontFamily: 'satoshi-light',
        lineHeight: { xs: '40px', md: '34.25px' },
      }}
    >
      {spantitle}
    </span>
  </h2>

  <h3
    style={{
      lineHeight: { xs: '40px', md: '67.5px' }, 
      fontFamily: 'satoshi',
      fontSize: { xs: '20px', md: '27px' }, 
      fontWeight: 700,
      marginTop: '26px',
      marginBottom: '12px',
    }}
  >
    {ourworkTitle}
  </h3>
</Box>

    )
  }

export default SectionHeading
