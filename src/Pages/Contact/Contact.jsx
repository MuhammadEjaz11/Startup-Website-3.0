import React, { useEffect } from 'react'
import { useOutletContext } from 'react-router-dom'
import Contactpage from '../../Components/ContactPage'
import { Box } from '@mui/material'
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy } from 'react-scroll';


const Contact = () => {
  useEffect(()=>{
    const scrollTo = () => {
      scroll.scrollTo(0); // Scrolling to 100px from the top of the page.
    };
    scrollTo()
  },[])
  const {setYellowText,setBlackText} = useOutletContext()

  useEffect(()=>{
    setBlackText('Contact')
    setYellowText('Us')
  },[])

  return (
    <Box
    sx={{
      mt:"-50px"
    }}
    >
    <Contactpage />
    </Box>
  )
}

export default Contact
