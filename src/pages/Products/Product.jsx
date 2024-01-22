import Rating from "../user/Rating";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Loading from "../LoadingError/Loading";
import Message from "../LoadingError/Message";
import { Link, useOutletContext, useSearchParams } from "react-router-dom";
import { useEffect } from "react";

export default function Product() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [title, setTitle] = useOutletContext();

  const loading = false;
  const error = false;

  const products = [
    {
      discountPercentage: "14.87",
      rating: 4.93,
      ratingsAverage: 4.5,
      ratingsQuantity: 0,
      images: [
        "https://i.dummyjson.com/data/products/75/1.jpg",
        "https://i.dummyjson.com/data/products/75/2.jpg",
        "https://i.dummyjson.com/data/products/75/3.jpg",
        "https://i.dummyjson.com/data/products/75/thumbnail.jpg",
      ],
      _id: "65a9d7b4ad47b243bc49b007",
      title: "Seven Pocket Women Bag",
      description:
        "Seven Pocket Women Bag Handbags Lady Shoulder Crossbody Bag Female Purse Seven Pocket Bag",
      price: 68,
      stock: 13,
      brand: "Steal Frame",
      category: "womens-bags",
      thumbnail: "https://i.dummyjson.com/data/products/75/thumbnail.jpg",
      id: "65a9d7b4ad47b243bc49b007",
    },
    {
      discountPercentage: "14.87",
      rating: 4.93,
      ratingsAverage: 4.5,
      ratingsQuantity: 0,
      images: [
        "https://i.dummyjson.com/data/products/75/1.jpg",
        "https://i.dummyjson.com/data/products/75/2.jpg",
        "https://i.dummyjson.com/data/products/75/3.jpg",
        "https://i.dummyjson.com/data/products/75/thumbnail.jpg",
      ],
      _id: "65a9d7b4ad47b243bc49b0071",
      title: "Seven Pocket Women Bag",
      description:
        "Seven Pocket Women Bag Handbags Lady Shoulder Crossbody Bag Female Purse Seven Pocket Bag",
      price: 68,
      stock: 13,
      brand: "Steal Frame",
      category: "womens-bags",
      thumbnail: "https://i.dummyjson.com/data/products/75/thumbnail.jpg",
      id: "65a9d7b4ad47b243bc49b0071",
    },
    {
      discountPercentage: "14.87",
      rating: 4.93,
      ratingsAverage: 4.5,
      ratingsQuantity: 0,
      images: [
        "https://i.dummyjson.com/data/products/75/1.jpg",
        "https://i.dummyjson.com/data/products/75/2.jpg",
        "https://i.dummyjson.com/data/products/75/3.jpg",
        "https://i.dummyjson.com/data/products/75/thumbnail.jpg",
      ],
      _id: "65a9d7b4ad47b243bc49b0072",
      title: "Seven Pocket Women Bag",
      description:
        "Seven Pocket Women Bag Handbags Lady Shoulder Crossbody Bag Female Purse Seven Pocket Bag",
      price: 68,
      stock: 13,
      brand: "Steal Frame",
      category: "womens-bags",
      thumbnail: "https://i.dummyjson.com/data/products/75/thumbnail.jpg",
      id: "65a9d7b4ad47b243bc49b0072",
    },
    {
      discountPercentage: "14.87",
      rating: 4.93,
      ratingsAverage: 4.5,
      ratingsQuantity: 0,
      images: [
        "https://i.dummyjson.com/data/products/75/1.jpg",
        "https://i.dummyjson.com/data/products/75/2.jpg",
        "https://i.dummyjson.com/data/products/75/3.jpg",
        "https://i.dummyjson.com/data/products/75/thumbnail.jpg",
      ],
      _id: "65a9d7b4ad47b243bc49b0073",
      title: "Seven Pocket Women Bag",
      description:
        "Seven Pocket Women Bag Handbags Lady Shoulder Crossbody Bag Female Purse Seven Pocket Bag",
      price: 68,
      stock: 13,
      brand: "Steal Frame",
      category: "womens-bags",
      thumbnail: "https://i.dummyjson.com/data/products/75/thumbnail.jpg",
      id: "65a9d7b4ad47b243bc49b0073",
    },
  ];

  const category = searchParams.get("category") || "";
  const sortBy = searchParams.get("sortBy") || "";
  const currentPage = searchParams.get("page") || "1";

  const titleParam = searchParams.get("title") || "";
  useEffect(() => {
    setTitle(titleParam);
  }, [titleParam, searchParams, setTitle]);
  const totalPage = 9;

  return (
    <div className="container max-w-screen-xl mt-4">
      <div className="mx-3 px-4 py-3 bg-[#ededed] mb-2 ">
        <div className="pb-4 flex items-center justify-between">
          <div className="flex items-center">
            <p className="mr-9">Danh mục</p>

            <select
              className="outline-none bg-white px-3 py-2"
              name=""
              id=""
              value={category}
              onChange={(e) =>
                setSearchParams((params) => {
                  if (e.target.value !== "")
                    params.set("category", e.target.value);
                  else params.delete("category");
                  return params;
                })
              }
            >
              <option value="">Tất cả</option>
              <option value="camera">Máy ảnh</option>
              <option value="laptop">Máy tính</option>
            </select>
          </div>
        </div>
        <div className="flex gap-2 items-center">
          <p className="mr-2">Sắp xếp theo</p>
          <button
            className={` px-3 py-2 ${
              sortBy === "" ? "bg-blue-500 text-white" : "bg-white"
            }`}
            onClick={() =>
              setSearchParams((params) => {
                params.delete("sortBy");
                return params;
              })
            }
          >
            Liên quan
          </button>
          <button
            className={` px-3 py-2 ${
              sortBy === "ctime" ? "bg-blue-500 text-white" : "bg-white"
            }`}
            onClick={() =>
              setSearchParams((params) => {
                params.set("sortBy", "ctime");
                return params;
              })
            }
          >
            Mới nhất
          </button>
          <button
            className={` px-3 py-2 ${
              sortBy === "sales" ? "bg-blue-500 text-white" : "bg-white"
            }`}
            onClick={() =>
              setSearchParams((params) => {
                params.set("sortBy", "sales");
                return params;
              })
            }
          >
            Bán chạy
          </button>
          <button
            className={` px-3 py-2 ${
              sortBy === "priceAsc" ? "bg-blue-500 text-white" : "bg-white"
            }`}
            onClick={() =>
              setSearchParams((params) => {
                params.set("sortBy", "priceAsc");
                return params;
              })
            }
          >
            Giá: Thấp đến Cao
          </button>
          <button
            className={` px-3 py-2 ${
              sortBy === "priceDesc" ? "bg-blue-500 text-white" : "bg-white"
            }`}
            onClick={() =>
              setSearchParams((params) => {
                params.set("sortBy", "priceDesc");
                return params;
              })
            }
          >
            Giá: Cao đến Thấp
          </button>
        </div>
      </div>

      <div className="section">
        <Row>
          <Col className="article">
            <div className="shopcontainer grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4  gap-3 mx-3">
              {loading ? (
                <div className="my-5">
                  <Loading />
                </div>
              ) : error ? (
                <Message variant="danger">{error}</Message>
              ) : (
                <>
                  {products.map((product) => (
                    <div
                      className="shop w-full p-2 rounded-lg border-2 border-solid bg-white"
                      key={product._id}
                    >
                      <div className="border-product">
                        <Link to={`/product/${product._id}`}>
                          <div className="shopBack">
                            <img
                              src={product.thumbnail}
                              alt={product.name}
                              height="100px"
                              className="bg-[#bbf7d0]"
                            />
                          </div>
                        </Link>

                        <div className="shoptext">
                          <div>
                            <Link
                              to={`/product/${product._id}`}
                              className="font-serif"
                            >
                              {product.title}
                            </Link>
                            <Rating
                              value={product.rating}
                              text={`${product.ratingsQuantity} reviews`}
                            ></Rating>
                            <h3 className="text-2xl font-bold">
                              ${product.price}
                            </h3>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </>
              )}
            </div>
          </Col>
        </Row>
      </div>

      <div className=" mt-4">
        <div className="justify-center   flex items-center">
          <button
            disabled={currentPage == 1}
            className={
              currentPage == 1
                ? "rounded-sm bg-gray-200 flex items-center justify-center w-10 h-10"
                : "rounded-sm bg-white flex items-center justify-center w-10 h-10"
            }
            onClick={() => {
              setSearchParams((params) => {
                params.set("page", currentPage - 1);
                return params;
              });
            }}
          >
            &lt;
          </button>
          <div className="mx-3 flex">
            {Array.from(Array(totalPage)).map((item, index) => (
              <button
                key={index}
                onClick={() => {
                  setSearchParams((params) => {
                    params.set("page", index + 1);
                    return params;
                  });
                }}
                disabled={currentPage == index + 1}
                className={
                  index + 1 == currentPage
                    ? "bg-blue-500 rounded-sm mx-[2px] text-white flex items-center justify-center w-10 h-10"
                    : "rounded-sm mx-[2px] bg-white flex items-center justify-center w-10 h-10"
                }
              >
                {index + 1}
              </button>
            ))}
          </div>
          <button
            disabled={currentPage == totalPage}
            className={
              currentPage == totalPage
                ? "rounded-sm bg-gray-200 flex items-center justify-center w-10 h-10"
                : "rounded-sm bg-white flex items-center justify-center w-10 h-10"
            }
            onClick={() => {
              setSearchParams((params) => {
                params.set("page", +currentPage + 1);
                return params;
              });
            }}
          >
            &gt;
          </button>
        </div>
      </div>
    </div>
  );
}
