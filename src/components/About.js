import "./Home&about.css";
import "./Media.css";
import aboutt from "../images/about-vid.mp4";
const About = () => {
  return (
    <section className="about" id="about-us">
      <h1 className="heading">
        <span>about</span> us
      </h1>

      <div className="row">
        <div className="video-container">
          <video src={aboutt} type={"video/mp4"} loop autoPlay muted></video>
          <h3>best flower sellers</h3>
        </div>

        <div className="content">
          <h3>why choose us?</h3>
          <p>
            we are the best we are the best we are the best we are the best we
            are the best we are the best we are the best we are the best we are
            the best we are the best we are the best we are the best we are the
            best we are the best.
          </p>
          <p>
            seller seller seller seller seller seller seller seller seller
            seller seller seller seller seller seller seller seller seller
            seller seller seller.
          </p>
          <a href="btn" className="btn">
            learn more
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
