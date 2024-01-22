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
    reducers:(create) =>({

    })


    // name:'user',
    // initialState,
    // selectors:{
    //     selectDef: state=>state,
    // },
    //
    // reducers: (create) => ({
    //     userFetching: create.reducer((state)=>{
    //         state.isLoad = true;
    //     }),
    //
    //     userFetchingSuccess: create.reducer((state,action:PayloadAction<UserM[]>)=>{
    //         state.isLoad = false;
    //         state.error = ''
    //         state.users = action.payload;
    //     }),
    //
    //     userFetchingErr: create.reducer((state,action:PayloadAction<string>)=>{
    //         state.isLoad = false;
    //         state.error = action.payload;
    //     })
    // })
})
export const {selectDef} = userSlice.selectors;
export default userSlice.reducer;


