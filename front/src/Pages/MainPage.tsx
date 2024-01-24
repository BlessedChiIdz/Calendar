import React, {useEffect} from 'react';
import Header from "../Components/Modal/Header";
import "../styles/mainPage.css"
import {useAppDispatch, useAppSelector} from "../hooks/reduxHooks";
import {UserAPI} from "../http/UserRtkQuery";




const MainPage = () => {
//     const dispatch = useAppDispatch()
//     const {users,isLoad,error} = useAppSelector(state => state.userReducer)
//     useEffect(()=>{
//         dispatch(fetchUsers())
//     },[])
//     return (
//         <div className="mainPageRoot">
//             <Header/>
//             {isLoad && <h1>Loading</h1>}
//             {error && <h1>{error}</h1>}
//             {JSON.stringify(users,null,2)}
//         </div>
//     );
// };
    const dispatch = useAppDispatch()

    // const {} = useGet

    //const {user:UserState} = useSelector(selectAll);

    const {users,isLoad,error} = useAppSelector(state => state.userReducer)
    console.log(isLoad)
    return (
        <div className="mainPageRoot">
            <Header/>

        </div>
    );
};
export default MainPage;