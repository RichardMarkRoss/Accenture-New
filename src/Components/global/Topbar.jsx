import { Box, IconButton,Typography, useTheme } from "@mui/material";
import { useContext } from "react";
import { ColorModeContext, tokens } from "../../theme";
import {useState} from "react";
import AutoGraphIcon from '@mui/icons-material/AutoGraph';
import { Link } from "react-router-dom";
import FlexBetween from "../FlexBetween";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";


const Topbar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);
  const {selected, setSelected} = useState("home");

  return (
    <FlexBetween mb="0.25rem" p="0.5rem 0rem" color={colors.greenAccent[400]}> 
    <FlexBetween gap="0.75rem">
      <AutoGraphIcon sx={{fontSize: "28px"}}/>
      <Typography variant="h4" fontSize="16px">
        Lotto Tacticle
      </Typography>
    </FlexBetween>
    <FlexBetween gap="2rem">
      <Box sx={{"&:hover": {color: colors.primary[400]}}}>
        <Link 
        to="/" 
        onClick={()=>setSelected("dashboard")} 
        style={{
          color: selected === "dashboard" ? "inherit" : colors.grey[200],
          textDecoration: "inherit", 
        }}>dashboard</Link>
       
      </Box>
      <Box sx={{"&:hover": {color: colors.primary[100]}}}>
      <IconButton onClick={colorMode.toggleColorMode}>
      {theme.palette.mode === "dark" ? (
        <DarkModeOutlinedIcon />
      ) : (
        <LightModeOutlinedIcon />
      )}
    </IconButton>
      </Box>
    </FlexBetween>
    </FlexBetween>
  );
};

export default Topbar;