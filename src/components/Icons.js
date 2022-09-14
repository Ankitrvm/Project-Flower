import "./Icone.css";
import "./Media.css";
import img1 from "../images/icon-1.png";
import img2 from "../images/icon-2.png";
import img3 from "../images/icon-3.png";
import img4 from "../images/icon-4.png";
const Icons = () => {
  return (
    <section className="icons-box">
      <div className="icons">
        <img src={img1} alt=""></img>
        <div className="info">
          <h3>free delivery</h3>
          <span>on all orders</span>
        </div>
      </div>

      <div className="icons">
        <img src={img2} alt=""></img>
        <div className="info">
          <h3>10 days returns</h3>
          <span>moneyback guarantee</span>
        </div>
      </div>

      <div className="icons">
        <img src={img3} alt=""></img>
        <div className="info">
          <h3>offers and gift</h3>
          <span>on all orders</span>
        </div>
      </div>

      <div className="icons">
        <img src={img4} alt=""></img>
        <div className="info">
          <h3>secure payments</h3>
          <span>protected by paypal</span>
        </div>
      </div>
    </section>
  );
};
export default Icons;
