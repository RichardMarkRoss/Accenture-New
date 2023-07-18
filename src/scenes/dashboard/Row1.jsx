import React from 'react'
import { Box } from "@mui/material";
import {styled} from "@mui/system";

const DashboardBox = styled(Box)(({theme}) => ({
    backgroundColor: theme.palette.background.light,
    borderRadius: "1rem",
    boxShadow: "0.15rem 0.2rem 0.15rem 0.1rem rgba(0, 0, 0, .8)"
}));


const Row1 = () => {
    return (
    <Box>
    <DashboardBox gridArea="a"></DashboardBox>
    <DashboardBox gridArea="b"></DashboardBox>
    <DashboardBox gridArea="c"></DashboardBox>
    </Box>
  )
}

export default Row1