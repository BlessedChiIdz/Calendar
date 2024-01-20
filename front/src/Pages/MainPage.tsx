import React from 'react';
import Header from "../Components/Modal/Header";
import "../styles/mainPage.css"
import {useAppDispatch, useAppSelector} from "../hooks/reduxHooks";
import {userSlice} from "../store/slices/userSlice";
import {useDispatch} from "react-redux";




const MainPage = () => {

    return (
        <div className="mainPageRoot">
            <Header/>

        </div>
    );
};

export default MainPage;