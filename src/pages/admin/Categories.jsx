import { faEye, faPencil, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";

import ReactPaginate from "react-paginate";
import { Link } from "react-router-dom";
import VerticallyCenteredModal from "../LoadingError/Modal";
import { useDispatch, useSelector } from "react-redux";
import { listCategories } from "../../Redux/Actions/CategoryActions";
import Loading from "../LoadingError/Loading";
import Message from "../LoadingError/Message";

const Categories = () => {
 
  const [modalShow, setModalShow] = React.useState(false);
  const dispatch = useDispatch()
  const categoryList = useSelector((state) => state.categoryList)
  const { loading, error, categories } = categoryList

  useEffect(() => {
    dispatch(listCategories())
  }, [dispatch])

  function Items({ currentItems }) {
    return (
      <>
        {currentItems &&
          currentItems.map((element, index) => (
            <tr className=" mb-4 border-t" key={element._id}>
            <td className="py-2 font-semibold">{index}</td>
            <td className="py-2 ">{element.name}</td>
            <td className="py-2">{element.productCount}</td>

            <td className="py-2 flex gap-2 items-center h-full">
              <Link to={`/admin/category/${element._id}`}>
                <FontAwesomeIcon icon={faEye} color="#00E096" />
              </Link>
              <Link to={`/admin/category/edit/${element._id}`}>
                <FontAwesomeIcon icon={faPencil} color="#ca8a04" />
              </Link>
              <button className="rounded-xl px-3 bg-[#ef4444]" onClick={() => setModalShow(true)}>
                <FontAwesomeIcon icon={faTrash} color="#B22234" />
              </button>
              <VerticallyCenteredModal
                      show={modalShow}
                      onCancel={() => setModalShow(false)}
                      onDelete={() => deleteHandler(element._id)}
                      header={`Are you sure to delete category ${element.name} ?`}
                      body = {`Product count: ${element.productCount}`}
                      />
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
        {
           loading ? (<tr className="col-span-1 row-span-full"><Loading/></tr>) : error ? (
            <tr className="col-span-1">
            <Message variant="danger" >{error}</Message>
            </tr>
           ) : (
            <PaginatedItems itemsPerPage={7} itemList={categories} />
           )
        }
      </table>
    </div>
  );
};

export default Categories;
