import './App.css';
import {fetchGroupsTC} from "./reducers/groups-reducer";
import {useDispatch} from "react-redux";
import {useEffect} from "react";
import {Header} from "../components/Header/Header";
import {Main} from "../components/Main/Main";
import {fetchMetricsTC} from "./reducers/metrics-reducer";

function App() {

    const dispatch = useDispatch()

    useEffect(() => {
        // let timerId = setInterval(() => {
            dispatch(fetchGroupsTC())
            dispatch(fetchMetricsTC())
        //     console.log(1)
        // }, 1000)
        // return () => {
        //     clearInterval(timerId);
        // }
    }, [])

    return (
        <div className='app'>
            <Header/>
            <h1>Ноды</h1>
            <Main/>
        </div>
    );
}

export default App;
