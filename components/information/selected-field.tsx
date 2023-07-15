import Item from '@/components/ui/box-item';
import { Box, Button, Grid } from '@mui/material';
import FieldInformation from './field-information';
import FieldDataInformation from './field-data-information';

export default function SelectedField() {
    return (
        <>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    p: 1,
                    m: 1,
                    bgcolor: 'gray',
                    borderRadius: 1
                }}
            >
                <Item sx={{ bgcolor: 'none', border: 'none', color: 'white' }}>
                    -- Selected Field Information
                </Item>
                <Item sx={{ bgcolor: 'none', border: 'none' }}>
                    <Button variant="contained" sx={{ bgcolor: 'grey.100', color: 'black' }}>
                        Request Service
                    </Button>
                </Item>
            </Box>

            <Box sx={{ width: '100%' }}>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid item xs={4}>
                        <FieldInformation />
                    </Grid>
                    <Grid item xs={8}>
                        <FieldDataInformation />
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}