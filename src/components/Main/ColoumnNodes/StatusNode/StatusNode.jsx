import '../ColoumnNodes.css';

export const StatusNode = ({nodes}) => {

    return (
        <div className='coloumnNode'>
            {
                nodes.map(n => {
                    let color = n.node_status_color
                    return <div key={n.node_id}>
                        <div style={{
                            backgroundColor: color,
                            borderRadius: '5px', margin: '5px', textAlign: 'center', padding: '5px',
                            fontSize: '14px', fontWeight: '500'
                        }}>
                            {n.node_status_description}
                        </div>
                    </div>
                })
            }
        </div>
    )
}