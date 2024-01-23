import { Link } from "react-router-dom";
import Message from "../LoadingError/Message";

const PlaceOrder = () => {
    const cartItems=[]

    const PlaceOrderHandler = (e) => {
        e.preventDefault()
    }
    return (
        <div className="container">
            <div className="row m-4">
                <div className="col-lg-4 col-sm-4 mb-lg-4 mb-sm-0 alert-primary bg-blue-500 px-3 py-5">
                    <div className="row">
                        <div className="col-md-4 center">
                            <div  className="rounded-full bg-[#bae6fd] px-1 py-5 text-center text-2xl">
                                <i className="fas fa-user"></i>
                            </div>
                        </div>
                        <div className="col-md-8 center">
                            <h5>
                                <strong>Customer</strong>
                            </h5>
                            <p>User name</p>
                            <p>User email</p>

                        </div>
                    </div>
                </div>

                <div className="col-lg-4 col-sm-4 mb-lg-4 mb-5 mb-sm-0 alert-primary  bg-blue-500  px-3  py-5">
                    <div className="row">
                        <div className="col-md-4 center">
                            <div  className="rounded-full bg-[#bae6fd] px-1 py-5 text-center text-2xl">
                                <i className="fas fa-truck-moving"></i>
                            </div>
                            
                        </div>
                        <div className="col-md-8 center">
                            <h5>
                                <strong>Order Info</strong>
                            </h5>
                            <p>Shipping: Country</p>
                            <p>Pay method: VNPay</p>

                        </div>
                    </div>
                </div>

                <div className="col-lg-4 col-sm-4 mb-lg-4 mb-5 mb-sm-0 alert-primary  bg-blue-500  px-3  py-5">
                    <div className="row">
                        <div className="col-md-4 center">
                            <div  className="rounded-full bg-[#bae6fd] px-1 py-5 text-center text-2xl">
                                <i className="fas fa-map-marker-alt"></i>
                            </div>
                            
                        </div>
                        <div className="col-md-8 center">
                            <h5>
                                <strong>Deliver to</strong>
                            </h5>
                            <p>
                                Address: Address + City, postal code
                            </p>
                        </div>

                    </div>
                </div>
            </div>

            <div className="row flex justify-between m-3">
                <div className="col-lg-8">
                {
                    cartItems.length===0 ? (
                        <Message variant={"info mt-5"}>
                            Your cart is empty
                        </Message>
                    ) : (
                        <>
                            {
                                cartItems.map((item, index) => (
                                    <>
                                    <div className="row" key={index}>
                                        <div className="col-md-3 col-6">
                                            <img src={item.thumbnail} alt={item.title}/>
                                        </div>

                                        <div className="col-md-5 col-6 flex flex-row items-center">
                                            <Link to={"/"}>
                                                <h6 className="font-semibold font-mono">{item.title}</h6>
                                            </Link>
                                        </div>
                                        <div className="mt-3 mt-md-0 col-md-2 col-6 flex flex-column items-center justify-center">
                                            <h4>QUANTITY</h4>
                                            <h6>{item.quantity}</h6>
                                        </div>
                                        <div className="mt-3 mt-md-0 col-md-2 col-6 flex flex-column justify-center items-end">
                                            <h4>SUBTOTAL</h4>
                                            <h6 ><strong className="font-mono">${" "}{item.quantity* item.price}</strong></h6>
                                        </div>
                                    </div>
                                    </>
                                ))
                            }
                        </>
                    )
                }
                    
                </div>

                <div className="col-lg-3 flex flex-column items-end mt-5">
                    <table className="table table-bordered bg-[#f1f5f9] ">
                        <tbody>
                            <tr>
                                <td>
                                    <strong>Products</strong>
                                </td>
                                <td>$123</td>
                            </tr>
                            <tr>
                                <td>
                                    <strong>Shipping</strong>
                                </td>
                                <td>$123</td>
                            </tr>
                            <tr>
                                <td>
                                    <strong>Tax</strong>
                                </td>
                                <td>$123</td>
                            </tr>
                            <tr>
                                <td>
                                    <strong>Total</strong>
                                </td>
                                <td>$123</td>
                            </tr>
                        </tbody>
                    </table>
                    
                    {
                        cartItems.length === 0 ? null : (
                            <Link to="/order" className="text-white bg-primary w-full text-center p-3 rounded-sm" onClick={PlaceOrderHandler}>
                                <button type="submit" className="text-center">
                                    PLACE ORDER
                                </button>
                            </Link>
                        )
                    }
                    
                    
                </div>
            </div>
        </div>
    )
}

export default PlaceOrder;