import {UserM} from "../../models/UserM";
import {createSlice} from "@reduxjs/toolkit";

interface userSInterface {
    users:UserM[];
    isLoad:boolean;
    error:string;
}

const initialState : userSInterface = {
    users:[],
    isLoad:false,
    error: ''
}

export const usersSlice = createSlice({
    name:'users',
    initialState:initialState,
    reducers: {
        inc:(state)=>{
            state.isLoad = true;
        }
    },
})

export default usersSlice.reducer;


