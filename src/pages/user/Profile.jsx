import { useDispatch, useSelector } from "react-redux";
import { logout } from "./../../Redux/Actions/UserActions";
import { Link } from "react-router-dom";

export default function Profile() {
  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);

  const handleLogout = () => {
    dispatch(logout());
  };

  const { userInfo } = userLogin;

  return (
    <div className="container mx-auto max-w-screen-xl mt-4">
      <div className="card mx-3">
        <div className="card-body">
          <div className="flex flex-row gap-4">
            <div className="basis-1/7 min-w-[100px] flex flex-col gap-1 font-semibold text-center ">
              <Link to="/edit-profile">
                <div className="bg-[#7dd3fc] py-2 rounded-sm ">
                  Settings
                </div>
              </Link>
              <Link to="/order-list">
                <div className="bg-[#7dd3fc] py-2 rounded-sm ">
                  Order List
                </div>
              </Link>
              <button
                className="bg-red-400 rounded-sm py-2 text-white font-semibold"
                onClick={handleLogout}
              >
                Logout
              </button>
            </div>
            <div className="basis-6/7 flex gap-4">
              <div className="form">
                <label htmlFor="account-fn">Username</label>
                <input
                  className="form-control"
                  type="text"
                  value={userInfo.username}
                  required
                  disabled
                ></input>
              </div>
              <div className="form">
                <label htmlFor="account-email">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  value={userInfo.email}
                  required
                  disabled
                ></input>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
