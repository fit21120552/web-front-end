import { Routes, Route } from "react-router-dom";
import PublicLayout from "./layouts/user/PublicLayout";
import { Home, About, EditProfile } from "./pages/user/";
import AdminLayout from "./layouts/admin/AdminLayout";
import { Login, Signup } from "./pages/Authentication/"
import {
  Dashboard,
  Orders,
  Categories,
  Products,
  Promotion,
  Settings,
  Users,
} from "./pages/admin/";
import { ProductDetail } from "./pages/Products";
export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<PublicLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/edit-profile" element = {<EditProfile/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/product/:id" element={<ProductDetail/>}/>
        </Route>
        <Route path="/admin" element={<AdminLayout />}>
          <Route path="/admin" exact element={<Dashboard />} />
          <Route path="/admin/orders" element={<Orders />} />
          <Route path="/admin/products" element={<Products />} />
          <Route path="/admin/categories" element={<Categories />} />
          <Route path="/admin/users" element={<Users />} />
          <Route path="/admin/promotion" element={<Promotion />} />
          <Route path="/admin/settings" element={<Settings />} />
        </Route>
      </Routes>
    </div>
  );
}
