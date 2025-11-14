"use client";

import Image from "next/image";
import Nav from "../components/Nav"
import Box from '@mui/material/Box';
import Typography from "@mui/material/Typography";
import SearchBar from "@/components/SearchBar";
import { Container } from "@mui/material";
import { useEffect, useState } from "react";

export default function Home() {

  const [searchBarValue,setSearchBarValue] = useState("");
  const [selectedLocation,setSelectedLocation] = useState("")

  useEffect(() => {
    fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${searchBarValue}&count=10&language=en&format=json`

    ).then((data) => data.json())
    .then((res) => setSelectedLocation(res.results[0]))
  })



  return (
    <Container>
      <Box>
      <Nav />
      <Typography variant="h2" sx={{fontSize:"3rem", fontWeight: 800, textAlign:'center'}}>How is the Weather Today?</Typography>
      <SearchBar  onChange={setSearchBarValue}/>
      </Box>
    </Container>
  );
}
