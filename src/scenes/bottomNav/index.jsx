import React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LocalActivityIcon from '@mui/icons-material/LocalActivity';
import AutoGraphIcon from '@mui/icons-material/AutoGraph';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const BottomNav = () => {

  const [value, setValue] = React.useState('recents');
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
        label="Play"
        value="recents"
        icon={<LocalActivityIcon />}
      />
      <BottomNavigationAction
        label="Stats"
        value="favorites"
        icon={<AutoGraphIcon />}
      />
      <BottomNavigationAction
        label="Profile"
        value="nearby"
        icon={<AccountCircleIcon />}
      />
      <BottomNavigationAction 
        label="Cart"
        value="folder" 
        icon={<ShoppingCartIcon />} />
    </BottomNavigation>
  )
}
export default BottomNav