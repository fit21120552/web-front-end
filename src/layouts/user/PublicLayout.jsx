import { Outlet } from "react-router-dom";

import Header from "./Header";
import Footer from "./Footer";
import { useState } from "react";

const PublicLayout = () => {
  const [title, setTitle] = useState("");

  return (
    <>
      <div className="bg-[#f5f5f5]">
        <Header title={title} setTitle={setTitle} />
        <Outlet context={[title, setTitle]} />
        <Footer />
      </div>
    </>
  );
};

export default PublicLayout;
