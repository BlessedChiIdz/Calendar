import {combineReducers, configureStore} from "@reduxjs/toolkit";
import userReducer from './slices/userSlice'
import {UserAPI} from "../http/UserRtkQuery";






export const rootReducer = combineReducers({
    userReducer,
    [UserAPI.reducerPath]: UserAPI.reducer
})

export const setupStore = () =>{
    return configureStore({
        reducer:rootReducer,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware().concat(UserAPI.middleware)
    })
}

export type  RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']