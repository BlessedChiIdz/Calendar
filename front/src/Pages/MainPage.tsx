import React, {useEffect} from 'react';
import Header from "../Components/Modal/Header";
import "../styles/mainPage.css"
import {useAppDispatch, useAppSelector} from "../hooks/reduxHooks";





const MainPage = () => {

    const dispatch = useAppDispatch()



    return (
        <div className="mainPageRoot">
            <Header/>
        </div>
    );
};
export default MainPage;