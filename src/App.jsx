import { Routes, Route } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.css";
import PublicLayout from "./layouts/user/PublicLayout";
import { Home, About, EditProfile, Cart, Profile } from "./pages/user/";
import AdminLayout from "./layouts/admin/AdminLayout";
import { Login, Signup } from "./pages/Authentication/";
import {
  Dashboard,
  Orders,
  Categories,
  Products,
  Promotion,
  Settings,
  Users,
} from "./pages/admin/";
import { ProductDetail, Product } from "./pages/Products";
import AddProduct from "./pages/admin/AddProduct";
import EditProduct from "./pages/admin/EditProduct";
import ShipInformation from "./pages/user/ShipInformation";
import ChoosePayment from "./pages/user/ChoosePayment";
import PlaceOrder from "./pages/user/PlaceOrder";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<PublicLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/edit-profile" element={<EditProfile />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/product" element={<Product />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          
          <Route path="/cart/:id?" element={<Cart />} />
          <Route path="/ship/" element={<ShipInformation/>}/>
          <Route path="/choose-payment" element= {<ChoosePayment/>}/>
          <Route path="/place-order" element={<PlaceOrder/>}/>
        </Route>
        <Route path="/admin" element={<AdminLayout />}>
          <Route path="/admin" exact element={<Dashboard />} />
          <Route path="/admin/orders" element={<Orders />} />
          <Route path="/admin/products" element={<Products />} />
          <Route path="/admin/product/add" element = {<AddProduct/>}/>
          <Route path="/admin/product/edit/:id" element={<EditProduct/>}/>
          <Route path="/admin/categories" element={<Categories />} />
          <Route path="/admin/users" element={<Users />} />
          <Route path="/admin/promotion" element={<Promotion />} />
          <Route path="/admin/settings" element={<Settings />} />
        </Route>
      </Routes>
    </>
  );
}
