import './Main.css';
import {ColoumnStatus} from "./ColoumnStatus/ColoumnStatus";
import {ColoumnNodes} from "./ColoumnNodes/ColoumnNodes";
import {ColoumnMetrics} from "./ColoumnMetrics/ColoumnMetrics";
import {useSelector} from "react-redux";
import {useState} from "react";

export const Main = () => {

    const groups = useSelector(state => state.groups)
    const metrics = useSelector(state => state.metrics)

    const [nodes, setNodes] = useState([])

    const getNodes = (groupName) => {
        setNodes(groups.filter(el => el.group_name === groupName))
    }

    return (
        <div className='mainContainer'>
            <ColoumnStatus getNodes={getNodes}/>
            <ColoumnNodes nodes={nodes}/>
            <ColoumnMetrics/>
        </div>
    );
};