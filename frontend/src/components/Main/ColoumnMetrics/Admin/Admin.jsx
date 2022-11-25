import './Admin.css'

export const Admin = ({node}) => {

    if (node) {
        return (
            <div className='admin'>
                <div>
                    Имя: {node[0].admin_lastname || 'null'}
                </div>
                <div>
                    Фамилия: {node[0].admin_firstname || 'null'}
                </div>
                <div>
                    Почта: {node[0].admin_email || 'null'}
                </div>
            </div>
        )
    }
}