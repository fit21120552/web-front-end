import { Outlet } from "react-router-dom";

import Header from "./Header";
import Footer from "./Footer";

const PublicLayout = () => {
  return (
    <>
      <div className="bg-[#f5f5f5]">
        <Header />
        <Outlet />
        <Footer />
      </div>
    </>
  );
};

export default PublicLayout;
