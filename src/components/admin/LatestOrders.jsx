import { faEye, faFileExport } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const LatestOrders = () => {
  return (
    <div className="px-6 pt-4 pb-10 bg-white rounded-xl max-w-[1100px]">
      <div className="flex justify-between">
        <div className="">
          <p className="font-semibold text-lg">Latest Orders</p>
        </div>
      </div>
      <div className="mt-4 mx-4">
        {[0, 1, 2, 3].map((element, index) => (
          <div className="flex mb-4 justify-between" key={element}>
            <p className="font-semibold">hcdman</p>
            <p>hcdman@gmail.com</p>
            <p>$1000</p>
            <p className="bg-[#DCFCE7] rounded-xl px-2 text-sm font-semibold">
              Paid yesterday
            </p>
            <p>20/12/2023</p>
            <div>
              <FontAwesomeIcon icon={faEye} color="#00E096" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LatestOrders;
