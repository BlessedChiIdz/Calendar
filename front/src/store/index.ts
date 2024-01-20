import {combineReducers, configureStore} from "@reduxjs/toolkit";
import userReducer from './slices/userSlice'




export const rootReducer = combineReducers({
    userReducer
})

export const setupStore = () =>{
    return configureStore({
        reducer:rootReducer
    })
}

export type  rootState = ReturnType<typeof rootReducer>
export type appStore = ReturnType<typeof setupStore>
export type appDispatch = appStore['dispatch']