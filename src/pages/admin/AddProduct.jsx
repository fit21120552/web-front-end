import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { faSave } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import FileInput from "./FileInput";
import ImageUpload from "./FileInput";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { PRODUCT_CREATE_RESET } from "../../Redux/Constants/ProductConstants"
import { createProduct } from "../../Redux/Actions/ProductActions";
import Message from "../LoadingError/Message"
import Toast from "../LoadingError/Toast"
import Loading from "../LoadingError/Loading"
const ToastObjects = {
    pauseOnFoccusLoss: false,
    draggable: false,
    pauseOnHover: false,
    autoClose: 2000,
};
const AddProduct = () => {

    const [title, setTitle] = useState("")
    const [price, setPrice] = useState(0)
    const [description, setDescription] = useState("")
    const [category, setCategory] = useState("")
    const [thumbnail, setThumbnail ] = useState(null)
    const [previewImage, setPreviewImage] = useState(null)
    const [stock, setStock] = useState(0)

    const dispatch = useDispatch()

    const productCreate = useSelector((state) => state.productCreate)
    const { loading, error, product} = productCreate

    useEffect(() => {
        if (product) {
           // toast.success("Product Added!", ToastObjects)
            
           dispatch({type: PRODUCT_CREATE_RESET})
            setTitle("")
            setPrice(0)
            setDescription("")
            setCategory("")
            setThumbnail("")
            setStock(0)
            setPreviewImage(null)
            alert("Product Added!")
        }
    },[product, dispatch])

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(createProduct(title, price, stock, description, category, thumbnail))
    }
    const selectFile = (event) => {
        setThumbnail(event.target.value);
        setPreviewImage(URL.createObjectURL(event.target.files[0]));
       
      }; 
      const deleteImage = () => {
        setThumbnail("")
        setPreviewImage(null)
      } 

    const categories=["bag","fan","car"]
    return (<>
        <Toast/>
    
        <div className="flex flex-column">
            <div >
                <button className=" bg-[#ef4444] rounded-xl p-2 text-white m-3">
                    <Link to="/admin/products">
                        Return product list
                    </Link>
                </button>
            </div>
            <div className="flex flex-row justify-center font-bold text-2xl">
                ADD PRODUCT
            </div>
            <div className="rounded-lg border-2 border-solid bg-white p-3 m-4">
                <form onSubmit={submitHandler}>
                    {error && <Message variant={"danger"}>{error}</Message>}
                    { loading && <Loading/>}
                    <div className="form mb-4 text-left input-group">
                        <span className="text-start font-bold input-group-text w-30" for="typeEmailX-2">Title</span>
                        <input type="text"
                                id="title" 
                                name="title" 
                                className="form-control"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                required />
                    </div>

                    <div class="form mb-4 text-left input-group">
                        <span className="text-start font-bold input-group-text w-30" for="typeEmailX-2">Price</span>
                        <input type="text"
                                id="price" 
                                name="price" 
                                className="form-control"
                                value ={price}
                                onChange={(e) => setPrice(e.target.value)}
                                required />
                    </div>

                    <div class="form mb-4 text-left input-group">
                        <span className="text-start font-bold input-group-text w-30" for="typeEmailX-2">Stock</span>
                        <input type="text"
                                id="stock" 
                                name="stock" 
                                className="form-control"
                                value={stock}
                                onChange={(e) => setStock(e.target.value)}
                                required />
                    </div>

                    <div class="form mb-4 text-left input-group">
                        <span className="text-start font-bold input-group-text w-30" for="typeEmailX-2">Description</span>
                        <textarea type="text"
                                id="description" 
                                name="description" 
                                className="form-control"
                                rows={7}
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                                required ></textarea>
                    </div>
                                
                    <div class="form mb-4 text-left input-group">
                        <span className="text-start font-bold input-group-text w-30" for="typeEmailX-2">Category</span>
                        <select
                                id="description" 
                                name="description" 
                                className="form-control"
                                value={category}
                                onChange={(e) => setCategory(e.target.value)}
                                required >
                                    {categories.map(
                                        (x) => (
                                            <option key = {x} value = {x}>
                                                {x}
                                            </option>
                                        )
                                    )}
                        </select>
                    </div>

                    <div className="form mb-4 text-left ">
                        <label for="prodImg" className="form-label">Product image</label>
                        <input 
                                className="file form-control" 
                                type="file" 
                                id="input-id" 
                                name="photos" 
                                data-preview-file-type="image"
                                accept="image/*"
                                value={thumbnail}
                                onChange={selectFile} 
                                single
                                required></input>
                           
                    </div>

                    {previewImage && (
                                    <div>
                                        <div className="flex flex-row justify-end">
                                            <button className="text-white bg-[#ef4444] rounded-full text-sm py-2 px-3" onClick={deleteImage}>X</button>
                                        </div>
                                    <img className="preview" src={previewImage} alt="" />
                                    </div>
                                )}  

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
        </>
    )
}

export default AddProduct;