import React, { useEffect, useState } from "react"
import Toast from "../LoadingError/Toast"
import { toast } from "react-toastify"
import { useDispatch, useSelector } from "react-redux"
import { register } from "../../Redux/Actions/UserActions"
import  Loading  from "../LoadingError/Loading"
import  Message  from "../LoadingError/Message"

export default function Login({location, history}) {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")

    const dispatch = useDispatch()
    const redirect = "/";//location.search ? location.search.split("=")[1]:"/"
    
    const userRegister = useSelector((state) => state.userRegister)

    const { error, loading, userInfo } = userRegister;

    useEffect(() => {
        if (userInfo) {
            history.push(redirect)
        }
    }, [userInfo, history, redirect])
    const submitHandler = () => {
        e.preventDefault()
        dispatch(register(username,email, password))
    }
    return (
        <div>
         <Toast/>

            <div className="container py-2 h-100">
                <div className="row d-flex justify-center align-center h-100">
                    <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                        <div className="text-center rounded-full">
                            <div className="flex flex-row justify-center">
                                <h2  className=" font-bold">Signup</h2>
                            </div>
                            {error && <Message variant="danger">{error}</Message>}
                            {loading && <Loading></Loading>}
                            
                            <form className="row form-container mx-3" onClick={submitHandler}>
                                <div class="form mb-4 text-left">
                                    <label className="text-left font-bold" for="typeEmailX-2">Username</label>
                                    <input type="text"
                                            id="username" 
                                            name="username" 
                                            className="form-control"
                                            onChange={(e) => setUsername(e.target.value)}
                                            required />
                                    
                                </div>
                                <div class="form mb-4 text-left">
                                    <label className="text-left font-bold" for="typeEmailX-2">Email</label>
                                    <input type="email"
                                            id="email" 
                                            name="email" 
                                            className="form-control"
                                            onChange={(e) => setEmail(e.target.value)}
                                            required />                                 
                                </div>

                                <div class="form mb-4 text-left">
                                    <label className="text-start font-bold" for="typeEmailX-2">Password</label>
                                    <input type="password"
                                            id="password" 
                                            name="password" 
                                            className="form-control"
                                            onChange={(e) => setPassword(e.target.value)}
                                            required />                                 
                                </div>
                                <div class="form mb-4 text-left">
                                    <label className="text-start font-bold" for="typeEmailX-2">Password</label>
                                    <input type="password"
                                            id="password" 
                                            name="password" 
                                            className="form-control"
                                            onChange={(e) => setPassword(e.target.value)}
                                            required />                                 
                                </div>

                                <div class="form mb-4 text-left">
                                    <label className="text-start font-bold" for="typeEmailX-2">Password</label>
                                    <input type="password"
                                            id="confirmpassword" 
                                            name="confirmpassword" 
                                            className="form-control"
                                            onChange={(e) => setConfirmPassword(e.target.value)}
                                            required />                                 
                                </div>

                                <button type="submit" className="flex flex-row justify-center mx-3 my-2">
                                    <p className="bg-[#10b981] px-2 rounded-full">Signup </p>
                                </button>
                            </form>


                            <p className=""> Already have an account? 
                                <a href="/login" className="">
                                    <u>Log in here</u>
                                </a>
                            </p>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}