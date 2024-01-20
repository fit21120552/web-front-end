import { NavLink } from "react-router-dom";
const Header = () => {
  return (
    <div className="h-[80px] bg-main flex justify-between items-center px-8">
      <div className="flex items-center text-white font-semibold text-xl">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "border-2 bg-slate-300/[.2] rounded-3xl py-2 px-4"
              : "px-4"
          }
        >
          Trang chủ
        </NavLink>

        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive
              ? "border-2 bg-slate-300/[.2] rounded-3xl py-2 px-4"
              : "px-4"
          }
        >
          About 
        </NavLink>

        <NavLink
          to="/login"
          className={({ isActive }) =>
            isActive
              ? "border-2 bg-slate-300/[.2] rounded-3xl py-2 px-4"
              : "px-4"
          }
        >
          Login
        </NavLink>

        <NavLink
          to="/signup"
          className={({ isActive }) =>
            isActive
              ? "border-2 bg-slate-300/[.2] rounded-3xl py-2 px-4"
              : "px-4"
          }
        >
          Sign up
        </NavLink>
      </div>
    </div>
  );
};

export default Header;
