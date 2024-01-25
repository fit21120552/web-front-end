import { faEye, faSearch, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteOrder, listOrders } from "../../Redux/Actions/OrderActions";
import Loading from "../LoadingError/Loading";
import { Link } from "react-router-dom";
import ReactPaginate from "react-paginate";
import Message from "../LoadingError/Message";

const Orders = () => {
  const [modalShow, setModalShow] = React.useState(false);
  const [itemPerPage, setItemPerPage] = useState(10)
  const dispatch = useDispatch()

  const orderList = useSelector((state) => state.orderList)
  //const { loading, error, orders } = orderList

  const orderDelete = useSelector((state) => state.orderDelete)
  const { error: errorDelete, success: successDelete } = orderDelete

  useEffect(() => {
    dispatch(listOrders())
  },[dispatch, successDelete])

  const deleteHandler2 = (id) => {
    if (window.confirm(`Are you sure to delete this order ${id}?`)) {
      dispatch(deleteOrder(id))
     // alert(`deleted ${id}`)
    }
  }
    
  let loading = false
  let error = null
  let orders = [
    {
      "_id": "65a9d7b4ad47b243bc49b0071",
      "username":"Tien 123",
      "email":"taobilag@gmail.com",
      "total":"1200",
      "paidStatus" :"Paid",
      "deliveryStatus":"Not Delivery",
      "dateOrder":"12/07/2024",

    }, 
    {
      "_id": "65a9d7b4ad47b243bc49b0072",
      "username":"Tien 123",
      "email":"taobilag@gmail.com",
      "total":"1201",
      "paidStatus" :"Not Paid",
      "deliveryStatus":"Not Delivery",
      "dateOrder":"12/07/2024",
      
    },
    {
      "_id": "65a9d7b4ad47b243bc49b0072",
      "username":"Tien 123",
      "email":"taobilag@gmail.com",
      "total":"1201",
      "paidStatus" :"Paid",
      "deliveryStatus":"Delivery",
      "dateOrder":"12/07/2024",
      
    }
  ]
  function Items({ currentItems }) {
    return (
      <>
        {currentItems &&
          currentItems.map((item, index) => (
            <tr className=" mb-4 border-t" key={item._id}>
            <td className="py-2 font-semibold">{item.username}</td>
            <td className="py-2 text-center">{item.email}</td>
            <td className="py-2">${item.total}</td>
            <td className="py-2  text-center">
            {
                item.paidStatus ==="Paid" ? (
                  <span className="alert-success text-success rounded-xl inline-block px-3 text-sm font-semibold min-w-[120px]">                
                    {item.paidStatus}
                  </span>
                ) : (
                  <span className="alert-danger text-danger rounded-xl inline-block px-3 text-sm font-semibold min-w-[120px]">
             
                    {item.paidStatus}
                  </span>
                )
            }
              
            </td>
            <td className="py-2 text-center">{item.dateOrder}</td>
            <td className="py-2  text-center">
            {
              item.deliveryStatus === "Delivery" ? (
                <span className="alert-success text-success inline-block rounded-xl px-3 text-sm font-semibold min-w-[120px]">
                  {item.deliveryStatus}
                </span>
              ) : (
                <span className="alert-danger text-danger inline-block rounded-xl px-3 text-sm font-semibold min-w-[120px]">
                  {item.deliveryStatus}
                </span>
              )
            }
              
            </td>
            <td className="flex flex-row justify-center">
              <Link className="py-2 text-center" to={`/admin/order/${item._id}`}>
                <FontAwesomeIcon icon={faEye} color="#00E096" />
              </Link>
              <button className="rounded-xl px-3" onClick={(e) =>deleteHandler2(item._id)}>
                <FontAwesomeIcon icon={faTrash} color="#ef4444" />
              </button>
            </td>
          </tr>
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
       
        <Items currentItems={currentItems} />
       
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
            <option value="">All status</option>
            <option value="">Paid</option>
            <option value="">Not paid</option>
            <option value="">Delivered</option>
            <option value="">Not delivered</option>
          </select>
          <select name="" id="" className="rounded-lg bg-[#e1e0e0] px-4">
            <option value={5}>Show 5</option>
            <option value={10} selected>Show 10</option>
          </select>
        </div>
      </div>
      {
        loading ? (<Loading/>) : error 
        ? (<Message variant="danger w-full mt-4" >{error}</Message>)
        : (
          <table className="mt-8 w-full">
            <tr className="mb-4 text-center">
              <th className="font-normal text-left text-[#96A5B8]">Name</th>
              <th className="font-normal text-[#96A5B8]">Email</th>
              <th className="font-normal text-left text-[#96A5B8]">Total</th>
              <th className="font-normal text-[#96A5B8]">Paid</th>
              <th className="font-normal text-[#96A5B8]">Date</th>
              <th className="font-normal text-[#96A5B8]">Status</th>
              <th className="font-normal text-[#96A5B8]">Action</th>
            </tr>
            <PaginatedItems itemsPerPage={itemPerPage} itemList={orders}/>
          </table>
        )
      }
      
    </div>
  );
};

export default Orders;
