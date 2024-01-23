import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Link } from "react-router-dom";
import { faSave } from "@fortawesome/free-solid-svg-icons";

const EditCategory = () => {
    const [categoryName, setCategoryName] = useState("")
    const [productCount, setProductCount ] = useState("")
    const [productCategory, setProductCategory] = useState([])

    const submitHandler = (e) => {
        e.preventDefault()

    }
    return (
        <div className="flex flex-column">
            <div >
                
                <Link to="/admin/categories">
                    <button className=" bg-[#ef4444] rounded-xl p-2 text-white m-3 ">
                        Return category list
                        </button>
                </Link>
                
            </div>
            <div className="flex flex-row justify-center font-bold text-2xl">
                EDIT CATEGORY
            </div>
            <div className="rounded-lg border-2 border-solid bg-white p-3 m-4">
                <form onSubmit={submitHandler}>
                    <div class="form mb-4 text-left input-group">
                        <span className="text-start font-bold input-group-text w-30" for="typeEmailX-2">Category name</span>
                        <input type="text"
                                id="title" 
                                name="title" 
                                className="form-control"
                                value={categoryName}
                                onChange={(e) => setCategoryName(e.target.value)}
                                required />
                    </div>

                    <div class="form mb-4 text-left input-group">
                        <span className="text-start font-bold input-group-text w-30" for="typeEmailX-2">Products of category</span>
                        <input type="text"
                                id="price" 
                                name="price" 
                                className="form-control"
                                value ={productCount}
                                onChange={(e) => setProductCount(e.target.value)}
                                readOnly="true" />
                    </div>

                    <div>
                        {
                            productCategory.map((product) => (
                                <div className="">
                                    
                                </div>
                            ))
                        }
                    </div>

                    
                    <div className="flex flex-row justify-center my-2 p-3 text-xl">
                        <button type="submit" className="">
                            <p className="bg-[#10b981] px-4 py-2 rounded-lg text-white">
                                <FontAwesomeIcon icon={faSave} color="white"/>
                                <span> Save</span>
                            </p>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default EditCategory;