/* eslint-disable react/prop-types */
import { faEdit, faSearch, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import ReactPaginate from "react-paginate";
import { Link } from "react-router-dom";

const Products = () => {
  const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
  function Items({ currentItems }) {
    return (
      <>
        {currentItems &&
          currentItems.map((item, index) => (
            <div
              key={index}
              className="border rounded-md flex flex-col max-w-[250px] p-2"
            >
              <div className="bg-white rounded-lg w-32 h-32 mx-auto">
                <img src="" alt="" />
              </div>
              <p>Shoes Air port</p>
              <div className="flex justify-between">
                <p className="font-semibold">25$</p>
                <div className="flex gap-1">
                  <button className="rounded-xl px-3 bg-[#FFBE18]">
                    <Link to="/admin/product/edit">
                      <FontAwesomeIcon icon={faEdit} size="xs" />
                    </Link>
                    
                  </button>
                  <button className="rounded-xl px-3 bg-[#ef4444]">
                    <Link to="/admin/product/delete">
                      <FontAwesomeIcon icon={faTrash} size="xs" />
                    </Link>
                    
                  </button>
                </div>
              </div>
            </div>
          ))}
      </>
    );
  }

  function PaginatedItems({ itemsPerPage }) {
    const [itemOffset, setItemOffset] = useState(0);

    const endOffset = itemOffset + itemsPerPage;
    const currentItems = items.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(items.length / itemsPerPage);

    const handlePageClick = (event) => {
      const newOffset = (event.selected * itemsPerPage) % items.length;
      setItemOffset(newOffset);
    };

    return (
      <>
        <div className="grid grid-cols-3 gap-y-6">
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
      <div className="flex justify-between mt-10">
        <div className=""></div>
        <button className="bg-[#0CA91B] rounded-lg px-4 py-2 text-white">
          <Link to="/admin/product/add">
            Create new <span className="text-lg">+</span>
          </Link>
        </button>
      </div>
      <div className="mt-4 flex justify-between ">
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
            <option value="">All category</option>
            <option value="">Delivered</option>
            <option value="">Not delivered</option>
          </select>
          <select name="" id="" className="rounded-lg bg-[#e1e0e0] px-4">
            <option value="">Show 20</option>
            <option value="">Show 50</option>
          </select>
        </div>
      </div>
      <div className="mt-4">
        <PaginatedItems itemsPerPage={6} />
      </div>
    </div>
  );
};

export default Products;
