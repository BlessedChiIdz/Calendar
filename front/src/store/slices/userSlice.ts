import {UserM} from "../../models/UserM";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {fetchUsers} from "../reducers/ActionCreator";

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
            state.isLoad = false;
            state.error = ''
            state.users = action.payload;
        },

        userFetchingErr:(state,action:PayloadAction<string>)=>{
            state.isLoad = false;
            state.error = action.payload;
        },
    },
    // extraReducers:{
    //     [fetchUsers.fulfilled.type]: (state,action:PayloadAction<UserM[]>)=>{
    //         state.isLoad = false;
    //         state.error = ''
    //         state.users = action.payload;
    //     },
    //     [fetchUsers.pending.type]: (state)=>{
    //         state.isLoad = true;
    //     },
    //     [fetchUsers.rejected.type]: (state,action:PayloadAction<string>)=>{
    //         state.isLoad = false;
    //         state.error = action.payload;
    //     },
    //
    // }
    extraReducers:(builder)=>{
        builder.addCase(fetchUsers.fulfilled,(state,action)=>{
            state.isLoad = false;
            state.error = ''
            state.users = action.payload;
        })

    }
})

export default userSlice.reducer;


