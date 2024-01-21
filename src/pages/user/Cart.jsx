import React, { useEffect } from "react"
import { Link } from "react-router-dom"
import { addTocart, removeFromCart } from "../../Redux/Actions/CartActions";
import { useDispatch, useSelector } from "react-redux";
import { Alert, Button } from "react-bootstrap";


const Cart = ({ match, location, history }) => {
    window.scrollTo(0,0);

    // const productId = match.params.id
    // const quantity = location.search ? Number(location.search.split("=")[1]) : 1

    const dispatch = useDispatch();

    const cart =  useSelector((state) => state.cart)
    const { cartItems } = cart

    const total = cartItems.reduce((a,i) => a + i.quantity * i.price, 0).toFixed(2)
    // useEffect(() => {
    //     if (productId) {
    //         dispatch(addTocart(productId, quantity))
    //     }
    // }, [dispatch, productId, quantity])

    const checkOutHandler = (e) => {
        e.preventDefault()
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
                            <div className="cart-item row">
                                Total Cart Products
                                <Link className="text-success mx-2" to="/cart">
                                    ({cartItems.length})
                                </Link> 
                            </div>
                            {
                                cartItems.map((item)=>{
                                    <div className="cart-item row">
                                        <div 
                                            onClick = {() => removeFromCardHandler(item.product) }
                                            className="remove-button flex justify-center items-center">
                                            <i className="fas fa-times">
                                            </i>
                                        </div>
                                        <div className="cart-image col-md-3">
                                            <img src={item.thumbnail} alt={item.title}/>
                                        </div>
                                        <div className="cart-text col-md-5 flex align-center">
                                            <Link to={`/product/${item.product}`}>
                                                <h4>{item.title}</h4>
                                            </Link>
                                        </div>
                                        <div className="cart-quantity col-md-2 col-sm-5 mt-md-5 mt-3 mt-md-0 flex flex-column">
                                            <h6>QUANTITY</h6>
                                            <select value={item.quantity}
                                                onChange={(e) => dispatch(addTocart(item.product,Number(e.target.value)))}>
                                                {[...Array(item.stock).keys()].map(
                                                    (x) => (
                                                        <option key = {x+1} value = {x+1}>
                                                            {x+1}
                                                        </option>
                                                    )
                                                )}
                                            </select>
                                        </div>

                                        <div className="cart-price mt-3 mt-md-0 col-md-2 align-end">
                                            <h6>SUBTOTAL</h6>
                                            <h4>${item.price}</h4>
                                        </div>
                                    </div>
                                })
                            }
                          

                            <div className="total">
                                <span className="sub">total: </span>
                                <span className="total-price">${total}</span>    
                            </div>

                            <hr/>

                            <div className="cart-buttons flex align-center row">
                                <Link to="/" className="col-md-6">
                                    <Button>Continue To Shopping</Button>
                                </Link>

                                {
                                    total > 0 && (
                                        <div className="col-md-6 flex justify-end mt-3 mt-md-0">
                                            <Button onClick={checkOutHandler}>
                                                Checkout
                                            </Button>
                                        </div>
                                    )
                                }
                                
                            </div>
                        </>
                    )
                    

                }
                
            </div>
        </div>
    )
}
export default Cart;