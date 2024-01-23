import { useDispatch } from "react-redux";
import { logout } from "./../../Redux/Actions/UserActions";
import { Link } from "react-router-dom";

export default function Profile() {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div className="container mx-auto max-w-screen-xl mt-4">
      <div className="card mx-3">
        <div className="card-body">
          <div className="flex flex-row">
            <div className="basis-1/7">
              <div className="flex flex-col gap-1 font-semibold text-center ">
                <div className="bg-[#a3e635] flex flex-row">
                  <div className="basis-1/2">
                    <img
                      src=""
                      alt="user avatar"
                      width={100}
                      height={100}
                      className="rounded-full"
                    ></img>
                  </div>
                  <div className="basis-1/2 flex flex-col">
                    <div className="text-bold">name</div>
                    <div className="">date join</div>
                  </div>
                </div>
                <div className="bg-[#60a5fa]  py-6">Orders List</div>
                <div className="bg-[#7dd3fc] py-2">
                  <Link to="/edit-profile">Settings</Link>
                </div>
                <button
                  className="bg-red-400 rounded-sm py-2 text-white font-semibold"
                  onClick={handleLogout}
                >
                  Logout
                </button>
              </div>
            </div>
            <div className="basis-6/7">
              <div className="flex flex-col mx-2">
                <div className="">USERNAME</div>
                <div className="mx-1 px-0">
                  <input
                    type="text"
                    placeholder="username"
                    className="bg-[#5eead4] basis-1/1 w-full"
                  ></input>
                </div>
              </div>
              <div className="flex flex-col mx-2">
                <div className="">EMAIL ADDRESS</div>
                <div className="mx-1 px-0">
                  <input
                    type="text"
                    placeholder="email"
                    className="bg-[#3b82f6]  w-full"
                  ></input>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
