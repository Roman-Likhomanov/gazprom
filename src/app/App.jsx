import './App.css';
import {fetchGroupsTC} from "../groups/groups-reducer";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {Header} from "../components/Header/Header";

function App() {
  const dispatch = useDispatch()
  const groups = useSelector(state => state.groups)
  console.log(groups)

  useEffect(() => {
    const thunk = fetchGroupsTC()
    dispatch(thunk)
  }, [])

  return (
    <div className='app'>
      <Header/>
      <h1>Ноды</h1>
    </div>
  );
}

export default App;
