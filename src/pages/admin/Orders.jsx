import { faEye, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Orders = () => {
  return (
    <div className="px-10">
      <div className="mt-10 flex justify-between ">
        <div className="bg-[#e1e0e0] flex gap-3 items-center rounded-lg px-4 py-2">
          <FontAwesomeIcon icon={faSearch} color="#5D5FEF" />
          <input
            type="text"
            placeholder="Search here..."
            className="bg-[#e1e0e0] min-w-[300px] outline-none"
          />
        </div>
        <div className="flex gap-4">
          <select name="" id="" className="rounded-lg bg-[#e1e0e0] px-4">
            <option value="">Status</option>
            <option value="">Delivered</option>
            <option value="">Not delivered</option>
          </select>
          <select name="" id="" className="rounded-lg bg-[#e1e0e0] px-4">
            <option value="">Show 20</option>
            <option value="">Show 50</option>
          </select>
        </div>
      </div>
      <table className="mt-8 w-full">
        <tr className="mb-4">
          <th className="font-normal text-left text-[#96A5B8]">Name</th>
          <th className="font-normal text-[#96A5B8]">Email</th>
          <th className="font-normal text-left text-[#96A5B8]">Total</th>
          <th className="font-normal text-[#96A5B8]">Paid</th>
          <th className="font-normal text-[#96A5B8]">Date</th>
          <th className="font-normal text-[#96A5B8]">Status</th>
          <th className="font-normal text-[#96A5B8]">Action</th>
        </tr>
        {[0, 1, 2, 3].map((element, index) => (
          <tr className=" mb-4 border-t" key={element}>
            <td className="py-2 font-semibold">hcdman</td>
            <td className="py-2 text-center">hcdman@gmail.com</td>
            <td className="py-2">$1000</td>
            <td className="py-2  text-center">
              <span className="bg-[#DCFCE7] rounded-xl px-3 text-sm font-semibold">
                Paid yesterday
              </span>
            </td>
            <td className="py-2 text-center">20/12/2023</td>
            <td className="py-2  text-center">
              <span className="bg-[#DCFCE7] inline-block rounded-xl px-3 text-sm font-semibold min-w-[120px]">
                Delivered
              </span>
            </td>
            <td className="py-2 text-center">
              <FontAwesomeIcon icon={faEye} color="#00E096" />
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default Orders;
