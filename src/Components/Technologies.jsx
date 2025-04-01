  import React, { useState } from 'react';
  import { Box, Button, Typography } from '@mui/material'
  import {Tabs} from '@mui/material'
  import {Tab} from '@mui/material'

  function Technologies(){
      const [tab,setTab] = useState('Front-end')
      return(
          <Box sx={{ 
              margin:'0 auto',
              paddingX: {lg: "20px", md: "20px", xs: "20px" },
              marginTop:{md:'25px !important', lg:'-45px !important', xs:"50px !Important"},
              display:'flex',
              justifyContent: {xs:'center', lg:'flex-end'},
              maxWidth:'1532.68px',
              paddingBottom:'70px',
              textTransform:'capitalize',
              
            
              
          
            }}>
            <Tabs value={tab} onChange={(e, v) => setTab(v)} aria-label="basic tabs example" indicatorColor='rgba(0,0,0,0)'
          sx={{
            textTransform:'capitalize',
            padding: '12px 11px',
            fontFamily: 'satoshi',
            fontSize: { xs: '14px', md: '16px' }, 
            lineHeight: '1.5',
            borderRadius: '20px',
            
          }}
        >
          <Tab value="Front-end" label="Front-end" sx={{
            borderRadius:'50px',
            width:{xs:"100px", md:'157px'},
                fontFamily: 'satoshi',
            color: '#939393',
            fontSize: { xs: '10px', md: '16px' }, 
            textTransform:'initial',
            lineHeight: '1.5',
            '&::selection': {
              fontFamily: 'satoshi',
              borderRadius:'50px',
              backgroundColor: '#ffcc00',  // Change to your preferred color
              color: '#ffffff',            // Change to your preferred color
            },
            
            '&.Mui-selected': {
              fontFamily: 'satoshi',
              borderRadius:'50px',
              backgroundColor:'#FFC800',
              borderBottom:'none',
              color: 'black',  // Change text color when selected
              fontWeight: 'bold',  // Apply bold font weight when selected
            },  
          }} />
            <Tab value="Back-end" label="Back-end" sx={{
              borderRadius:'50px',
              width:{xs:"100px", md:'157px'},

                  textTransform:'initial',
                  fontFamily: 'satoshi',
              color:'#939393',
              fontSize: { xs: '10px', md: '16px' }, 
              lineHeight: '1.5',
              '&::selection': {
                fontFamily: 'satoshi',
                borderRadius:'50px',
              backgroundColor: '#ffcc00',  // Change to your preferred color
              color: '#ffffff',            // Change to your preferred color
            },
            '&.Mui-selected': {
              fontFamily: 'satoshi',
              borderRadius:'50px',
              backgroundColor:'#FFC800',
              borderBottom:'none',
              color: 'black',  // Change text color when selected
              fontWeight: 'bold',  // Apply bold font weight when selected
            },
        
            }} />
            <Tab value="Database" label="Database" sx={{
              borderRadius:'50px',
              width:{xs:"100px", md:'157px'},

                  textTransform:'initial',
                  fontFamily: 'satoshi',
              color:'#939393',
              fontSize: { xs: '10px ', md: '16px' }, 
              lineHeight: '1.5',
              
              '&::selection': {
                fontFamily: 'satoshi',
                borderRadius:'50px',
              backgroundColor: '#ffcc00',  // Change to your preferred color
              color: '#ffffff',            // Change to your preferred color
            },
            '&.Mui-selected': {
              fontFamily: 'satoshi',
              borderRadius:'50px',
              backgroundColor:'#FFC800',
              borderBottom:'none',
              color: 'black',  // Change text color when selected
              fontWeight: 'bold',  // Apply bold font weight when selected
            },
        
            }} />
          </Tabs>





          </Box>
      )
  }

  export default Technologies