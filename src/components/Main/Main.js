import './Main.css';

export const Main = () => {

    return (
        <div className='mainContainer'>
            <div className='coloumn'>
                <div className='rowHeader'>Статус</div>
                <div className='rowContent'></div>
            </div>
            <div className='coloumn'>
                <div className='rowHeader'>Ноды</div>
                <div className='rowContent'></div>
            </div>
            <div className='coloumn'>
                <div className='rowHeader'>Метрики</div>
                <div className='rowContent'></div>
            </div>
        </div>
    );
};