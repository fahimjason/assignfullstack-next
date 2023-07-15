import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import { Grid } from '@mui/material';

export default function Navigation() {
  const [value, setValue] = React.useState(0);

  return (
    <Box>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        {/* <Grid> */}
        {/* <Grid xs={4}> */}
        <BottomNavigationAction label="Logo" />
        {/* </Grid> */}
        {/* <Grid xs={8}> */}
        <BottomNavigationAction label="Global Size" />
        {/* </Grid> */}
        {/* <Grid xs={4}> */}
        <BottomNavigationAction label="Notifications" />
        <BottomNavigationAction label="Profile" />
        {/* </Grid> */}
        {/* </Grid> */}
      </BottomNavigation>
    </Box>
  );
}