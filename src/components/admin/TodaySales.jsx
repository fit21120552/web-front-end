import {
  faChartSimple,
  faFileExport,
  faFileLines,
  faTag,
  faUserPlus,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const TodaySales = () => {
  return (
    <div className="px-6 pt-4 pb-10 bg-white rounded-xl max-w-[1100px]">
      <div className="flex justify-between">
        <div className="">
          <p className="font-semibold text-lg">Today's Sales</p>

          <p className="text-sm text-[#737791]">Sales Summary</p>
        </div>
        <button className="border-2 rounded-lg flex gap-2 items-center px-4 py-2">
          <FontAwesomeIcon icon={faFileExport} size="sm" />
          <span className="font-semibold text-sm">Export</span>
        </button>
      </div>
      <div className="mt-8 flex justify-between">
        <div className="rounded-lg p-4 bg-[#FFE2E5] min-w-[200px]">
          <div className="rounded-full flex items-center justify-center w-8 h-8 bg-[#FA5A7D]">
            <FontAwesomeIcon icon={faChartSimple} color="#ffffff" />
          </div>
          <p className="mt-2 font-semibold text-xl">$1k</p>
          <p className="mt-2 text-sm">Total Sales</p>
          <p className="mt-1 text-[#4079ED] text-xs">+8% from yesterday</p>
        </div>
        <div className="rounded-lg p-4 bg-[#FFF4DE] min-w-[200px]">
          <div className="rounded-full flex items-center justify-center w-8 h-8 bg-[#FF947A]">
            <FontAwesomeIcon icon={faFileLines} color="#ffffff" />
          </div>
          <p className="mt-2 font-semibold text-xl">$1k</p>
          <p className="mt-2 text-sm">Total Sales</p>
          <p className="mt-1 text-[#4079ED] text-xs">+8% from yesterday</p>
        </div>
        <div className="rounded-lg p-4 bg-[#DCFCE7] min-w-[200px]">
          <div className="rounded-full flex items-center justify-center w-8 h-8 bg-[#3CD856]">
            <FontAwesomeIcon icon={faTag} color="#ffffff" />
          </div>
          <p className="mt-2 font-semibold text-xl">$1k</p>
          <p className="mt-2 text-sm">Total Sales</p>
          <p className="mt-1 text-[#4079ED] text-xs">+8% from yesterday</p>
        </div>
        <div className="rounded-lg p-4 bg-[#F3E8FF] min-w-[200px]">
          <div className="rounded-full flex items-center justify-center w-8 h-8 bg-[#BF83FF]">
            <FontAwesomeIcon icon={faUserPlus} color="#ffffff" />
          </div>
          <p className="mt-2 font-semibold text-xl">$1k</p>
          <p className="mt-2 text-sm">Total Sales</p>
          <p className="mt-1 text-[#4079ED] text-xs">+8% from yesterday</p>
        </div>
      </div>
    </div>
  );
};

export default TodaySales;
