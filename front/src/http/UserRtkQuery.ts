import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query";
import {UserM} from "../models/UserM";



export const UserAPI = createApi({
    reducerPath:'UserApi',
    baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:5000/'}),
    endpoints: (builder) => ({
        getUsers: builder.query<UserM, number>({
            query: (name) => `users`,
            // url: `users`,
        }),
    }),
})

export const {useGetUsersQuery} = UserAPI