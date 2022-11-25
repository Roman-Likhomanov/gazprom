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
    const [metric, setMetric] = useState()
    const [interfaceState, setInterfaceState] = useState()
    const [node, setNode] = useState()

    const getNodes = (groupName) => {
        setNodes(groups.filter(el => el.group_name === groupName))
    }

    const getMetric = (nodeName) => {
        setMetric(metrics.filter(el => el.node_name === nodeName))
    }

    const getNode = (nodeName) => {
        setNode(nodes.filter(el => el.node_name === nodeName))
    }

    return (
        <div className='mainContainer'>
            <ColoumnStatus getNodes={getNodes}/>
            <ColoumnNodes nodes={nodes} getMetric={getMetric} getNode={getNode}/>
            <ColoumnMetrics metric={metric} node={node}/>
        </div>
    );
};