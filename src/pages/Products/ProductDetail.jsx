/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
import Rating from "../user/Rating";
import { Link, useNavigate, useParams } from "react-router-dom";
import Message from "../LoadingError/Message";
import axios from "axios";
import { api } from "../../constants/api";
import { useDispatch, useSelector } from "react-redux";
import { listProductDetails } from "../../Redux/Actions/ProductActions";
import { Alert } from "react-bootstrap";
import Loading from "../LoadingError/Loading";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
const ProductDetail = ({ history, match }) => {
  const [quantity, setQuantity] = useState(1);
  const params = useParams();

  const navigate = useNavigate();

  const [product, setProduct] = useState();
  const [relatedProducts, setRelatedProducts] = useState([]);

  useEffect(() => {
    const fetchProduct = async () => {
      const res1 = await axios.get(api.getAndCreateProduct + params.id);
      if (res1.data.status === "success") setProduct(res1.data.data.data);

      const res2 = await axios.get(api.getRelatedProduct + params.id);
      if (res2.data.status === "success")
        setRelatedProducts(res2.data.data.data);
    };

    fetchProduct();
  }, [params.id]);

  const loading = false;
  const error = false;

  const addToCartHandler = (e) => {
    e.preventDefault();
    //history.push(`/cart/${product._id}?${quantity}`);
    navigate(`/cart/${product?._id}?quantity=${quantity}`);
  };

  const increaseProduct = (e) => {
    e.preventDefault();
    if (quantity + 1 <= product.stock) {
      setQuantity(quantity + 1);
    }
  };
  const decreaseProduct = (e) => {
    e.preventDefault();
    if (quantity - 1 >= 1) {
      setQuantity(quantity - 1);
    }
  };
  return (
    <div className="container mt-6 max-w-screen-xl">
      {loading ? (
        <Loading />
      ) : error ? (
        <Message variant="danger"></Message>
      ) : (
        <>
          <Row className="">
            <Col lg={6} md={12} className="">
              <div className="single-image flex justify-center ">
                <img
                  src={product?.thumbnail}
                  alt={product?.title}
                  className="bg-[#bbf7d0] border p-2 rounded-sm"
                />
              </div>
            </Col>

            <Col lg={6} md={12} className="">
              <div className="product-dt1">
                <div className="product-info">
                  <div className="product-name text-2xl font-bold font-serif mb-2">
                    {product?.title}
                  </div>
                  <p className="text-left my-4"> {product?.description}</p>

                  <div className="product-count col-lg-7 rounded-full">
                    <div className="flex justify-between items-center border p-3">
                      <h6>Price</h6>
                      <span>${product?.price}</span>
                    </div>
                    <div className="flex justify-between items-center border p-3">
                      <h6>Status</h6>
                      {product?.stock > 0 ? (
                        <span>In Stock</span>
                      ) : (
                        <span>Unavailable</span>
                      )}
                    </div>
                    <div className="flex justify-between items-center border p-3">
                      <h6 className="">Reviews</h6>
                      <Rating
                        value={product?.rating}
                        text={`${product?.ratingsQuantity} reviews`}
                      />
                    </div>
                    {product?.stock > 0 ? (
                      <>
                        <div className="flex justify-between items-center  border p-3">
                          <h6>Quantity</h6>
                          <div className="flex gap-2 items-center">
                            <button
                              className="text-[#16a34a] font-bold text-xl"
                              onClick={increaseProduct}
                            >
                              +
                            </button>
                            <input
                              type="text"
                              name="quantity"
                              className="text-center w-[40px] rounded-xl outline-none"
                              min="1"
                              max={`${product?.stock}`}
                              value={quantity}
                              readOnly
                            ></input>

                            <button
                              className="text-[#b91c1c] font-bold text-xl"
                              onClick={decreaseProduct}
                            >
                              -
                            </button>
                          </div>
                          <button
                            className=" border px-3 py-2 bg-dark text-white rounded-full"
                            onClick={addToCartHandler}
                          >
                            Add to cart
                          </button>
                        </div>
                      </>
                    ) : null}
                  </div>
                </div>
              </div>
            </Col>
          </Row>
          <div className=" font-semibold text-2xl mt-6">Related products</div>
          <Row className=" mt-4">
            {relatedProducts.map((product) => (
              <div
                className="shop w-full p-2 rounded-lg border-2 border-solid"
                key={product?._id}
              >
                <div className="border-product">
                  <Link to={`/product/${product?._id}`}>
                    <div className="shopBack">
                      <img
                        src={product?.thumbnail}
                        alt={product?.name}
                        height="100px"
                        className="bg-[#bbf7d0]"
                      />
                    </div>
                  </Link>

                  <div className="shoptext">
                    <div>
                      <Link
                        to={`/product/${product?._id}`}
                        className="font-serif"
                      >
                        {product?.title}
                      </Link>
                      <Rating
                        value={product?.rating}
                        text={`${product?.ratingsQuantity} reviews`}
                      ></Rating>
                      <h3 className="text-2xl font-bold">${product?.price}</h3>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Row>

          <Row className=" my-5">
            <Col className="">
              <h6 className="mb-3 font-bold ">REVIEWS</h6>
              <Message variant="info" className="mt-3">
                No Reviews
              </Message>
              <div className="mb-5 mb-md-3 bg-[#f1f5f9] p-3 shadow-sm rounded-lg">
                <strong>User name</strong>
                <Rating value={3.5} />
                <span>Date review</span>
                <Alert key="info" variant="info" className="mt-3">
                  simply dummy
                </Alert>
              </div>
            </Col>

            <Col className="">
              <h6 className="font-bold ">WRITE A CUSTOMER REVIEW</h6>
              <div className="my-4"></div>

              <form>
                <div className="my-4">
                  <strong>Rating</strong>
                  <select className="col-12 bg-[#fafafa] p-3 mt-2 rounded-full">
                    <option value="">Select ...</option>
                    <option value="1">1 - Poor</option>
                    <option value="2">2 - Fair</option>
                    <option value="3">3 - Good</option>
                    <option value="4">4 - Very Good</option>
                    <option value="5">5 - Excellent</option>
                  </select>
                </div>
                <div className="my-4">
                  <strong>Comment</strong>
                  <textarea
                    rows="3"
                    className="col-12 bg-[#fafafa] p-3 mt-2 rounded-lg"
                  ></textarea>
                </div>
                <div className="my-3">
                  <button className="col-2 bg-[#09090b] p-3 rounded-full text-white">
                    SUBMIT
                  </button>
                </div>
              </form>

              <div className="my-3">
                <Message variant="warning">
                  Please{" "}
                  <Link to="/login">
                    " <strong>Login</strong> "
                  </Link>
                  to write a review{" "}
                </Message>
              </div>
            </Col>
          </Row>
        </>
      )}
    </div>
  );
};

export default ProductDetail;

/*<select value={quantity}
    onChange={(e) => setQuantity(e.target.value)}>
    {[...Array(product.stock).keys()].map(
        (x) => (
            <option key = {x+1} value = {x+1}>
                {x+1}
            </option>
        )
    )}
</select>*/
