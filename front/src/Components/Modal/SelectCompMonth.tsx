import React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

type monthType = {
    monthNameProp:string,
    monthChange:(event: SelectChangeEvent) => void
}

const SelectCompMonth = ({monthNameProp,monthChange}:monthType) => {
    return (
        <div>
            <FormControl sx={{ m: 1, minWidth: 80, }}>
                <InputLabel id="demo-simple-select-autowidth-label">Month</InputLabel>
                <Select
                    labelId="demo-simple-select-autowidth-label"
                    id="demo-simple-select-autowidth"
                    value={monthNameProp}
                    onChange={monthChange}
                    autoWidth
                    label="Month"
                    sx = {{alignItems:"centre",backgroundColor:"#33485e"}}
                >
                    <MenuItem value={0}>January</MenuItem>
                    <MenuItem value={1}>February</MenuItem>
                    <MenuItem value={2}>March</MenuItem>
                    <MenuItem value={3}>April</MenuItem>
                    <MenuItem value={4}>May</MenuItem>
                    <MenuItem value={5}>June</MenuItem>
                    <MenuItem value={6}>July</MenuItem>
                    <MenuItem value={7}>August</MenuItem>
                    <MenuItem value={8}>September</MenuItem>
                    <MenuItem value={9}>October</MenuItem>
                    <MenuItem value={10}>November</MenuItem>
                    <MenuItem value={11}>December</MenuItem>
                </Select>
            </FormControl>
        </div>
    );
};

export default SelectCompMonth;