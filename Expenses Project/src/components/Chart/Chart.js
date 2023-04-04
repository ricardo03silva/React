import './Chart.css';
import ChartBar from './ChartBar';

const Chart = (props) => {
    const totalMax = Math.max(...props.dataPoints.map((el) => el.value));

    return (
        <div className="chart">
            {props.dataPoints.map((el) => {
                return <ChartBar key={el.label} value={el.value} maxValue={totalMax} label={el.label} />;
            })}
        </div>
    );
};

export default Chart;
