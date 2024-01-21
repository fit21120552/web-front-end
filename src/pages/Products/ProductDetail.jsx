import React, { useEffect, useState } from "react"
import Rating from "../user/Rating"
import { Link } from "react-router-dom"
import Message from "../LoadingError/Message"
import axios from "axios"
import { api } from "../../constants/api"
import { useDispatch , useSelector } from "react-redux"
import { listProductDetails } from "../../Redux/Actions/ProductActions"
import { Alert, Col } from "react-bootstrap"
import Loading from "../LoadingError/Loading"
import Button from "react-bootstrap/Button"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';


const  ProductDetail = ({ history, match})=>  {
  
    console.log("match: ", match)
    const [quantity, setQuantity] =useState(1)
   // const productId = match.params.id
    const dispatch = useDispatch()
    const loading=false
    const error = false
    const product = {
            "discountPercentage": "14.87",
            "rating": 4.93,
            "ratingsAverage": 4.5,
            "ratingsQuantity": 0,
            "images": [
                "https://i.dummyjson.com/data/products/75/1.jpg",
                "https://i.dummyjson.com/data/products/75/2.jpg",
                "https://i.dummyjson.com/data/products/75/3.jpg",
                "https://i.dummyjson.com/data/products/75/thumbnail.jpg"
            ],
            "_id": "65a9d7b4ad47b243bc49b0073",
            "title": "Seven Pocket Women Bag",
            "description": "Seven Pocket Women Bag Handbags Lady Shoulder Crossbody Bag Female Purse Seven Pocket Bag",
            "price": 68,
            "stock": 13,
            "brand": "Steal Frame",
            "category": "womens-bags",
            "thumbnail": "https://i.dummyjson.com/data/products/75/thumbnail.jpg",
            "id": "65a9d7b4ad47b243bc49b0073"
    }
    // const productDetails = useSelector((state) => state.productDetails)
    // const { loading, error, product } = productDetails;

    // useEffect(() => {
    //     // const fetchProduct = async () => {
    //     //     const { data } = await axios.get(api.getAndCreateProduct+match.params.id)
    //     //     setProduct(data)
    //     // };

    //     // fetchProduct();

    //     dispatch(listProductDetails(productId))
    // }, [dispatch, productId])

    const addToCartHandler = (e) => {
        e.preventDefault()
        history.push(`/cart/${productId}?${quantity}`);

    }
    return (
        <div>
            <div className="flex flex-column">
                <div className="container">
                     {
                        loading ? (
                            <Loading/>
                        )
                        : error ? (
                            <Message variant="danger"></Message>
                        )
                        :
                        (
                            <>
                        <Row>
                            <Col className="flex justify-center">
                                <div className="single-image">
                                    <img src={product.thumbnail} alt={product.title} height="100px" className="bg-[#bbf7d0]"/>
                                </div>
                            </Col>

                            <Col className="">
                                <div className="product-dt1">
                                    <div className="product-info">
                                        <div className="product-name font-bold font-serif text-2xl">
                                            {product.title}
                                        </div>
                                        <p> {product.description}</p>

                                        <div className="product-count col-lg-7">
                                            <div className="flex justify-between items-center border-2 border-solid border-black">
                                                <h6>Price</h6>
                                                <span>${product.price}</span>
                                            </div>
                                            <div className="flex justify-between items-center">
                                                <h6>Status</h6>
                                                {product.stock >0 ? (
                                                    <span>In Stock</span>
                                                ) : (
                                                    <span>Unavailable</span>
                                                )
                                                }
                                            </div>
                                            <div className="flex justify-betweenitems-center">
                                                <h6>Reviews</h6>
                                                <Rating value={product.rating}
                                                    text={`${product.ratingsQuantity} reviews`}/> 
                                            </div>
                                            {product.stock>0 ? (
                                                <>
                                                    <div className="flex justify-between items-center">
                                                        <h6>Quantity</h6>
                                                        <select value={quantity}
                                                            onChange={(e) => setQuantity(e.target.value)}>
                                                            {[...Array(product.stock).keys()].map(
                                                                (x) => (
                                                                    <option key = {x+1} value = {x+1}>
                                                                        {x+1}
                                                                    </option>
                                                                )
                                                            )}
                                                        </select>
                                                    </div>
                                                    <Button className="rounded-full" variant= "dark" onClick={addToCartHandler}>Add to cart</Button>

                                                </>
                                            ):null}
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        </Row>

                        <Row className=" my-5">
                            <div className="col-md-6">
                                <h6 className="mb-3">
                                    REVIEWS
                                </h6>
                                <Message variant="info" className="mt-3">No Reviews</Message>
                                <div className="mb-5 mb-md-3 bg-[#f1f5f9] p-3 shadow-sm rounded-full">
                                    <strong>User name</strong>
                                    <Rating/>
                                    <span>Date </span>
                                    <Alert key="info" variant="info" className="mt-3">
                                        simply dummy
                                    </Alert>
                                </div>
                            </div>

                            <div className="col-md-6">
                                <h6>WRITE A CUSTOMER REVIEW</h6>
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
                                            row="3"
                                            className="col-12 bg-[#fafafa] p-3 mt-2 rounded-full">

                                            </textarea>
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
                            </div>
                        </Row>
                            </>
                        )
                     }
                   

                </div>
            </div>
        </div>
    )
}

export default ProductDetail;