import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Message from "../LoadingError/Message";
import { listOrderUser } from "../../Redux/Actions/OrderActions";
import { useEffect } from "react";
import { logout } from "./../../Redux/Actions/UserActions";
import Loading from "../LoadingError/Loading"
import DateView from "../Components/DateView"
const OrderList = () => {
    const dispatch = useDispatch();
    const userLogin = useSelector((state) => state.userLogin);
    const orderList = useSelector((state) => state.orderList);
    const { loading, error, orders  } = orderList

    useEffect(() => {
      dispatch(listOrderUser())
    },[dispatch])

    const handleLogout = () => {
      dispatch(logout());
    };
  
    const { userInfo } = userLogin;

    // const orders = [
    //     {
    //         _id:"23498rhq92345u8q2359",
    //         total:"210",
    //         paidStatus:false,
    //         date:"12/09/2025",
    //     },
    //     {
    //         _id:"23498rhq92345u8q2359",
    //         total:"210",
    //         paidStatus:true,
    //         date:"12/09/2025",
    //     }
    // ]
    //const orders=null
    return (
        <div className="container mx-auto max-w-screen-xl mt-4">
        <div className="card mx-3">
          <div className="card-body">
            <div className="flex flex-row gap-4">
              <div className="basis-1/7 min-w-[100px] flex flex-col gap-1 font-semibold text-center ">
                <Link to="/edit-profile">
                  <div className="bg-[#7dd3fc] py-2 rounded-sm ">
                    Settings
                  </div>
                </Link>
                <Link to="/change-avatar">
                <div className="bg-[#7dd3fc] py-2 rounded-sm ">
                  Change avatar
                </div>
              </Link>
                <Link to="/order-list">
                  <div className="bg-[#7dd3fc] py-2 rounded-sm ">
                    Order List
                  </div>
                </Link>
                <button
                  className="bg-red-400 rounded-sm py-2 text-white font-semibold"
                  onClick={handleLogout}
                >
                  Logout
                </button>
              </div>
              {
                  loading ? (<div className="basis-6/7 text-center w-full"><Loading/></div>) : error 
                  ? (<div className="basis-6/7 text-center w-full">
                      <Message variant={'danger my-3'}>{error}</Message>
                      <Link to={'/product'} className="bg-primary mt-3 rounded-lg p-3">
                          Shopping now
                      </Link>
                    </div>) : (
                    <div className="basis-6/7 flex gap-4 w-full">
                          {
                              orders && orders.length >=1  ? (
                                  <table className="w-full basis-1/1 table table-bordered">
                                      <tr>
                                          <th>ID</th>
                                          <th>Payment</th>
                                          <th>Status</th>
                                          <th>Date</th>
                                          <th>Total</th>
                                      </tr>
                                      {
                                          orders.map((order) => (
                                              <tr className="text-dark">
                                                  <td>
                                                      <Link to={`/order/${order._id}`}>
                                                          <u className="text-info italic">{order._id}</u>
                                                      </Link>
                                                  </td>
                                                  <td className="p-3">
                                                      {
                                                          !order.StatusPaid ? (
                                                              <span className="bg-danger text-white min-w-[10px]">Not Paid</span>
                                                          ) : (
                                                              <span className="bg-success text-white min-w-[10px]">Paid</span>
                                                          )
                                                      }
                                                      
                                                  </td>
                                                  <td className="p-3">
                                                      {
                                                          !order.StatusDelivered ? (
                                                              <span className="bg-danger text-white min-w-[10px]">Not Delivered</span>
                                                          ) : (
                                                              <span className="bg-success text-white min-w-[10px]">Delivered</span>
                                                          )
                                                      }
                                                      
                                                  </td>
                                                  <td><DateView date={order.createdAt}></DateView></td>
                                                  <td>${order.price + order.tax + order.ShipCost}</td>
                                              </tr>
                                          ))
                                      }
                                  </table>
                              ) : (
                                
                                  <Message variant={'info w-full flex justify-center'}>Your order list is empty!{" "}
                                      <Link to={'/product'} className="ms-1 "><u className=" italic">{" "} Shopping now</u></Link>
                                  </Message>
                                
                              )
                          }
                      </div>
                  )
              }
           
            </div>
          </div>
        </div>
      </div>
    )

}

export default OrderList;