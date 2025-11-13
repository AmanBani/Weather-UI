import React from 'react'
import Image from 'next/image';
import Box from '@mui/material/Box';
import logo from "../public/Images/logo2.png"



const Nav = () => {
  return (
    <>
        <Box sx={{display:"flex", justifyContent: "space-around", margin: "2rem 0"}}>
            <Image src={logo} alt="logo" height={110} width={140} />
            <Box>Toggle Units</Box>
        </Box>
      
    </>
  )
}

export default Nav
