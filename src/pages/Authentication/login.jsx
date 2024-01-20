import React, { useEffect, useState } from "react"
import Toast from "../LoadingError/Toast"
import { toast } from "react-toastify"

export default function Login() {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    return (
        <div>
         <Toast/>

            <div className="container py-2 h-100">
                <div className="row d-flex justify-center align-center h-100">
                    <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                        <div className="text-center rounded-full">
                            <div className="flex flex-row justify-center">
                                <h5 className=" font-bold">Login</h5>
                            </div>
                            <form className="row form-container mx-3">
                                <div class="form mb-4 text-left">
                                    <label className="text-start font-bold" for="typeEmailX-2">Username</label>
                                    <input type="text"
                                            id="username" 
                                            name="username" 
                                            className="form-control"
                                            onChange={(e) => setUsername(e.target.value)}
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
                                <button type="submit" className="flex flex-row justify-center mx-3 my-2">
                                    <p className="bg-[#10b981] px-2 rounded-full">Login</p>
                                </button>
                            </form>

                            <form className="row form-container mx-3">
                                <div className="mb-1">
                                    <button className="bg-[#ef4444]">
                                        <i className="fab fa-google me-2"></i>Sign in with google
                                    </button>
                                </div>
                            </form>

                            <p className=""> You don't have an account? 
                                <a href="/signup" className="">
                                    <u>Sign up here</u>
                                </a>
                            </p>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}