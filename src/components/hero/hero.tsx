import "./hero.scss";
import { FaStar } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import bg from "../../assets/courseinn-home-bg.png";
import shape1 from "../../assets/shape-4.png";
import shape2 from "../../assets/shape-5.png";
import shape3 from "../../assets/shape-6.png";
import shape4 from "../../assets/shape-7.png";
import {
  MouseParallaxChild,
  MouseParallaxContainer,
} from "react-parallax-mouse";

const hero = () => {
  return (
    <>
      <MouseParallaxContainer
        className="heroSection"
        globalFactorX={0.3}
        globalFactorY={0.3}
        // resetOnLeave
      >
        <div className="wrapper">
          <div className="container">
            <div className="heroHeading">
              <div className="badge">
                <div className="rating">
                  <FaStar className="star" />
                  <FaStar className="star" />
                  <FaStar className="star" />
                  <FaStar className="star" />
                  <FaStar className="star" />
                </div>
                <span>10000+ TRUST STUDENTS</span>
              </div>
              <h1>
                Build Your Best-in-Skills To Grow Your <span>Career.</span>
              </h1>
              <div className="paraContainer">
                <p>
                  To grow your career or business, you need best-in-class skills
                  to create a strong foundation for your career or business
                  growth. Courseinn Academy delivers a unique learning process
                  for skill development to succeed in a career or business.
                </p>
              </div>
              <div className="headingButton">
                <a href="#" className="buttonCont">
                  <span className="btncont">
                    <span className="btnText">View Courses</span>
                    <span>
                      <FaArrowRight className="rightArrow" />
                    </span>
                    <span></span>
                  </span>
                </a>
              </div>
            </div>
            <div className="heroBanner">
              <div className="heroImgCont">
                <img src={bg} alt="" />
              </div>
              <MouseParallaxChild
                className="shape1"
                factorX={0.1}
                factorY={0.2}
              >
                <img src={shape1} alt="banner shapes" />
              </MouseParallaxChild>
              <MouseParallaxChild
                className="shape2"
                factorX={-0.09}
                factorY={-0.09}
              >
                <img src={shape2} alt="banner shapes" />
              </MouseParallaxChild>
              <MouseParallaxChild
                className="shape3"
                factorX={0.2}
                factorY={0.4}
              >
                <img src={shape3} alt="banner shapes" />
              </MouseParallaxChild>
              <MouseParallaxChild
                className="shape4"
                factorX={-0.3}
                factorY={-0.5}
              >
                <img src={shape4} alt="banner shapes" />
              </MouseParallaxChild>
            </div>
          </div>
        </div>
      </MouseParallaxContainer>
      <section className="bannerEndSection">
        <div className="container">
          <div className="bannerEndCont">
            <div className="bannerEndHeading">
              <h2>
                India’s Best IT Job <br />
                Skills Training Institute.
              </h2>
            </div>
            <div className="bannerEndPara">
              <p>
                Established in 2016, Courseinn Academy is the India's Leading
                training institute, renowned for nurturing students' skills and
                empowering them to successful careers, backed by an impressive
                track record of success. We will teach the most in-demand tech
                skills that will definitely help your future to do business in
                something you love
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default hero;
