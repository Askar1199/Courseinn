import "./sidebar.scss";
import logo from "../../assets/courseinn-logo-side.png";
import { MdOutlineClose } from "react-icons/md";
import { GoMail } from "react-icons/go";
import { BsTelephone, BsPlusLg } from "react-icons/bs";
import { FiFacebook, FiTwitter, FiInstagram, FiLinkedin } from "react-icons/fi";

interface props {
  state: boolean;
  close: () => void;
}

const sidebar = ({ state, close }: props) => {
  return (
    <>
      <div className={["sidebarCont", state ? "show" : ""].join(" ")}>
        <div className={`sidebarContent ${state ? "showSidebar" : ""}`}>
          <div className="container">
            <div className="headerWrapper">
              <div className="logoCont">
                <div className="logo">
                  <a href="/">
                    <img src={logo} alt="" />
                  </a>
                </div>
                <div className="closeIcon">
                  <MdOutlineClose onClick={close} />
                </div>
              </div>
              <p className="description">
                Grow your career or business with Our industry-recognized
                courses.
              </p>
              <ul>
                <li>
                  <a href="#">
                    <GoMail />
                    info@courseinn.com
                  </a>
                </li>
                <li>
                  <a href="#">
                    <BsTelephone />
                    +91 9962097767
                  </a>
                </li>
              </ul>
            </div>
            <nav>
              <ul>
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#" className="courses">
                    Courses
                    <BsPlusLg />
                  </a>
                </li>
                <li>
                  <a href="#">About Us</a>
                </li>
                <li>
                  <a href="#">Student Rewiews</a>
                </li>
                <li>
                  <a href="#">Hire From Us</a>
                </li>
                <li>
                  <a href="#">Career</a>
                </li>
                <li>
                  <a href="#">Blog</a>
                </li>
              </ul>
            </nav>
            <div className="sidebarButton">
              <div className="enrollCont">
                <a href="/">Enroll Now</a>
              </div>
              <div className="sidebarFooter">
                <span>Find with us</span>
                <ul>
                  <li>
                    <a href="#">
                      <FiFacebook />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <FiTwitter />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <FiInstagram />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <FiLinkedin />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default sidebar;
