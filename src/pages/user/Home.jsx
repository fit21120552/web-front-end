import React, { Children, useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { useDispatch,useSelector } from "react-redux"
import { listProduct } from "../../Redux/Actions/ProductActions"
import { api } from "../../constants/api"
import Rating from "./Rating"
import Loading from "../LoadingError/Loading"
import Message from "../LoadingError/Message"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Home() {
  const dispatch = useDispatch()

  //USE TO GET PRODUCT FROM API, DO NOT DELETE

  //const productList = useSelector((state) =>  state.productList)
  //const { loading, error, products } = productList
  // useEffect(() => {
  //   dispatch(listProduct());
  // }, [dispatch])

  const loading=false
  const error=false
  
  const products = [
          {
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
            "_id": "65a9d7b4ad47b243bc49b007",
            "title": "Seven Pocket Women Bag",
            "description": "Seven Pocket Women Bag Handbags Lady Shoulder Crossbody Bag Female Purse Seven Pocket Bag",
            "price": 68,
            "stock": 13,
            "brand": "Steal Frame",
            "category": "womens-bags",
            "thumbnail": "https://i.dummyjson.com/data/products/75/thumbnail.jpg",
            "id": "65a9d7b4ad47b243bc49b007"
          },
          {
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
            "_id": "65a9d7b4ad47b243bc49b0071",
            "title": "Seven Pocket Women Bag",
            "description": "Seven Pocket Women Bag Handbags Lady Shoulder Crossbody Bag Female Purse Seven Pocket Bag",
            "price": 68,
            "stock": 13,
            "brand": "Steal Frame",
            "category": "womens-bags",
            "thumbnail": "https://i.dummyjson.com/data/products/75/thumbnail.jpg",
            "id": "65a9d7b4ad47b243bc49b0071"
        },
        {
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
          "_id": "65a9d7b4ad47b243bc49b0072",
          "title": "Seven Pocket Women Bag",
          "description": "Seven Pocket Women Bag Handbags Lady Shoulder Crossbody Bag Female Purse Seven Pocket Bag",
          "price": 68,
          "stock": 13,
          "brand": "Steal Frame",
          "category": "womens-bags",
          "thumbnail": "https://i.dummyjson.com/data/products/75/thumbnail.jpg",
          "id": "65a9d7b4ad47b243bc49b0072"
      },
        {
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
    ]
   
  return (
    <div className="container">
        <div className="section">
            <Row>
                <Col className="article">
                    <div className="shopcontainer grid grid-cols-3 gap-3 mx-3">
                      {
                        loading ? (<div className="my-5">
                                    <Loading/>
                                    </div>) : 
                         error ? 
                          (<Message variant="danger">
                            {error}
                          </Message>)
                           
                        :
                        (
                          <>
                            {
                              products.map((product) => (
                                <div className="shop w-full p-2 rounded-lg border-2 border-solid"
                                    key= {product._id}
                                  >

                                    <div className="border-product">
                                        <Link to={`/product/${product._id}`}>
                                            <div className="shopBack">
                                              <img src={product.thumbnail} alt={product.name} height="100px" className="bg-[#bbf7d0]"/>
                                            </div>

                                        </Link>

                                        <div className="shoptext">
                                            <p>
                                                <Link to={`/product/${product._id}`} className="font-serif">
                                                  {product.title}
                                                </Link>
                                                <Rating 
                                                  value={product.rating}
                                                  text={`${product.ratingsQuantity} reviews`}>
                                                </Rating>
                                                <h3 className="text-2xl font-bold">${product.price}</h3>
                                            </p>
                                        </div>
                                    </div>
                                  </div>
                              ))
                            }
                            
                            </>
                         
                        )
                      }
                      
                    </div>
                </Col>
            </Row>
        </div>
    </div>
  );
}
//col-lg-4 col-md-6 col-sm-6