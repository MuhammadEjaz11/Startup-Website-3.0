import { Box, Typography } from '@mui/material'
import React from 'react'
import FooterHeading from './FooterHeading'
import { useNavigate } from 'react-router-dom'

const FooterBottomMenu = ({
    style={},
    heading="",
    data=[],
    links=[]
}) => {

    const navigate = useNavigate()
    const handleNavigate=(link)=>navigate(link)
  return (
    <Box sx={{
        flex:1,
        flexGrow:'0',
        ...style,

      }}>
        <FooterHeading
        title={heading}/>
        {
            data?.map((item, index)=>   <Typography 
            onClick={()=>handleNavigate(links[index])}          
            key={index}
            sx={{
                borderRight:`${data.length-1==index?"":'1px solid white'}`,
                fontSize:{sm:'16px', xs:"12px"},
                cursor:"pointer",
                marginRight:index < 2 ? {md:'20px', xs:'10px', sm:'10px'}: "",
                paddingRight:index < 2 ?  {md:'20px', xs:'10px', sm:'10px'} : "",
                color:"white",
                fontWeight:400,
                fontFamily:"inter",
                '&:hover': {
                  color: '#1E8CE0', // Hover effect on copyright text
                  transition: 'color 0.3s ease',
                },
                  
                
                p:"0px"
  
              }}>{item}</Typography>)
        }
     
      </Box>
  )
}

export default FooterBottomMenu
