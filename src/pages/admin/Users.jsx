import {
  faEdit,
  faEye,
  faSearch,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { useDispatch, useSelector } from "react-redux";
import { listUser } from "../../Redux/Actions/UserActions";
import { Link } from "react-router-dom";
import Loading from "../LoadingError/Loading";
import Message from "../LoadingError/Message";

const Users = () => {
  const [itemPerPage, setItemPerPage] = useState(6)

  const dispatch = useDispatch()
  const userList = useSelector((state) => state.userList)
  const { loading, error, users } = userList

  useEffect(() => {
    dispatch(listUser())
  }, [dispatch])

  const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

  function Items({ currentItems }) {
    return (
      <>
        {currentItems &&
          currentItems.map((item, index) => (
            <div
              key={item._id}
              className="border rounded-md flex flex-col items-center max-w-[250px] p-2 max-h-[250px] bg-[#a3a3a3]"
            >
              <div className="bg-white rounded-lg w-32 h-32 mx-auto mx-auto w-2/3 h-1/2 ">
                <img src={item?.avatar} alt={item.username} className="w-4/5 h-4/5"/>
              </div>
              <p className="font-semibold text-lg">{item.username}</p>
              <p className="font-serif text-sm text-white">{item.role}</p>
              <p className="text-sm italic text-[#3b82f6]"><u>{item.email}</u></p>
                
              <div className="flex justify-between">
                
                <div className="flex gap-1">
                  <Link to={`/admin/user/${item._id}`}>
                    <button className="rounded-xl px-3 bg-[#4ade80]">
                      <FontAwesomeIcon icon={faEye} size="xs" />
                    </button>
                  </Link>
                  <button className="rounded-xl px-3 bg-[#ef4444]">
                    <FontAwesomeIcon icon={faTrash} size="xs" />
                  </button>
                </div>
              </div>
            </div>
          ))}
      </>
    );
  }

function PaginatedItems({ itemsPerPage, itemList }) {
   // console.log("item: ", itemList.length)
    const [itemOffset, setItemOffset] = useState(0);

    const endOffset = itemOffset + itemsPerPage;
    const currentItems = itemList.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(itemList.length / itemsPerPage);

    const handlePageClick = (event) => {
      //errorDelete=null
      const newOffset = (event.selected * itemsPerPage) % itemList.length;
      setItemOffset(newOffset);
    };

    return (
      <>
        <div className="grid grid-cols-3 gap-y-3">
          <Items currentItems={currentItems} />
        </div>
        <ReactPaginate
          nextLabel=">"
          onPageChange={handlePageClick}
          pageRangeDisplayed={3}
          marginPagesDisplayed={2}
          pageCount={pageCount}
          previousLabel="<"
          pageClassName="page-item"
          pageLinkClassName="page-link"
          previousClassName="page-item"
          previousLinkClassName="page-link"
          nextClassName="page-item"
          nextLinkClassName="page-link"
          breakLabel="..."
          breakClassName="page-item"
          breakLinkClassName="page-link"
          containerClassName="pagination mt-4"
          activeClassName="active"
          renderOnZeroPageCount={null}
        />
      </>
    );
  }
  return (
    <div className="px-10">
      <div className="flex justify-between mt-3">
      <div></div>
        <Link to="/admin/user/add">
            <button className="bg-[#0CA91B] rounded-lg px-4 py-2 text-white">
              Create new admin account<span className="text-lg">+</span>
            </button>
          </Link>
      </div>
      <div className="mt-2 flex justify-between ">
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
            <option value="">All Status</option>
            <option value="">Active Only</option>
            <option value="">Disabled</option>
          </select>
          <select name="" id="" className="rounded-lg bg-[#e1e0e0] px-4" onChange={(e) => setItemPerPage(e.target.value)}>
            <option value={3}>Show 3</option>
            <option value={6} selected>Show 6</option>
          </select>
        </div>
      </div>
      <div className="mt-2">
      {
           loading ? (<Loading/>) : error ? (
            <Message variant="danger">{error}</Message>
           ) : (
            <PaginatedItems itemsPerPage={itemPerPage} itemList= {users} />
           )
        }
      
      </div>
    </div>
  );
};

export default Users;
