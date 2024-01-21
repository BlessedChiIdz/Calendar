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
        userFetching:(state)=>{
            state.isLoad = true;
        },

        userFetchingSuccess:(state,action:PayloadAction<UserM[]>)=>{
            state.isLoad = true;
            state.error = ''
            state.users = action.payload;
        },

        userFetchingErr:(state,action:PayloadAction<string>)=>{
            state.isLoad = false;
            state.error = action.payload;
        },
    },
})

export default userSlice.reducer;


