import { Outlet } from "react-router-dom";

import Header from "./Header";
import Footer from "./footer";

const PublicLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};


export default PublicLayout;

