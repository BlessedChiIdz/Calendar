import {UserM} from "../../models/UserM";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {fetchUsers} from "../actions/ActionCreator";

export interface UserState {
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

    selectors:{
        selectLoad:(state) => state.isLoad,
    },
    reducers: (create)=>({
        Todo: create.reducer((state,action)=>{
            state.isLoad = true;
        })
    }),

    extraReducers:(builder)=>{
        builder.addCase(fetchUsers.fulfilled,(state,action)=>{
            state.isLoad = false;
            state.error = ''
            state.users = action.payload;
        })
    }
})

export const {Todo} = userSlice.actions

export default userSlice.reducer;



