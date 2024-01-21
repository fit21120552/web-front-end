import { Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
const Header = () => {

  const cart = useSelector((state) => {
    state.cart
  })
  const { cartItems } = cart;
  return (
    <div>
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
      <div className="Announcement">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 flex align-center display-none">
                      <p>+255 768 256 890</p>
                      <p>info@mat.com</p>
                    </div>

                    <div className="col-12 col-lg-6 justify-center">
                        <Link to="">
                            <i className="fab fa-facebook-f"></i>
                        </Link>
                        <Link to="">
                            <i className="fab fa-instagram"></i>
                        </Link>
                        <Link to="">
                          <i className="fab fa-linkedin-in"></i>
                        </Link>
                        <Link to="">
                          <i className="fab fa-youtube"></i>
                        </Link>
                        <Link to="">
                            <i className="fab fa-pinterest-p"></i>
                        </Link>
                    </div>
                </div>
            </div>
      </div>
      <div className="header">
          <div className="container">
              <div className="mobile-header">
                <div className="container">
                    <div className="row">
                        <div className="col-6 flex align-center">
                            <Link className="navbar-brand" to="/">
                                <img src="logo.png" alt="logo"/>
                            </Link>
                        </div>
                        <div className="col-6 flex items-center justify-end">
                            <div className="btn-group">
                                <button type="button"
                                      className="name-button dropdown-toggle"
                                      data-toggle="dropdown"
                                      aria-haspopup="true"
                                      aria-expanded="false"
                                >
                                    <i className="fas fa-user"></i>
                                </button>
                                <div className="dropdown-menu">
                                  <Link className="dropdown-item" to="/profile">
                                      Profile
                                  </Link>
                                  <Link className="dropdown-item" to="#">
                                     Logout
                                  </Link>
                                </div>
                            </div>

                            <Link to="/cart" className="cart-mobile-icon">
                              <i className="fas fa-shopping-bag"></i>
                              <span className="badge">{cartItems.length}</span>
                            </Link>
                        </div>

                        <div className="col-12 flex items-center">
                            <form className="input-group">
                              <input 
                                type="search"
                                className="form-control rounded-full search"
                                placeholder="Search">
                              </input>
                              <button type="submit" className="search-button"></button>
                            </form>
                        </div>
                    </div>
                </div>
              </div>

              <div className="pc-header">
                  <div className="row">
                      <div className="col-md-3 col-4 flex items-center">
                          <Link className="navbar-brand" to="/">
                              <img src="logo.png" alt="logo"/>
                          </Link>
                          <div className="col-md-6 col-8 flex items-center">
                              <form className="input-group">
                                <input
                                  type="search"
                                  className="form-control rounded-full search"
                                  placeholder="Search"
                                ></input>
                              </form>
                          </div>
                          <div className="col-md-3 flex items-center justify-end">
                              <div className="btn-group">
                                <button type="button"
                                      className="name-button dropdown-toggle"
                                      data-toggle="dropdown"
                                      aria-haspopup="true"
                                      aria-expanded="false"
                                >
                                    <i className="fas fa-user"></i>
                                </button>

                                <div className="dropdown-menu">
                                  <Link className="dropdown-item" to="/profile">
                                      Profile
                                  </Link>
                                  <Link className="dropdown-item" to="#">
                                     Logout
                                  </Link>
                                </div>


                              </div>

                              <Link to='/cart'>
                                  <i className="fas fa-shopping-bag"></i>
                                  <span className="badge">{cartItems.length}</span>
                              </Link>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
    </div>
  );
};

export default Header;
