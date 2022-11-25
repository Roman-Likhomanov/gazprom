import {dataMetric} from "./dataMetrics";
import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts/highstock";

export const MetricCharts = ({metric}) => {

    const options = (data, color) => {
        if (metric) {
            return {
                title: {
                    text: data
                },
                credits: {
                    enabled: false
                },
                xAxis: {
                    title: {
                        text: 'Time'
                    }
                },
                yAxis: {
                    title: {
                        text: data
                    }
                }
                ,
                series: dataMetric(metric, data, color)
            }
        }
    }

    return <>
        <HighchartsReact highcharts={Highcharts} options={options('cpu_utilization', '#0000FF')}/>
        <HighchartsReact highcharts={Highcharts} options={options('memory_utilization', '#32CD32')}/>
        <HighchartsReact highcharts={Highcharts} options={options('disk_utilization', '#FF00FF')}/>
    </>
}