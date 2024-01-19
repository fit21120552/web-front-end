import { faEye } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "bottom",
    },
    title: {
      display: false,
      text: "Chart.js Bar Chart",
    },
  },
};

const labels = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

export const data = {
  labels,
  datasets: [
    {
      label: "Online Sales",
      data: [100, 50, 100, 1000, 200, 900, 500],
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
    {
      label: "Offline Sales",
      data: [100, 50, 100, 1000, 200, 900, 500],
      backgroundColor: "rgba(53, 162, 235, 0.5)",
    },
  ],
};

const TotalRevenue = () => {
  return (
    <div className="px-6 pt-4 pb-10 bg-white rounded-xl max-w-[1100px]">
      <div className="flex justify-between">
        <div className="">
          <p className="font-semibold text-lg">Total Revenue</p>
        </div>
      </div>
      <div className="mt-4 min-w-[500px]">
        <Bar options={options} data={data} />
      </div>
    </div>
  );
};

export default TotalRevenue;
