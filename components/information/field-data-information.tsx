import { Box, Button, Grid } from '@mui/material';
import Item from '../ui/box-item';

export default function FieldDataInformation() {
    const fieldButton = ['Field Monitor', 'Field Insight', 'Field Notes', 'Share Status']
    const fieldData = ['Classification', 'Soil', 'Tile', 'Yield', 'Wetlands', 'Weather', 'Weather', 'Crop History', 'Hail History', 'NDVI']
    return (
        <>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid item xs={4}>
                    <Box>
                        <Item sx={{ textAlign: 'center', bgcolor: 'gray', border: 'none', color: 'black', borderRadius: 0 }}>
                            Field Data
                        </Item>
                        <Item sx={{ display: 'flex', justifyContent: 'space-evenly', bgcolor: 'lightcyan', borderRadius: 0 }}>
                            <div>
                                {fieldData.slice(0, 5).map((data, i) => (<p key={i}>{data}</p>))}
                            </div>
                            <div>
                                {fieldData.slice(5).map((data, i) => (<p key={i}>{data}</p>))}
                            </div>
                        </Item>
                    </Box >
                </Grid>
                <Grid item xs={8}>
                    <Box sx={{ width: '100%' }}>
                        <Item sx={{ bgcolor: 'none', border: 0, padding: 0, display: 'flex', justifyContent: 'space-between' }}>
                            {fieldButton.map((btn, i) => (
                                <Button key={i} sx={{ bgcolor: 'lightgrey' }}>{btn}</Button>
                            ))}
                        </Item>
                    </Box>
                    <Box>
                        <Item sx={{ textAlign: 'center', color: 'black', bgcolor: 'darkgray', borderRadius: 0 }}>
                            Data, Graph & Table
                        </Item>
                    </Box>
                </Grid>
            </Grid>
        </>
    );
}