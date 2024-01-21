import { Outlet } from "react-router-dom";

import Header from "./Header";
import Footer from "./Footer"

const PublicLayout = () => {
  return (
    <>
    <div>
      <Header />
      <Outlet />
      
    </div>
    <Footer />
    </>
  );
};


export default PublicLayout;

