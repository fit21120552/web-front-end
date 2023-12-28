import { Routes, Route } from "react-router-dom";
import PublicLayout from "./layouts/PublicLayout";
import { Home, About } from "./pages";
export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<PublicLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Route>
      </Routes>
    </div>
  );
}
