import React, {useEffect} from 'react';
import Header from "../Components/Modal/Header";
import "../styles/mainPage.css"
import {useAppDispatch, useAppSelector} from "../hooks/reduxHooks";
import {userSlice} from "../store/slices/userSlice";
import {useDispatch} from "react-redux";
import {fetchUsers} from "../store/reducers/ActionCreator";




const MainPage = () => {
    const dispatch = useAppDispatch()
    const {users} = useAppSelector(state => state.userReducer)
    useEffect(()=>{
        dispatch(fetchUsers())
    },[])
    return (
        <div className="mainPageRoot">
            <Header/>
            {JSON.stringify(users,null,2)}
        </div>
    );
};

export default MainPage;