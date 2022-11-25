import './Application.css'

export const Application = ({node}) => {

    if (node) {
        return (
            <div className='application'>
                <div>
                    Название приложения: {node[0].application_name || 'null'}
                </div>
            </div>
        )
    }
}