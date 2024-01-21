import {AppDispatch} from "../index";
import axios from "axios";
import {UserM} from "../../models/UserM";
import {userSlice} from "../slices/userSlice";
import {createAsyncThunk} from "@reduxjs/toolkit";


// export const fetchUsers = () =>async (dispatch:AppDispatch)=>{
//     try {
//         dispatch(userSlice.actions.userFetching())
//         const response = await axios.get<UserM[]>('https://jsonplaceholder.typicode.com/users')
//         dispatch(userSlice.actions.userFetchingSuccess(response.data))
//     } catch (e){
//         if(e instanceof Error)
//             dispatch(userSlice.actions.userFetchingErr(e.message))
//     }
// }

export const fetchUsers = createAsyncThunk(
    'user/fetchAll',
    async (_,thunkAPI) =>{
        const response = await axios.get<UserM[]>('https://jsonplaceholder.typicode.com/users')
        return response.data;
    }
)