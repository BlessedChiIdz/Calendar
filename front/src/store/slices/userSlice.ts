import {createSlice} from "@reduxjs/toolkit";

interface userSInterface {
    value:number;
}

const initialState = {
    value: 0
} as userSInterface

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers:{
        inc: state =>{
            state.value+=1;
        },
        dec: state=>{
            state.value-=1;
        }
    }
})

export const {inc,dec} = userSlice.actions;

export default userSlice.reducer;