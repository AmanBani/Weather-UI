"use client";
import {Box,FormControl,FormControlLabel, InputLabel,Input, FormHelperText, Button } from '@mui/material'
import React from 'react'

interface Props {
  onChange: (value: string) => void;
}

const SearchBar = ({ onChange }: Props) => {
  return (
    <Box component="form" sx={{display:"flex", justifyContent:"center", marginTop: "2rem"}}>
     

  <Input id="my-input"
  onChange={(e) => onChange(e.target.value)}
  aria-describedby="my-helper-text" 
  sx={{color: "white", alignTracks:"center",display:"flex",justifyContent:"center",backgroundColor:"lightblue", textAlign:"center",width:"32.875rem", borderRadius: "0.75rem", marginRight: "1rem", fontSize:"2rem", alignContent:"center"}}/>
  <Button sx={{height:"3.5rem", width: "7.125rem",color:"white", fontSize: "1.25rem", textTransform: "none",backgroundColor:"#393841FF", borderRadius: "0.75rem"}}>Search</Button>


    </Box>
  )
}

export default SearchBar
