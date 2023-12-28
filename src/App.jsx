import { Routes, Route } from "react-router-dom";
import PublicLayout from "./layouts/user/PublicLayout";
import { Home, About } from "./pages/user/";
import AdminLayout from "./layouts/admin/AdminLayout";
import { Dashboard } from "./pages/admin/";
export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<PublicLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Route>
        <Route path="/admin" element={<AdminLayout />}>
          <Route path="/admin/" element={<Dashboard />} />
        </Route>
      </Routes>
    </div>
  );
}
