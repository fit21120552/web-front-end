import { faEye, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import VerticallyCenteredModal from "../LoadingError/Modal";

const Categories = () => {

  const [modalShow, setModalShow] = React.useState(false);
  return (
    <div className="px-10 flex flex-column items-center">
      <div className="flex flex-row justify-end mt-10 w-full">
        <div className=""></div>
        <button className="bg-[#0CA91B] rounded-lg px-4 py-2 text-white">
          <Link to="/admin/category/add">
            Create new <span className="text-lg">+</span>
          </Link>
        </button>
      </div>

      <table className="mt-8 min-w-[700px] w-4/5 table">
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
            <td className="py-2 ">categories name</td>
            <td className="py-2">1000</td>

            <td className="py-2 flex gap-2 items-center h-full">
              <Link to={`/admin/category/edit/${index}`}>
                <FontAwesomeIcon icon={faEye} color="#00E096" />
              </Link>
              <button className="rounded-xl px-3 bg-[#ef4444]" onClick={() => setModalShow(true)}>
                <FontAwesomeIcon icon={faTrash} color="#B22234" />
              </button>
              <VerticallyCenteredModal
                      show={modalShow}
                      onCancel={() => setModalShow(false)}
                      onDelete={() => deleteHandler(index)}
                      header={`Are you sure to delete category ${index} ?`}
                      body = {`${index}`}
                      />
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default Categories;
