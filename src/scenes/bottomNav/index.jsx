import React from 'react';
import { useNavigate } from "react-router-dom";
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LocalActivityIcon from '@mui/icons-material/LocalActivity';
import AutoGraphIcon from '@mui/icons-material/AutoGraph';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const BottomNav = () => {

  const [value, setValue] = React.useState('stats');
  const navigate = useNavigate();
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <BottomNavigation sx={{
        width: "100%",
        position: "fixed",
        bottom: 0,
        left: 0,
        zIndex: 1000, 
      }} value={value} onChange={handleChange}>

      <BottomNavigationAction
        label="Lotto"
        value="lotto"
        icon={<LocalActivityIcon />}
        onClick={()=>navigate("/lotto")}
      />
      

      <BottomNavigationAction
        label="Stats"
        value="stats"
        icon={<AutoGraphIcon />}
        onClick={()=>navigate("/stats")}
      />
      

      <BottomNavigationAction
        label="Profile"
        value="profile"
        icon={<AccountCircleIcon />}
        onClick={()=>navigate("/profile")}
      />
      
   
        <BottomNavigationAction
          label="Cart"
          value="cart"
          icon={<ShoppingCartIcon />}
          onClick={()=>navigate("/cart")}
        />
      
    </BottomNavigation>
  )
}
export default BottomNav