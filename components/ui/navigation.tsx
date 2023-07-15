import * as React from 'react';
import Box from '@mui/material/Box';
import NavMenu from './nav-menu';

export default function Navigation() {
  const navigationData: { [key: string]: string[] } = {
    'Field': ['Add', 'Edit', 'Import'],
    'Water Management': ['Pump', 'TDI', 'Assment'],
    'AnalyZe': ['Yield', 'Soils', 'Plant Dates']
  }

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
        {
          Object.keys(navigationData).map((field, i) => (
            <NavMenu key={i} field={field} items={navigationData[field]} />
          ))
        }
      </Box>
    </>
  );
}