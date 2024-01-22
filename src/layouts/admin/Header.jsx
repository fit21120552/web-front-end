import {
  faAngleDown,
  faAngleUp,
  faBell,
  faSearch,
  faSun,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { logout } from "../../Redux/Actions/UserActions";
import { useDispatch } from "react-redux";

const Header = () => {
  const location = useLocation();
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };
  const page =
    location.pathname === "/admin"
      ? "Dashboard"
      : location.pathname.split("/")[2].charAt(0).toUpperCase() +
        location.pathname.split("/")[2].slice(1);
  const [openProfile, setOpenProfile] = useState(false);

  return (
    <div className="px-4  bg-white py-4 flex justify-between">
      <p className="text-2xl font-semibold">{page}</p>
      <div className="bg-[#eeeeef] flex gap-3 items-center rounded-xl px-4">
        <FontAwesomeIcon icon={faSearch} color="#5D5FEF" />
        <input
          type="text"
          placeholder="Search here..."
          className="bg-[#eeeeef] min-w-[300px]"
        />
      </div>
      <div className="flex gap-3 items-center">
        <button className="bg-[#FFFAF1] rounded-xl font-semibold w-10 h-10 flex items-center justify-center">
          <FontAwesomeIcon icon={faSun} />
        </button>
        <button className="bg-[#FFFAF1] rounded-xl font-semibold w-10 h-10 flex items-center justify-center">
          <FontAwesomeIcon icon={faBell} />
        </button>
        {openProfile ? (
          <div
            onClick={() => setOpenProfile(false)}
            className="flex items-center gap-2"
          >
            <button className="rounded-xl bg-[#d9d9d9] font-semibold w-12 h-12 flex items-center justify-center">
              <FontAwesomeIcon icon={faUser} size="lg" />
            </button>
            <FontAwesomeIcon icon={faAngleUp} />
          </div>
        ) : (
          <div
            onClick={() => setOpenProfile(true)}
            className="flex items-center gap-2"
          >
            <button className="rounded-xl bg-[#d9d9d9] font-semibold w-12 h-12 flex items-center justify-center">
              <FontAwesomeIcon icon={faUser} size="lg" />
            </button>
            <FontAwesomeIcon icon={faAngleDown} />
          </div>
        )}
      </div>
      {openProfile && (
        <div className="shadow-outer absolute right-8 top-20 bg-white rounded-lg z-10 px-4 pt-2 font-semibold">
          <div className="flex shadow-outer p-2 items-center gap-2 rounded-3xl">
            <div className="rounded-full bg-[#d9d9d9] font-semibold w-10 h-10 flex items-center justify-center">
              <FontAwesomeIcon icon={faUser} size="md" />
            </div>
            <p className="text-lg mr-2">Nguyen Van A</p>
          </div>
          <hr className="mt-3 border-[#CCCCCC]" />
          <div className="flex flex-col text-lg mt-2 gap-4 mb-4 px-4">
            <Link to="/profile" onClick={() => setOpenProfile(false)}>
              Quản lý tài khoản
            </Link>
            <button onClick={() => handleLogout()}>Đăng xuất</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
