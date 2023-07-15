import * as React from 'react';
import Box from '@mui/material/Box';
import { Button } from '@mui/material';

export default function Navigation() {
  const navigatorElement = ['Field', 'Water Management', 'Analyze']

  return (
    <>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          p: 1,
          m: 1,
          bgcolor: 'grey.100',
          borderRadius: 1
        }}
      >
        {navigatorElement.map((ele, i) => (
          <Button key={i} variant="text">{ele}</Button>)
        )}
      </Box>
    </>
  );
}