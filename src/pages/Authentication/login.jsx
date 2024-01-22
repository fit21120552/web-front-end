import React, { useEffect, useState } from "react";
import Toast from "../LoadingError/Toast";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login } from "./../../Redux/Actions/UserActions";
import Message from "../LoadingError/Message";
import Loading from "../LoadingError/Loading";

const Login = ({ location, history }) => {
  window.scrollTo(0, 0);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const redirect = "/"; //location.search ? location.search.split("=")[1]:"/"

  const userLogin = useSelector((state) => state.userLogin);

  const { error, loading, userInfo } = userLogin;

  useEffect(() => {
    if (userInfo) {
      history.push(redirect);
    }
  }, [userInfo, history, redirect]);
  const submitHandler = () => {
    e.preventDefault();
    dispatch(login(username, password));
  };
  return (
    <div className="shadow-2xl max-w-[450px] mx-auto bg-white rounded-sm">
      <Toast />

      <div className="py-4 text-center h-100">
        <div className="text-center rounded-full">
          {error && <Message variant="danger">{error}</Message>}
          {loading && <Loading></Loading>}
          <div className="flex flex-row justify-center">
            <h5 className=" font-bold">Login</h5>
          </div>

                            <form className="row form-container mx-3" onSubmit={submitHandler}>
                                <div class="form mb-4 text-left">
                                    <label className="text-start font-bold" for="typeEmailX-2">Username</label>
                                    <input type="text"
                                            id="username" 
                                            name="username" 
                                            className="form-control"
                                            value={username}
                                            onChange={(e) => setUsername(e.target.value)}
                                            required />
                                    
                                </div>
                                <div class="form mb-4 text-left">
                                    <label className="text-start font-bold" for="typeEmailX-2">Password</label>
                                    <input type="password"
                                            id="password" 
                                            name="password"
                                            value={password} 
                                            className="form-control"
                                            onChange={(e) => setPassword(e.target.value)}
                                            required />                                 
                                </div>
                                <button type="submit" className="flex flex-row justify-center text-lg p-2 my-2">
                                    <p className="bg-[#10b981] px-2 rounded-full">Login</p>
                                </button>
                            </form>

                            <form className="row form-container mx-3 mt-4">
                                <div className="mb-1">
                                    <button className="flex items-center justify-center border-2 rounded-md border-[#10b981] px-2 py-1 mx-auto bg-[#ef4444] rounded-lg">
                                        <i className="fab fa-google me-2"></i>Sign in with google
                                    </button>
                                </div>
                            </form>

                            <p className="mt-3"> {" "}You don't have an account? {" "}
                                <Link to={redirect ? `/signup?redirect=${redirect}` : "/signup" }>
                                    <u> Sign up here</u>
                                </Link>
                            </p>

                        </div>
                    </div>
                </div>
        
    )
}
          

          
export default Login;
