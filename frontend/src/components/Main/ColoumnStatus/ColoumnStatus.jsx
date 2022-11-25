import '../Main.css';
import {Status} from "./Status/Status";
import {Groups} from "./Groups/Groups";

export const ColoumnStatus = ({getNodes}) => {

    return (
            <div className='coloumn'>
                <div className='rowHeader'>Статус</div>
                <div className='rowContent'>
                    <Status/>
                    <Groups getNodes={getNodes}/>
                </div>
            </div>
    );
};