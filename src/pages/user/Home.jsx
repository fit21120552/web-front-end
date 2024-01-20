import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { useDispatch,useSelector } from "react-redux"
import { listProduct } from "../../Redux/Actions/ProductActions"
import { api } from "../../constants/api"
import Rating from "./Rating"
import Loading from "./Loading"
export default function Home() {
  const dispatch = useDispatch()

  const productList = useSelector((state) =>  state.productList)
  const { loading, error, products } = productList
  useEffect(() => {
    dispatch(listProduct());
  }, [dispatch])
  return (
    <div className="container">
        <div className="section">
            <div className="row">
                <div className="col-lg-12 col-md-12 article">
                    <div className="shopcontainer row">
                      {
                        loading ? (<Loading/>) : error ? (<p>Error: {error}</p>)
                        :
                        (
                          <div>
                            {
                              products.map((product) => (
                                <div className="shop col-lg-4 col-md-6 col-sm-6"
                                    key= {product._id}
                                  >

                                    <div className="border-product">
                                        <Link to={api.getAndCreateProduct+product._id}>
                                            <div className="shopBack">
                                              <img src={product.thumbnail} alt={product.name}/>
                                            </div>

                                        </Link>

                                        <div className="shoptext">
                                            <p>
                                                <Link to={api.getAndCreateProduct+product._id}>
                                                  {product.title}
                                                </Link>
                                                <Rating 
                                                  value={product.rating}
                                                  text={`${product.ratingsQuantity} reviews`}>
                                                </Rating>
                                                <h3>${product.price}</h3>
                                            </p>
                                        </div>
                                    </div>
                                  </div>
                              ))
                            }
                            
                          </div>
                        )
                      }
                      
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}
