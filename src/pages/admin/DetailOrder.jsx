import { faCalendar, faPrint } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useParams } from "react-router-dom";
import Loading from "../LoadingError/Loading";
import { useState } from "react";
import Message from "../LoadingError/Message";
import { useDispatch, useSelector } from "react-redux";


const DetailOrder = () => {
    const [deliverySwitch, setDeliverySwitch] = useState(false)
    const dispatch = useDispatch()
    const params = useParams()
    const { id } = params
    const orderDetails = useSelector((state) => state.orderDetails)
    //const { loading, error, order }= orderDetails
    let loading = false
    let error = null
    const order = {
        _id: "1234",
        date:"12/03/2024",
        items:[
            {
                price: 100,
                quantity:3,
                title: "hiter",
                
            },
            {
                price: 100,
                quantity:3,
                title: "hiter",
                
            }
        ],

    }
    const item = {
        price: 100,
        quantity:3,
        title: "hiter",
        
    }
    const calculateSubtotal = (order) => {
        if (order && order.items && order.items.length>0)
        {
            let total=0
            order.items.map((item) => { 
                total+=item.quantity*item.price
            })
            return total
        }
        return 0
    }
    const calculateGrandTotal = (order) => {
        return calculateSubtotal(order) +20
    }
    const setDeliveryStatus = () => {
        setDeliverySwitch(!deliverySwitch)
    } 
    return (
        <div className="main">
            <div className="header">
                <Link to="/admin/orders" className="p-2 bg-dark text-white rounded-lg">
                    Back To Orders
                </Link>
            </div>

            { 

                loading ? (<Loading/>) : error ? (
                    <Message variant="danger w-full" >{error}</Message>
                ) : (
                    <div className="card m-2">
                        <header className="card-header p-3 header-green bg-[#818cf8]">
                            <div className="row flex flex-row items-center">
                                <div className="col-lg-6 col-md-6">
                                    <span className="">
                                        <FontAwesomeIcon icon={faCalendar} className="mx-2"/>
                                        <b className="text-white">{order.date}</b>
                                    </span>
                                    <br/>
                                    <small className="text-white mx-3">
                                        Order ID: {order._id}
                                    </small>
                                </div>

                                <div className="col-lg-6 col-md-6 ms-auto flex flex-row justify-end">
                                    <select className="form-select inline-block"
                                            style={{ maxWidth:"200px" }}>
                                            <option value={""}>Change status</option>
                                            <option value={""}>Awaiting Payment</option>
                                            <option value={""}>Confirmed</option>
                                            <option value={""}>Shipped</option>
                                    </select>

                                    <Link className="rounded-lg p-2 bg-success ms-2" to="#">
                                        <FontAwesomeIcon icon={faPrint}/>
                                    </Link>
                                </div>
                            </div>
                        </header>
                        
                        <div className="card-body">
                            <div className="row m-4 ">
                                <div className="col-lg-4 col-sm-4 mb-lg-4 mb-sm-0 alert-primary  px-3 py-5">
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
                                            <p><u className="italic">User email</u></p>

                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-4 col-sm-4 mb-lg-4 mb-5 mb-sm-0 alert-primary   px-3  py-5">
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

                                <div className="col-lg-4 col-sm-4 mb-lg-4 mb-5 mb-sm-0 alert-primary px-3  py-5">
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

                            <div className="row">
                                <div className="col-lg-9">
                                    <div className="table-responsive">
                                        <table className="w-full table ">
                                            <tr>
                                                <th className="font-normal text-left text-[#96A5B8]">Product</th>
                                                <th className="font-normal text-[#96A5B8]">Unit Price</th>
                                                <th className="font-normal text-[#96A5B8]">Quantity</th>
                                                <th className="font-normal text-[#96A5B8]">Subtotal</th>
                                           </tr>
                                           {
                                            
                                                order.items.length > 0 ? (
                                                    order.items.map((item ) => (
                                                        <tr>
                                                            <td className="flex flex-row justify-begin">
                                                                <img src="logo.png" alt={item.title} className="max-h-[50px] max-w-[50px]"/>
                                                                <div>{item.title}</div>
                                                            </td>
                                                            <td className="">{item.price}</td>
                                                            <td className="">{item.quantity}</td>
                                                            <td className="">{item.price * item.quantity}</td>
                                                        </tr>
                                                    )
                                                    
                                               
                                                    )
                                                ) : (
                                                    <tr>
                                                        <td colSpan={12}>
                                                            <Message variant={"primary flex justify-center"}>Empty order</Message>
                                                        </td>
                                                    </tr>
                                                    
                                                )
                                           }
                                           <tr >
                                                            <td colSpan={12} className="flex flex-row justify-end">
                                                                <table className="table table-bordered bg-[#f1f5f9] ">
                                                                    <tbody>
                                                                        <tr>
                                                                            <td>
                                                                                <strong>Subtotal</strong>
                                                                            </td>
                                                                            <td>${calculateSubtotal(order)}</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>
                                                                                <strong>Shipping cost</strong>
                                                                            </td>
                                                                            <td>$20</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>
                                                                                <strong>Grand total</strong>
                                                                            </td>
                                                                            <td>${calculateGrandTotal(order)}</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>
                                                                                <strong>Status</strong>
                                                                            </td>
                                                                            <td>
                                                                                <span className="alert-success text-success p-2 rounded-lg">
                                                                                    Payment done
                                                                                </span>
                                                                                <span className="alert-danger text-danger p-2 rounded-lg">
                                                                                    Not Paid
                                                                                </span>
                                                                            </td>
                                                                        </tr>
                                                                    </tbody>
                                                                </table>
                                                            </td>
                                                    </tr>
                                          
                                          
                                        </table>
                                    </div>
                                </div>

                                <div className="col-lg-3">
                                    <div className="box shadow-sm bg-light">
                                        <div className="border w-4/5 p-3 rounded-lg" >
                                            <button className=" col-12 text-white" onClick={(e) => setDeliveryStatus()}>
                                                { 
                                                    deliverySwitch ? (
                                                        <span className="bg-success rounded-lg  p-2">DELIVERED</span>
                                                    ) : (
                                                        <span className="bg-dark rounded-lg p-2">MARK AS DELIVERED</span>
                                                    )
                                                }
                                                
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
          
        </div>
    )
}

export default DetailOrder;