import {useState} from "react";
import { Link } from "react-router-dom";
import {Box, Typography, useTheme} from "@mui/material";
import AutoGraphIcon from '@mui/icons-material/AutoGraph';
import FlexBetween from "../../Components/FlexBetween";
import { ColorModeContext, useMode, tokens } from "../../theme";


const Navbar = () => {
  const {palette} = useTheme(); 
  const {selected, setSelected} = useState("dashboard");

  const [theme, colorMode] = useMode();
  const colors = tokens(theme.palette.mode);
  const [ setIsSidebar] = useState(true);

  return (
    <FlexBetween mb="0.25rem" p="0.5rem 0rem" color={colors.grey[300]}> 
    <FlexBetween gap="0.75rem">
      <AutoGraphIcon sx={{fontSize: "28px"}}/>
      <Typography variant="h4" fontSize="16px">
        Lotto Tacticle
      </Typography>
    </FlexBetween>
    <FlexBetween gap="2rem">
      <Box sx={{"&:hover": {color: colors.primary[100]}}}>
        <Link 
        to="/" 
        onClick={()=>setSelected("dashboard")} 
        style={{
          color: selected === "dashboard" ? "inherit" : colors.grey[700],
          textDecoration: "inherit", 
        }}>dashboard</Link>
       
      </Box>
      <Box sx={{"&:hover": {color: colors.primary[100]}}}>
        <Link 
        to="/predictions" 
        onClick={()=>setSelected("predictions")} 
        style={{
          color: selected === "predictions" ? "inherit" : colors.grey[700],
          textDecoration: "inherit", 
        }}>predictions</Link>
       
      </Box>
    </FlexBetween>
    </FlexBetween>
  )
}

export default Navbar