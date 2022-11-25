import './ColoumnNodes.css';
import {useState} from "react";
import {StatusNode} from "./StatusNode/StatusNode";
import {NameNode} from "./NameNode/NameNode";


export const ColoumnNodes = ({nodes, getMetric, getNode}) => {

    return (
        <div className='coloumn'>
            <div className='rowHeader'>Ноды</div>
            <div className='rowContent nodeContent'>
                <StatusNode nodes={nodes}/>
                <NameNode nodes={nodes} getMetric={getMetric} getNode={getNode}/>
                <div className='coloumnNode'>
                </div>
            </div>
        </div>
    )
}