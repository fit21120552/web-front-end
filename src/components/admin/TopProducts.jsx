import { faEye } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const TopProducts = () => {
  return (
    <div className="px-6 pt-4 pb-10 bg-white rounded-xl max-w-[1100px]">
      <div className="flex justify-between">
        <div className="">
          <p className="font-semibold text-lg">Top Products</p>
        </div>
      </div>
      <table className="mt-4 min-w-[500px]">
        <tr className="mb-4  text-left">
          <th className="font-normal text-[#96A5B8]">#</th>
          <th className="font-normal text-[#96A5B8]">Name</th>
          <th className="font-normal text-[#96A5B8]">Popularity</th>
          <th className="font-normal text-[#96A5B8]">Sales</th>
        </tr>
        {[0, 1, 2, 3].map((element, index) => (
          <tr className=" mb-4 border-t" key={element}>
            <td className="py-2">0</td>
            <td className="py-2">Home Decor</td>
            <td className="py-2">$1000</td>
            <td className="py-2">
              <span className="bg-[#F0F9FF] text-[#0095FF] border border-[#0095FF] rounded-lg px-3 text-sm font-semibold text-center">
                45
              </span>
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default TopProducts;
