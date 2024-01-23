import React, { Children, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { listProduct } from "../../Redux/Actions/ProductActions";
import { api } from "../../constants/api";
import Rating from "./Rating";
import Loading from "../LoadingError/Loading";
import Message from "../LoadingError/Message";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function Home() {
  const dispatch = useDispatch();

  //USE TO GET PRODUCT FROM API, DO NOT DELETE

  //const productList = useSelector((state) =>  state.productList)
  //const { loading, error, products } = productList
  // useEffect(() => {
  //   dispatch(listProduct());
  // }, [dispatch])

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

  const [categories, setCategories] = useState([]);
  useEffect(() => {
    const categories = [
      {
        id: 1,
        name: "May anh",
        image: "./images/dummy.png",
        subCategories: [
          { id: 1, name: "Macbook" },
          { id: 1, name: "Dell" },
        ],
      },
      {
        id: 2,
        name: "May tinh",
        image: "./images/dummy.png",
      },
    ];
  }, []);

  return (
    <div className="container max-w-screen-xl mt-4">
      <div className="mx-3 px-4 py-3 bg-white mb-[2px]">DANH MỤC</div>
      <div className=" mx-3 flex mb-4 gap-[2px]">
        {categories.map((item) => (
          <div
            key={item.id}
            className="bg-white w-28 flex items-center justify-center flex-col py-4"
          >
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#f5f5f5]">
              <img src={item.image} alt="" />
            </div>
            <p>{item.name}</p>
          </div>
        ))}
        <Link
          to={"/product"}
          className="bg-gray-300  w-28 flex items-center justify-center flex-col py-4"
        >
          <p className="text-center">
            Tất cả <br></br> sản phẩm
          </p>
        </Link>
      </div>
      <div className="mx-3 px-4 py-3 bg-white mb-2 text-center text-blue-500 font-semibold border-b-[4px] border-blue-500">
        GỢI Ý HÔM NAY
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
    </div>
  );
}
//col-lg-4 col-md-6 col-sm-6
