import Image from "next/image";
import Nav from "../components/Nav"
import Box from '@mui/material/Box';
import Typography from "@mui/material/Typography";

export default function Home() {
  return (
    <Box>
      <Nav />
      <Typography variant="h2" sx={{fontSize:"3rem", fontWeight: 800, textAlign:'center'}}>How is the Weather Today?</Typography>

    </Box>
  );
}
