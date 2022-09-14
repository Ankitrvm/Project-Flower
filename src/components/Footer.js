import "./Footer.css";
import "./Media.css";
import payimg from "../images/payment.png"

const Footer =()=>{
return(
    <section className="footer">
      <div className="box-container">
        <div className="box">
          <h3>quick links</h3>
          <a href="a">home</a>
          <a href="a">about</a>
          <a href="a">products</a>
          <a href="a">review</a>
          <a href="a">contact</a>
        </div>

        <div className="box">
          <h3>extra links</h3>
          <a href="a">my account</a>
          <a href="a">my order</a>
          <a href="a">my favorite</a>
        </div>

        <div className="box">
          <h3>locations</h3>
          <a href="a">india</a>
          <a href="a">USA</a>
          <a href="a">japan</a>
          <a href="a">france</a>
        </div>

        <div className="box">
          <h3>contact info</h3>
          <a href="a">+123-456-7890</a>
          <a href="a">example@gmail.com</a>
          <a href="a">mumbai, india - 400104</a>
          <img src={payimg} alt="" />
        </div>
      </div>

      <div className="credit">
        created by <span> ..... </span> | all rights reserved
      </div>
    </section>)
}
export default Footer;