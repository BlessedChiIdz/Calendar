import React, {ChangeEvent, MouseEvent, useCallback, useEffect, useState} from 'react';
import {Months, NameToInt} from "../logicComp/CalendarLogic";
import CalendarGrid from "./Modal/CalendarGrid";
import "../styles/Calendar.css"
import {SelectChangeEvent} from "@mui/material/Select";
import SelectCompMonth from "./Modal/SelectCompMonth";
import {TextField} from "@mui/material";


const Calendar = () => {
    let months = Months;
    const [date,setDate] = useState<Date>(new Date())
    if(date.getFullYear()%4==0) months[1].Days=29
    else months[1].Days=28

    console.log(date)
    const year = date.getFullYear()
    const month = date.getMonth()
    const monthName = months[month].Name
    console.log(month)
    const plusYear = useCallback((event: MouseEvent<HTMLButtonElement>) => {
        setDate(new Date(year+1,date.getMonth(),date.getDate(),))
    }, [date]);
    const minusYear = useCallback((event: MouseEvent<HTMLButtonElement>) => {
        setDate(new Date(date.getFullYear()-1,date.getMonth(),date.getDate(),))
        },[date]);

    const plusMonth = useCallback((event: MouseEvent<HTMLButtonElement>) => {
        setDate(new Date(year,month+1,date.getDate(),))
    }, [date]);
    const minusMonth = useCallback((event: MouseEvent<HTMLButtonElement>) => {
        setDate(new Date(date.getFullYear(),month-1,date.getDate(),))
    },[date]);

    const ListMonthChange = (event: SelectChangeEvent) => {
        console.log(event.target.value)
        setDate(new Date(date.getFullYear(),Number(event.target.value),date.getDate(),))
    };


    const onInputChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
        setDate(new Date(Number(event.target.value),date.getMonth(),date.getDate(),))
    }, [date]);

    return (
        <div className="CalendarMain">
            <div className="YearContainer">
                <button onClick={plusYear} className="buttonYear">+</button>
                <TextField
                    id="outlined-controlled"
                    label="Year"
                    value={year}
                    onChange={onInputChange}
                />
                <button onClick={minusYear}>-</button>
            </div>
            <div className="MonthContainer">
                <button onClick={plusMonth}>+M</button>
                <div className="Month">
                    <SelectCompMonth monthNameProp={String(month)} monthChange={ListMonthChange}/>
                </div>

                <button onClick={minusMonth}>-M</button>
            </div>

                <CalendarGrid key={months[month].Name} count={months[month].Days}/>
        </div>
    );
};

export default Calendar;