import * as React from 'react';
import Box from '@mui/material/Box';
import Item from './box-item';

export default function Header() {

    return (
        <>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    p: 1,
                    m: 1,
                    bgcolor: 'background.paper',
                    borderRadius: 1
                }}
            >
                <Item>
                    Logo
                </Item>

                <Item>
                    Global Search
                </Item>

                <Item>
                    Profile
                </Item>
            </Box>
        </>
    );
}