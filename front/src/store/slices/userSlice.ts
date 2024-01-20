import {UserM} from "../../models/UserM";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface UserState {
    users:UserM[];
    isLoad:boolean;
    error:string;

}

const initialState : UserState = {
    users:[],
    isLoad:false,
    error: '',

}

export const userSlice = createSlice({
    name:'user',
    initialState,
    reducers: {
        increment:(state)=>{
            state.isLoad = true;
        }
    },
})

export default userSlice.reducer;


