import { Line } from "react-chartjs-2";
import { 
    Chart as ChartJS, 
    CategoryScale, 
    LinearScale, 
    PointElement, 
    LineElement 
} from "chart.js";
import { datas } from "../components/DataPoints"

ChartJS.register(
    CategoryScale, 
    LinearScale, 
    PointElement, 
    LineElement
);

export default function LineGraph() {

    const options = {};
    const datavalue = datas.datasets[0].data;
    const mean = datavalue.reduce((sum, value) => sum + value, 0) / datavalue.length;
    const min = Math.min(...datavalue);
    const max = Math.max(...datavalue);

    let sum = 0;
    for (let i = 0; i < datavalue.length; i++) {
        sum += (datavalue[i] - mean)**2
        console.log(sum)
    }
    
    const sd = (sum / (datavalue.length - 1)) ** 0.5

    return (
        <div>
          <h1>Graph displayed</h1>
            <Line options={options} data={datas}/>
            mean: {mean}
            <br/>
            min: {min}
            <br/>
            max: {max}
            <br/>
            SD: {sd}
        </div>
    );
}