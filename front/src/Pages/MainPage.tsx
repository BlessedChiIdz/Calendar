import React from 'react';
import Header from "../Components/Modal/Header";
import "../styles/mainPage.css"
import {useAppSelector} from "../hooks/reduxHooks";




const MainPage = () => {
     const {} = useAppSelector(state => state.userReducer.error)
    return (
        <div className="mainPageRoot">
            <Header/>

        </div>
    );
};

export default MainPage;