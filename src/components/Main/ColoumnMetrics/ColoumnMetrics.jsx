import '../Main.css';
import {MetricCharts} from "./MetricCharts/MetricCharts";

export const ColoumnMetrics = ({metric}) => {

    return (
        <div className='coloumn'>
            <div className='rowHeader'>Метрики</div>
            <div className='rowContent metricContent'>
                <div className='metric'>
                    <MetricCharts metric={metric}/>
                </div>
                <div className='interface'>
                    <Interface/>
                </div>
                <div className='admin'>

                </div>
                <div className='app'>

                </div>
            </div>
        </div>
    );
};