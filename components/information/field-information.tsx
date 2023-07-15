import { Box } from '@mui/material';
import Item from '../ui/box-item';

export default function FieldInformation() {
    return (
        <>
            <Box sx={{ textAlign: 'center' }}>
                <Item sx={{ bgcolor: 'gray', border: 'none', color: 'black', borderRadius: 0 }}>
                    My Fields
                </Item>
                <Item sx={{ bgcolor: 'gray', border: 'none', color: 'black', borderRadius: 0 }}>
                    Field List Dropdown View
                </Item>
            </Box >
        </>
    );
}