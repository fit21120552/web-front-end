import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
  <div className="flex flex-column items-between justify-around rounded-lg bg-main  footer">
      <div className="flex flex-row justify-center my-3">           
        <div className="flex flex-row justify-center text-xl">
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
        </div>
            
      </div>
     
      
    <div className="flex flex-row justify-around my-1 font-bold">
      
      <div>
         <span>&#127760;</span>English
        </div>
        
        <div>
          <Link to="/">
          <u>Home</u>
          </Link>
        </div>
        <div>
          <Link to="#">
          <u>Services</u>
          </Link>
        </div>
        <div>
          <Link to="/about">
          <u>About</u>
          </Link>
        </div>
        <div>
          <Link to="#">
          <u>Term</u>
          </Link>
        </div>
        <div>
          <Link to="#">
          <u>Privacy Policy</u>
          </Link>
        </div>
      </div>
        
        
    
    <div className="flex flex-row justify-center">
        <div>
          <span>&copy;</span>Copyright: Group 09
        </div>
    </div>
    <div className="flex flex-row justify-center">
          <img src="../../../public/images/dummy.png" alt="logo"/>
    </div>
  </div>
  );
};

export default Footer;
