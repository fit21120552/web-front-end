import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  const page =
    location.pathname === "/admin"
      ? "Dashboard"
      : location.pathname.split("/")[2].charAt(0).toUpperCase() +
        location.pathname.split("/")[2].slice(1);
  const [openProfile, setOpenProfile] = useState(false);

  return (
    <div>
      <h1 className="text-red-500">{page}</h1>
      <div className="flex gap-4">
        <button className="bg-[#d9d9d9] rounded-full font-semibold w-12 h-12 flex items-center justify-center">
          {/* <FontAwesomeIcon icon={faFacebookMessenger} size="lg" /> */}
        </button>
        {openProfile ? (
          <button
            onClick={() => setOpenProfile(false)}
            className="rounded-full bg-[#d9d9d9] font-semibold w-12 h-12 flex items-center justify-center"
          >
            {/* <FontAwesomeIcon icon={faXmark} size="xl" /> */}
          </button>
        ) : (
          <button
            onClick={() => setOpenProfile(true)}
            className="rounded-full bg-[#d9d9d9] font-semibold w-12 h-12 flex items-center justify-center"
          >
            {/* <FontAwesomeIcon icon={faUser} size="lg" /> */}
          </button>
        )}
      </div>
      {openProfile && (
        <div className="shadow-outer absolute right-8 top-20 bg-white rounded-lg z-10 px-4 pt-2 font-semibold">
          <div className="flex shadow-outer p-2 items-center gap-2 rounded-3xl">
            <div className="rounded-full bg-[#d9d9d9] font-semibold w-10 h-10 flex items-center justify-center">
              {/* <FontAwesomeIcon icon={faUser} size="md" /> */}
            </div>
            <p className="text-lg mr-2">Mai Văn Minh</p>
          </div>
          <hr className="mt-3 border-[#CCCCCC]" />
          <div className="flex flex-col text-lg mt-2 gap-4 mb-4 px-4">
            <Link>Phòng đã đặt</Link>
            <Link to="/profile" onClick={() => setOpenProfile(false)}>
              Quản lý tài khoản
            </Link>
            <Link to="/service" onClick={() => setOpenProfile(false)}>
              Dịch vụ phòng
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
