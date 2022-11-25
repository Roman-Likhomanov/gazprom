import '../Main.css';
import {MetricCharts} from "./MetricCharts/MetricCharts";
import {Interface} from "./Interface/Interface";
import {Admin} from "./Admin/Admin";

export const ColoumnMetrics = ({metric, node}) => {

    return (
        <div className='coloumn'>
            <div className='rowHeader'>Метрики</div>
            <div className='rowContent metricContent'>
                <div>
                    <MetricCharts metric={metric}/>
                </div>
                <div>
                    <Interface node={node}/>
                </div>
                <div>
                    <Admin node={node}/>
                </div>
                <div className='app'>

                </div>
            </div>
        </div>
    );
};