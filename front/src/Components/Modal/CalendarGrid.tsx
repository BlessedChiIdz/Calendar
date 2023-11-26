import React from 'react';
import Grid from '@mui/material/Grid';
import {Box} from "@mui/material";
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';

type Days = {
    count:number
}

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor:  '#00416A',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const CalendarGrid = ({count}:Days) => {
    let list:number[] = []
    for(let i = 0;i<count;i++){
        list[i]=i+1;
    }
    return (
        <Box sx={{ flexGrow: 1 }} >
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                {list.map((count)=>(
                    <Grid item xs={2} sm={4} md={4}>
                        <Item>{count}</Item>
                    </Grid>
                    ))}
            </Grid>
        </Box>
    );
};

export default CalendarGrid;