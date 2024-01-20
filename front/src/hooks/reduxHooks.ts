import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import {appDispatch, rootState} from "../store";
import {RootState} from "@reduxjs/toolkit/query";


export const useAppDisp = ()=> useDispatch<appDispatch>();
export const useAppSelector: TypedUseSelectorHook<rootState> = useSelector;
