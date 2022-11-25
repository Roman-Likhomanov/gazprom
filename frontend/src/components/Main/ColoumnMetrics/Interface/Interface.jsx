import './Interface.css'

export const Interface = ({node}) => {

    if (node) {
        let color = node[0].interface_status_color
        return (
            <div style={{backgroundColor: color, borderRadius: '5px', margin: '5px', textAlign: 'center',
                padding: '5px',  fontSize: '14px', fontWeight: '500'}}>
                <div>
                    Название интерфейса: {node[0].interface_name || 'null'}
                </div>
                <div>
                    Статус интерфейса: {node[0].interface_status_description || 'null'}
                </div>
            </div>
        )
    }
}