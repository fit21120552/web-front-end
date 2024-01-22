import { useState } from "react";
import { useNavigate } from "react-router-dom";

const ChoosePayment = ()=> {

    const [paymentMethod, setPaymentMethod] =useState("VNPay")
    const navigate = useNavigate()
    const submitHandler = (e) => {
        e.preventDefault()
        navigate("/placeorder")
    }
    return (
        <div className="flex flex-column items-center" >
            <div className="w-max-[500px] mx-auto w-1/2">
                <form className="p-4 rounded-lg border-2 border-solid bg-white flex flex-column items-center w-full" onSubmit={submitHandler}>
                    <p className="font-bold text-2xl font-mono mb-3">SELECT PAYMENT METHOD</p>
                    
                    <div className="payment-container w-full">
                        <div className="radio-container p-3 flex flex-column">
                            <div>
                                <input className="form-check-input me-3" 
                                        type="radio" name="group1" 
                                        value={`VNPay`} 
                                        onChange={(e)=>setPaymentMethod(e.target.value)}
                                        checked/>
                                <label className="form-check-label font-semibold text-xl">VNPay</label>
                            </div>
                            <div>
                                <input className="form-check-input me-3" 
                                        type="radio" name="group1" 
                                        value={`Paypal`}
                                        onChange={(e)=>setPaymentMethod(e.target.value)}
                                        />
                                <label className="form-check-label  font-semibold text-xl">Paypal</label>
                            </div>
                        </div>
                    </div>
                    <button className="text-white bg-blue-500 rounded-lg w-full my-3 py-3 " type="submit">
                            CONTINUE
                    </button>
                        
                </form>
            </div>
        </div>
    )
}

export default ChoosePayment;