import React, { useEffect, useState } from "react";
import Toast from "../LoadingError/Toast";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../../Redux/Actions/UserActions";
import Loading from "../LoadingError/Loading";
import Message from "../LoadingError/Message";
import { Link } from "react-router-dom";

export default function Signup({ location, history }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const dispatch = useDispatch();
  const redirect = "/"; //location.search ? location.search.split("=")[1]:"/"

  const userRegister = useSelector((state) => state.userRegister);

  const { error, loading, userInfo } = userRegister;

  useEffect(() => {
    if (userInfo) {
      history.push(redirect);
    }
  }, [userInfo, history, redirect]);
  const submitHandler = () => {
    e.preventDefault();
    dispatch(register(username, email, password));
  };
  return (
    <div className="shadow-2xl max-w-[450px] mx-auto bg-white rounded-sm">
      <Toast />

      <div className="py-4 text-center h-100">
        <div className="text-center rounded-full">
          {error && <Message variant="danger">{error}</Message>}
          {loading && <Loading></Loading>}
          <div className="flex flex-row justify-center">
            <h5 className=" font-bold">Signup</h5>
          </div>

          <form className="row form-container mx-3" onClick={submitHandler}>
            <div className="form mb-4 text-left">
              <label className="text-left font-bold" htmlFor="typeEmailX-2">
                Username
              </label>
              <input
                type="text"
                id="username"
                name="username"
                className="form-control"
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            <div className="form mb-4 text-left">
              <label className="text-left font-bold" htmlFor="typeEmailX-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="form-control"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="form mb-4 text-left">
              <label className="text-start font-bold" htmlFor="typeEmailX-2">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="form-control"
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className="form mb-4 text-left">
              <label className="text-start font-bold" htmlFor="typeEmailX-2">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="form-control"
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <div className="form mb-4 text-left">
              <label className="text-start font-bold" htmlFor="typeEmailX-2">
                Password
              </label>
              <input
                type="password"
                id="confirmpassword"
                name="confirmpassword"
                className="form-control"
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </div>

            <div className=" bg-[#10b981] p-2 rounded-md text-white flex flex-row justify-center font-semibold max-w-[300px] mx-auto">
            <button type="submit">SIGN UP</button>
              
            </div>
          </form>

          <div className="mt-3 mx-auto">
            <button className="flex items-center justify-center border-2 rounded-md border-[#10b981] px-2 py-1 mx-auto">
              <i className="fab text-[#ef4444] fa-google me-2"></i>

              <p className="">Login with google</p>
            </button>
          </div>

          <p className="">
            {" "}
            You already have an account?{" "}
            <Link to={redirect ? `/login?redirect=${redirect}` : "/login"}>
              <u>Login here</u>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
                             

                
}
