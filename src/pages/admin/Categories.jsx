import { faEye, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Categories = () => {
  return (
    <div className="px-10">
      <table className="mt-8 min-w-[700px]">
        <tr className="mb-4">
          <th className="font-normal text-left text-[#96A5B8]">STT</th>
          <th className="font-normal text-[#96A5B8]">Name</th>
          <th className="font-normal text-left text-[#96A5B8]">
            Total Products
          </th>
          <th className="font-normal text-[#96A5B8]">Action</th>
        </tr>
        {[0, 1, 2, 3].map((element, index) => (
          <tr className=" mb-4 border-t" key={element}>
            <td className="py-2 font-semibold">1</td>
            <td className="py-2 ">hcdman@gmail.com</td>
            <td className="py-2">$1000</td>

            <td className="py-2 flex gap-2 items-center h-full">
              <FontAwesomeIcon icon={faEye} color="#00E096" />
              <FontAwesomeIcon icon={faTrash} color="#B22234" />
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default Categories;
