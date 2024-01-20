import {UserM} from "../../models/UserM";
import {createSlice} from "@reduxjs/toolkit";

interface userSInterface {
    users:UserM[];
    isLoad:boolean;
    error:string;
}

const initialState: userSInterface={
    users:[],
    isLoad:false,
    error: ''
}

export const userSlice = createSlice({
    name:'user',
    initialState,
    reducers:{

    }
})
export default userSlice.reducer;


