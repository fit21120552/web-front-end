import { Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";

const Header = () => {

  const cart = useSelector((state) => {
    state.cart
  })
  //const { cartItems } = cart;
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
      <div className="announcement bg-main text-white">
            <Container>
                <Row>
                    <Col className="col-md-6 flex items-center justify-start hidden">
                      <p className="mx-1 display-none">+255 768 256 890</p>
                      <p className="mx-1 display-none">info@mat.com</p>
                    </Col>

                    <Col className="col-12 col-lg-6 justify-end flex">
                        <Link to="" className="mx-1">
                            <FontAwesomeIcon icon={faFacebookF}/>
                        </Link>
                        <Link to="" className="mx-1">
                            <i className="fab fa-instagram"></i>
                        </Link>
                        <Link to="" className="mx-1">
                          <i className="fab fa-linkedin-in"></i>
                        </Link>
                        <Link to="" className="mx-1">
                          <i className="fab fa-youtube"></i>
                        </Link>
                        <Link to="" className="mx-1">
                            <i className="fab fa-pinterest-p"></i>
                        </Link>
                    </Col>
                </Row>
            </Container>
      </div>
      <div className="header">
          <div className="container">
              <div className="mobile-header hidden">
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
                              <span className="badge">{4}</span>
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

              <div className="pc-header h-[80px] mt-2">
                  <Row>
                      <div className="col-xs-3 col-3 flex items-center">
                          <Link className="navbar-brand" to="/">
                              <img src="../../../public/images/dummy.png" alt="logo"/>
                          </Link>
                      </div>
                      <div className="col-xs-6 col-6 flex items-center">
                          <form className="input-group">
                            <input
                              type="search"
                              className="form-control rounded-full search"
                              placeholder="Search"
                            ></input>
                            <button className="text-white bg-black rounded-full px-3" type="submit" variant="dark" >
                              SEARCH
                            </button>
                          </form>
                      </div>
                      <div className="col-xs-3 col-3 flex items-center justify-end">
                          <div className="btn-group">
                            <button type="button"
                                  className="name-button dropdown-toggle"
                                  data-toggle="dropdown"
                                  aria-haspopup="true"
                                  aria-expanded="false"
                            >
                              <Link to="/profile">
                                <i className="fas fa-user"></i>
                              </Link>
                                
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

                          <Link to='/cart' className="mx-3">
                              <i className="fas fa-shopping-bag"></i>
                              <span className="badge">{4}</span>
                          </Link>
                      </div>
                     
                  </Row>
              </div>
          </div>
      </div>
    </div>
  );
};

export default Header;
