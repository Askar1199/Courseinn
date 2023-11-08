import "./navbar.scss";
import { TfiLayoutGrid2 } from "react-icons/tfi";
import { RxHamburgerMenu } from "react-icons/rx";
import logo from "../../assets/courseinn-logo.png";

const navbar = () => {
  return (
    <div className="navbarSection">
      <div className="container">
        <div className="logoFlexContainer">
          <div className="logoConatiner">
            <a href="/">
              <img src={logo} alt="logo" />
            </a>
          </div>
          <div className="logoInfo">
            <div className="logoInfoHover">
              <div className="infoCont">
                <div className="infoDiv">
                  <TfiLayoutGrid2 className="logoIcon" />
                  <span>All Courses</span>
                </div>
              </div>
              <div className="subMenu">
                <div>
                  <ul>
                    <li>
                      <a href="#">Digital Marketing Course</a>
                    </li>
                    <li>
                      <a href="#">Full Stack Developer Cours</a>
                    </li>
                    <li>
                      <a href="#">Front End Developer Course</a>
                    </li>
                    <li>
                      <a href="#">Software Testing Course</a>
                    </li>
                    <li>
                      <a href="#">UI/UX Designer Course</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="navContainer">
          <ul>
            <li>
              <a href="/" className="active">
                Home
              </a>
            </li>
            <li>
              <a href="/">About Us</a>
            </li>
            <li>
              <a href="/">Student Reviews</a>
            </li>
            <li>
              <a href="/">Hire From Us</a>
            </li>
            <li>
              <a href="/">Career</a>
            </li>
            <li>
              <a href="/">Blog</a>
            </li>
          </ul>
        </div>
        <div className="headingBtn">
          <a href="/">
            <span data-text="Enquire Now">Enquire Now</span>
          </a>
        </div>
        <div className="hamburgerCont">
          <div className="hamburger">
            <RxHamburgerMenu />
          </div>
        </div>
      </div>
    </div>
  );
};

export default navbar;
