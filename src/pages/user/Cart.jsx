import React, { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { addTocart, removeFromCart } from "../../Redux/Actions/CartActions";
import { useDispatch, useSelector } from "react-redux";
import { Alert, Button, Col, Row } from "react-bootstrap";
import Message from "../LoadingError/Message";


const Cart = ({ match, location, history }) => {
   // window.scrollTo(0,0);

    // const productId = match.params.id
    // const quantity = location.search ? Number(location.search.split("=")[1]) : 1

    const setQuantity = ({product, quantity}) => {
       // console.log("value: ",quantity)
        if (quantity <= product.stock &&  quantity>=1)
        {
            const updatedCartItems =  cartItems.map((item)=> {
                if (product._id === item._id)
                {
                    
                    item.quantity = quantity
                    //console.log("oke", cartItems)
                }
                return item
            })
            setCartItems(updatedCartItems)
        }
        
    }
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const cart =  useSelector((state) => state.cart)
    //let { cartItems } = cart

    let [cartItems, setCartItems] = useState(
        [
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
          quantity:1,
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
          quantity:2,
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
          quantity:3,
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
          quantity:4,
        },
      ])
    useEffect(() => {
        cartItems.map((item) => {
           //console.log(item)
        })
    })
    const total = cartItems.reduce((a,i) => a + i.quantity * i.price, 0).toFixed(2)
    // useEffect(() => {
    //     if (productId) {
    //         dispatch(addTocart(productId, quantity))
    //     }
    // }, [dispatch, productId, quantity])

    const increaseProductQuantity = (product) => {
       // e.preventDefault()
       // console.log(product)
        if (product.quantity+1 <= product.stock)
        {
            const updatedCartItems =  cartItems.map((item)=> {
                if (product._id === item._id)
                {
                    
                    item.quantity = (product.quantity+1)
                    //console.log("oke", cartItems)
                }
                return item
            })
            setCartItems(updatedCartItems)
            
        }
    }
    const decreaseProductQuantity = (product) => {
       // e.preventDefault()
       //console.log(product)
        if (product.quantity-1 >=1 )
        {
            const updatedCartItems =  cartItems.map((item)=> {
                if (product._id === item._id)
                {
                    
                    item.quantity = (product.quantity-1)
                    //console.log("oke", cartItems)
                }
                return item
            })
            setCartItems(updatedCartItems)
        }
        
    }

    const checkOutHandler = (e) => {
        e.preventDefault()
        navigate('/ship');
        //history.push('/login?redirect=shipping')
    }

    const removeFromCardHandler = (id) => {
       dispatch(removeFromCart(id))
    }
    return (
        <div>
            <div className="container">
                {
                    cartItems.length ===0 ? (
                        <>
                            <Alert className="text-center mt-3 mx-3"  variant="info">
                                Your cart is empty now
                                <Link
                                    className="btn-success mx-5 px-5 p-3 rounded-full"
                                    to="/"
                                    style={{
                                        fontSize:"12px"
                                    }}>
                                    SHOPPING NOW
                                </Link>
                            </Alert>
                            <div className="h-full">  </div>

                        </>
                    )
                    : (
                        <>
                            <div className="row flex flex-row justify-center m-2 text-center font-semibold">
                                <Message className="cart-item ">
                                    Total Cart Products
                                    <Link className="text-success mx-2" to="/cart">
                                        ({cartItems.length})
                                    </Link> 
                                </Message>
                            </div>
                           
                            <>
                            {
                                
                                cartItems.map((item)=>(
                                    
                                    
                                    <div key={item._id}>
                                        <div className="cart-item row  p-2 rounded-lg border-2 border-solid bg-white mx-2">
                                            <div 
                                                onClick = {() => removeFromCardHandler(item.product) }
                                                className="remove-button flex flex-row justify-start items-center ">
                                                <i className="fas fa-times bg-[#ef4444] px-2 py-2 rounded-full">
                                                </i>
                                            </div>
                                            <div className="cart-image col-md-3 h-max-[50px]">
                                                <img src={item.thumbnail} alt={item.title} className="h-max-[50px]"/>
                                            </div>
                                            <div className="cart-text col-md-5 flex flex-row items-center  font-mono font-bold">
                                                <Link to={`/product/${item.product}`}>
                                                    <h4>{item.title}</h4>
                                                </Link>
                                            </div>
                                            <div className="cart-quantity col-md-2 col-sm-5 mt-3 mt-md-0 flex flex-column justify-center">
                                                <h6 className=" text-slate-500 font-semibold">QUANTITY</h6>
                                                <div className="flex justify-start">
                                                    <button className="bg-[#16a34a] text-white rounded-lg px-1 py-0 font-bold text-xl me-3" onClick={()=> increaseProductQuantity(item)}>+</button>
                                                    <input type="number" 
                                                            name="quantity" 
                                                            className="w-[40px]"
                                                            min="1" max={`${item.stock}`} 
                                                            value={item.quantity} 
                                                            onChange={(e) => setQuantity({product: item ,quantity: e.target.value})}>
                                                    </input>
                                                    
                                                    <button className="bg-[#b91c1c] text-white rounded-lg px-1 py-0 font-bold text-xl" onClick={() => decreaseProductQuantity(item)}>-</button>
                                                </div>
                                            </div>

                                            <div className="cart-price mt-3 mt-md-0 col-md-2 items-end flex flex-column justify-center ">
                                                <h6 className="font-semibold  text-slate-500">SUBTOTAL</h6>
                                                <h4 className="font-bold text-xl">${item.price * item.quantity}</h4>
                                            </div>
                                        </div>
                                    </div>
                                   
                                ))
                               
                            }</>
                          

                            <div className="flex flex-row justify-end">
                                <span className="sub font-semibold text-gray text-slate-500 text-2xl ">TOTAL: </span>
                                <span className="total-price text-2xl font-bold font-mono">${total}</span>    
                            </div>

                            <hr className="my-6"/>

                            <Row className="cart-buttons flex align-center text-white">
                                <Col md={6} className="flex flex-row justify-center mx-auto ">
                                    <Link to="/" className="mx-auto max-w-[400px] w-[400px]">
                                        <button className="bg-primary p-3 rounded-lg mx-auto max-w-[400px] w-[400px]">Continue To Shopping</button>
                                    </Link>
                                </Col>

                                {
                                    total > 0 && (
                                        <Col md={6} className="flex flex-row justify-center mt-3 mx-auto mt-md-0 ">
                                            <button className="bg-success p-3 rounded-lg mx-auto max-w-[400px] w-[400px]" onClick={checkOutHandler}>
                                                Checkout
                                            </button>
                                        </Col>
                                    )
                                }
                                
                            </Row>
                        </>
                    )
                    

                }
                
            </div>
        </div>
    )
}
export default Cart;