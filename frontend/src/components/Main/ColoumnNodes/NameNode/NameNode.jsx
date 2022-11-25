import '../ColoumnNodes.css';
import {useState} from "react";


export const NameNode = ({nodes, getMetric, getNode}) => {

    const[activeNode, setActiveNode] = useState('')

    const nodeHandler = (e) => {
        setActiveNode(e.currentTarget.textContent)
        getMetric(e.currentTarget.textContent)
        getNode(e.currentTarget.textContent)
    }

    return (
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
    )
}