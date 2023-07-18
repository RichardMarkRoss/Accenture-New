import React from 'react'
import { Box } from "@mui/material";
import {styled} from "@mui/system";



const DashboardBox = styled(Box)(({theme}) => ({
  backgroundColor: theme.palette.background.light,
  borderRadius: "1rem",
  boxShadow: "0.15rem 0.2rem 0.15rem 0.1rem rgba(0, 0, 0, .8)"
}));

const Row2 = () => {
  return (
    <Box>
    <DashboardBox gridArea="d"></DashboardBox>
    <DashboardBox gridArea="e"></DashboardBox>
    <DashboardBox gridArea="f"></DashboardBox>
    </Box>
  )
}

export default Row2