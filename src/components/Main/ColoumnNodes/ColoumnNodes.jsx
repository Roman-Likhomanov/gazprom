import './ColoumnNodes.css';
import {useState} from "react";


export const ColoumnNodes = ({nodes, getMetric}) => {

    const[activeNode, setActiveNode] = useState('')

    const nodeHandler = (e) => {
        setActiveNode(e.currentTarget.textContent)
        getMetric(e.currentTarget.textContent)
    }

    return (
        <div className='coloumn'>
            <div className='rowHeader'>Ноды</div>
            <div className='rowContent nodeContent'>
                <div className='coloumnNode'>
                    {
                        nodes.map( n => {
                            let color = n.node_status_color
                            return <div key={n.node_id}>
                                <div style={{backgroundColor: color, heigth: '30px', width: '100px',
                                borderRadius: '5px', margin: '5px', textAlign: 'center', padding: '5px',
                                fontSize: '14px', fontWeight: '500'}}>
                                    {n.node_status_description}
                                </div>
                            </div>
                        })
                    }
                </div>
                <div className='coloumnNode'>
                    {
                        nodes.map( n => {
                            let name = n.node_name
                            return <div key={n.node_id}>
                                <div onClick={nodeHandler} className={activeNode === name ? 'nameNode active' : 'nameNode'}>
                                    {name}
                                </div>
                            </div>
                        })
                    }
                </div>
                <div className='coloumnNode'>
                    утилизация
                </div>
            </div>
        </div>
    )
}