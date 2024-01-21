import React, {useEffect} from 'react';
import Header from "../Components/Modal/Header";
import "../styles/mainPage.css"
import {useAppDispatch, useAppSelector} from "../hooks/reduxHooks";
import {userSlice} from "../store/slices/userSlice";
import {useDispatch} from "react-redux";
import {fetchUsers} from "../store/reducers/ActionCreator";




const MainPage = () => {
    const dispatch = useAppDispatch()
    const {users,isLoad,error} = useAppSelector(state => state.userReducer)
    useEffect(()=>{
        dispatch(fetchUsers())
    },[])
    return (
        <div className="mainPageRoot">
            <Header/>
            {isLoad && <h1>Loading</h1>}
            {error && <h1>{error}</h1>}
            {JSON.stringify(users,null,2)}
        </div>
    );
};

export default MainPage;